import PropTypes from "prop-types";
import { FaRegSadTear, FaSearch, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";
import Loading from "./Loading";
import { EmptyState } from "./EmptyState";

const TeamsCardList = ({ title, favoritesLoading, favoritePlayersSports, onDelete, onSelect, isLoading }) => {
    const items = useSelector((state) => state.favorites.favoriteTeams);
    const [searchQuery, setSearchQuery] = useState("");

    // Filter teams based on searchQuery
    const filteredTeams = items?.filter((team) =>
        team?.teamRef?.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {/* Search Input */}
            <div className="col-span-8 flex items-center bg-[rgba(255,255,255,0.32)] px-4 py-3 rounded-full shadow-lg">
                <div className="text-white mr-2 text-2xl">
                    <FaSearch />
                </div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search teams..."
                    className="flex-1 bg-transparent text-white placeholder-gray-300 focus:outline-none px-2"
                />
            </div>

            <h2 className="text-xl font-bold px-1 py-3 mb-3 mt-2">{title}</h2>

            {favoritesLoading ? <Loading /> : <div className="space-y-4">
                {items?.length === 0 ? (
                    <EmptyState icon={FaRegSadTear} message="No favorite teams added yet." />
                ) : filteredTeams?.length > 0 ? (
                    filteredTeams.map((item) => (
                        <div
                            key={item.teamId}
                            className="flex items-center justify-between px-6 py-3 bg-secondary rounded-lg"
                        >
                            <div
                                onClick={() => {
                                    console.log("item", item);
                                    onSelect(item, favoritePlayersSports)
                                }}
                                className="flex cursor-pointer items-center space-x-4"
                            >
                                <img
                                    src={item?.teamRef?.logo || "https://via.placeholder.com/100"}
                                    loading="lazy"
                                    alt={item?.teamRef?.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <span>{item?.teamRef?.name}</span>
                            </div>
                            <button
                                className={` ${isLoading ? "opacity-6 text-red-300" : "hover:text-red-600 text-red-500"
                                    } text-red-500 transition flex items-center justify-center`}
                                onClick={() => onDelete(item)}
                                disabled={isLoading}
                            >
                                <FaTrash className="w-5 h-5" />
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="flex flex-col rounded-xl items-center justify-center p-6 text-gray-400">
                        <FaRegSadTear className="w-10 h-10 mb-2 rounded-xl" />
                        <p>No matching teams found.</p>
                    </div>
                )}
            </div>}
        </div>
    );
};

TeamsCardList.propTypes = {
    title: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default TeamsCardList;
