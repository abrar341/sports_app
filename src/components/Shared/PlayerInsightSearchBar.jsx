import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { normalizeSearchPlayerData } from "../../utils/normalizeData";
import { setSelectedPlayerSports } from "../../slices/selectionSlice";
import { useDispatch } from "react-redux";

const PlayerInsightSearchBar = ({ onSearch, sportsName, onSelect, placeholder = "Search By Player..." }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState([]);
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Debounce Logic: Wait for 600ms before setting the debouncedQuery
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 600);

        return () => {
            clearTimeout(handler); // Cleanup timeout on every keystroke
        };
    }, [searchQuery]);


    // Fetch results when debouncedQuery updates
    useEffect(() => {
        if (debouncedQuery.length > 2) {
            setLoading(true);
            (async () => {
                try {
                    const result = await onSearch(debouncedQuery, sportsName);
                    console.log("result", result);
                    setResults(result?.data || []);
                } catch (error) {
                    console.error("Error fetching search results:", error);
                    setResults([]);
                } finally {
                    setLoading(false);
                }
            })();
        } else {
            setResults([]);
        }
    }, [debouncedQuery, onSearch]);

    return (
        <div className="relative w-full">
            {/* Search Bar */}
            <div className="">
                <div className="col-span-8 flex items-center bg-[rgba(255,255,255,0.32)] px-4 py-3 rounded-l-full shadow-lg">
                    <div className="text-white mr-2 text-2xl">
                        <FaSearch />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={placeholder}
                        className="flex-1 bg-transparent text-white placeholder-gray-300 focus:outline-none px-2"
                    />

                    {searchQuery.length > 2 && <div className="mr-1 text-sm font-semibold">
                        {
                            loading ?
                                <div className="w-4 flex items-center justify-center h-4 border-2 border-gray-300 border-t-white rounded-full animate-spin"></div>
                                :
                                <div className="flex mb-[0.5px] text-white items-center justify-center h-4 border-gray-300 ">
                                    results {results?.length}
                                </div>
                        }
                    </div>}

                    {/* Cross button to clear search */}
                    {
                        searchQuery.length > 2 && <button
                            onClick={() => {
                                setSearchQuery("");
                                setDebouncedQuery("");
                            }}
                            className="text-white w-6 h-6 flex items-center justify-center text-lg"
                        >
                            <IoIosClose className="w-full h-full mt-[0.5px]" />
                        </button>}
                </div>


            </div>

            {/* Search Results */}
            {searchQuery.length > 2 && results.length > 0 && (
                <div className="absolute z-30 w-full bg-gray-900 p-4 text-white mt-2 rounded-xl shadow-lg max-h-80 overflow-y-auto scrollbar-hide border border-gray-800">
                    {/* Loading Spinner */}
                    {loading && (
                        <div className="flex justify-center items-center py-4">
                            <div className="w-6 h-6 border-4 border-gray-300 border-t-white rounded-full animate-spin"></div>
                        </div>
                    )}

                    {/* Display Results */}
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {!loading &&
                            results.length > 0 &&
                            results?.map((player) => {
                                const normalizedPlayer = normalizeSearchPlayerData(player, sportsName);
                                return (
                                    <div
                                        key={normalizedPlayer.playerId}
                                        className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-800 hover:rounded-lg transition-all duration-200"
                                        onClick={() => {
                                            dispatch(setSelectedPlayerSports(sportsName))
                                            onSelect(normalizedPlayer);
                                            setSearchQuery("");
                                            setDebouncedQuery("");
                                            if (location.pathname !== "/player-insight") {
                                                navigate("/player-insight");
                                                setTimeout(() => {
                                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                                }, 100);
                                            }
                                        }}
                                    >
                                        <img
                                            src={normalizedPlayer.image || "https://via.placeholder.com/40"}
                                            loading="lazy"
                                            alt={normalizedPlayer.name}
                                            className="w-12 h-12 rounded-full mr-4 object-cover border border-gray-600 shadow-md"
                                        />
                                        <div className="flex flex-col">
                                            <span className="text-white text-base font-medium">
                                                {normalizedPlayer.name || "-"}
                                            </span>
                                            {normalizedPlayer.nationality !== "N/A" && (
                                                <span className="text-gray-400 text-sm">{normalizedPlayer.nationality}</span>
                                            )}
                                            {normalizedPlayer.position && (
                                                <span className="text-gray-400 text-sm">{normalizedPlayer.position}</span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlayerInsightSearchBar;
