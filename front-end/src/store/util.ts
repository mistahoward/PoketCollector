import { SuccessOrError } from './types';

const apiPostWithAuth = async <BodyPayload, ReturnType>(url: string, data: BodyPayload) => {
	const response = await fetch(`${import.meta.env.VITE_BACKEND_ROOT}/${url}`, {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const json: SuccessOrError<ReturnType> = await response.json();
	return json;
};

export { apiPostWithAuth };
