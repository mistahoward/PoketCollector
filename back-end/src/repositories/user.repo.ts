import AppDataSource from "../config/database";
import { User } from "../models";
import sha256 from 'crypto-js/sha256';
import { randomBytes } from "crypto";
import passport from "passport";

export interface UserCreationPayload {
	userName: string;
	email: string;
	password: string;
}

export interface LoginPayload {
	email: string;
	password: string;
}

export interface LoginResponse {
	success: boolean;
	error?: string;
}

export const createUser = async (payload: UserCreationPayload): Promise<User> => {
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
	return await userRepo.save(user);
}

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
	const workingUser = new User();
	const userRepo = AppDataSource.manager.getRepository(User);
	const claimedUser = await userRepo.find({
		where: {
			email: payload.email
		}
	});

	if (claimedUser) {
		workingUser.password = claimedUser[0].password;
		workingUser.salt = claimedUser[0].salt;
		const hash = sha256(payload.password + workingUser.salt).toString();
		if (hash === workingUser.password) {
			return {
				success: true
			}
		}
	}
	return {
		success: false,
		error: 'Incorrect password'
	}
}