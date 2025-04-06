export function calculatePlayerStats(playerStats) {

    if (!Array.isArray(playerStats)) {
        return { totalGoals: 0, passes: 0, points: 0 }; // Handle null, undefined, or non-array inputs
    }

    return playerStats.reduce((acc, stat) => {
        acc.totalGoals += stat.totalGoals || 0;
        acc.passes += stat.passes || 0; // Assuming "totalPasses" exists in the data
        acc.points += (stat.totalGoals || 0) + (stat.passes || 0);
        return acc;
    }, { totalGoals: 0, passes: 0, points: 0 });
}


export function calculateFootballPlayerStats(statistics) {
    console.log("Calculating Football Player Stats...");

    if (!Array.isArray(statistics)) {
        return {
            totalYards: 0,
            totalTouchdowns: 0,
            totalTackles: 0
        };
    }

    return statistics.reduce((acc, statCategory) => {
        if (!statCategory.statistics || !Array.isArray(statCategory.statistics)) return acc;

        statCategory.statistics.forEach(category => {
            if (!category.stats || !Array.isArray(category.stats)) return;

            category.stats.forEach(stat => {
                const value = parseFloat(stat.value) || 0;

                if (stat.name === "yards" || stat.name === "receiving yards") {
                    acc.totalYards += value;
                }
                if (stat.name && stat.name.toLowerCase().includes("touchdown")) {
                    acc.totalTouchdowns += value;
                }
                if (["unassisted tackles", "assisted tackles", "total tackles"].includes(stat.name)) {
                    acc.totalTackles += value;
                }
            });
        });

        return acc;
    }, {
        totalYards: 0,
        totalTouchdowns: 0,
        totalTackles: 0
    });
}




