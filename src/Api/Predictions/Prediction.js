import api from "../api";

export const getAllUpcomingFixturesPredictions = async () => {
    try {
        const res = await api.get(`/soccer/AI/allUpcomingFixturesPredictions`);
        return res.data;
    } catch (error) {
        console.error("Error fetching upcoming fixtures predictions:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};
