import { mockLeagues } from "@/app/mock-data/mockLeagues";
import { mockUsers } from "@/app/mock-data/mockUsers";

export const useGameHomeViewModel = () => {
	const currentUserId = mockUsers[0]?.id ?? "1";

	const userLeagues = mockLeagues.filter((league) => league.memberIds.includes(currentUserId));

	return {
		userLeagues,
	};
};
