import { RootState } from "../store";

export const selectIsLoggedIn = (state: RootState) => !!state.session.user;