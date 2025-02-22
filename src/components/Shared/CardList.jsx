import PropTypes from "prop-types";
import { FaRegSadTear, FaSearch, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";
import Loading from "./Loading";

const CardList = ({ title, isLoading, favoritesLoading, favoritePlayersSports, onSelect, onDelete }) => {
    const players = useSelector((state) => state.favorites.favoritePlayers);
    const [searchQuery, setSearchQuery] = useState("");

    // Filter players based on searchQuery
    const filteredPlayers = players?.filter((player) =>
        player?.playerRef?.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {/* Search Input */}
            <div className="col-span-8 flex mt-8 items-center bg-[rgba(255,255,255,0.32)] px-4 py-3 rounded-full shadow-lg">
                <div className="text-white mr-2 text-2xl">
                    <FaSearch />
                </div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search players..."
                    className="flex-1 bg-transparent text-white placeholder-gray-300 focus:outline-none px-2"
                />
            </div>

            <h2 className="text-xl font-bold px-1 py-3 mb-3 mt-2">{title}</h2>
            {favoritesLoading ? <Loading /> : <div className="space-y-4">
                {players?.length === 0 ? (
                    <div className="flex flex-col rounded-xl items-center justify-center p-6 text-gray-400">
                        <FaRegSadTear className="w-10 h-10 mb-2" />
                        <p>No favorite players added yet.</p>
                    </div>
                ) : filteredPlayers?.length > 0 ? (
                    filteredPlayers.map((item) => (
                        <div
                            key={item.playerId}
                            className="flex items-center justify-between px-6 py-3 bg-secondary rounded-lg"
                        >
                            {/* Player Info */}
                            <div onClick={() => onSelect(item, favoritePlayersSports)} className="flex cursor-pointer items-center space-x-4">
                                <img
                                    src={item?.playerRef?.photo || item?.playerRef?.image || "https://via.placeholder.com/100"}
                                    loading="lazy"
                                    alt={item?.playerRef?.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <span>{item?.playerRef?.name}</span>
                            </div>

                            {/* Delete Button */}
                            <button
                                className={`flex items-center justify-center transition ${isLoading ? "opacity-50 text-red-300 cursor-not-allowed" : "hover:text-red-600 text-red-500"
                                    }`}
                                onClick={() => onDelete(item)}
                                disabled={isLoading}
                            >
                                <FaTrash className="w-5 h-5" />
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="flex flex-col rounded-xl items-center justify-center p-6 text-gray-400">
                        <FaRegSadTear className="w-10 h-10 mb-2" />
                        <p>No matching players found.</p>
                    </div>
                )}
            </div>}
        </div>
    );
};

CardList.propTypes = {
    title: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
};

export default CardList;
