import PropTypes from "prop-types";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { addFavoriteTeam, removeFavoriteTeam } from "../../Api/Team/SearchTeam";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { addTeamToFavorites, removePlayerFromFavorites, removeTeamFromFavorites } from "../../slices/favoritesSlice";
import { useState } from "react";
import useIsPlayerFavorite from "../../hooks/useIsPlayerFavorite";
import useIsTeamFavorite from "../../hooks/useIsTeamFavorite";

const TeamCard = ({ _id: teamRef, teamId, name, code, country, founded, logo, venue }) => {
    const dispatch = useDispatch()
    const { teamProfileLoading } = useSelector((state) => state.loading); // Get loading states
    const [isLoading, setIsLoading] = useState(false);
    const isFavorite = useIsTeamFavorite(teamId);

    const handleAddFavorite = async () => {
        setIsLoading(true);
        try {
            const res = await addFavoriteTeam(teamRef, teamId);

            // Construct the favorite player data
            const favoriteTeamData = {
                teamId: teamId, // Use the player's ID from response
                teamRef: {
                    _id: teamRef, // Ensure _id is present
                    name,
                    logo
                },
            };
            console.log("favoriteTeamData", favoriteTeamData);

            // Dispatch the favorite player to Redux store
            dispatch(addTeamToFavorites(favoriteTeamData));
            setIsLoading(false);

        } catch (error) {
            console.error("Error adding player to favorites:", error);
        }
        finally {
            setIsLoading(false);
        }
    };

    const handleRemoveFavoriteTeam = async (teamId, teamRef) => {

        setIsLoading(true);
        try {

            const res = await removeFavoriteTeam(teamRef, teamId); // Pass player.playerId
            console.log("remove res", res);

            if (res) {
                console.log("Removing player:", teamId);
                dispatch(removeTeamFromFavorites(teamId)); // Remove correct player
            }
        } catch (error) {
            console.error("Error removing player from favorites:", error);
        }
        finally {
            setIsLoading(false);

        }
    };
    return (
        <div className={`relative bg-secondary p-6  min-h-[19rem]  rounded-xl flex flex-col items-center ${teamProfileLoading && "justify-center"} shadow-lg`}>
            {teamProfileLoading ? <Loading /> : <>
                <img
                    src={logo || "https://via.placeholder.com/100"} // Fallback Image
                    loading="lazy"
                    alt={name}
                    className="w-20 h-20 object-cover rounded-full mb-2 border-4 border-blue-700 shadow-md"
                />

                <div className=" top-5 absolute right-5">
                    {isLoading ? (
                        <div className="w-6 h-6  border-4 border-gray-400 border-t-white rounded-full animate-spin"></div>
                    ) : isFavorite ? (
                        <MdOutlineFavorite onClick={() => handleRemoveFavoriteTeam(teamId, teamRef)} className="cursor-pointer w-6 h-6" />
                    ) : (
                        <MdOutlineFavoriteBorder onClick={handleAddFavorite} className="cursor-pointer w-6 h-6" />
                    )}
                </div>
                {/* Team Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-white">{name} ({code})</h3>
                <p className="text-sm text-gray-400 mb-2">Founded: {founded}</p>
                {/* Team Details */}
                <div className="flex justify-between w-full text-sm text-gray-300 mb-4">
                    <p className="w-full ">
                        Country: <span className="block  sm:inline text-white font-semibold">{country}</span>
                    </p>
                    <p className="w-full text-end ">
                        Venue: <span className="block  sm:inline text-white font-semibold">{venue.name}</span>
                    </p>
                </div>
                {/* Venue Info */}
                <div className="flex justify-between w-full border-t border-blue-800 pt-4">
                    <div className="text-center">
                        <p className="text-sm text-gray-300">City</p>
                        <p className="text-base sm:text-lg font-bold text-red-400">{venue.city}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-300">Capacity</p>
                        <p className="text-base sm:text-lg font-bold text-green-400">{venue.capacity}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-300">Surface</p>
                        <p className="text-base sm:text-lg font-bold text-blue-400">{venue.surface}</p>
                    </div>
                </div>
            </>}
        </div>
    );
};

// TeamCard.propTypes = {
//     name: PropTypes.string.isRequired,
//     code: PropTypes.string.isRequired,
//     country: PropTypes.string.isRequired,
//     founded: PropTypes.number.isRequired,
//     logo: PropTypes.string.isRequired,
//     venue: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         city: PropTypes.string.isRequired,
//         capacity: PropTypes.number.isRequired,
//         surface: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//     }).isRequired,
// };

export default TeamCard;
