export interface SuccessOrError {
	success?: boolean;
	error?: string;
}

export interface UserSession {
	id: number;
	userName: string;
	email: string;
}

declare global {
	namespace Express {
	  interface User {
		id: number;
	  }
	}
  }