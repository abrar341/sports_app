import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MatchCard from "./MatchCard";
import { normalizeMatchData } from "./normalizeMatchData";

const MatchCardsList = ({ selectedGame, selectedLeague }) => {
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const {
        completedFixtures,
        AFcompletedFixtures,
        fixturesLoading,
        AFliveFixtures,
        liveFixtures,
    } = useSelector((state) => state.fixtures);

    const isSoccer = selectedGame === "soccer";
    const completedData = isSoccer ? completedFixtures : AFcompletedFixtures;
    const liveData = isSoccer ? liveFixtures : AFliveFixtures;

    const normalizeLiveFixtures = (liveData, isSoccer) => {
        if (!liveData?.data) return [];

        if (isSoccer) {
            const leagueMap = new Map();
            liveData.data.forEach((match) => {
                const leagueId = match.league.id;
                if (!leagueMap.has(leagueId)) {
                    leagueMap.set(leagueId, {
                        leagueName: match.league.name,
                        season: match.league.season,
                        fixtures: [],
                    });
                }
                leagueMap.get(leagueId).fixtures.push({
                    matchId: match.fixture.id,
                    leagueId: match.league.id,
                    date: match.fixture.date,
                    venue: match.fixture.venue,
                    status: match.fixture.status,
                    teams: match.teams,
                    score: match.goals,
                    live: true,
                });
            });

            return Array.from(leagueMap.values());
        }

        return liveData.data.map((league) => ({
            leagueName: league.leagueName,
            season: league.season,
            completedGames: league.liveGames.map((game) => ({
                leagueId: game.league.leagueId,
                matchId: game.gameId,
                date: game.date,
                venue: game.venue,
                status: game.status,
                teams: game.teams,
                scores: game.scores,
                live: true,
            })),
        }));
    };

    const normalizedLiveFixtures = normalizeLiveFixtures(liveData, isSoccer);

    const mergedFixtures = (completedData?.data || []).map((league) => {
        const liveLeague = normalizedLiveFixtures?.find(
            (live) => live.leagueName === league.leagueName
        );
        return {
            ...league,
            fixtures: [...(league.fixtures ?? []), ...(liveLeague?.fixtures ?? [])],
            completedGames: [...(league.completedGames ?? []), ...(liveLeague?.completedGames ?? [])],
        };
    }).concat(
        normalizedLiveFixtures?.filter(
            (live) =>
                !(completedData?.data || []).some(
                    (league) => league.leagueName === live.leagueName
                )
        ) || []
    );

    const selectedFixtures = selectedLeague
        ? mergedFixtures?.find((league) => league.leagueName === selectedLeague)
        : null;

    let matches = selectedFixtures
        ? isSoccer
            ? selectedFixtures.fixtures
            : selectedFixtures.completedGames || []
        : mergedFixtures?.flatMap((league) =>
            isSoccer ? league.fixtures : league.completedGames
        ) || [];

    matches = matches.sort((a, b) => (b.live === true) - (a.live === true));
    const normalizedMatches = matches.map((match) => normalizeMatchData(match));

    // Clone matches to create looping effect
    const loopedMatches = [...normalizedMatches, ...normalizedMatches];

    const scrollByAmount = 300;

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -scrollByAmount,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: scrollByAmount,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container || fixturesLoading) return;

        const scrollStep = 1;
        const interval = 30;

        const autoScroll = setInterval(() => {
            if (!isHovered) {
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                } else {
                    container.scrollLeft += scrollStep;
                }
            }
        }, interval);

        return () => clearInterval(autoScroll);
    }, [isHovered, fixturesLoading]);


    return (
        <div
            className="relative w-full mx-2 py-0 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black text-white p-2 rounded-full"
            >
                <ChevronLeft />
            </button>
            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black text-white p-2 rounded-full"
            >
                <ChevronRight />
            </button>

            <div
                ref={containerRef}
                className="overflow-x-auto no-scrollbar whitespace-nowrap w-full"
            >
                <div className="flex gap-3 w-max px-10">
                    {fixturesLoading ? (
                        [...Array(10)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-secondary animate-pulse p-2 rounded-lg w-[150px] h-[80px]"
                            >
                                <div className="w-4 h-4 mx-auto mt-6 border-4 border-primarySolid border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        ))
                    ) : loopedMatches.length > 0 ? (
                        loopedMatches.map((match, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                            >
                                <MatchCard match={match} />
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-white">No matches available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MatchCardsList;
