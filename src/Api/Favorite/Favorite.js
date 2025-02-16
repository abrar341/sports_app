import api from "../api";

export const getFavouriteHighlights = async (sportName) => {
    try {
        const res = await api.get(`/favourites/getFavouriteHighlights?sportName=${sportName}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching favourite highlights:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};
