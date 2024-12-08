import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPaginationState {
	currentPage: number;
    resetCount: number;
}

const initialState: IPaginationState = {
	currentPage: 1,
    resetCount: 0
};

const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		goToNextPage: (state) => {
			state.currentPage += 1;
		},
		goToPreviousPage: (state) => {
			if (state.currentPage > 1) {
				state.currentPage -= 1;
			}
		},
		goToPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload;
		},
		reset: (state) => {
			state.resetCount +=1;
		},
		clear: () => {
			return initialState;
		}
	},
});

export const paginationActions = paginationSlice.actions;

export default paginationSlice.reducer;
