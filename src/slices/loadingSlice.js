import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    teamStatsLoading: false,
    playerStatsLoading: false,
    teamProfileLoading: false,
    playerProfileLoading: false,
    favoritePlayersHighlightsLoading: false,
    favoriteTeamsHighlightsLoading: false
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setTeamStatsLoading: (state, action) => {
            state.teamStatsLoading = action.payload;
        },
        setPlayerStatsLoading: (state, action) => {
            state.playerStatsLoading = action.payload;
        },
        setTeamProfileLoading: (state, action) => {
            state.teamProfileLoading = action.payload;
        },
        setPlayerProfileLoading: (state, action) => {
            state.playerProfileLoading = action.payload;
        },
        setFavoritePlayersHighlightsLoading: (state, action) => {
            state.favoritePlayersHighlightsLoading = action.payload;
        },
        setFavoriteTeamsHighlightsLoading: (state, action) => {
            state.favoriteTeamsHighlightsLoading = action.payload;
        },
        resetLoading: (state) => {
            state.teamStatsLoading = false;
            state.playerStatsLoading = false;
            state.teamProfileLoading = false;
            state.playerProfileLoading = false;
            state.favoritePlayersHighlightsLoading = false;
            state.favoriteTeamsHighlightsLoading = false;
        },
    },
});

export const {
    setTeamStatsLoading,
    setPlayerStatsLoading,
    setTeamProfileLoading,
    setPlayerProfileLoading,
    setFavoritePlayersHighlightsLoading,
    setFavoriteTeamsHighlightsLoading,
    resetLoading,
} = loadingSlice.actions;

export default loadingSlice.reducer;
