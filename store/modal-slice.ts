/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IModalState {
	isOpen: boolean;
	modalType:
		| 'ADD_FISH'
		| 'FISH_DETAILS'
		| 'REMOVE_FISH'
		| 'SEARCH_ANGLERS'
		| 'FISH_IMAGE_PREVIEW'
		| 'QUIT_COMPETITION'
		| 'DELETE_COMPETITION'
		| 'REPORT_USER'
		| 'DELETE_ACCOUNT'
		| null;
	modalProps: any;
}

interface IPayload {
	modalType:
		| 'ADD_FISH'
		| 'FISH_DETAILS'
		| 'REMOVE_FISH'
		| 'SEARCH_ANGLERS'
		| 'FISH_IMAGE_PREVIEW'
		| 'QUIT_COMPETITION'
		| 'DELETE_COMPETITION'
		| 'REPORT_USER'
		| 'DELETE_ACCOUNT';

	modalProps: any;
}

const initialState: IModalState = {
	isOpen: false,
	modalType: null,
	modalProps: null,
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		showModal: (state, action: PayloadAction<IPayload>) => {
			return {
				isOpen: true,
				...action.payload,
			};
		},
		hideModal: () => {
			return initialState;
		},
	},
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
