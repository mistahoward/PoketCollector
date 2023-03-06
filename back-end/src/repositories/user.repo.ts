import AppDataSource from "../config/database";
import { User } from "../models";
import sha256 from 'crypto-js/sha256';
import { randomBytes } from "crypto";

export interface UserCreationPayload {
	userName: string;
	email: string;
	password: string;
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