import React, { useState, useEffect } from "react";
import Loading from "../Shared/Loading";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { EmptyState } from "../Shared/EmptyState";
import { FaRegSadTear } from "react-icons/fa";
// import { liveFixtures } from "./live";

export const LiveGames = ({ selectedGame }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLeague, setSelectedLeague] = useState(null);
  const pageSize = 5;

  // Determine if it's soccer or American-football
  const isSoccer = selectedGame === "soccer";

  const { fixturesLoading } = useSelector((state) => state.fixtures);
  const { AFliveFixtures, AFfixturesLoading, liveFixtures } = useSelector(
    (state) => state.fixtures
  );

  // Update selectedLeague when the game type changes
  useEffect(() => {
    if (isSoccer && liveFixtures?.data?.length > 0) {
      setSelectedLeague(liveFixtures.data[0].league.id);
    } else if (!isSoccer && AFliveFixtures?.data?.length > 0) {
      const firstLeague = AFliveFixtures.data.find(
        (league) => league.liveGames.length > 0
      )?.liveGames[0]?.league.leagueId;
      if (firstLeague) setSelectedLeague(firstLeague);
    }
  }, [selectedGame, liveFixtures, AFliveFixtures]); // Now listens to `selectedGame` changes

  // Extract unique leagues
  const leagues = isSoccer
    ? Array.isArray(liveFixtures?.data)
      ? liveFixtures.data
          .map((match) => ({
            id: match.league.id,
            name: match.league.name,
          }))
          .filter(
            (league, index, self) =>
              index === self.findIndex((l) => l.id === league.id)
          )
      : []
    : Array.isArray(AFliveFixtures?.data)
    ? [
        ...new Map(
          AFliveFixtures.data
            .flatMap((league) =>
              Array.isArray(league.liveGames) ? league.liveGames : []
            ) // Ensure liveGames is an array
            .map((game) => [
              game.league.leagueId,
              { id: game.league.leagueId, name: game.league.name },
            ])
        ).values(),
      ]
    : [];

  // Get fixtures for the selected league
  const selectedFixtures = isSoccer
    ? Array.isArray(liveFixtures?.data)
      ? liveFixtures.data.filter((match) => match.league.id === selectedLeague)
      : []
    : Array.isArray(AFliveFixtures?.data)
    ? AFliveFixtures.data
        .flatMap((league) =>
          Array.isArray(league.liveGames) ? league.liveGames : []
        ) // Ensure liveGames is an array
        .filter((game) => game.league.leagueId === selectedLeague)
    : [];

  // Pagination logic
  const totalPages = Math.ceil(selectedFixtures.length / pageSize);
  const paginatedGames = selectedFixtures.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Change league & reset page only when league changes
  const handleLeagueChange = (e) => {
    const newLeague = Number(e.target.value);
    if (newLeague !== selectedLeague) {
      setSelectedLeague(newLeague);
      setCurrentPage(1);
    }
  };
  const handleGameClick = (leagueId, fixtureId, status, goto) => {
    navigate(
      `/games-insight/${selectedGame}/${leagueId}/${status}/${fixtureId}/${goto}`
    );
  };

  return (
    <section className="self-stretch  h-full md:col-span-2 my-auto min-w-60 max-md:max-w-full">
      <div className="flex justify-between">
        <h2 className="text-2xl flex h-full items-center font-bold leading-none max-md:max-w-full text-white">
          Live {isSoccer ? "Soccer" : "Football"} Games
        </h2>

        {/* League Selection Dropdown */}
        {leagues.length > 0 && (
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
        )}
      </div>

      <div className="mt-6 w-full text-lg max-md:max-w-full">
        <div className="flex overflow-hidden gap-5 justify-between px-4 py-3 w-full text-xl font-medium rounded-lg border border-solid bg-primarySolid border-white border-opacity-15 max-md:max-w-full text-white">
          <div>Teams</div>
          <div className="text-center">Time Left</div>
          <div className="text-right">Current Score</div>
        </div>

        {(fixturesLoading || AFfixturesLoading) &&
        (!liveFixtures.data || !AFliveFixtures.data) ? (
          <Loading />
        ) : paginatedGames.length > 0 ? (
          paginatedGames.map((match, index) => (
            <div
              key={index}
              onClick={() =>
                handleGameClick(
                  selectedLeague,
                  isSoccer ? match.fixture.id : match.gameId,
                  "live",
                  "summary"
                )
              }
              className="flex flex-col md:flex-row overflow-hidden gap-2 md:gap-5 justify-between  px-4 py-3 mt-2 w-full text-center rounded-lg border border-solid bg-secondary border-white border-opacity-15 max-md:max-w-full text-white cursor-pointer"
            >
              {/* Teams Section */}
              <div className="flex w-full items-center gap-4  max-md:w-full">
                <div className="flex items-center gap-2 text-right w-full max-md:justify-center">
                  <img
                    src={match.teams.home.logo}
                    alt={match.teams.home.name}
                    className="w-7 h-7 rounded-full"
                  />
                  <span className="text-base font-semibold truncate">
                    {match.teams.home.name}
                  </span>
                </div>

                <div className="text-sm font-semibold w-auto text-center">
                  VS
                </div>

                <div className="flex items-center gap-2 text-left w-full justify-start max-md:justify-center">
                  <img
                    src={match.teams.away.logo}
                    alt={match.teams.away.name}
                    className="w-7 h-7 rounded-full"
                  />
                  <span className="text-base font-semibold truncate">
                    {match.teams.away.name}
                  </span>
                </div>
              </div>

              {/* Time Left */}
              <div className="text-base w-full  font-semibold w-1/3 text-center max-md:w-full">
                {isSoccer
                  ? match.fixture.status.elapsed + " min"
                  : match.status.short}
              </div>

              {/* Links for Odds & Prediction */}
              <div className="flex w-full justify-center gap-4">
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGameClick(
                      selectedLeague,
                      isSoccer ? match.fixture.id : match.gameId,
                      "live",
                      "odds"
                    );
                  }}
                  className="text-xs  py-1 border-b border-gray-500 cursor-pointe"
                >
                  Odds
                </span>
                {/* <span
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleGameClick(
                                            selectedLeague, isSoccer ? match.fixture.id : match.gameId, "live", "prediction"
                                        );
                                    }}
                                    className="text-xs  py-1 border-b border-gray-500 cursor-pointer"
                                >
                                    Prediction
                                </span> */}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGameClick(
                      selectedLeague,
                      isSoccer ? match.fixture.id : match.gameId,
                      "live",
                      "summary"
                    );
                  }}
                  className="text-xs  py-1 border-b border-gray-500 cursor-pointer"
                >
                  Live
                </span>
              </div>

              {/* Current Score */}
              <div className="text-base text-center font-semibold w-1/3 max-md:w-full">
                {isSoccer
                  ? `${match.goals.home ?? 0} - ${match.goals.away ?? 0}`
                  : `${match.scores.home.total ?? 0} - ${
                      match.scores.away.total ?? 0
                    }`}
              </div>
            </div>
          ))
        ) : (
          <EmptyState
            icon={FaRegSadTear}
            message="No live matches playing..."
          />
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
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
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
