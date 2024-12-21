import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICompetition, IInvitedUser } from "@/interfaces/competition";

type ICompetitionSlice = ICompetition | null;

const initialState = null as ICompetitionSlice;

const competitionSlice = createSlice({
    name: 'competition',
    initialState,
    reducers: {
        setCompetition: (state, action: PayloadAction<ICompetition>) => {
            return action.payload;
        },
        resetCompetition: () => {
            return initialState;
        },
        removeUser: (state, action: PayloadAction<string>) => {
            if(state) {
                const filteredUsers = state.users.filter(u => u._id !== action.payload);
                state.users = filteredUsers;
            }
        },
        addInvitedUser: (state, action: PayloadAction<IInvitedUser>) => {
            if(state) {
                state.invites = [...state.invites, action.payload]
            }
        }

    }
})


export default competitionSlice.reducer;

export const competitionActions = competitionSlice.actions;