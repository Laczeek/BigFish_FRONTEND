import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { IUser } from '@/interfaces/user';
import { setAlertWithTimeout } from './alert-slice';

export interface IValidationError {
	field: string;
	msg: string;
}

interface IUserCredentials {
	accessToken: string;
	user: IUser;
}

interface ISignupPayload {
	nickname: string;
	email: string;
	password: string;
	passwordConfirm: string;
}

interface ILoginPayload {
	email: string;
	password: string;
}

interface IAuthState {
	credentials: {
		accessToken: null | string;
		user: null | IUser;
	};
	errors: null | IValidationError[];
	isLoading: boolean;
}

const initialState: IAuthState = {
	credentials: {
		accessToken: null,
		user: null,
	},
	errors: null,
	isLoading: false,
};

export const observeUser = createAsyncThunk<
	{ myHooks: string[] | [] },
	string,
	{ rejectValue: null }
>(
	'auth/observeUser',
	async (userId: string, { getState, rejectWithValue, dispatch }) => {
		const { auth } = getState() as { auth: IAuthState };

		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND_PREFIX}/users/observe/${userId}`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${auth.credentials.accessToken}`,
				},
			}
		);

		const data = await response.json();

		if (!response.ok) {
			if (data.error) {
				dispatch(
					setAlertWithTimeout({ type: 'error', message: data.error })
				);
			}
			return rejectWithValue(null);
		}

		return data;
	}
);

export const restoreSession = createAsyncThunk<
	IUserCredentials,
	void,
	{ rejectValue: null }
>('auth/restoreSession', async (_, { rejectWithValue, dispatch }) => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND_PREFIX}/auth/refresh-token`,
			{ credentials: 'include' }
		);

		const data = await response.json();
	
		if (!response.ok) {
			// await fetch(
			// 	`${process.env.NEXT_PUBLIC_BACKEND_PREFIX}/auth/logout`,
			// 	{
			// 		credentials: 'include',
			// 	}
			// );

			if (data.error) {
				dispatch(
					setAlertWithTimeout({ type: 'error', message: data.error })
				);
			}
			return rejectWithValue(null);
		}

		return data;
	} catch (err: unknown) {
		if (err instanceof Error) {
			console.error(err.message);
		}
		dispatch(
			setAlertWithTimeout({
				type: 'error',
				message: 'An unexpected error occurred.',
			})
		);

		return rejectWithValue(null);
	}
});

export const signup = createAsyncThunk<
	IUserCredentials,
	ISignupPayload,
	{ rejectValue: { errors: IValidationError[] | null } }
>(
	'auth/signup',
	async (userData: ISignupPayload, { rejectWithValue, dispatch }) => {
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_PREFIX}/auth/signup`,
				{
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify(userData),
					credentials: 'include',
				}
			);

			const data = await response.json();

			if (!response.ok) {
				if (data.error) {
					dispatch(
						setAlertWithTimeout({
							type: 'error',
							message: data.error,
						})
					);
				}

				if (data.errors) {
					return rejectWithValue(data);
				}

				return rejectWithValue({ errors: null });
			}

			return data;
		} catch (err: unknown) {
			if (err instanceof Error) {
				console.error(err.message);
			}

			dispatch(
				setAlertWithTimeout({
					type: 'error',
					message: 'An unexpected error occurred.',
				})
			);

			return rejectWithValue({ errors: null });
		}
	}
);

export const login = createAsyncThunk<
	IUserCredentials,
	ILoginPayload,
	{ rejectValue: { errors: IValidationError[] | null } }
>(
	'auth/login',
	async (userData: ILoginPayload, { rejectWithValue, dispatch }) => {
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_PREFIX}/auth/login`,
				{
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify(userData),
					credentials: 'include',
				}
			);

			const data = await response.json();

			if (!response.ok) {
				if (data.error) {
					dispatch(
						setAlertWithTimeout({
							type: 'error',
							message: data.error,
						})
					);
				}

				if (data.errors) {
					return rejectWithValue(data);
				}

				return rejectWithValue({ errors: null });
			}

			return data;
		} catch (err) {
			if (err instanceof Error) {
				console.error(err.message);
			}
			dispatch(
				setAlertWithTimeout({
					type: 'error',
					message: 'An unexpected error occurred.',
				})
			);

			return rejectWithValue({ errors: null });
		}
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: () => {
			return initialState;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(signup.pending, (state) => {
				state.isLoading = true;
				state.errors = null;
			})
			.addCase(signup.fulfilled, (state, action) => {
				state.isLoading = false;
				state.credentials.accessToken = action.payload.accessToken;
				state.credentials.user = action.payload.user;
			})
			.addCase(signup.rejected, (state, action) => {
				state.isLoading = false;
				state.errors = action.payload?.errors || null;
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true;
				state.errors = null;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.credentials.accessToken = action.payload.accessToken;
				state.credentials.user = action.payload.user;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.errors = action.payload?.errors || null;
			})
			.addCase(restoreSession.pending, (state) => {
				state.isLoading = true;
				state.errors = null;
			})
			.addCase(restoreSession.fulfilled, (state, action) => {
				state.isLoading = false;
				state.credentials.accessToken = action.payload.accessToken;
				state.credentials.user = action.payload.user;
			})
			.addCase(restoreSession.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(observeUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(observeUser.fulfilled, (state, action) => {
				state.isLoading = false;
				if (state.credentials.user) {
					state.credentials.user.myHooks =
						action.payload.myHooks || [];
				}
			})
			.addCase(observeUser.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
