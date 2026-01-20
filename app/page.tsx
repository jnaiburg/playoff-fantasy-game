"use client";

import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	const handleNavigateToGame = () => {
		router.push("/game-home");
	};
	return (
		<>
			<Typography variant="h1">Playoff Fantasy Game</Typography>
			<Button variant="contained" onClick={handleNavigateToGame}>
				Click to navigate to game home
			</Button>
		</>
	);
}
