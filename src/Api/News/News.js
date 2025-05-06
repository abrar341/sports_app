import api from "../api";

export const getSoccerNews = async (page, limit) => {
    try {
        const res = await api.get(`/soccer/news/soccerNews?page=${page}&limit=${limit}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching soccer news:", error);
        return null;
    }
};
export const getAmericanFootballNews = async (page, limit) => {
    try {
        const res = await api.get(`americanFootball/news/americanFootballNews?page=${page}&limit=${limit}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching soccer news:", error);
        return null;
    }
};

// http://localhost:3000/api/v1/americanFootball/news/americanFootballNews?page=1&limit=10