import AppDataSource from "../config/database";
import { User } from "../models";
import sha256 from 'crypto-js/sha256';
import { randomBytes } from "crypto";
import passport from "passport";
import { SuccessOrError, UserMeta } from "../types";

export interface UserCreationPayload {
	username: string;
	email: string;
	password: string;
}

export interface LoginPayload {
	email: string;
	password: string;
}

export const createUser = async (payload: UserCreationPayload): Promise<SuccessOrError<UserMeta>> => {
	const user = new User();
	const userRepo = AppDataSource.manager.getRepository(User);
	user.username = payload.username;
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
			success: true,
			data: {
				id: userCreateResponse.id,
				username: userCreateResponse.username
			}
		}
	}
	return {
		success: false,
		error: 'User creation failed'
	}
}

export const getUserById = async (id: number): Promise<User | undefined> => {
	const userRepo = AppDataSource.manager.getRepository(User);
	const user = await userRepo.findOne({
		where: {
			id: id
		}
	});
	if (user) {
		return user;
	}
	return undefined;
}

export const getUserByEmail = async (email: string): Promise<User | undefined> => {
	const userRepo = AppDataSource.manager.getRepository(User);
	const user = await userRepo.findOne({
		where: {
			email: email
		}
	});
	if (user) {
		return user;
	}
	return undefined;
}

export const login = async (payload: LoginPayload): Promise<User | undefined> => {
	const workingUser = new User();
	const claimedUser = await getUserByEmail(payload.email);

	if (claimedUser) {
		workingUser.password = claimedUser.password;
		workingUser.salt = claimedUser.salt;
		const hash = sha256(payload.password + workingUser.salt).toString();
		if (hash === workingUser.password) {
			const sessionUser = new User();
			sessionUser.id = claimedUser.id;
			sessionUser.username = claimedUser.username;
			return sessionUser;
		}
	}
	return undefined;
}