export type UserSession = {
	id: number;
	username: string;
	email: string;
}

export type User = {
	id: number;
	username: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
};

export type UserCreationPayload = {
	username: string;
	email: string;
	password: string;
};

export type UserLoginPayload = {
	email: string;
	password: string;
}