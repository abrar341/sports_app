import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setFavoritePlayersOfSelectedPlayerSport,
    setFavoriteTeamsList
} from "../slices/favoritesSlice";
import { getFavourites } from "../Api/Player/SearchPlayer";

const useFetchFavouritePlayersBySelectedSport = () => {
    const dispatch = useDispatch();
    const favoritePlayersOfSelectedPlayerSport = useSelector(state => state.favorites.favoritePlayersOfSelectedPlayerSport); // Redux
    const { selectedPlayerSport } = useSelector(state => state.selection); // Redux
    console.log("selectedPlayerSports", selectedPlayerSport);

    const [loading, setLoading] = useState(true);
    const [favoritesLoading, setFavoritesLoading] = useState(true);

    const fetchFavouritePlayers = useCallback(async () => {
        setFavoritesLoading(true);
        try {
            const response = await getFavourites(selectedPlayerSport);
            const favourites = response?.data?.favourites?.[0];
            if (favourites) {
                dispatch(setFavoritePlayersOfSelectedPlayerSport(favourites.players || []));
            }
        } catch (error) {
            console.error("Error fetching favourite players:", error);
        }
        setFavoritesLoading(false);
    }, [dispatch, selectedPlayerSport]);

    useEffect(() => {
        fetchFavouritePlayers();
    }, [fetchFavouritePlayers, selectedPlayerSport]);

    return { favoritePlayersOfSelectedPlayerSport, favoritesLoading, loading, refetch: fetchFavouritePlayers };
};

export default useFetchFavouritePlayersBySelectedSport;
