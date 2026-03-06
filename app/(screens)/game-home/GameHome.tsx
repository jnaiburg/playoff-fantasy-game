"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";

import { LeaderboardWidget } from "../../components/LeaderboardWidget/LeaderboardWidget";
import { useGameHomeViewModel } from "./GameHome.viewModel";

export const GameHome = () => {
	const { isLoggedIn, handleProfileClick, handleMyTeamClick, handleLoginClick, handleLogoutClick } =
		useGameHomeViewModel();

	return (
		<Container sx={sx.container}>
			<Typography variant="h4" sx={sx.header}>
				Playoff Fantasy
			</Typography>

			<Box sx={sx.box}>
				<LeaderboardWidget href="/leaderboard"/>
			</Box>

			<Stack direction="row" spacing={2} justifyContent="center">
				{isLoggedIn && (
					<Button onClick={handleProfileClick} variant="outlined">
						Profile
					</Button>
				)}
				{isLoggedIn ? (
					<Button variant="contained" onClick={handleLogoutClick}>
						Logout
					</Button>
				) : (
					<Button variant="contained" onClick={handleLoginClick}>
						Login as User 1
					</Button>
				)}
				{isLoggedIn && (
					<Button variant="contained" color="secondary" onClick={handleMyTeamClick}>
						My Team
					</Button>
				)}
			</Stack>
		</Container>
	);
};

const sx = {
	container: { p: 2, maxWidth: 900, mx: "auto", textAlign: "center" },
	header: { mb: 2 },
	previewCard: { width: 420 },
	box: { display: "flex", justifyContent: "center", mb: 3 },
} as const;
