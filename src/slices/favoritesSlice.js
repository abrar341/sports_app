import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoritePlayers: [],
    favoriteTeams: [],
    favoritePlayersHighlights: [], // New array for player highlights
    favoriteTeamHighlights: [],    // New array for team highlights
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addPlayerToFavorites: (state, action) => {
            if (!state.favoritePlayers.includes(action.payload)) {
                state.favoritePlayers.push(action.payload);
            }
        },
        removePlayerFromFavorites: (state, action) => {
            state.favoritePlayers = state.favoritePlayers.filter(player => {
                console.log("Checking player:", action.payload);
                return player.playerId != action.payload;
            });
        },
        addTeamToFavorites: (state, action) => {
            if (!state.favoriteTeams.includes(action.payload)) {
                state.favoriteTeams.push(action.payload);
            }
        },
        removeTeamFromFavorites: (state, action) => {
            state.favoriteTeams = state.favoriteTeams.filter(team => {
                console.log("Checking team:", action.payload);
                return team.teamId != action.payload;
            });
        },

        // New reducers for handling player and team highlights
        addPlayerHighlight: (state, action) => {
            if (!state.favoritePlayersHighlights.some(highlight => highlight.id === action.payload.id)) {
                state.favoritePlayersHighlights.push(action.payload);
            }
        },
        removePlayerHighlight: (state, action) => {
            state.favoritePlayersHighlights = state.favoritePlayersHighlights.filter(
                highlight => highlight.id !== action.payload
            );
        },
        addTeamHighlight: (state, action) => {
            if (!state.favoriteTeamHighlights.some(highlight => highlight.id === action.payload.id)) {
                state.favoriteTeamHighlights.push(action.payload);
            }
        },
        removeTeamHighlight: (state, action) => {
            state.favoriteTeamHighlights = state.favoriteTeamHighlights.filter(
                highlight => highlight.id !== action.payload
            );
        },

        clearAllFavorites: (state) => {
            state.favoritePlayers = [];
            state.favoriteTeams = [];
            state.favoritePlayersHighlights = [];
            state.favoriteTeamHighlights = [];
        },
        setFavoritePlayersList: (state, action) => {
            state.favoritePlayers = action.payload;
        },
        setFavoriteTeamsList: (state, action) => {
            state.favoriteTeams = action.payload;
        },
        setFavoritePlayersHighlights: (state, action) => {
            state.favoritePlayersHighlights = action.payload;
        },
        setFavoriteTeamHighlights: (state, action) => {
            state.favoriteTeamHighlights = action.payload;
        },
    },
});

export const {
    addPlayerToFavorites,
    removePlayerFromFavorites,
    addTeamToFavorites,
    removeTeamFromFavorites,
    addPlayerHighlight,
    removePlayerHighlight,
    addTeamHighlight,
    removeTeamHighlight,
    clearAllFavorites,
    setFavoritePlayersList,
    setFavoriteTeamsList,
    setFavoritePlayersHighlights,
    setFavoriteTeamHighlights,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
