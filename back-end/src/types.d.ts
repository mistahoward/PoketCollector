export interface SuccessOrError<T> {
	success?: boolean;
	error?: string;
	data?: T
}

export interface UserMeta {
	id: number;
	username: string;
}

export interface UserSession {
	id: number;
	username: string;
	email: string;
}

declare global {
	namespace Express {
	  interface User {
		id: number;
		username: string;
	  }
	}
  }