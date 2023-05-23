import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';

import { useAppDispatch } from '../hooks';
import { loginUser } from '.';
import type { UserLoginPayload } from './types';

import Modal from '../../Modal';

/* eslint-disable import/prefer-default-export */

export const useLogin = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	return async (user: UserLoginPayload) => {
		try {
			const resultAction = await dispatch(loginUser(user));
			const response = unwrapResult(resultAction);

			if (response.success === true) {
				Modal.fire({
					title: 'Success',
					text: 'Login successful',
					icon: 'success',
				}).then(() => {
					navigate('/');
				});
			} else {
				throw new Error('Login failed');
			}
		} catch (err: any) {
			Modal.fire({
				title: 'Error',
				text: err?.message ?? 'Login failed',
				icon: 'error',
			});
		}
	};
};
