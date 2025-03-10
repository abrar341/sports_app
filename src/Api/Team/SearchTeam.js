import api from '../api';

export const searchTeam = async (query, sportsName) => {
    try {
        const endpoint = sportsName === "soccer"
            ? `/soccer/team/searchTeam?query=${query}`
            : `/american-football/team/search?query=${query}`;
        const res = await api.get(endpoint);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getTeamProfile = async (teamId, sportsName) => {
    try {
        const endpoint = sportsName === "soccer"
            ? `/soccer/team/getTeambyTeamId?teamId=${teamId}`
            : `/american-football/team/getTeam?teamId=${teamId}`;

        const res = await api.get(endpoint);
        // /american-football/team/getTeam?teamId=1
        return res.data;
    } catch (error) {
        console.error("Error fetching team profile:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};

export const addFavoriteTeam = async (teamRef, teamId, sportName) => {

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

export const removeFavoriteTeam = async (teamRef, teamId, sportName) => {

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