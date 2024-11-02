import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

interface IAlert {
	type: 'success' | 'error' | 'warning';
	message: string;
}

type IAlertState = IAlert | null;

const initialState: IAlertState = null as IAlertState;

const alertSlice = createSlice({
	name: 'alert',
	initialState,
	reducers: {
		setAlert: (state, action: PayloadAction<IAlertState>) => {
			return action.payload;
		},
		clearAlert: () => {
			return null;
		},
	},
});

const alertActions = alertSlice.actions;

let timeout: NodeJS.Timeout | null;

export const setAlertWithTimeout = (alertPayload: IAlert) => {
	return (dispatch: Dispatch) => {
		if (timeout) {
			clearTimeout(timeout);
		}

		dispatch(alertActions.setAlert(alertPayload));

		timeout = setTimeout(() => {
			dispatch(alertActions.clearAlert());
			timeout = null;
		}, 4000);
	};
};

export default alertSlice.reducer;
