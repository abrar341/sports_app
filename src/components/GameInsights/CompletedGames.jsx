import React, { useState, useEffect } from "react";
import { formatDateTime } from "./UpcomingGames";
import Loading from "../Shared/Loading";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { EmptyState } from "../Shared/EmptyState";
import { FaRegSadTear } from "react-icons/fa";

export const CompletedGames = ({ selectedGame }) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedLeague, setSelectedLeague] = useState(null);
    // Fetch completed fixtures from Redux store
    // console.log("selectedLeague", selectedLeague);

    //soccer
    const { completedFixtures, fixturesLoading } = useSelector((state) => state.fixtures); // Soccer
    //american-football
    const { AFcompletedFixtures, AFfixturesLoading } = useSelector((state) => state.fixtures); // American Football

    const isSoccer = selectedGame === "soccer";
    const fixturesData = isSoccer ? completedFixtures : AFcompletedFixtures;
    const loading = isSoccer ? fixturesLoading : AFfixturesLoading;
    const pageSize = 5;

    // Extract leagues from the dataset
    const leagues = fixturesData?.data?.map((league) => ({
        id: isSoccer ? league.leagueId : league.leagueName, // Different structures
        name: isSoccer ? league.leagueName : league.leagueName,
    })) || [];
    // console.log("leagues", leagues);
    console.log("leagues", leagues);

    useEffect(() => {
        if (fixturesData?.data?.length > 0) {
            setSelectedLeague(isSoccer ? fixturesData.data[0].leagueId : fixturesData.data[0].leagueName);
        }
    }, [fixturesData, selectedGame]);

    // Get fixtures based on selected league
    const selectedFixtures = fixturesData?.data?.find((league) =>
        isSoccer ? Number(league.leagueId) === Number(selectedLeague) : league.leagueName === selectedLeague
    );
    // console.log("selectedFixtures", selectedFixtures);

    // Extract games properly
    const games = isSoccer ? selectedFixtures?.fixtures || [] : selectedFixtures?.completedGames || [];

    // Pagination logic
    const totalPages = Math.ceil(games.length / pageSize);
    const paginatedGames = games.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handleGameClick = (leagueId, fixtureId, status) => {
        navigate(`/games-insight/${selectedGame}/${leagueId}/${status}/${fixtureId}`);
    };

    const handleLeagueChange = (e) => {
        setSelectedLeague(e.target.value);
        setCurrentPage(1); // Reset to first page when league changes
    };

    return (
        <section className="mt-6 h-full w-full min-h-[270px] max-md:max-w-full">
            <div className="flex justify-between">
                <h2 className="text-2xl flex items-center font-bold leading-none max-md:max-w-full text-white">
                    Completed {isSoccer ? "Soccer" : "American Football"} Games
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
                    <div>Score</div>
                    <div>Date</div>
                </div>
                {(fixturesLoading || AFfixturesLoading) && (!completedFixtures.data || !AFcompletedFixtures.data) ? (
                    <Loading />

                ) : paginatedGames.length > 0 ? (
                    paginatedGames.map((game, index) => (
                        <div
                            onClick={() => handleGameClick(isSoccer ? selectedLeague : game.league.leagueId, game.gameId || game.fixtureId, "completed")}
                            key={index}
                            className="flex items-center cursor-pointer justify-between gap-5 px-4 py-3 mt-2 w-full rounded-lg border border-solid bg-secondary border-white border-opacity-15 max-md:flex-col text-white"
                        >
                            {/* Teams Section */}
                            <div className="flex items-center gap-4 w-1/3 max-md:w-full">
                                <div className="flex items-center  gap-2 text-right w-full  max-md:justify-center">
                                    <img src={game.teams.home.logo} alt={game.teams.home.name} className="w-7 h-7 rounded-full" />
                                    <span className="text-base font-semibold truncate">{game.teams.home.name}</span>
                                </div>

                                <div className="text-sm font-semibold w-auto text-center">VS</div>

                                <div className="flex items-center gap-2 text-left w-full justify-start max-md:justify-center">
                                    <img src={game.teams.away.logo} alt={game.teams.away.name} className="w-7 h-7 rounded-full" />
                                    <span className="text-base font-semibold truncate">{game.teams.away.name}</span>
                                </div>
                            </div>

                            {/* Score Section */}
                            <div className="text-base font w-1/3 text-center max-md:w-full">
                                {isSoccer
                                    ? `${game.goals.home ?? 0} - ${game.goals.away ?? 0}`
                                    : `${game.scores.home.total ?? 0} - ${game.scores.away.total ?? 0}`}
                            </div>

                            {/* Date Section */}
                            <div className="text-sm w-1/3 text-right max-md:text-center max-md:w-full">
                                {isSoccer ? formatDateTime(game.date) : formatDateTime(game.date.date)}
                            </div>
                        </div>
                    ))
                ) : (
                    <EmptyState icon={FaRegSadTear} message="No completed matches to show" />
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
