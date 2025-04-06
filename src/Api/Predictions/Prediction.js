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

export const getAllUpcomingAFPredictions = async () => {
    try {
        const res = await api.get(`/american-football/AI/upcoming-predictions`);
        return res.data;
    } catch (error) {
        console.error("Error fetching upcoming football predictions:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};

// export const getAllUpcomingFixturesPredictions = async () => {
//     try {
//         const res = await fetch("http://localhost:3000/api/v1/soccer/AI/allUpcomingFixturesPredictions");
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         console.error("Error fetching upcoming fixtures predictions:", error);
//         return null;
//     }
// };

// export const getAllUpcomingAFPredictions = async () => {
//     try {
//         const res = await fetch("http://localhost:3000/api/v1/american-football/AI/upcoming-predictions");
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         console.error("Error fetching upcoming football predictions:", error);
//         return null;
//     }
// };
