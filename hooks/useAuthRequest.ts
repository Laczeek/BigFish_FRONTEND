import {  useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import { setAlertWithTimeout } from '@/store/alert-slice';
import { authActions, restoreSession } from '@/store/auth-slice';
import { AppDispatch, RootState } from '@/store/store';
import transformToErrorObject from '@/helpers/transformToErrorObject';

interface IValidationError {
	field: string;
	msg: string;
}

export interface IRequestOptions {
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	headers?: {
		[key: string]: string;
	};
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	body?: any;
}

export default function useAuthRequest() {
	const [errors, setErrors] = useState<IValidationError[] | []>([]);
	const [isLoading, setIsLoading] = useState(false);
	const { accessToken } = useSelector(
		(state: RootState) => state.auth.credentials
	);
	const dispatch: AppDispatch = useDispatch();
	const router = useRouter();

	const sendAuthRequest = async (url: string, options: IRequestOptions) => {
		try {
			setErrors([]);
			setIsLoading(true);
			options.headers = {
				...(options.headers || {}),
				Authorization: `Bearer ${accessToken}`,
			};

			let response = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_PREFIX}${url}`,
				options
			);

			let newAccessToken;

			if (response.status === 401) {
				const resultOfRestoreSession = await dispatch(restoreSession());
				if (resultOfRestoreSession.meta.requestStatus === 'rejected') {
					dispatch(authActions.logout());
					router.push('/auth?action=login');
					throw new Error(
						'We are not able to authorize you. Please log in again.'
					);
				}

				newAccessToken =
					resultOfRestoreSession.payload?.accessToken || '';

				options.headers['Authorization'] = `Bearer ${newAccessToken}`;
				response = await fetch(
					`${process.env.NEXT_PUBLIC_BACKEND_PREFIX}${url}`,
					options
				);
			}

			if (!response.ok) {
				const data = await response.json();
				if (data.errors) {
					setErrors(data.errors);
					throw new Error('Validation failed.');
				}

				throw new Error(data.error || 'Something went wrong.');
			}

			return response.json();
		} catch (err: unknown) {
			if (err instanceof Error) {
				dispatch(
					setAlertWithTimeout({
						type: 'error',
						message: err.message,
					})
				);
			}
			throw err;
		} finally {
			setIsLoading(false);
		}
	};

	const errorsObject = transformToErrorObject(errors);

	return {
		isLoading,
		errorsObject,
		sendAuthRequest,
	};
}
