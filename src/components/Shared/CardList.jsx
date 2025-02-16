import PropTypes from "prop-types";
import { FaRegSadTear, FaTrash } from "react-icons/fa"; // Import delete icon
import { useSelector } from "react-redux";

const CardList = ({ title, isLoading, onDelete }) => {
    const players = useSelector((state) => state.favorites.favoritePlayers);

    return (
        <div >
            <h2 className={`text-xl font-bold px-1 py-3 mb-4`}>{title}</h2>
            <div className="space-y-4">
                {players?.length > 0 ? (
                    players.map((item) => (
                        <div
                            key={item.playerId}
                            className="flex items-center justify-between px-6 py-3 bg-secondary rounded-lg"
                        >
                            {/* Player Info */}
                            <div className="flex items-center space-x-4">
                                <img
                                    src={item?.playerRef?.photo}
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
                                disabled={isLoading} // Disable only while loading
                            >

                                <FaTrash className="w-5 h-5" />
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="flex flex-col rounded-xl  items-center justify-center p-6 text-gray-400">
                        <FaRegSadTear className="w-10 h-10 mb-2" />
                        <p>No favorite players added yet.</p>
                    </div>
                )}
            </div>

        </div >
    );
};

// CardList.propTypes = {
//     title: PropTypes.string.isRequired,
//     items: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             name: PropTypes.string.isRequired,
//             image: PropTypes.string.isRequired,
//         })
//     ),
//     onDelete: PropTypes.func.isRequired,
// };

export default CardList;
