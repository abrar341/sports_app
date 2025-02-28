import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatDateTime } from "./UpcomingGames";
import { getFixtureById } from "../../Api/Fixtures/get/fixtures";
import Summary from "./Summary";
import Loading from "../Shared/Loading";
import Odds from "./Odds";

const GameDetails = () => {
    const { status, leagueId, fixtureId } = useParams();
    const { upcomingFixtures, liveFixtures, completedFixtures } = useSelector((state) => state.fixtures);
    const [fixtureData, setFixtureData] = useState(null);
    const [detailsLoading, setDetailsLoading] = useState(false);

    // Determine the correct fixture list
    const fixtureList = status === "upcoming" ? upcomingFixtures.data :
        status === "live" ? liveFixtures.data :
            completedFixtures.data;

    // Find the correct league
    const league = fixtureList?.find((league) => league.leagueId.toString() === leagueId);
    const game = league?.fixtures?.find(fixture => fixture.fixtureId.toString() === fixtureId);

    useEffect(() => {
        if (status === "completed" && fixtureId) {
            setDetailsLoading(true); // Start loading

            getFixtureById(fixtureId)
                .then(response => setFixtureData(response.data))
                .catch(error => console.error("Error fetching fixture data:", error))
                .finally(() => setDetailsLoading(false)); // Stop loading
        }
    }, [status, fixtureId]);


    if (!game) return <div className="bg-primary min-h-screen text-white p-6 text-center text-white">Game not found</div>;

    return (
        <div className="bg-primary min-h-screen text-white p-6">
            {/* League & Round Info */}
            <div className="flex items-center gap-2 text-sm text-gray-300">
                {game.league.flag && <img src={game.league.flag} alt={game.league.country} className="w-5 h-5" />}
                <span className="text-base font-semibold">{game.league.name} - {game.league.round}</span>
            </div>

            {/* Match Details */}
            <div className="flex flex-col mb-6 items-center justify-center mt-6">
                <p className="text-base font-semibold">{formatDateTime(game.date)}</p>
                {game.venue && <p className="text-sm text-gray-300 mt-1">{game.venue.name} - {game.venue.city}</p>}

                <div className="flex items-center gap-8 mt-4">
                    <div className="flex flex-col items-center">
                        <img src={game.teams.home.logo} alt={game.teams.home.name} className="w-20 h-20" />
                        <p className="font-semibold text-lg mt-2">{game.teams.home.name}</p>
                    </div>
                    <div className="text-xl font-bold">
                        {game.goals?.home !== null && game.goals?.away !== null
                            ? `${game.goals.home} - ${game.goals.away}`
                            : "-"}
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={game.teams.away.logo} alt={game.teams.away.name} className="w-20 h-20" />
                        <p className="font-semibold text-lg mt-2">{game.teams.away.name}</p>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            {/* <div className="flex justify-center mt-6  border-gray-500">
                {['SUMMARY', 'ODDS'].map((tab, index) => (
                    <button key={index} className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white border-b-2 border-transparent hover:border-white">
                        {tab}
                    </button>
                ))}
            </div> */}

            {/* Render Summary if status is completed */}
            {detailsLoading ? <Loading /> :
                status === "completed" && fixtureData && !detailsLoading && <Summary detailsLoading={detailsLoading} events={fixtureData.events} teams={fixtureData.teams} score={fixtureData.score} status={fixtureData.status} />}
            {status === "upcoming" && <Odds leagueId={league} fixtureId={fixtureId} />}
        </div>

    );
};

export default GameDetails;
