"use client";
import React, { useState, useEffect } from "react";
import Loading from "../Shared/Loading";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const LiveGames = () => {
    //soccer fixtures
    const { liveFixtures, fixturesLoading } = useSelector((state) => state.fixtures);

    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedLeague, setSelectedLeague] = useState(null);
    const pageSize = 5;

    useEffect(() => {
        if (liveFixtures?.data?.length > 0) {
            setSelectedLeague(liveFixtures.data[0].leagueId); // Set default league
        }
    }, [liveFixtures]);

    const handleGameClick = (leagueId, fixtureId, status) => {
        navigate(`/games-insight/${leagueId}/${status}/${fixtureId}`);
    };

    // Extract unique leagues
    const leagues = liveFixtures?.data?.map((league) => ({
        id: league.leagueId,
        name: league.leagueName,
    })) || [];

    // Get fixtures for selected league
    const selectedFixtures =
        liveFixtures?.data?.find((league) => league.leagueId === selectedLeague)?.fixtures || [];

    // Pagination logic
    const totalPages = Math.ceil(selectedFixtures.length / pageSize);
    const paginatedGames = selectedFixtures.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handleLeagueChange = (e) => {
        setSelectedLeague(Number(e.target.value));
        setCurrentPage(1); // Reset to first page when league changes
    };

    return (
        <section className="self-stretch h-full md:col-span-2 my-auto min-w-60 max-md:max-w-full">
            <div className="flex justify-between">
                <h2 className="text-2xl flex items-center font-bold leading-none max-md:max-w-full text-white">
                    Live Games
                </h2>

                {/* League Selection Dropdown */}
                {liveFixtures.length && <div className="mt-4">
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
                </div>}
            </div>

            <div className="mt-6 w-full text-lg max-md:max-w-full">
                <div className="flex overflow-hidden gap-5 justify-between px-4 py-3 w-full text-xl font-medium rounded-lg border border-solid bg-primarySolid border-white border-opacity-15 max-md:max-w-full text-white">
                    <div>Teams</div>
                    <div className="text-center">Time Left</div>
                    <div className="text-right">Current Score</div>
                </div>

                {fixturesLoading && paginatedGames.length === 0 && !liveFixtures.data ? (
                    <Loading />
                ) : paginatedGames.length > 0 ? (
                    paginatedGames.map((game, index) => (
                        <div
                            onClick={() => handleGameClick(selectedLeague, game.fixtureId, "live")}
                            key={index}
                            className="flex overflow-hidden gap-5 justify-between px-4 py-3 mt-2 w-full text-center rounded-lg border border-solid bg-secondary border-white border-opacity-15 max-md:max-w-full text-white cursor-pointer"
                        >
                            {/* Teams Section */}
                            <div className="flex items-center gap-4 w-1/3 max-md:w-full">
                                <div className="flex items-center gap-2 text-right w-full justify-end max-md:justify-center">
                                    <img src={game.teams.home.logo} alt={game.teams.home.name} className="w-7 h-7 rounded-full" />
                                    <span className="text-base font-semibold truncate">{game.teams.home.name}</span>
                                </div>

                                <div className="text-sm font-semibold w-auto text-center">VS</div>

                                <div className="flex items-center gap-2 text-left w-full justify-start max-md:justify-center">
                                    <img src={game.teams.away.logo} alt={game.teams.away.name} className="w-7 h-7 rounded-full" />
                                    <span className="text-base font-semibold truncate">{game.teams.away.name}</span>
                                </div>
                            </div>

                            {/* Time Left */}
                            <div className="text-base font-semibold w-1/3 text-center max-md:w-full">
                                {game.status.elapsed ? `${game.status.elapsed} min` : "Live"}
                            </div>

                            {/* Current Score */}
                            <div className="text-base font-semibold w-1/3 text-right max-md:w-full">
                                {game.goals.home ?? 0} - {game.goals.away ?? 0}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-white text-center mt-4">No live matches playing yet</p>
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
