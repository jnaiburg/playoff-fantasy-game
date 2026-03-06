"use client";

import { Card, CardActionArea } from "@mui/material";
import Link from "next/link";

type ClickableCardProps = {
	href?: string;
	children: React.ReactNode;
	sx?: object;
};

export const ClickableCard = ({ href, children, sx }: ClickableCardProps) => {
	if (!href) {
		return <Card sx={sx}>{children}</Card>;
	}

	return (
		<Card sx={sx}>
			<CardActionArea component={Link} href={href}>
				{children}
			</CardActionArea>
		</Card>
	);
};
