import { ListItem, ListItemText, TableCell, TableRow } from "@mui/material";
import { blue } from "@mui/material/colors";

import { Row, Variant } from "@/app/types/leaderboard";

import { Props } from "./types";

export const LeaderboardRows = ({ rows, currentUser, variant = Variant.LIST }: Props) => {
	if (variant === Variant.TABLE) {
		return (
			<>
				{rows.map((row: Row, idx: number) => (
					<TableRow key={row.id} sx={row.id === currentUser?.id ? sx.highlightedRow : {}}>
						<TableCell>{idx + 1}</TableCell>
						<TableCell>{row.name}</TableCell>
						<TableCell align="right">{row.score}</TableCell>
					</TableRow>
				))}
			</>
		);
	}

	return (
		<>
			{rows.map((row: Row, idx: number) => (
				<ListItem key={row.id} sx={row.id === currentUser?.id ? sx.highlightedRow : {}}>
					<ListItemText primary={`${idx + 1}. ${row.name}`} secondary={`Score: ${row.score}`} />
				</ListItem>
			))}
		</>
	);
};

const sx = {
	highlightedRow: { bgcolor: blue[200] },
};
