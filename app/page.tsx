"use client";

import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";

export default function Home() {
	const router = useRouter();

	const handleNavigateToGame = () => {
		router.push("/game-home");
	};
	return (
		<>
			<h1>Playoff Fantasy Game</h1>
			<Button variant="primary" onClick={handleNavigateToGame}>
				Click to navigate to game home
			</Button>
		</>
	);
}
