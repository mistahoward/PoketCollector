import { Post, Route, Get, Body, Tags, Security, Request } from 'tsoa';
import { LoginPayload, UserCreationPayload, createUser, getUserById, login } from '../repositories/user.repo';
import { SuccessOrError, UserMeta } from '../types';
import { User } from '../models';

@Route('user')
@Tags('User')
export default class UserController {
	@Get('/details')
	public async getUser(@Request() userId: string): Promise<User | undefined> {
		const response = await getUserById(Number(userId));
		return response;
	}

	@Post('/register')
	public async createUser(
		@Body() userCreationParam: UserCreationPayload
	): Promise<SuccessOrError<UserMeta>> {
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
