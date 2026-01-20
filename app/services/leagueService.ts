import { mockLeagues } from "../mock-data/mockLeagues";
import { League } from "../types/league";

export const getLeagueById = (id: string): League => {
    const league = mockLeagues.find((league) => league.id === id);
    if (!league) {
        throw new Error(`League with id ${id} not found`);
    }
    return league;
};

export const getLeaguesForUser = (userId: string): League[] => {
    const leagues = mockLeagues.filter((league) => league.memberIds.includes(userId));
    
    return leagues;
};