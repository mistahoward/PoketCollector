import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type User = {
	id: number;
	firstName: string;
	lastName: string;
	userName: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
};

export type UserCreationPayload = {
	userName: string;
	email: string;
	password: string;
};

export type UserLoginPayload = {
	email: string;
	password: string;
}

export type UserLoginResponse = {
	success?: boolean;
	error?: string;
}

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_ROOT}/user` }),
	endpoints: (builder) => ({
		getUser: builder.query<User, number>({
			query: (id) => `/${id}`,
		}),
		createUser: builder.mutation<UserCreationPayload, UserCreationPayload>({
			query: (user) => ({
				url: '/register',
				method: 'POST',
				body: user
			}),
		}),
		login: builder.mutation<UserLoginResponse, UserLoginPayload>({
			query: (user) => ({
				url: '/login',
				method: 'POST',
				body: user
			}),
		}),
	}),
});

export const { useGetUserQuery, useCreateUserMutation, useLoginMutation } = userApi;
