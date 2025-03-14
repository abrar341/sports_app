
export const normalizeMatchData = (match) => {
    // console.log("match", match);

    return {
        leagueId: match.leagueId || match.league.leagueId || match.league.id,
        fixtureId: match.gameId || match.matchId || match.fixtureId,
        live: match?.live ?? false, // Use match.live if it exists, otherwise set to false
        homeTeam: {
            name: getShortTeamName(match.teams?.home?.name) || "Unknown Team",
            logo: match.teams?.home?.logo || "",
            score: getFinalScore(match, "home")
        },
        awayTeam: {
            name: getShortTeamName(match.teams?.away?.name) || "Unknown Team",
            logo: match.teams?.away?.logo || "",
            score: getFinalScore(match, "away")
        }
    };
};

// Helper function to extract scores based on match type
const getFinalScore = (match, teamType) => {
    if (match.scores && match.scores[teamType]?.total !== undefined) {
        return match.scores[teamType].total; // American Football format
    }
    if (match.goals && match.goals[teamType] !== undefined) {
        return match.goals[teamType]; // Soccer format
    }
    if (match.score && match.score[teamType] !== undefined) {
        return match.score[teamType]; // Soccer format
    }
    return "-"; // Fallback if no score found
};

// Helper function to extract the first part of the team name
const getShortTeamName = (teamName) => {
    return teamName ? teamName.split(" ")[0] : "";
};
