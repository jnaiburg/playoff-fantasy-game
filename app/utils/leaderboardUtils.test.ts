import { describe } from "node:test";

import { getLeaderboardRows } from "./leaderboardUtils";

const mockUsers = [
	{ id: "1", username: "User 1", email: "fake@gmail.com", score: 100 },
	{ id: "2", username: "User 2", email: "fake@gmail.com", score: 50 },
	{ id: "3", username: "User 3", email: "fake@gmail.com", score: 75 },
	{ id: "4", username: "User 4", email: "fake@gmail.com", score: 25 },
];

describe("getLeaderboardRows", () => {
	it("should return the correct number of rows when a limit is provided", () => {
		const rows = getLeaderboardRows(mockUsers, 3);
		expect(rows.length).toBe(3);
	});

	it("should return 0 rows when limit is 0", () => {
		const rows = getLeaderboardRows(mockUsers, 0);
		expect(rows.length).toBe(0);
	});

	it("should return 0 rows when limit is negative", () => {
		const rows = getLeaderboardRows(mockUsers, -1);
		expect(rows.length).toBe(0);
	});

	it("should return the correct rows", () => {
		const rows = getLeaderboardRows(mockUsers, 3);
		expect(rows[0].id).toBe("1");
		expect(rows[0].name).toBe("User 1");
		expect(rows[0].score).toBe(100);
		expect(rows[1].id).toBe("3");
		expect(rows[1].name).toBe("User 3");
		expect(rows[1].score).toBe(75);
		expect(rows[2].id).toBe("2");
		expect(rows[2].name).toBe("User 2");
		expect(rows[2].score).toBe(50);
	});
});
