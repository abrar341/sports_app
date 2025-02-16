export function calculatePlayerStats(playerStats) {
    if (!Array.isArray(playerStats)) {
        return { totalGoals: 0, assists: 0, points: 0 }; // Handle null, undefined, or non-array inputs
    }

    return playerStats.reduce((acc, stat) => {
        acc.totalGoals += stat.totalGoals || 0;
        acc.assists += stat.totalAssists || 0; // Assuming "totalAssists" exists in the data
        acc.points += (stat.totalGoals || 0) + (stat.totalAssists || 0);
        return acc;
    }, { totalGoals: 0, assists: 0, points: 0 });
}
