import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { formatDateTime } from "./UpcomingGames";
import { getFixtureById } from "../../Api/Fixtures/get/fixtures";
import Loading from "../Shared/Loading";
import { fetchUpcomingAFFixturesPredictions, fetchUpcomingFixturesPredictions } from "../../slices/predictionSlice";
// import { socket } from "../../middleware/socketMiddleware";
// import { AFliveFixtures } from "./live";

const GameDetails = () => {
    const { gameType, status, leagueId, fixtureId } = useParams();
    const { upcomingFixtures, completedFixtures, fixturesLoading, AFfixturesLoading } = useSelector((state) => state.fixtures);
    const { AFcompletedFixtures, liveFixtures, AFliveFixtures } = useSelector((state) => state.fixtures);
    const upcomingFixturesPredictions = useSelector((state) => state.prediction.upcomingFixturesPredictions);
    const AFupcomingFixturesPredictions = useSelector((state) => state.prediction.AFupcomingFixturesPredictions);
    const { predictionLoading } = useSelector((state) => state.prediction);

    const [fixtureData, setFixtureData] = useState(null);
    const [detailsLoading, setDetailsLoading] = useState(false);
    const dispatch = useDispatch()


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [fixtureId]);

    let game = null;
    let league = null;

    // **Handling Soccer Logic**
    if (gameType === "soccer") {
        if (status === "live") {
            game = liveFixtures?.data?.find(fixture => fixture.fixture.id.toString() === fixtureId);
            league = game?.league || null;

        } else {
            const fixtureList =
                status === "upcoming"
                    ? upcomingFixtures?.data
                    : status === "completed"
                        ? completedFixtures?.data
                        : null;
            if (fixtureList) {
                league = fixtureList.find(lg => lg.leagueId.toString() === leagueId);
                game = league?.fixtures?.find(fixture => fixture.fixtureId.toString() === fixtureId);
            }
        }
    }

    // **Handling American Football Logic**
    if (gameType === "american-football") {
        const findGame = (fixtureList) => {
            fixtureList?.data?.forEach((leagueItem) => {
                const foundGame = (status === "live"
                    ? leagueItem?.liveGames
                    : status === "completed" ? leagueItem?.completedGames
                        : leagueItem?.upcomingGames
                )?.find(
                    (gameItem) => gameItem.league.leagueId.toString() === leagueId && gameItem.gameId.toString() === fixtureId
                );

                if (foundGame) {
                    game = foundGame;
                    league = foundGame.league;
                }
            });
        };

        if (status === 'completed') {
            findGame(AFcompletedFixtures);
        } else if (status === 'live') {
            findGame(AFliveFixtures);
        }
    }

    // **Fetching Detailed Data for Soccer Completed Games**
    useEffect(() => {
        if (status === "completed" && gameType === "soccer" && fixtureId) {
            setDetailsLoading(true);
            getFixtureById(fixtureId)
                .then(response => setFixtureData(response.data))
                .catch(error => console.error("Error fetching fixture data:", error))
                .finally(() => setDetailsLoading(false));
        }
    }, [status, fixtureId, gameType]);

    useEffect(() => {
        if (gameType === "soccer") {
            if (upcomingFixturesPredictions.length) return;
            dispatch(fetchUpcomingFixturesPredictions());
        } else {
            if (AFupcomingFixturesPredictions.length) return;
            dispatch(fetchUpcomingAFFixturesPredictions());
        }
    }, [status, fixtureId, gameType]);

    if (fixturesLoading || AFfixturesLoading || predictionLoading) return <div className="min-h-screen p-6 bg-primary"><Loading /></div>;
    if (!game) return <div className="bg-primary min-h-screen text-white p-6 text-center">Game not found</div>;

    // console.log("Socket Connected", socket.connected)
    // console.log("game.score", fixtureData?.score);

    return (
        <div className="bg-primary min-h-screen text-white px-5 py-6 sm:p-6">
            {/* League & Round Info */}
            <div className="flex items-center gap-2 text-sm text-gray-300">
                {league?.country && <img src={league.country.flag || game.league.flag} alt={league.country.name || league} className="w-5 h-5" />}
                <span className="text-base font-semibold">{gameType === 'soccer' ? league?.leagueName || league.name : league?.name} - {game.week || game.league?.round}</span>
            </div>

            {/* Match Details */}
            <div className="flex flex-col mb-6 items-center justify-center mt-6">
                <p className="text-base font-semibold">{formatDateTime(gameType === 'soccer' ? game.date : game.date?.date || game.fixture?.date) || ""}</p>
                {game.venue && <p className="text-sm text-gray-300 mt-1">{game.venue.name || "Unknown"} - {game.venue.city || "Unknown"}</p>}
                {status === "live" && <p className="text-base font-semibold">{gameType === 'soccer' && game.fixture.status.elapsed + " min"}</p>}
                <div className="flex items-center gap-8 mt-4">
                    <div className="flex flex-col items-center">
                        <img src={game.teams.home.logo} alt={game.teams.home.name} className="w-20 h-20" />
                        <p className="font-semibold text-lg mt-2">{game.teams.home.name}</p>
                    </div>
                    <div className="text-xl font-bold">
                        {gameType === "soccer"
                            ? game.goals?.home !== null && game.goals?.away !== null
                                ? `${game.goals.home} - ${game.goals.away}`
                                : "-"
                            : `${game.scores.home.total || ""} - ${game.scores.away.total || ""}`}
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={game.teams.away.logo} alt={game.teams.away.name} className="w-20 h-20" />
                        <p className="font-semibold text-lg mt-2">{game.teams.away.name}</p>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <div className="flex border-gray-500 pb-1 justify-start gap-3 my-4">
                {(status === "completed" || status === "live") && <NavLink
                    to="summary"
                    className={({ isActive }) =>
                        `px-1 pb-2 text-base text-white ${isActive ? "border-b-2 font-semibold border-white" : "bg-searchBarB"}`
                    }
                >
                    {status === "live" ? "Live Score" : "Match Summary"}

                </NavLink>}

                {(status === "live" && gameType === 'soccer') && (
                    <NavLink
                        to="stats"
                        className={({ isActive }) =>
                            `px-1 pb-2 text-base text-white ${isActive ? "border-b-2 font-semibold border-white" : "bg-searchBarB"}`
                        }
                    >
                        Stats
                    </NavLink>
                )}


                {status !== "completed" && (
                    <NavLink
                        to="odds"
                        className={({ isActive }) =>
                            `px-1 pb-2 text-base text-white ${isActive ? "border-b-2 font-semibold border-white" : "bg-searchBarB"}`
                        }
                    >
                        Betting Odds
                    </NavLink>
                )}

                {status !== "completed" && (
                    <NavLink
                        to="prediction"
                        className={({ isActive }) =>
                            `px-1 pb-2 text-base text-white ${isActive ? "border-b-2 font-semibold border-white" : "bg-searchBarB"}`
                        }
                    >
                        Prediction
                    </NavLink>
                )}

            </div>


            {/* Render Nested Routes */}
            <Outlet context={{
                leagueId,
                fixtureId,
                detailsLoading,
                events: gameType === "soccer" && (game.events || fixtureData?.events),
                teams: game.teams || fixtureData?.teams,
                score: gameType !== 'soccer' ? game.scores : (game.score || fixtureData?.score),
                goals: game.goals || fixtureData?.goals,
                status: fixtureData?.status || game.status,
                statistics: game.statistics
            }} />
        </div>
    );
};

export default GameDetails;
