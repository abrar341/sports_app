// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import {
//     setFavoritePlayersHighlights,
//     setFavoriteTeamsHighlights,
//     setError
// } from "../redux/highlightsSlice";
// import {
//     setFavoritePlayersHighlightsLoading,
//     setFavoriteTeamsHighlightsLoading
// } from "../redux/loadingSlice"; // Import loading actions
// import { getFavouriteHighlights } from "../api"; // API function

// const useFavouriteHighlights = (sportName) => {
//     console.log("sportName", sportName);

//     const dispatch = useDispatch();
//     const { favoritePlayersHighlights, favoriteTeamHighlights } = useSelector(
//         (state) => state.highlights
//     );
//     const { favoritePlayersHighlightsLoading, favoriteTeamsHighlightsLoading, error } = useSelector(
//         (state) => state.loading
//     );

//     useEffect(() => {
//         const fetchHighlights = async () => {
//             console.log("sportName", sportName);

//             dispatch(setFavoritePlayersHighlightsLoading(true));
//             dispatch(setFavoriteTeamsHighlightsLoading(true));

//             try {
//                 const res = await getFavouriteHighlights(sportName);

//                 if (res?.data) {
//                     dispatch(setFavoritePlayersHighlights(res.data.players || []));
//                     dispatch(setFavoriteTeamsHighlights(res.data.teams || []));
//                 }
//             } catch (err) {
//                 dispatch(setError(err.message));
//             } finally {
//                 dispatch(setFavoritePlayersHighlightsLoading(false));
//                 dispatch(setFavoriteTeamsHighlightsLoading(false));
//             }
//         };

//         fetchHighlights();
//     }, [sportName, dispatch]);

//     return {
//         players: favoritePlayersHighlights,
//         teams: favoriteTeamHighlights,
//         loading: favoritePlayersHighlightsLoading || favoriteTeamsHighlightsLoading,
//         error,
//     };
// };

// export default useFavouriteHighlights;
