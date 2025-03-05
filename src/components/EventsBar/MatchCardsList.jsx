import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MatchCard from "./MatchCard";
import { normalizeMatchData } from "./normalizeMatchData";
// import { AFliveFixtures, liveFixtures } from "../GameInsights/live";

const MatchCardsList = ({ selectedGame, selectedLeague }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(0);
    const containerRef = useRef(null);
    const [filteredMatches, setFilteredMatches] = useState([]);

    // Fetch match data from Redux
    const { completedFixtures, AFcompletedFixtures, fixturesLoading, AFliveFixtures, liveFixtures } = useSelector((state) => state.fixtures);

    // Function to normalize live fixtures
    const normalizeLiveFixtures = (liveData, isSoccer) => {
        return isSoccer
            ? liveData?.data?.map((match) => ({
                leagueName: match.league.name,
                season: match.league.season,
                fixtures: [
                    {
                        matchId: match.fixture.id,
                        date: match.fixture.date,
                        venue: match.fixture.venue,
                        status: match.fixture.status,
                        teams: match.teams,
                        score: match.goals,
                        live: true
                    },
                ],
            }))
            : liveData?.data?.map((league) => ({
                leagueName: league.leagueName,
                season: league.season,
                completedGames: league.liveGames.map((game) => ({
                    matchId: game.gameId,
                    date: game.date,
                    venue: game.venue,
                    status: game.status,
                    teams: game.teams,
                    scores: game.scores,
                    live: true

                })),
            }));
    };

    useEffect(() => {
        if (!selectedGame) return;
        const isSoccer = selectedGame === "soccer";
        const completedData = isSoccer ? completedFixtures : AFcompletedFixtures;
        const liveData = isSoccer ? liveFixtures : AFliveFixtures;
        console.log("completedData", AFcompletedFixtures);

        // Normalize live fixtures
        const normalizedLiveFixtures = normalizeLiveFixtures(liveData, isSoccer);

        // Merge live and completed fixtures
        const mergedFixtures = completedData?.data
            ?.map((league) => {
                const liveLeague = normalizedLiveFixtures?.find((live) => live.leagueName === league.leagueName);
                return {
                    ...league,
                    fixtures: [...(league.fixtures || []), ...(liveLeague?.fixtures || [])],
                    completedGames: [...(league.completedGames || []), ...(liveLeague?.completedGames || [])],
                };
            })
            .concat(
                normalizedLiveFixtures?.filter(
                    (live) => !completedData?.data?.some((league) => league.leagueName === live.leagueName)
                ) || []
            );
        console.log("mergedFixtures", mergedFixtures);

        const selectedFixtures = selectedLeague
            ? mergedFixtures?.find((league) => league.leagueName === selectedLeague)
            : null;
        console.log("selectedFixtures", selectedFixtures);

        let matches = selectedFixtures
            ? isSoccer
                ? selectedFixtures.fixtures
                : selectedFixtures.completedGames || []
            : mergedFixtures?.flatMap((league) =>
                isSoccer ? league.fixtures : league.completedGames
            ) || [];

        // 🔥 Sort matches so that live matches come first
        matches = matches.sort((a, b) => (b.live === true) - (a.live === true));

        setFilteredMatches(matches);
    }, [selectedGame, selectedLeague, completedFixtures, AFcompletedFixtures, liveFixtures, AFliveFixtures]);


    useEffect(() => {
        const updateVisibleCount = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const cardWidth = 150;
                const newVisibleCount = Math.floor((containerWidth - 40) / cardWidth);
                setVisibleCount(newVisibleCount);
            }
        };

        window.addEventListener("resize", updateVisibleCount);
        updateVisibleCount();

        return () => {
            window.removeEventListener("resize", updateVisibleCount);
        };
    }, []);

    const handleScroll = (direction) => {
        if (direction === "left" && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (direction === "right" && currentIndex < filteredMatches.length - visibleCount) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const visibleCards = filteredMatches.slice(currentIndex, currentIndex + visibleCount);
    const normalizedMatches = visibleCards.map((match) => normalizeMatchData(match));

    return (
        <div className="relative w-full h-full bg-transparent rounded-lg overflow-hidden flex items-center">
            {/* Left Arrow */}
            {currentIndex > 0 && (
                <button
                    onClick={() => handleScroll("left")}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10"
                >
                    <FaChevronLeft className="w-4" />
                </button>
            )}

            {/* Match Cards or Loading State */}
            <div
                ref={containerRef}
                className="grid gap-2 w-full h-full px-10"
                style={{ gridTemplateColumns: `repeat(${visibleCount}, 1fr)` }}
            >
                {fixturesLoading ? (
                    [...Array(visibleCount)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-secondary animate-pulse p-2 rounded-lg flex flex-col items-start w-full max-w-[200px] h-[80px]"
                        >
                            <div className="flex bg-secondary h-full rounded-xl w-full justify-center items-center py-4">
                                <div className="w-4 h-4 border-4 border-primarySolid border-t-secondary rounded-full animate-spin"></div>
                            </div>
                        </div>
                    ))
                ) : normalizedMatches.length > 0 ? (
                    normalizedMatches.map((match, index) => <MatchCard key={index} match={match} />)
                ) : (
                    <p className="text-white">No matches available</p>
                )}
            </div>

            {/* Right Arrow */}
            {currentIndex < filteredMatches.length - visibleCount && (
                <button
                    onClick={() => handleScroll("right")}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10"
                >
                    <FaChevronRight className="w-4" />
                </button>
            )}
        </div>
    );
};

export default MatchCardsList;
