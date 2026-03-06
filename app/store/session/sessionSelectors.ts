import { RootState } from "../store";

export const selectIsLoggedIn = (state: RootState) => !!state.session.user;

export const selectCurrentUser = (state: RootState) => state.session.user;