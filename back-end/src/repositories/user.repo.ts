import AppDataSource from "../config/database";
import { User } from "../models";
import sha256 from 'crypto-js/sha256';
import { randomBytes } from "crypto";
import passport from "passport";
import { SuccessOrError } from "../types";

export interface UserCreationPayload {
	userName: string;
	email: string;
	password: string;
}

export interface LoginPayload {
	email: string;
	password: string;
}

export const createUser = async (payload: UserCreationPayload): Promise<SuccessOrError> => {
	const user = new User();
	const userRepo = AppDataSource.manager.getRepository(User);
	user.userName = payload.userName;
	user.email = payload.email;
	const salt = randomBytes(16).toString("base64");
	const date = new Date();
	user.createdAt = date;
	user.updatedAt = date;
	user.salt = salt;
	const hash = sha256(payload.password + salt).toString();
	user.password = hash;
	const userCreateResponse =  await userRepo.save(user);
	if (userCreateResponse) {
		return {
			success: true
		}
	}
	return {
		success: false,
		error: 'User creation failed'
	}
}

export const login = async (payload: LoginPayload): Promise<User | undefined> => {
	const workingUser = new User();
	const userRepo = AppDataSource.manager.getRepository(User);
	const claimedUser = await userRepo.findOne({
		where: {
			email: payload.email
		}
	});

	if (claimedUser) {
		workingUser.password = claimedUser.password;
		workingUser.salt = claimedUser.salt;
		const hash = sha256(payload.password + workingUser.salt).toString();
		if (hash === workingUser.password) {
			const sessionUser = new User();
			sessionUser.id = claimedUser.id;
			sessionUser.userName = claimedUser.userName;
			sessionUser.email = claimedUser.email;
			return sessionUser;
		}
	}
	return undefined;
}