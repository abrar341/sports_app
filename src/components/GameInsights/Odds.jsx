import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { getOddsByFixtureId } from "../../Api/Fixtures/get/fixtures";
import Loading from "../Shared/Loading";
import { useSelector } from "react-redux";
import { EmptyState } from "../Shared/EmptyState";
import { FaRegSadTear } from "react-icons/fa";
// import { liveFixtures } from "./live";
// import { io } from "socket.io-client";
// import { SOCKET_URL } from "../../utils/constants";

// let socket = io(SOCKET_URL);

const Odds = () => {

    const { status, fixtureId } = useParams();
    const { fixturesLoading, liveFixtures } = useSelector((state) => state.fixtures);
    const [odds, setOdds] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedBet, setSelectedBet] = useState(null);
    const [openBookmaker, setOpenBookmaker] = useState(null);

    useEffect(() => {
        const fetchOdds = async () => {
            try {
                setLoading(true);
                const data = await getOddsByFixtureId(fixtureId);
                setOdds(data);
            } catch (err) {
                setError("Failed to fetch odds");
            } finally {
                setLoading(false);
            }
        };

        if (status === "upcoming") {
            fetchOdds();
        } else {
            // Find live fixture matching the fixtureId
            const liveFixture = liveFixtures.data.find(f => f.fixture.id === Number(fixtureId));
            if (liveFixture) {
                // Transform inPlayOdds to match bookmakers format
                const transformedOdds = {
                    data: {
                        bookmakers: [
                            {
                                id: "live",
                                name: "Live Odds",
                                bets: liveFixture.inPlayOdds[0]?.odds.map(odds => ({
                                    name: odds.name,
                                    values: odds.values
                                })) || []
                            }
                        ]
                    }
                };
                setOdds(transformedOdds);
            } else {
                setOdds(null);
            }
        }
    }, [fixtureId, status]);

    //Not tested Yet
    // useEffect(() => {
    //     socket.on(`fixture:${fixtureId}`, (data) => {
    //         if (data) {
    //             setOdds(data);
    //         }
    //     });
    //     return () => {
    //         socket.off(`fixture:${fixtureId}`);
    //     };
    // }, [fixtureId]);


    // Set default selected bet when odds are loaded
    useEffect(() => {
        if (odds?.data?.bookmakers?.length) {
            const betTypes = [...new Set(odds.data.bookmakers.flatMap(bookmaker => bookmaker.bets.map(bet => bet.name)))];
            if (betTypes.length > 0) {
                setSelectedBet(betTypes[0]); // Set first bet type as default
            }
        }
    }, [odds]);

    if (loading) return <Loading />;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!odds?.data?.bookmakers?.length || !odds?.data?.bookmakers?.[0]?.bets.length) {
        return <EmptyState icon={FaRegSadTear} message="No Betting Odds yet for this match." />
    }

    // Extract bet types from bookmakers
    const betTypes = [...new Set(odds.data.bookmakers.flatMap(bookmaker => bookmaker.bets.map(bet => bet.name)))];



    return (
        <div className="text-center">

            <div className="flex overflow-x-auto scrollbar-hide space-x-4 border-gray-500">
                {betTypes.map(betType => (
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

            {selectedBet && (
                <div className="mt-4">
                    {odds.data.bookmakers.map(bookmaker => {
                        const bet = bookmaker.bets.find(b => b.name === selectedBet);
                        if (!bet) return null;

                        const isOpen = openBookmaker === bookmaker.id;

                        return (
                            <div key={bookmaker.id} className="mb-4">
                                <div
                                    className={`flex justify-between items-center bg-secondary p-6 cursor-pointer transition ${isOpen ? "rounded-t-xl" : "rounded-xl"
                                        }`}
                                    onClick={() => setOpenBookmaker(isOpen ? null : bookmaker.id)}
                                >
                                    <h3 className="text-xl font-semibold text-white">{bookmaker.name}</h3>
                                    {isOpen ? <ChevronUp size={20} className="text-white" /> : <ChevronDown size={20} className="text-white" />}
                                </div>

                                {isOpen && (
                                    <div className="overflow-hidden transition-all duration-500 ease-in-out bg-secondary backdrop-blur-lg rounded-b-xl p-4">
                                        <table className="w-full text-left text-sm">
                                            <thead>
                                                <tr className="border-b border-gray-600 text-gray-300">
                                                    <th className="p-3 uppercase tracking-wide text-gray-400">Value</th>
                                                    <th className="p-3 uppercase tracking-wide text-gray-400">Odds</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {bet.values.map((val, index) => (
                                                    <tr key={index} className="border-b border-gray-700 transition-all duration-300">
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
