import { useRouter } from "next/navigation";

import { useAuth } from "@/app/store/session/useAuth";


export const useGameHomeViewModel = () => {
    const { isLoggedIn, login, logout } = useAuth();
    const router = useRouter();

    const handleLeaderboardClick = () => {
        router.push("/leaderboard");
    };

    const handleProfileClick = () => {
        router.push("/profile");
    };

    const handleMyTeamClick = () => {
        router.push("/my-team");
    };

    const handleLoginClick = () => {
        login("1"); // Simulate login with user ID "1"
    };

    const handleLogoutClick = () => {
        logout();
    };

    return {
        isLoggedIn,
        router,
        handleLeaderboardClick,
        handleProfileClick,
        handleMyTeamClick,
        handleLoginClick,
        handleLogoutClick,
    };
};