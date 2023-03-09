export interface SuccessOrError<T> {
	success?: boolean;
	error?: string;
	data?: T
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