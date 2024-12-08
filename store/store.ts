import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import alertReducer from './alert-slice';
import modalReducer from './modal-slice';
import paginationReducer from './pagination-slice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		alert: alertReducer,
		modal: modalReducer,
		pagination: paginationReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
