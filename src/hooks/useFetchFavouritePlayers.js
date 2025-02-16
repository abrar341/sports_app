import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavoritePlayersList, setFavoriteTeamsList } from "../slices/favoritesSlice";
import { getFavourites } from "../Api/Player/SearchPlayer";

const useFetchFavouritePlayers = () => {
    const dispatch = useDispatch();
    const favoritePlayers = useSelector(state => state.favorites.favoritePlayers); // Get from Redux
    const [loading, setLoading] = useState(true);

    const fetchFavouritePlayers = useCallback(async () => {
        setLoading(true);
        try {
            const response = await getFavourites();
            console.log("Favourite Players Response:", response);

            const favourites = response?.data?.favourites?.[0];
            if (favourites) {
                dispatch(setFavoritePlayersList(favourites.players || []));
                dispatch(setFavoriteTeamsList(favourites.teams || []));
            }
        } catch (error) {
            console.error("Error fetching favourite players:", error);
        }
        setLoading(false);
    }, [dispatch]);

    useEffect(() => {
        fetchFavouritePlayers();
    }, [fetchFavouritePlayers]);

    return { favoritePlayers, loading, refetch: fetchFavouritePlayers }; // Return values
};

export default useFetchFavouritePlayers;
