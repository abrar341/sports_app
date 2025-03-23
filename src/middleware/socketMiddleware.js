import { io } from "socket.io-client";
import { setAFLiveFixtures, setAFUpcomingFixtures, setLiveFixtures, setUpcomingFixtures } from "../slices/fixturesSlice";
import { SOCKET_URL } from "../utils/constants";

let socket = null;

export const socketMiddleware = (store) => (next) => (action) => {
    if (!socket) {
        socket = io(SOCKET_URL);

        socket.on("upcomingFixtures", (data) => {
            store.dispatch(setUpcomingFixtures(data));
        });

        socket.on("americanFootballUpcomingGames", (data) => {
            store.dispatch(setAFUpcomingFixtures(data));
        });

        socket.on("liveFixtures", (data) => {
            console.log("data", data);

            store.dispatch(setLiveFixtures(data));
        });

        socket.on("americanFootballLiveGames", (data) => {
            store.dispatch(setAFLiveFixtures(data));
        });

        console.log("Socket connected and listening for updates...");
        console.log("socket Connected", socket.connected);

    }

    return next(action);
};
