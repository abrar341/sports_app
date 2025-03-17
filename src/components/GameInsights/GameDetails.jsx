import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatDateTime } from "./UpcomingGames";
import { getFixtureById } from "../../Api/Fixtures/get/fixtures";
import Loading from "../Shared/Loading";
import Summary from "./Summary";
import Odds from "./Odds";
import { AFupcomingFixtures } from "./AFupcomingFixtures";
// import { AFliveFixtures, liveFixtures } from "./live";

const GameDetails = () => {
    const { gameType, status, leagueId, fixtureId } = useParams();

    // Soccer data
    const { liveFixtures, upcomingFixtures, completedFixtures, fixturesLoading, AFfixturesLoading } = useSelector((state) => state.fixtures);

    // American Football data
    const { AFliveFixtures, AFcompletedFixtures } = useSelector((state) => state.fixtures);

    const [fixtureData, setFixtureData] = useState(null);
    const [detailsLoading, setDetailsLoading] = useState(false);

    let game = null;
    let league = null;

    // **Handling Soccer Logic 
    if (gameType === "soccer") {
        if (status === "live") {
            game = liveFixtures?.data?.find(fixture => fixture.fixture.id.toString() === fixtureId);
            league = game?.league || null;  // Avoid crash if game is undefined
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

        if (status === 'completed') {
            AFcompletedFixtures?.data?.forEach((leagueItem) => {
                const foundGame = leagueItem.completedGames.find(
                    (gameItem) => gameItem.league.leagueId.toString() === leagueId && gameItem.gameId.toString() === fixtureId
                );
                if (foundGame) {
                    game = foundGame;
                    league = foundGame.league;
                }
            });
        }
        else if (status === 'live') {
            AFliveFixtures?.data?.forEach((leagueItem) => {
                const foundGame = leagueItem.liveGames.find(
                    (gameItem) => gameItem.league.leagueId.toString() === leagueId && gameItem.gameId.toString() === fixtureId
                );
                if (foundGame) {
                    game = foundGame;
                    league = foundGame.league;
                }
            });
        }
        else if (status === 'upcoming') {
            AFupcomingFixtures?.data?.forEach((leagueItem) => {
                const foundGame = leagueItem.upcomingGames.find(
                    (gameItem) => gameItem.league.leagueId.toString() === leagueId && gameItem.gameId.toString() === fixtureId
                );
                if (foundGame) {
                    game = foundGame;
                    league = foundGame.league;
                }
            });
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

    if (fixturesLoading || AFfixturesLoading) return <div className="min-h-screen p-6 bg-primary">
        <Loading />
    </div>;
    if (!game) return <div className="bg-primary min-h-screen text-white p-6 text-center">Game not found</div>;
    return (
        <div className="bg-primary min-h-screen text-white p-6">
            {/* League & Round Info */}
            <div className="flex items-center gap-2 text-sm text-gray-300">
                {league?.country && <img src={league.country.flag || game.league.flag} alt={league.country.name || league} className="w-5 h-5" />}
                <span className="text-base font-semibold">{gameType === 'soccer' ? league?.leagueName || league.name : league?.name} - {game.week || game.league?.round}</span>
            </div>

            {/* Match Details */}
            <div className="flex flex-col mb-6 items-center justify-center mt-6">
                <p className="text-base font-semibold">{formatDateTime(gameType === 'soccer' ? game.date : game.date?.date || game.fixture?.date) || ""}</p>
                {game.venue && <p className="text-sm text-gray-300 mt-1">{game.venue.name || "Unknown"} - {game.venue.city || "Unknown"}</p>}
                {status === "live" && <p className="className=" text-base font-semibold>{gameType === 'soccer' && game.fixture.status.elapsed + " min"}</p>}
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

            {/* Match Summary for Completed Games */}
            {
                detailsLoading ? (
                    <Loading />
                ) : (
                    status === "completed" &&
                    (gameType === "soccer"
                        ? fixtureData && (
                            <Summary
                                leagueId={leagueId}
                                fixtureId={fixtureId}
                                detailsLoading={detailsLoading}
                                events={fixtureData.events}
                                teams={fixtureData.teams}
                                score={fixtureData.score}
                                status={fixtureData.status}
                            />
                        )
                        : gameType === "american-football" && (
                            <Summary
                                leagueId={leagueId}
                                fixtureId={fixtureId}
                                teams={gameType === 'soccer' ? fixtureData.teams : game.teams}
                                score={gameType === 'soccer' ? fixtureData.score : game.scores}
                                status={gameType === 'soccer' ? fixtureData.status : game.status}
                            />
                        ))
                )
            }

            {/* Betting Odds for Upcoming Games */}
            {status !== "completed" && <Odds leagueId={leagueId} fixtureId={fixtureId} />}
        </div >
    );
};

export default GameDetails;
