import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

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

export const restoreSession = createAsyncThunk<
	IUserCredentials,
	void,
	{ rejectValue: null }
>('auth/restoreSession', async (_, { rejectWithValue }) => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND_PREFIX}/auth/refresh-token`,
			{ credentials: 'include' }
		);

		const data = await response.json();

		if (!response.ok) {
			return rejectWithValue(null);
		}

		return data;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (err: unknown) {
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
		updateMyHooks: (state, action: PayloadAction<string[]>) => {
			if (state.credentials.user) {
				state.credentials.user.myHooks = action.payload;
			}
		},
		updateUser: (state, action: PayloadAction<IUser>) => {
			state.credentials.user = action.payload;
		},
		updateCompetitionId: (state, action: PayloadAction<string | undefined>) => {
			if (state.credentials.user) {
				state.credentials.user.competition = action.payload;
			}
		},
		updateCompetitionWins: (state, action: PayloadAction<number>) => {
			if (state.credentials.user) {
				state.credentials.user.competitionWins = action.payload;
			}
		},
		incrementFishAmount: (state) => {
			if (state.credentials.user) {
				state.credentials.user.fishAmount += 1;
			}
		},
		decrementFishAmount: (state) => {
			if (state.credentials.user) {
				state.credentials.user.fishAmount -= 1;
			}
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
			})
			.addCase(restoreSession.fulfilled, (state, action) => {
				state.isLoading = false;
				state.credentials.accessToken = action.payload.accessToken;
				state.credentials.user = action.payload.user;
			})
			.addCase(restoreSession.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
