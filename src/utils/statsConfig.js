export const getStatsConfig = (sport, playerStatsData) => {

    if (sport === "soccer") {
        return [
            { label: "Total Goals", value: playerStatsData.totalGoals || 0, color: "text-red-400" },
            { label: "Passes", value: playerStatsData.passes || 0, color: "text-green-400" },
            { label: "Points", value: playerStatsData.points || 0, color: "text-blue-400" },
        ];
    } else if (sport === "american-football") {
        return [
            { label: "Total Yards", value: playerStatsData.totalYards || 0, color: "text-yellow-400" },
            { label: "Touchdowns", value: playerStatsData.totalTouchdowns || 0, color: "text-purple-400" },
            { label: "Tackles", value: playerStatsData.totalTackles || 0, color: "text-orange-400" },
        ];
    }
    return [];
};
