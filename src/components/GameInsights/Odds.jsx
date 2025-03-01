import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ChevronDown, ChevronUp } from "lucide-react"; // Modern icons

const Odds = ({ leagueId, fixtureId }) => {

    console.log("leagueId, fixtureId", leagueId, fixtureId);

    const { upcomingFixturesOdds } = useSelector((state) => state.fixtures);
    const [selectedBet, setSelectedBet] = useState(null);
    const [openBookmaker, setOpenBookmaker] = useState(null); // Track open bookmakers

    // Find the odds for the specific fixture
    const matchOdds = upcomingFixturesOdds?.data?.find(
        (item) => item.league.id === Number(leagueId) && item.fixture.id === Number(fixtureId)
    );

    if (!matchOdds) {
        return (
            <div className="mt-6 text-center">
                <h2 className="text-lg font-semibold text-white">Odds</h2>
                <p className="text-gray-400">No odds available for this match.</p>
            </div>
        );
    }

    // Get all available bet types
    const betTypes = [...new Set(matchOdds.bookmakers.flatMap((bookmaker) => bookmaker.bets.map((bet) => bet.name)))];

    // Set the first bet type as default when the component mounts
    // useEffect(() => {
    //     if (betTypes.length > 0) {
    //         setSelectedBet(betTypes[0]);
    //     }
    // }, [betTypes]);
    return (
        <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold text-white mb-4">Odds</h2>

            <div className="flex overflow-x-auto scrollbar-hide space-x-4 border-gray-500">
                {betTypes.map((betType) => (
                    <button
                        key={betType}
                        onClick={() => setSelectedBet(betType)}
                        className={`px-4 py-2 whitespace-nowrap rounded-lg ${selectedBet === betType ? "bg-primarySolid" : "bg-secondary"
                            } transition`}
                    >
                        {betType}
                    </button>
                ))}
            </div>

            {/* Odds Table */}
            {selectedBet && (
                <div className="mt-4">
                    {matchOdds.bookmakers.map((bookmaker) => {
                        const bet = bookmaker.bets.find((b) => b.name === selectedBet);
                        if (!bet) return null;

                        const isOpen = openBookmaker === bookmaker.id;

                        return (
                            <div key={bookmaker.id} className="mb-4">
                                {/* Bookmaker Name and Toggle Button */}
                                <div
                                    className={`flex justify-between items-center bg-secondary p-6 cursor-pointer transition ${isOpen ? "rounded-t-xl" : "rounded-xl"
                                        }`}
                                    onClick={() => setOpenBookmaker(isOpen ? null : bookmaker.id)}
                                >
                                    <h3 className="text-xl font-semibold text-white">{bookmaker.name}</h3>
                                    {isOpen ? <ChevronUp size={20} className="text-white" /> : <ChevronDown size={20} className="text-white" />}
                                </div>

                                {/* Bet Values Table (Visible if Open) */}
                                {isOpen && (
                                    <div className="overflow-hidden  transition-all duration-500 ease-in-out  bg-secondary backdrop-blur-lg  rounded-b-xl p-4">
                                        <table className="w-full text-left text-sm">
                                            <thead>
                                                <tr className="border-b border-gray-600 text-gray-300">
                                                    <th className="p-3 uppercase tracking-wide text-gray-400">Value</th>
                                                    <th className="p-3 uppercase tracking-wide text-gray-400">Odds</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {bet.values.map((val, index) => (
                                                    <tr
                                                        key={index}
                                                        className="border-b border-gray-700 transition-all duration-300"
                                                    >
                                                        <td className="p-3 text-white font-medium">{val.value}</td>
                                                        <td className="p-3 text-blue-400 font-bold">{val.odd}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Odds;
