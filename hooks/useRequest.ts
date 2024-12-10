import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { IRequestOptions } from './useAuthRequest';
import { AppDispatch } from '@/store/store';
import { setAlertWithTimeout } from '@/store/alert-slice';

export default function useRequest() {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch: AppDispatch = useDispatch();

	const sendRequest = async (url: string, options: IRequestOptions) => {
		setIsLoading(true);
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_PREFIX}${url}`,
				options
			);

			if (!response.ok) {
				const data = await response.json();
				throw new Error(data.error || 'Something went wrong.');
			}

			return response.json();
		} catch (err) {
			if (err instanceof Error) {
				dispatch(
					setAlertWithTimeout({ type: 'error', message: err.message })
				);
			}
			throw err;
		} finally {
			setIsLoading(false);
		}
	};

	return { sendRequest, isLoading };
}
