import api from '../api';

export const searchTeam = async (query) => {
    try {
        const res = await api.get(`/soccer/team/searchTeam?query=${query}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getTeamProfile = async (teamId) => {
    try {
        const res = await api.get(`/soccer/team/getTeambyTeamId?teamId=${teamId}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching team profile:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};

export const addFavoriteTeam = async (teamRef, teamId) => {
    const sportName = "soccer"
    try {
        const res = await api.post('/favourites/addTeam', {
            teamRef,
            teamId,
            sportName
        });
        return res.data;
    } catch (error) {
        console.error("Error adding favorite player:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};

export const removeFavoriteTeam = async (teamRef, teamId) => {
    const sportName = "soccer"

    try {
        const res = await api.delete('/favourites/removeTeam', {
            params: { teamRef, teamId, sportName } // Send params in the URL
        });
        return res.data;
    } catch (error) {
        console.error("Error removing favorite team:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};