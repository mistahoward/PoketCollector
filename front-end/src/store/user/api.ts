import { SuccessOrError } from '../types';
import { UserCreationPayload, UserLoginPayload } from './types';

const userApi = {
	registerUser: async (user: UserCreationPayload): SuccessOrError<UserStore => {
		const response = await fetch(`${import.meta.env.VITE_BACKEND_ROOT}/user/register`, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		return data;
	},
	loginUser: async (user: UserLoginPayload) => {
		const response = await fetch(`${import.meta.env.VITE_BACKEND_ROOT}/user/login`, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		return data;
	}
};

export default userApi;
