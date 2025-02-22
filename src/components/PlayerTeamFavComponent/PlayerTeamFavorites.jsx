import { useCallback, useEffect, useState } from "react";
import CardList from "../Shared/CardList";
import { getFavourites, removeFavoritePlayer } from "../../Api/Player/SearchPlayer";
import TeamsCardList from "../Shared/TeamsCardList";
import { removeFavoriteTeam } from "../../Api/Team/SearchTeam";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteTeamsOfSelectedTeamSport, removeFavoriteTeamsOfSelectedTeamSport, removePlayerFromFavorites, removePlayerFromSelectedSportFavorites, removeTeamFromFavorites, setFavoriteLeaguesHighlights, setFavoritePlayersList, setFavoriteTeamsList } from "../../slices/favoritesSlice"; // Import actions
import useFetchFavouritePlayers from "../../hooks/useFetchFavouritePlayers";
import useTeamActions from "../../hooks/useTeamActions";
import usePlayerActions from "../../hooks/usePlayerActions";
import { setFavoritePlayersSports } from "../../slices/selectionSlice";



const PlayerTeamFavourites = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { favoritePlayersSports, selectedTeamSports, selectedPlayerSports } = useSelector(state => state.selection); // Get from Redux
  // const { favoritesLoading } = useFetchFavouritePlayers();

  const favoritePlayers = useSelector(state => state.favorites.favoritePlayers); // Get from Redux

  const [favoritesLoading, setFavoritesLoading] = useState(false);

  const fetchFavouritePlayers = useCallback(async () => {
    setFavoritesLoading(true);
    try {
      const response = await getFavourites(favoritePlayersSports);
      const favourites = response?.data?.favourites?.[0];
      if (favourites) {
        dispatch(setFavoritePlayersList(favourites.players || []));
        dispatch(setFavoriteTeamsList(favourites.teams || []));
      }
    } catch (error) {
      console.error("Error fetching favourite players:", error);
    }
    setFavoritesLoading(false);
  }, [dispatch, favoritePlayersSports]);

  // useEffect(() => {
  //   fetchFavouritePlayers();
  // }, [fetchFavouritePlayers, favoritePlayersSports]);

  useEffect(() => {
    if (favoritePlayers.length === 0) {
      fetchFavouritePlayers();
    }
  }, [fetchFavouritePlayers, favoritePlayersSports, favoritePlayers.length]);


  const handleRemoveFavoriteTeam = async (team) => {
    setIsLoading(true)
    try {
      const res = await removeFavoriteTeam(team._id, team.teamId, favoritePlayersSports);
      if (res) {
        dispatch(removeTeamFromFavorites(team.teamId));
        if (selectedTeamSports === favoritePlayersSports) {
          dispatch(removeFavoriteTeamsOfSelectedTeamSport(team.teamId));
        }
      }
    } catch (error) {
      console.error("Error removing favorite team:", error);
    }
    finally {
      setIsLoading(false)

    }
  };
  const handleRemoveFavoritePlayer = async (player) => {
    try {
      setIsLoading(true)

      const res = await removeFavoritePlayer(player.playerRef._id, player.playerId, favoritePlayersSports);
      if (res) {
        dispatch(removePlayerFromFavorites(player.playerId));
        if (selectedPlayerSports === favoritePlayersSports) {
          dispatch(removePlayerFromSelectedSportFavorites(player.playerId));
        }
      }
    } catch (error) {
      console.error("Error removing favorite player:", error);
    }
    finally {
      setIsLoading(false)
    }
  };

  const { handleSelectTeam } = useTeamActions();
  const { handleSelectPlayerFromFav } = usePlayerActions();

  return (
    <div className="min-h-screen overflow-y-auto scrollbar-hide bg-primary text-white  p-8">
      <div className="flex">
        <h1 className="text-2xl w-full font-bold mb-8">Player And Team Favourites</h1>
        <select
          value={favoritePlayersSports}
          onChange={(e) => {
            dispatch(setFavoritePlayersSports(e.target.value))
            dispatch(setFavoritePlayersList([]))
            dispatch(setFavoriteTeamsList([]))
          }
          }
          className="bg-primarySolid w-[200px] text-white px-4 py-2 md:py-2 rounded-full focus:outline-none h-full shadow-[0px_1px_55px_0px_rgba(84,84,84,0.06)]"
        >
          <option value="soccer">Soccer</option>
          <option value="american-football">American Football</option>
        </select>
      </div>

      {/* Your Team Section */}

      <TeamsCardList favoritesLoading={favoritesLoading} favoritePlayersSports={favoritePlayersSports} title="Your Favorite Teams" onSelect={handleSelectTeam} isLoading={isLoading} onDelete={handleRemoveFavoriteTeam} />

      {/* Your Player Section */}
      <CardList favoritesLoading={favoritesLoading} favoritePlayersSports={favoritePlayersSports} isLoading={isLoading} title="Your Favorite Player" onSelect={handleSelectPlayerFromFav} onDelete={handleRemoveFavoritePlayer} />
    </div>
  );
};

export default PlayerTeamFavourites;
