"use client";

import { useAuth } from "@/app/store/session/useAuth";
import { getLeaderboardRows } from "@/app/utils/leaderboardUtils";

import { mockUsers } from "../../mock-data/mockUsers";
import { LeaderBoardWidgetProps } from "./types";

export const useLeaderBoardWidgetViewModel = ({ limit = 3 }: LeaderBoardWidgetProps) => {
	const { currentUser } = useAuth();

	const rows = getLeaderboardRows(mockUsers, limit);

	return {
		rows,
		currentUser,
	};
};
