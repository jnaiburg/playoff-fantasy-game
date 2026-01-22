import { getUserById } from "./userService";

let mockUserId: string;
describe("userService", () => {
	beforeEach(() => {
		mockUserId = "1";
	});

	it("should return a user by id", () => {
		const user = getUserById(mockUserId);
		expect(user.id).toBe(mockUserId);
	});

	it("should throw an error if the user does not exist", () => {
		expect(() => getUserById("3")).toThrow("User with id 3 not found");
	});
});
