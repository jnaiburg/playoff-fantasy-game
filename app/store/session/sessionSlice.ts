import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../../types/user";

interface SessionState {
	user: User | null;
}

const initialState: SessionState = {
	user: null, // logged out by default
};

const sessionSlice = createSlice({
	name: "session",
	initialState,
	reducers: {
		login(state, action: PayloadAction<User>) {
			state.user = action.payload;
		},
		logout(state) {
			state.user = null;
		},
	},
});

export const { login, logout } = sessionSlice.actions;
export default sessionSlice.reducer;
