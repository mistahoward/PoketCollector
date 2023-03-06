import AppDataSource from "../config/database";
import { User } from "../models";

import { randomBytes } from "crypto";
import sha256 from 'crypto-js/sha256';

export interface UserCreationPayload {
	username: string;
	email: string;
	password: string;
}

export const createUser = async (payload: UserCreationPayload): Promise<User> => {
	const user = new User();
	const userRepo = AppDataSource.manager.getRepository(User);
	user.userName = payload.username;
	user.email = payload.email;
	const salt = randomBytes(16).toString("base64");
	user.salt = salt;
	const hash = sha256(payload.password + salt).toString();
	user.password = hash;
	return await userRepo.save(user);
}