import api from "../../api";

//Soccer
export const getUpcomingFixtures = async () => {
    try {
        const res = await api.get("/soccer/fixtures/upcoming");
        return res.data;
    } catch (error) {
        console.error("Error fetching upcoming fixtures:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};

export const getLiveFixtures = async () => {
    try {
        const res = await api.get("/soccer/fixtures/live");
        return res.data;
    } catch (error) {
        console.error("Error fetching live fixtures:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};

export const getCompletedFixtures = async () => {
    try {
        const res = await api.get("/soccer/fixtures/completed");
        return res.data;
    } catch (error) {
        console.error("Error fetching completed fixtures:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};

export const getUpcomingFixturesOdds = async () => {
    try {
        const res = await api.get("/soccer/odds/upcoming-fixtures-odds");
        return res.data;
    } catch (error) {
        console.error("Error fetching upcoming fixtures odds:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};

export const getFixtureById = async (fixtureId) => {
    try {
        const res = await api.get(`/soccer/fixtures/fixtureById`, {
            params: { fixtureId }
        });
        return res.data;
    } catch (error) {
        console.error("Error fetching fixture:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};

//AmericanFootall
export const getAFUpcomingFixtures = async () => {
    try {
        const res = await api.get("/american-football/games/upcoming");
        return res.data;
    } catch (error) {
        console.error("Error fetching American Football upcoming fixtures:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};

export const getAFLiveFixtures = async () => {
    try {
        const res = await api.get("/american-football/games/live");
        return res.data;
    } catch (error) {
        console.error("Error fetching American Football live fixtures:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};

export const getAFCompletedFixtures = async () => {
    try {
        const res = await api.get("/american-football/games/completed");
        return res.data;
    } catch (error) {
        console.error("Error fetching American Football completed fixtures:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};


export const getOddsByFixtureId = async (fixtureId) => {
    try {
        const res = await api.get(`/soccer/odds/oddsByFixtureId?fixtureId=${fixtureId}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching odds by fixture ID:", error);
        return null; // Return null to handle errors gracefully in the UI
    }
};


