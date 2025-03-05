import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MatchCard from "./MatchCard";
import { normalizeMatchData } from "./normalizeMatchData";
import { AFliveFixtures, liveFixtures } from "../GameInsights/live";

const MatchCardsList = ({ selectedGame, selectedLeague }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(0);
    const containerRef = useRef(null);
    const [filteredMatches, setFilteredMatches] = useState([]);

    console.log("liveFixtures", liveFixtures);
    console.log("AFliveFixtures", AFliveFixtures);

    // Fetch match data from Redux
    const { completedFixtures, AFcompletedFixtures, fixturesLoading } = useSelector((state) => state.fixtures);

    console.log("completedFixtures", completedFixtures);
    console.log("AFcompletedFixtures", AFcompletedFixtures);

    useEffect(() => {
        if (!selectedGame) return;
        const isSoccer = selectedGame === "soccer";
        const fixturesData = isSoccer ? completedFixtures : AFcompletedFixtures;

        const allFixtures = fixturesData?.data?.flatMap((league) =>
            isSoccer ? league.fixtures : league.completedGames || []
        ) || [];

        const selectedFixtures = selectedLeague
            ? fixturesData?.data?.find((league) => league.leagueName === selectedLeague)
            : null;

        if (selectedFixtures) {
            setFilteredMatches(isSoccer ? selectedFixtures.fixtures : selectedFixtures.completedGames || []);
        } else {
            setFilteredMatches(allFixtures);
        }
    }, [selectedGame, selectedLeague, completedFixtures, AFcompletedFixtures]);

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
                    // Skeleton Loader for Loading State
                    [...Array(visibleCount)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-secondary animate-pulse p-2 rounded-lg flex flex-col items-start w-full max-w-[200px] h-[80px]"
                        >
                            {/* if want the more good loading state */}
                            {/* <div className="bg-gray-500 self-end h-3 w-10 rounded mb-2"></div>
                            <div className="flex items-center justify-between w-full mb-1">
                                <div className="flex items-center space-x-2">
                                    <div className="bg-gray-500 w-5 h-5 rounded-full"></div>
                                    <div className="bg-gray-500 h-3 w-10 rounded"></div>
                                </div>
                                <div className="bg-gray-500 h-3 w-6 rounded"></div>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center space-x-2">
                                    <div className="bg-gray-500 w-5 h-5 rounded-full"></div>
                                    <div className="bg-gray-500 h-3 w-10 rounded"></div>
                                </div>
                                <div className="bg-gray-500 h-3 w-6 rounded"></div>
                            </div> */}

                            <div className="flex bg-secondary h-full  rounded-xl  w-full justify-center items-center py-4">
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