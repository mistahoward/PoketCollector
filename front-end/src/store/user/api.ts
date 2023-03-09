import { UserCreationPayload } from './types';

const userApi = {
	registerUser: async (user: UserCreationPayload) => {
		const response = await fetch(`${import.meta.env.VITE_BACKEND_ROOT}/user/register`, {
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
