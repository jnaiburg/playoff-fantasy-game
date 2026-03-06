import { Row, Variant } from "@/app/types/leaderboard";
import { User } from "@/app/types/user";

export type Props = {
	rows: Row[];
	currentUser?: User;
	variant?: Variant;
};
