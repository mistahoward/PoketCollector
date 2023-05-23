import { SuccessOrError } from '../types';
import { apiPostWithAuth } from '../util';
import { UserCreationPayload, UserLoginPayload, UserSession } from './types';

const userApi = {
	registerUser: async (user: UserCreationPayload): Promise<SuccessOrError<UserSession>> => {
		const response = apiPostWithAuth<UserCreationPayload, UserSession>('user/register', user);
		return response;
	},
	loginUser: async (user: UserLoginPayload): Promise<SuccessOrError<UserSession>> => {
		const response = apiPostWithAuth<UserLoginPayload, UserSession>('user/login', user);
		return response;
	}
};

export default userApi;
