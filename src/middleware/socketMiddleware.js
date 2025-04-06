import { io } from "socket.io-client";
import { setAFLiveFixtures, setAFUpcomingFixtures, setLiveFixtures, setUpcomingFixtures } from "../slices/fixturesSlice";
import { SOCKET_URL } from "../utils/constants";
import { setUpcomingFixturesPredictions } from "../slices/predictionSlice";

export let socket = null;

export const socketMiddleware = (store) => (next) => (action) => {
    if (!socket) {
        socket = io(SOCKET_URL);

        console.log("Socket Connected", socket.connected);

        socket.on("connect", () => {
            console.log("Socket Connected", socket.connected)
            console.log("Socket connected and listening for updates...");
        });

        socket.on("connect_error", (err) => {
            console.log("Socket Connection Error");
        });

        socket.on("disconnect", (reason) => {
            console.log("Socket Disconnected");
        });

        socket.on("upcomingFixtures", (data) => {
            console.log("upcomingFixtures", data);
            store.dispatch(setUpcomingFixtures(data));
        });

        socket.on("americanFootballUpcomingGames", (data) => {
            console.log("americanFootballUpcomingGames", data);
            store.dispatch(setAFUpcomingFixtures(data));
        });

        socket.on("liveFixtures", (data) => {
            console.log("liveFixtures", data);
            store.dispatch(setLiveFixtures(data));
        });

        socket.on("americanFootballLiveGames", (data) => {
            console.log("americanFootballLiveGames", data);
            store.dispatch(setAFLiveFixtures(data));
        });

        socket.on("SoccerUpcomingFixturesAIPredictions", (data) => {
            console.log("prediction data", data);
            store.dispatch(setUpcomingFixturesPredictions(data.data));
        });

    }

    return next(action);
};
