import { useSelector } from "react-redux";

const useIsTeamFavorite = (teamId) => {
    const teams = useSelector((state) => state.favorites.favoriteTeams);
    return teams?.some(team => team.teamId == teamId);
};

export default useIsTeamFavorite;
