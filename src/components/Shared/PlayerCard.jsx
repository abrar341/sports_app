import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import {
  addFavoritePlayer,
  removeFavoritePlayer,
} from "../../Api/Player/SearchPlayer";
import { useDispatch, useSelector } from "react-redux";
import useIsPlayerFavorite from "../../hooks/useIsPlayerFavorite";
import {
  addPlayerToFavorites,
  addPlayerToSelectedSportFavorites,
  removePlayerFromFavorites,
  removePlayerFromSelectedSportFavorites,
} from "../../slices/favoritesSlice";
import { useState } from "react";
import {
  calculateFootballPlayerStats,
  calculatePlayerStats,
} from "../../utils/calculateStats";
import Loading from "./Loading";
import { getStatsConfig } from "../../utils/statsConfig";

const PlayerCard = ({ selectedPlayer, playerStats, favoritesLoading }) => {
  const {
    playerId,
    playerRef,
    name,
    age,
    nationality,
    position,
    image,
    college,
    sportName,
  } = selectedPlayer;
  const [isLoading, setIsLoading] = useState(false);
  const isFavorite = useIsPlayerFavorite(playerId);
  const dispatch = useDispatch();

  const playerStatsData =
    sportName === "soccer"
      ? calculatePlayerStats(playerStats)
      : sportName === "american-football"
      ? calculateFootballPlayerStats(playerStats)
      : {};

  const statsConfig = getStatsConfig(sportName, playerStatsData);
  const { favoritePlayersSports } = useSelector((state) => state.selection); // Get from Redux

  const handleAddFavorite = async (playerRef, playerId, sportName) => {
    setIsLoading(true);
    try {
      const res = await addFavoritePlayer(playerRef, playerId, sportName);
      const fetchedPlayers = res?.data?.favourites?.[0]?.players || [];
      if (fetchedPlayers.length === 0) {
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

      dispatch(addPlayerToSelectedSportFavorites(favoritePlayerData));

      if (sportName === favoritePlayersSports) {
        dispatch(addPlayerToFavorites(favoritePlayerData));
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error adding player to favorites:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveFavoritePlayer = async (player, playerRef, sportName) => {
    setIsLoading(true);
    try {
      const res = await removeFavoritePlayer(playerRef, player, sportName); // Pass player.playerId
      if (res) {
        dispatch(removePlayerFromSelectedSportFavorites(player)); // Remove correct player
        if (sportName === favoritePlayersSports) {
          dispatch(removePlayerFromFavorites(player));
        }
      }
    } catch (error) {
      console.error("Error removing player from favorites:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const { teamStatsLoading, playerProfileLoading } = useSelector(
    (state) => state.loading
  );

  return teamStatsLoading || playerProfileLoading ? (
    <Loading />
  ) : (
    <div className="relative bg-secondary p-6  rounded-xl flex flex-col items-center shadow-lg">
      {playerProfileLoading ? (
        <div className="flex w-full h-full justify-center items-center py-4">
          <div className="w-6 h-6 border-4 border-primarySolid border-t-secondary rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <img
            src={
              image || "https://media.api-sports.io/football/players/198360.png"
            } // Fallback Image
            loading="lazy"
            alt={name}
            className="w-20 h-20 object-cover rounded-full mb-2 border-4 border-blue-700 shadow-md"
          />
          <div className=" top-5 absolute right-5">
            {isLoading || favoritesLoading ? (
              <div className="w-6 h-6  border-4 border-black border-t-primarySolid rounded-full animate-spin"></div>
            ) : isFavorite ? (
              <MdOutlineFavorite
                onClick={() =>
                  handleRemoveFavoritePlayer(playerId, playerRef, sportName)
                }
                className="cursor-pointer w-6 h-6"
              />
            ) : (
              <MdOutlineFavoriteBorder
                onClick={() =>
                  handleAddFavorite(playerRef, playerId, sportName)
                }
                className="cursor-pointer w-6 h-6"
              />
            )}
          </div>

          <h3 className="text-lg font-bold text-white">{name}</h3>
          {college && <p className="text-sm text-gray-400 mb-1">{college}</p>}
          {age ? (
            <p className="text-sm text-gray-400 mb-2">{age || 0} Years Old</p>
          ) : (
            "-"
          )}
          {/* Player Details */}
          <div className="flex justify-between w-full text-sm text-gray-300 mb-4">
            <p>
              Nationality:{" "}
              <span className="text-white font-semibold">{nationality}</span>
            </p>
            <p>
              Position:{" "}
              <span className="text-white font-semibold">{position}</span>
            </p>
          </div>
          {/* Player Stats */}
          <div className="flex justify-between w-full border-t border-blue-800 pt-4">
            {statsConfig.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-sm text-gray-300">{stat.label}</p>
                <p className={`text-lg font-bold ${stat.color}`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
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
