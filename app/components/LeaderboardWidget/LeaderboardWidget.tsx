"use client";

import { CardContent, List, Typography } from "@mui/material";

import { ClickableCard } from "../ClickableCard";
import { LeaderboardRows } from "../LeaderboardRows/LeaderboardRows";
import { useLeaderBoardWidgetViewModel } from "./LeaderBoardWidget.viewModel";
import { LeaderBoardWidgetProps } from "./types";

export const LeaderboardWidget = ({ limit = 3, href }: LeaderBoardWidgetProps) => {
	const { rows, currentUser } = useLeaderBoardWidgetViewModel({ limit });

	return (
		<ClickableCard href={href} sx={sx.card}>
			<CardContent>
				<Typography variant="h6">Leaderboard Preview</Typography>

				<List dense>
					<LeaderboardRows rows={rows} currentUser={currentUser ?? undefined} />
				</List>
			</CardContent>
		</ClickableCard>
	);
};

const sx = {
	card: { width: 420 },
};
