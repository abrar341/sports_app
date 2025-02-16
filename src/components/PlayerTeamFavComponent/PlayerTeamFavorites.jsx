import { useState, useEffect } from "react";
import SearchAndAdd from "../Shared/SearchAndAdd";
import CardList from "../Shared/CardList";
import TeamData from "./TeamData";
import { getFavourites, removeFavoritePlayer } from "../../Api/Player/SearchPlayer";
import TeamsCardList from "../Shared/TeamsCardList";
import { removeFavoriteTeam } from "../../Api/Team/SearchTeam";
import { useDispatch, useSelector } from "react-redux";
import { removePlayerFromFavorites, removeTeamFromFavorites, setFavoritePlayersList, setFavoriteTeamsList } from "../../slices/favoritesSlice"; // Import actions
import useFetchFavouritePlayers from "../../hooks/useFetchFavouritePlayers";
import useTeamActions from "../../hooks/useTeamActions";
import TeamInsightSearchBar from "../Shared/TeamInsightSearchBar";
import usePlayerActions from "../../hooks/usePlayerActions";
import PlayerInsightSearchBar from "../Shared/PlayerInsightSearchBar";



const PlayerTeamFavourites = () => {
  const dispatch = useDispatch();
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useFetchFavouritePlayers();

  const handleAddTeam = () => {
    const newTeam = {
      id: teams.length + 1,
      name: `New Team ${teams.length + 1}`,
      image: "/assets/default-team.jpg",
    };
    setTeams([...teams, newTeam]);
  };

  const handleAddPlayer = () => {
    const newPlayer = {
      id: players.length + 1,
      name: `New Player ${players.length + 1}`,
      image: "/assets/default-player.jpg",
    };
    setPlayers([...players, newPlayer]);
  };

  const handleRemoveFavoriteTeam = async (team) => {
    setIsLoading(true)
    try {
      const res = await removeFavoriteTeam(team._id, team.teamId);
      if (res) {
        dispatch(removeTeamFromFavorites(team.teamId));
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
      const res = await removeFavoritePlayer(player.playerRef._id, player.playerId);
      if (res) {
        dispatch(removePlayerFromFavorites(player.playerId));
      }
    } catch (error) {
      console.error("Error removing favorite player:", error);
    }
    finally {
      setIsLoading(false)
    }
  };

  const { handleSelectTeam, SearchTeam } = useTeamActions();
  const { handleSearch, handleSelectPlayer } = usePlayerActions();

  return (
    <div className="min-h-screen overflow-y-auto scrollbar-hide bg-primary text-white  p-8">
      <h1 className="text-2xl font-bold mb-8">Player And Team Favourites</h1>

      {/* Your Team Section */}
      <div className={`col-span-12 `}>
        <TeamInsightSearchBar onSearch={SearchTeam} onSelect={handleSelectTeam} />
      </div>
      <TeamsCardList title="Your Favorite Teams" onSelect={handleSelectTeam} isLoading={isLoading} onDelete={handleRemoveFavoriteTeam} />

      {/* Your Player Section */}
      <div className="mt-12">
        <div className="col-span-12 ">
          {/* <PlayerInsightSearchBar /> */}
          <PlayerInsightSearchBar onSearch={handleSearch} onSelect={handleSelectPlayer} />
        </div>
        <CardList isLoading={isLoading} title="Your Favorite Player" onDelete={handleRemoveFavoritePlayer} />
      </div>
    </div>
  );
};

export default PlayerTeamFavourites;
