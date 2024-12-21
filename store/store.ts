import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import alertReducer from './alert-slice';
import modalReducer from './modal-slice';
import competitionReducer from './competition-slice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		alert: alertReducer,
		modal: modalReducer,
		competition: competitionReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
