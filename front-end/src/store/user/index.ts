import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as dotenv from 'dotenv';

dotenv.config();

export type User = {
	id: number;
	firstName: string;
	lastName: string;
	userName: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
};

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.BACKEND_ROOT }),
	endpoints: (builder) => ({
		getUser: builder.query<User, number>({
			query: (id) => `users/${id}`,
		})
	}),
});

export const { useGetUserQuery } = userApi;
