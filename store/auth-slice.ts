import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
    token: null | string;
    user: null | {
        _id: string;
        nickname: string;
        avatar: string;
        role: 'admin' | 'moderator' | 'user';
    }
}

const initialState: IAuthState =  {
    token: null,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<IAuthState>) => {
            return action.payload;
        },
        logout: () => {
            return initialState;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;