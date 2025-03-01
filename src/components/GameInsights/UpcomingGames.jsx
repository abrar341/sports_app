import React, { useState, useEffect } from "react";
import Loading from "../Shared/Loading";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { AFupcomingFixtures } from "./AFupcomingFixtures";

export const formatDateTime = (isoString) => {

    const date = new Date(isoString);
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    };
    return date.toLocaleString("en-US", options).replace(",", " -");
};

export const UpcomingGames = ({ selectedGame }) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedLeague, setSelectedLeague] = useState(null);
    const pageSize = 5;

    const isSoccer = selectedGame === "soccer";

    const { upcomingFixtures, fixturesLoading } = useSelector((state) => state.fixtures);
    const { AFupcomingFixtures, AFfixturesLoading } = useSelector((state) => state.fixtures);
    // const { AFfixturesLoading } = useSelector((state) => state.fixtures);

    useEffect(() => {
        if (isSoccer && upcomingFixtures?.data?.length > 0) {
            setSelectedLeague(upcomingFixtures.data[0].leagueId);
        } else if (!isSoccer && AFupcomingFixtures?.data?.length > 0) {
            const firstLeague = AFupcomingFixtures.data
                .flatMap((league) => league.upcomingGames)
                .find((game) => game.league)?.league.leagueId;
            if (firstLeague) setSelectedLeague(firstLeague);
        }
    }, [isSoccer, upcomingFixtures, AFupcomingFixtures]);

    const handleGameClick = (leagueId, fixtureId, status) => {
        navigate(`/games-insight/${selectedGame}/${leagueId}/${status}/${fixtureId}`);
    };

    const leagues = isSoccer
        ? (Array.isArray(upcomingFixtures?.data)
            ? upcomingFixtures.data.map((league) => ({
                id: league.leagueId,
                name: league.leagueName,
            }))
            : [])
        : (Array.isArray(AFupcomingFixtures?.data)
            ? [
                ...new Map(
                    AFupcomingFixtures.data
                        .flatMap((league) => Array.isArray(league.upcomingGames) ? league.upcomingGames : []) // Ensure it's an array
                        .map((game) => [game.league.leagueId, { id: game.league.leagueId, name: game.league.name }])
                ).values(),
            ]
            : []);

    // Get fixtures for the selected league
    const selectedFixtures = isSoccer
        ? (Array.isArray(upcomingFixtures?.data)
            ? upcomingFixtures.data.find((league) => league.leagueId === selectedLeague)?.fixtures || []
            : [])
        : (Array.isArray(AFupcomingFixtures?.data)
            ? AFupcomingFixtures.data
                .flatMap((league) => Array.isArray(league.upcomingGames) ? league.upcomingGames : []) // Ensure it's an array
                .filter((game) => game.league.leagueId === selectedLeague)
            : []);


    const totalPages = Math.ceil(selectedFixtures.length / pageSize);
    const paginatedGames = selectedFixtures.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handleLeagueChange = (e) => {
        setSelectedLeague(Number(e.target.value));
        setCurrentPage(1);
    };

    return (
        <section className="w-full h-full max-md:max-w-full">
            <div className="flex justify-between">
                <h2 className="text-2xl flex items-center font-bold leading-none max-md:max-w-full text-white">
                    Upcoming {isSoccer ? "Soccer" : "American Football"} Games
                </h2>

                {/* League Selection Dropdown */}
                <div className="mt-4">
                    <select
                        value={selectedLeague || ""}
                        onChange={handleLeagueChange}
                        className="p-2 text-base bg-primarySolid text-white border-gray-300 rounded-lg focus:outline-none"
                    >
                        {leagues.map((league) => (
                            <option key={league.id} value={league.id}>
                                {league.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="mt-6 w-full text-lg text-center max-md:max-w-full">
                <div className="flex overflow-hidden flex-wrap gap-5 justify-between px-6 py-3 w-full text-2xl font-medium rounded-lg border border-solid bg-primarySolid border-white border-opacity-15 max-md:px-5 max-md:max-w-full text-white">
                    <div>Teams</div>
                    <div>Date/Time</div>
                </div>

                {(fixturesLoading || AFfixturesLoading) && paginatedGames.length === 0 ? (
                    <Loading />
                ) : paginatedGames.length > 0 ? (
                    paginatedGames.map((game, index) => (
                        <div
                            onClick={() =>
                                handleGameClick(
                                    selectedLeague,
                                    isSoccer ? game.fixtureId : game.gameId,
                                    "upcoming"
                                )
                            }
                            key={index}
                            className="flex items-center justify-between px-4 py-3 mt-2 w-full rounded-lg cursor-pointer bg-secondary border-white border-opacity-15 text-white shadow-md max-md:flex-col max-md:gap-2"
                        >
                            {/* Teams Section */}
                            <div className="flex items-center justify-center gap-4 w-full max-md:flex-col">
                                <div className="flex items-center justify-center gap-2 w-1/3 text-center max-md:w-full">
                                    <img
                                        src={isSoccer ? game.teams.home.logo : game.teams.home.logo}
                                        alt={isSoccer ? game.teams.home.name : game.teams.home.name}
                                        className="w-6 h-6 rounded-full"
                                    />
                                    <span className="font-semibold truncate">
                                        {isSoccer ? game.teams.home.name : game.teams.home.name}
                                    </span>
                                </div>
                                <div className="text-sm font-semibold w-1/3 text-center max-md:w-full">VS</div>
                                <div className="flex items-center justify-center gap-2 w-1/3 text-center max-md:w-full">
                                    <img
                                        src={isSoccer ? game.teams.away.logo : game.teams.away.logo}
                                        alt={isSoccer ? game.teams.away.name : game.teams.away.name}
                                        className="w-6 h-6 rounded-full"
                                    />
                                    <span className="font-semibold truncate">
                                        {isSoccer ? game.teams.away.name : game.teams.away.name}
                                    </span>
                                </div>
                            </div>

                            {/* Match DateTime */}
                            <div className="text-sm opacity-80 text-right w-1/3 max-md:w-full max-md:text-center">
                                {isSoccer ? formatDateTime(game.date) : formatDateTime(game.date.date)}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-white mt-4">No upcoming matches to show</p>
                )}

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-4">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-1 bg-blue-700 text-white rounded disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <span className="text-white">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-1 bg-blue-700 text-white rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};
