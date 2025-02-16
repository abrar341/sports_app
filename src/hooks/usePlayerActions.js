import { useDispatch } from "react-redux";
import { fetchPlayerData } from "../slices/selectionSlice";
import { searchPlayer } from "../Api/Player/SearchPlayer";


const usePlayerActions = () => {
    const dispatch = useDispatch();

    // Function to search for players
    const handleSearch = async (query) => {
        return await searchPlayer(query); // Returns player list
    };

    // Function to select a player and fetch their data
    const handleSelectPlayer = (player) => {
        dispatch(fetchPlayerData(player.player.id));
    };

    return { handleSearch, handleSelectPlayer };
};

export default usePlayerActions;
