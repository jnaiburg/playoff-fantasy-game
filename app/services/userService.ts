import { mockUsers } from "../mock-data/mockUsers";
import { User } from "../types/user";

export const getUserById = (id: string): User => {
	const user = mockUsers.find((user) => user.id === id);
	if (!user) {
		throw new Error(`User with id ${id} not found`);
	}
	return user;
};