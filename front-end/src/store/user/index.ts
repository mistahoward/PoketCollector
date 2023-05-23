import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { UserCreationPayload, UserLoginPayload, UserSession } from './types';
import userApi from './api';
import { SuccessOrError } from '../types';

export type UserStore = UserSession & {
	loaded: boolean;
}
const initialState: UserStore = {
	id: 0,
	username: '',
	email: '',
	loaded: false,
};

export const registerUser = createAsyncThunk('user/register', async (user: UserCreationPayload): Promise<SuccessOrError<UserSession>> => {
	const response = await userApi.registerUser(user);
	return response;
});

export const loginUser = createAsyncThunk('user/login', async (user: UserLoginPayload): Promise<SuccessOrError<UserSession>> => {
	const response = await userApi.loginUser(user);
	return response;
});

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			registerUser.fulfilled,
			(state, action: PayloadAction<SuccessOrError<UserSession>>) => {
				if (!action.payload.success || !action.payload.data) {
					return;
				}
				const userData = action.payload.data;
				state.id = userData.id;
				state.username = userData.username;
				state.email = userData.email;
				state.loaded = true;
			}
		);
		builder.addCase(registerUser.rejected, (state) => {
			state.loaded = true;
		});
		builder.addCase(
			loginUser.fulfilled,
			(state, action: PayloadAction<SuccessOrError<UserSession>>) => {
				if (!action.payload.success || !action.payload.data) {
					return;
				}
				const userData = action.payload.data;
				state.id = userData.id;
				state.username = userData.username;
				state.email = userData.email;
				state.loaded = true;
			}
		);
		builder.addCase(loginUser.rejected, (state) => {
			state.loaded = true;
		});
	},
});

export default userSlice.reducer;
