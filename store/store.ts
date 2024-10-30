import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import alertReducer from './alert-slice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		alert: alertReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
