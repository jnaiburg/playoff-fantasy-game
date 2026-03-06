"use client";

import {
	Container,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";

import { Variant } from "@/app/types/leaderboard";

import { LeaderboardRows } from "../../components/LeaderboardRows/LeaderboardRows";
import { useLeaderBoardWidgetViewModel } from "../../components/LeaderboardWidget/LeaderBoardWidget.viewModel";

export const Leaderboard = () => {
	const { rows, currentUser } = useLeaderBoardWidgetViewModel({ limit: 50 });

	return (
		<Container sx={{ p: 2, maxWidth: 900, mx: "auto" }}>
			<Typography variant="h4" sx={{ mb: 2 }}>
				Leaderboard
			</Typography>

			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Rank</TableCell>
							<TableCell>User</TableCell>
							<TableCell align="right">Score</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						<LeaderboardRows
							rows={rows}
							currentUser={currentUser ?? undefined}
							variant={Variant.TABLE}
						/>
					</TableBody>
				</Table>
			</Paper>
		</Container>
	);
};
