import {
	Avatar,
	Card,
	CardContent,
	Container,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";

import { useGameHomeViewModel } from "./GameHome.viewModel";

// Use MUI `sx`-style object for theme-aware styling

export const GameHome = () => {
	const { userLeagues } = useGameHomeViewModel();
	return (
		<Container sx={sx.container}>
			<Typography variant="h4" sx={sx.header}>
				Your Leagues
			</Typography>

			{userLeagues.length === 0 ? (
				<Typography sx={sx.empty}>You are not a member of any leagues.</Typography>
			) : (
				<List>
					{userLeagues.map((league) => (
						<Card key={league.id} sx={sx.card}>
							<CardContent>
								<ListItem>
									<ListItemAvatar>
										<Avatar sx={sx.avatar}>{league.name.charAt(0)}</Avatar>
									</ListItemAvatar>
									<ListItemText
										primary={league.name}
										secondary={`${league.memberIds.length} members`}
									/>
								</ListItem>
							</CardContent>
						</Card>
					))}
				</List>
			)}
		</Container>
	);
};

const sx = {
	container: { p: 2, maxWidth: 900, mx: "auto" },
	header: { mb: 2 },
	card: { mb: 2 },
	empty: { textAlign: "center", color: "#666", mt: 3 },
	avatar: { bgcolor: "primary.main" },
} as const;
