import e from "express";

export interface SuccessOrError {
	success?: boolean;
	error?: string;
}

export interface UserSession {
	id: number;
	userName: string;
	email: string;
}