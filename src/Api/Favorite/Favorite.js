import api from "../api";

export const getFavouriteHighlights = async (sportName) => {
    try {
        // const sport = "soccer"
        const res = await api.get(`/favourites/getFavouriteHighlights?sportName=soccer`);
        return res.data;
    } catch (error) {
        console.error("Error fetching favourite highlights:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};
