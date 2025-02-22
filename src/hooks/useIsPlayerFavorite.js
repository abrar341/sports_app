import { useSelector } from "react-redux";

const useIsPlayerFavorite = (playerId) => {
    const players = useSelector((state) => state.favorites.favoritePlayersOfSelectedPlayerSport);
    return players?.some(player => {
        return player.playerId == playerId;
    });
};
export default useIsPlayerFavorite;
