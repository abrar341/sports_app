export const normalizeSearchPlayerData = (player, sport) => {
    if (sport === "soccer") {
        return {
            playerId: player?.player?.id || "Unknown",
            name: player?.player?.name || "Unknown",
            image: player?.player?.photo || "https://via.placeholder.com/40",
            nationality: player?.player?.nationality || "Unknown",
            position: player?.player?.position || "Unknown",
            sportName: "soccer"
        };
    } else if (sport === "american-football") {
        return {
            playerId: player?.playerId || "Unknown",
            name: player?.name || "Unknown",
            image: player?.image || "https://via.placeholder.com/40",
            nationality: "N/A", // No nationality field in American football data
            position: player?.position || "Unknown",
            sportName: "american-football"

        };
    }
    return null;
};

export const normalizeSearchTeamData = (team, sport) => {
    if (sport === "soccer") {
        return {
            teamId: team.teamId,
            name: team.name,
            logo: team.logo,
        };
    } else if (sport === "american-football") {
        return {
            teamId: team.teamId,
            name: team.name,
            logo: team.logo,
        };
    }
    return null;
};


export const normalizeSelectedPlayerData = (playerData, sport) => {
    if (!playerData) return null;

    // Define different field mappings for each sport
    const sportMappings = {
        soccer: {
            playerId: ["playerId"],
            playerRef: ["_id"],
            name: ["name"],
            age: ["age"],
            nationality: ["nationality"],
            position: ["position"],
            image: ["photo"],
            sportName: "soccer"
        },
        americanfootball: {
            playerId: ["playerId"],
            playerRef: ["_id"],
            name: ["name"],
            age: ["age"],
            position: ["position"],
            nationality: ["nationality"],
            image: ["image"],  // Uses "logo" instead of "image"
            college: ["college"],  // Uses "logo" instead of "image"
            sportName: "american-footaball"
        },
    };

    // Get the specific field mapping for the sport
    // Format sport name to match keys in sportMappings
    const formattedSport = sport.replace("-", ""); // Converts "american-football" to "americanFootball"
    const mapping = sportMappings[formattedSport];
    if (!mapping) return null;

    // Helper function to get the correct value from multiple possible keys
    const getValue = (keys, defaultValue = "") => {
        if (!keys) return defaultValue;
        for (const key of keys) {
            if (playerData[key] !== undefined) {
                return playerData[key];
            }
        }
        return defaultValue;
    };

    // Build the normalized player object dynamically
    const normalizedPlayer = Object.keys(mapping).reduce((acc, field) => {
        if (typeof mapping[field] === "object" && !Array.isArray(mapping[field])) {
            // Handle stats separately
            acc[field] = Object.keys(mapping[field]).reduce((statsAcc, statField) => {
                statsAcc[statField] = getValue(mapping[field][statField], 0);
                return statsAcc;
            }, {});
        } else {
            acc[field] = getValue(mapping[field], field === "age" ? 0 : "Unknown");
        }
        return acc;
    }, {});

    normalizedPlayer.sportName = sport;


    return normalizedPlayer;
};


export const normalizeSelectedTeamData = (teamData, sport) => {
    if (!teamData) return null;

    // Define different field mappings for each sport
    const sportMappings = {
        soccer: {
            teamId: ["teamId"],
            teamRef: ["_id"],
            name: ["name"],
            code: ["code"],
            country: ["country"],
            founded: ["founded"],
            logo: ["logo"],
            city: ["venue.city"],
            venueName: ["venue.name"],
            capacity: ["venue.capacity"],
            surface: ["venue.surface"],
        },
        americanfootball: {
            teamId: ["teamId"],
            teamRef: ["_id"],
            name: ["name"],
            code: ["code"],
            country: ["country.name"],
            founded: ["established"],
            logo: ["logo"],
            venueName: ["stadium"],
            coach: ["coach"],
            city: ["city"],
            owner: ["owner"],
        },
    };

    // Format sport name to match keys in sportMappings
    const formattedSport = sport.replace("-", ""); // Converts "american-football" to "americanFootball"
    const mapping = sportMappings[formattedSport];
    if (!mapping) return null;

    // Helper function to get the correct value from multiple possible keys
    const getValue = (keys, defaultValue = "") => {
        if (!keys) return defaultValue;

        for (const key of keys) {
            // Handle nested keys like "venue.name"
            const value = key.split('.').reduce((obj, k) => obj?.[k], teamData);
            if (value !== undefined) return value;
        }
        return defaultValue;
    };


    const normalizedTeam = Object.keys(mapping).reduce((acc, field) => {
        if (typeof mapping[field] === "object" && !Array.isArray(mapping[field])) {
            // Handle nested objects separately
            acc[field] = Object.keys(mapping[field]).reduce((statsAcc, statField) => {
                statsAcc[statField] = getValue(mapping[field][statField], 0);
                return statsAcc;
            }, {});
        } else {
            acc[field] = getValue(mapping[field], "Unknown");
        }
        return acc;
    }, {});

    // ✅ Set sportName dynamically based on the input parameter
    normalizedTeam.sportName = sport;

    return normalizedTeam;
};


