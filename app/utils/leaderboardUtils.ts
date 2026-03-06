import { User } from "../types/user";

export const getLeaderboardRows = (users: User[], limit: number) => {
    if (limit <= 0) {
        return [];
    }

	const rows = [...users]
		.map((user) => ({ id: user.id, name: user.username, score: user.score }))
		.sort((a, b) => b.score - a.score)
		.slice(0, limit);

	return rows;
};