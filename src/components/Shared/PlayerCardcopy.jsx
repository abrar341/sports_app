import {
  addFavoritePlayer,
  removeFavoritePlayer,
} from "../../Api/Player/SearchPlayer";
import { useDispatch, useSelector } from "react-redux";
import useIsPlayerFavorite from "../../hooks/useIsPlayerFavorite";
import {
  addPlayerToFavorites,
  removePlayerFromFavorites,
} from "../../slices/favoritesSlice";
import { useState } from "react";
import { calculatePlayerStats } from "../../utils/calculateStats";
import Loading from "./Loading";
import usePlayerActions from "../../hooks/usePlayerActions";

const PlayerCard = ({
  sportsName,
  playerId,
  playerStats,
  playerRef,
  name,
  profileLoading,
  group,
  position,
  image,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const isFavorite = useIsPlayerFavorite(playerId);
  const dispatch = useDispatch();
  const player = { playerId, sportName: sportsName };
  const { totalGoals, assists, points } = calculatePlayerStats(playerStats);
  const {
    handleSearch,
    handleSelectPlayer,
    handleSelectAmericanFootballPlayer,
  } = usePlayerActions();

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
    } finally {
      setIsLoading(false);
    }
  };

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
    <div
      onClick={() => {
        handleSelectAmericanFootballPlayer(player);
      }}
      className="relative cursor-pointer bg-secondary p-6  rounded-xl flex flex-col items-center shadow-lg"
    >
      {profileLoading ? (
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
            className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-blue-700 shadow-md"
          />
          {/* <div className=" top-5 absolute right-5">
                            {isLoading ? (
                                <div className="w-6 h-6  border-4 border-gray-400 border-t-white rounded-full animate-spin"></div>
                            ) : isFavorite ? (
                                <MdOutlineFavorite onClick={() => handleRemoveFavoritePlayer(playerId, playerRef)} className="cursor-pointer w-6 h-6" />
                            ) : (
                                <MdOutlineFavoriteBorder onClick={handleAddFavorite} className="cursor-pointer w-6 h-6" />
                            )}
                        </div> */}

          <h3 className="text-lg mb-2 font-bold text-white">{name}</h3>

          <div className="flex justify-between w-full text-sm text-gray-300">
            <p className="flex flex-col items-center">
              <span className=" text-center font-semibold text-red-500">
                Group
              </span>{" "}
              <span className="text-white font-semibold">{group}</span>
            </p>
            <div className="shrink-0 self-stretch my-auto w-0 h-9 border border-gray-500" />
            <p className="flex flex-col items-center">
              <span className=" text-center font-semibold text-green-500">
                Position
              </span>{" "}
              <span className="text-white font-semibold">{position}</span>
            </p>
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
