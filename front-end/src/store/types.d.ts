export type SuccessOrError<T> = {
	success?: boolean;
	error?: string;
	data?: T;
};
