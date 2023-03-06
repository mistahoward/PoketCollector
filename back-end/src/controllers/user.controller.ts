import { Post, Route, Get, Body, Tags  } from "tsoa";
import { UserCreationPayload } from "../repositories/user";

interface CreateUserResponse {
	success: boolean;
	error?: string;
}

@Route("user")
@Tags("User")
export default class UserController {
	@Get("{user_id}")
	public async getUser(user_id: string): Promise<void> {
		return;
	}
	
	@Post("/")
	public async createUser(@Body() userCreationParam: UserCreationPayload): Promise<CreateUserResponse> {
		const response = await this.createUser(userCreationParam);
		if (response) {
			return {
				success: true,
			};
		} else {
			return {
				success: false,
				error: "User creation failed",
			};
  	}
}
}