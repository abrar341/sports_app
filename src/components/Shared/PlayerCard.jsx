import PropTypes from "prop-types";
import { getAge } from "../../utils/getAge";
import { GoBookmark } from "react-icons/go";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { addFavoritePlayer, getFavourites, removeFavoritePlayer } from "../../Api/Player/SearchPlayer";
import { useDispatch, useSelector } from "react-redux";
import useIsPlayerFavorite from "../../hooks/useIsPlayerFavorite";
import { addPlayerToFavorites, removePlayerFromFavorites, setFavoritePlayersList, setFavoriteTeamsList } from "../../slices/favoritesSlice";
import { useEffect, useState } from "react";
import { calculatePlayerStats } from "../../utils/calculateStats";
import Loading from "./Loading";


const PlayerCard = ({ playerId, playerStats, playerRef, name, age, profileLoading, nationality, position, image }) => {
    const [isLoading, setIsLoading] = useState(false);

    const isFavorite = useIsPlayerFavorite(playerId);

    const dispatch = useDispatch();

    const handleAddFavorite = async () => {
        setIsLoading(true);
        try {
            const res = await addFavoritePlayer(playerRef, playerId);
            const fetchedPlayers = res?.data?.favourites?.[0]?.players || [];
            if (fetchedPlayers.length === 0) {
                console.error("No players found in response.");
                return;
            }
            // Get the last player from fetchedPlayers
            const lastPlayer = fetchedPlayers[fetchedPlayers.length - 1];
            // Construct the favorite player data
            const favoritePlayerData = {
                playerId: lastPlayer.playerId, // Use the player's ID from response
                playerRef: {
                    _id: lastPlayer.playerRef?._id, // Ensure _id is present
                    name,
                    photo: image,
                },
            };

            // Dispatch the favorite player to Redux store
            dispatch(addPlayerToFavorites(favoritePlayerData));
            setIsLoading(false);

        } catch (error) {
            console.error("Error adding player to favorites:", error);
        }
        finally {
            setIsLoading(false);
        }
    };

    const { totalGoals, assists, points } = calculatePlayerStats(playerStats);

    const handleRemoveFavoritePlayer = async (player, playerRef) => {
        console.log("player to remove", player);

        setIsLoading(true);
        try {

            const res = await removeFavoritePlayer(playerRef, player); // Pass player.playerId

            if (res) {
                console.log("Removing player:", player);
                dispatch(removePlayerFromFavorites(player)); // Remove correct player
            }
        } catch (error) {
            console.error("Error removing player from favorites:", error);
        }
        finally {
            setIsLoading(false);

        }
    };

    const { teamStatsLoading, playerProfileLoading } = useSelector((state) => state.loading);

    return teamStatsLoading || playerProfileLoading ? <Loading /> : (
        <div className="relative bg-secondary p-6 h-[320px] rounded-xl flex flex-col items-center shadow-lg">
            {
                profileLoading ? <div className="flex w-full h-full justify-center items-center py-4">
                    <div className="w-6 h-6 border-4 border-primarySolid border-t-secondary rounded-full animate-spin"></div>
                </div>
                    : <>

                        <img
                            src={image || "https://media.api-sports.io/football/players/198360.png"} // Fallback Image
                            loading="lazy"
                            alt={name}
                            className="w-20 h-20 object-cover rounded-full mb-2 border-4 border-blue-700 shadow-md"
                        />
                        <div className=" top-5 absolute right-5">
                            {isLoading ? (
                                <div className="w-6 h-6  border-4 border-gray-400 border-t-white rounded-full animate-spin"></div>
                            ) : isFavorite ? (
                                <MdOutlineFavorite onClick={() => handleRemoveFavoritePlayer(playerId, playerRef)} className="cursor-pointer w-6 h-6" />
                            ) : (
                                <MdOutlineFavoriteBorder onClick={handleAddFavorite} className="cursor-pointer w-6 h-6" />
                            )}
                        </div>

                        <h3 className="text-lg font-bold text-white">{name}</h3>
                        <p className="text-sm text-gray-400 mb-2">{getAge(age) || 0} Years Old</p>
                        {/* Player Details */}
                        <div className="flex justify-between w-full text-sm text-gray-300 mb-4">
                            <p>
                                Nationality: <span className="text-white font-semibold">{nationality}</span>
                            </p>
                            <p>
                                Position: <span className="text-white font-semibold">{position}</span>
                            </p>
                        </div>
                        {/* Player Stats */}
                        <div className="flex justify-between w-full border-t border-blue-800 pt-4">
                            <div className="text-center">
                                <p className="text-sm text-gray-300">Total Goals</p>
                                <p className="text-lg font-bold text-red-400">{totalGoals || 0}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-300">Assists</p>
                                <p className="text-lg font-bold text-green-400">{assists || 0}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-300">Points</p>
                                <p className="text-lg font-bold text-blue-400">{points || 0}</p>
                            </div>
                        </div>
                    </>}
        </div>
    );
};

// PlayerCard.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     nationality: PropTypes.string,
//     position: PropTypes.string,
//     totalGoals: PropTypes.number,
//     assists: PropTypes.number,
//     points: PropTypes.number,
//     image: PropTypes.string,
// };

export default PlayerCard;
