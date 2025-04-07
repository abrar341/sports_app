import { useDispatch, useSelector } from "react-redux";
import { fetchPlayerData, setSelectedPlayer, setSelectedPlayerSports, setSelectedPlayerStats } from "../slices/selectionSlice";
import { getAmericanFootballPlayer, searchPlayer } from "../Api/Player/SearchPlayer";
import { useNavigate } from "react-router-dom";
import { setPlayerProfileLoading, setPlayerStatsLoading } from "../slices";
import { setFavoritePlayersOfSelectedPlayerSport } from "../slices/favoritesSlice";

const usePlayerActions = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { selectedPlayerSports } = useSelector((state) => state.selection);

    // Function to search for players
    const handleSearch = async (query, sportsName) => {
        return await searchPlayer(query, sportsName); // Returns player list
    };

    // Function to select a player and fetch their data
    const handleSelectPlayer = (player) => {
        const { sportName } = player;
        if (sportName && sportName !== selectedPlayerSports) {
            dispatch(setSelectedPlayerSports(sportName))
            dispatch(setFavoritePlayersOfSelectedPlayerSport([]))
        }
        if (location.pathname !== "/player-insight") {
            navigate("/player-insight");
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100); // Small delay to ensure scroll after navigation
        }
        dispatch(fetchPlayerData(player.playerId,));
    };

    // Function to fetch and set American football player data
    const handleSelectAmericanFootballPlayer = async (player) => {
        console.log("player", player);

        const { playerId, sportName } = player;

        if (sportName && sportName !== selectedPlayerSports) {
            dispatch(setSelectedPlayerSports(sportName))
            dispatch(setFavoritePlayersOfSelectedPlayerSport([]))
        }
        if (location.pathname !== "/player-insight") {
            navigate("/player-insight");
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100);
        }
        try {
            // Dispatch loading actions from loadingSlice
            // dispatch(setSelectedPlayerSports(sportName))
            dispatch(setPlayerProfileLoading(true));
            dispatch(setPlayerStatsLoading(true));
            const res = await getAmericanFootballPlayer(playerId);

            if (res) {
                const { statistics, ...playerProfile } = res.data; // Extract statistics and keep the rest
                dispatch(setSelectedPlayer(playerProfile)); // Store all data except statistics
                dispatch(setSelectedPlayerStats(statistics || [])); // Store only statistics
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            dispatch(setPlayerProfileLoading(false));
            dispatch(setPlayerStatsLoading(false));
        }
    };

    // Function to select a player from favorites and fetch their data
    const handleSelectPlayerFromFav = (player, sportsName) => {
        if (sportsName && sportsName !== selectedPlayerSports) {
            dispatch(setSelectedPlayerSports(sportsName))
            dispatch(setFavoritePlayersOfSelectedPlayerSport([]))
        }

        if (location.pathname !== "/player-insight") {
            navigate("/player-insight");
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100);
        }
        if (sportsName === "soccer") {
            dispatch(fetchPlayerData(player.playerId))
        }
        else {
            handleSelectAmericanFootballPlayer(player)
        }
    };



    return {
        handleSearch,
        handleSelectPlayer,
        handleSelectPlayerFromFav,
        handleSelectAmericanFootballPlayer
    };
};

export default usePlayerActions;
