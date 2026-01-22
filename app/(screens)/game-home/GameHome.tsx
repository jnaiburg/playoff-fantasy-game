import {
	Container,
	Typography,
} from "@mui/material";

export const GameHome = () => {
	return (
		<Container sx={sx.container}>
			<Typography variant="h4" sx={sx.header}>
				This is where the leaderboard will go
			</Typography>
		</Container>
	);
};

const sx = {
	container: { p: 2, maxWidth: 900, mx: "auto" },
	header: { mb: 2 },
} as const;
