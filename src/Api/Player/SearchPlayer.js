import api from '../api';

export const searchPlayer = async (query, sportsName) => {
    try {
        const endpoint = sportsName === "soccer"
            ? `/soccer/player/searchPlayer?query=${query}`
            : `/american-football/player/search?query=${query}`;

        const res = await api.get(endpoint);
        return res.data;
    } catch (error) {
        console.error("Error fetching player data:", error);
        return null; // Returning null to handle errors gracefully
    }
};

export const getPlayerProfile = async (playerId) => {
    try {
        const res = await api.get(`/soccer/player/getPlayerProfile?playerId=${playerId}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching player profile:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};

export const addFavoritePlayer = async (playerRef, playerId, sportName) => {
    try {
        const res = await api.post('/favourites/addPlayer', {
            playerRef,
            playerId,
            sportName
        });
        return res.data;
    } catch (error) {
        console.error("Error adding favorite player:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};

export const removeFavoritePlayer = async (playerRef, playerId, sportName) => {
    try {
        const res = await api.delete(`/favourites/removePlayer`, {
            params: { playerRef, playerId, sportName } // Send params in the URL
        });
        return res.data;
    } catch (error) {
        console.error("Error removing favorite player:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};

export const getPlayerAggregatedStats = async (playerId) => {
    try {
        const res = await api.get(`/soccer/player/getPlayerAggregatedStats`, {
            params: { playerId }
        });
        return res.data;
    } catch (error) {
        console.error("Error fetching player aggregated stats:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};

export const getFavourites = async (sports) => {
    try {
        const res = await api.get(`/favourites/getFavourites/?sportName=${sports}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

//american footaball player detail
export const getAmericanFootballPlayer = async (playerId) => {
    try {
        const res = await api.get(`/american-football/player/getPlayer?playerId=${playerId}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching American football player profile:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};



