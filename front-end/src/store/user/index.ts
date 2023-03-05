import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type User = {
	id: number;
	firstName: string;
	lastName: string;
	userName: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
};

const initialState: User = {
	id: 0,
	firstName: '',
	lastName: '',
	userName: '',
	email: '',
	createdAt: new Date(),
	updatedAt: new Date(),
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (_, action: PayloadAction<User>) => action.payload
	}
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
