import { Post, Route, Get, Body, Tags } from 'tsoa';
import { LoginPayload, UserCreationPayload, createUser, login } from '../repositories/user.repo';
import { SuccessOrError } from '../types';
import { User } from '../models';

@Route('user')
@Tags('User')
export default class UserController {
	@Get('{user_id}')
	public async getUser(user_id: string): Promise<void> {
		return;
	}

	@Post('/register')
	public async createUser(
		@Body() userCreationParam: UserCreationPayload
	): Promise<SuccessOrError> {
		const response = await createUser(userCreationParam);
		return response;
	}
	
	@Post('/login')
	public async login(
		@Body() loginParam: LoginPayload
	): Promise<User | undefined> {
		const response = await login(loginParam);
		return response;
	}
}
