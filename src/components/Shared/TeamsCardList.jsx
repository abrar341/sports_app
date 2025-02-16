import PropTypes from "prop-types";
import { FaRegSadTear, FaTrash } from "react-icons/fa"; // Import delete icon
import { useSelector } from "react-redux";

const TeamsCardList = ({ title, onDelete, onSelect, isLoading }) => {
    const items = useSelector((state) => state.favorites.favoriteTeams);

    return (
        <div>
            <h2 className={`text-xl font-bold px-1 py-3 mb-4`}>{title}</h2>
            <div className="space-y-4">
                {items?.length > 0 ? (
                    items?.map((item) => (
                        <div

                            key={item.teamId}
                            className="flex items-center justify-between px-6 py-3 bg-secondary rounded-lg"
                        >
                            <div onClick={() => {
                                onSelect(item)
                                console.log("hello");
                            }} className="flex cursor-pointer items-center space-x-4">
                                <img
                                    src={item?.teamRef?.logo || "https://via.placeholder.com/100"}
                                    loading="lazy"
                                    alt={item?.teamRef?.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <span>{item?.teamRef?.name}</span>
                            </div>
                            <button
                                className={` ${isLoading ? "opacity-6 text-red-300 " : "hover:text-red-600 text-red-500 "} text-red-500  transition  flex items-center justify-center`}
                                onClick={() => onDelete(item)}
                                disabled={isLoading} // Disable button when loading
                            >
                                <FaTrash className="w-5 h-5" />
                            </button>
                        </div>
                    )))
                    : (
                        <div className="flex flex-col rounded-xl items-center justify-center p-6 text-gray-400">
                            <FaRegSadTear className="w-10 h-10 mb-2 rounded-xl" />
                            <p>No favorite teams added yet.</p>
                        </div>
                    )}
            </div>
        </div>
    );
};

TeamsCardList.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ),
    onDelete: PropTypes.func.isRequired,
};

export default TeamsCardList;
