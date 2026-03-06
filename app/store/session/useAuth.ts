import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserById } from "@/app/services/userService";

import { selectCurrentUser, selectIsLoggedIn } from "./sessionSelectors";
import { login, logout } from "./sessionSlice";

export function useAuth() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const loginUser = useCallback(
    (userId: string) => {
        const user = getUserById(userId);
        dispatch(login(user));
    },
    [dispatch]
  );

  const logoutUser = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const currentUser = useSelector(selectCurrentUser);

  return {
    isLoggedIn,
    login: loginUser,
    logout: logoutUser,
    currentUser,
  };
}