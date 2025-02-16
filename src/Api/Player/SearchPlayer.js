import api from '../api';

export const searchPlayer = async (query) => {
    try {
        const res = await api.get(`/soccer/player/searchPlayer?query=${query}`);
        return res.data;
    } catch (error) {
        console.log(error);
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

export const addFavoritePlayer = async (playerRef, playerId) => {
    try {
        const res = await api.post('/favourites/addPlayer', {
            playerRef,
            playerId,
            sportName: "soccer"
        });
        return res.data;
    } catch (error) {
        console.error("Error adding favorite player:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};

export const removeFavoritePlayer = async (playerRef, playerId) => {
    try {
        const sportName = "soccer";
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


export const getFavourites = async () => {
    try {
        const res = await api.get(`/favourites/getFavourites`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};




