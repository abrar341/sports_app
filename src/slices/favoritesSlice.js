import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoritePlayers: [],
    favoriteTeams: [],
    favoritePlayersOfSelectedPlayerSport: [], // New state for selected player sport favorites
    favoriteTeamsOfSelectedTeamSport: [], // New state for selected player sport favorites
    favoritePlayersHighlights: [], // New array for player highlights
    favoriteTeamsHighlights: [],    // New array for team highlights
    favoriteLeaguessHighlights: [], // New array for league highlights
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
                return team.teamId != action.payload;
            });
        },

        // New reducers for managing favoritePlayersOfSelectedPlayerSport
        addPlayerToSelectedSportFavorites: (state, action) => {
            if (!state.favoritePlayersOfSelectedPlayerSport.some(player => player.playerId === action.payload.playerId)) {
                state.favoritePlayersOfSelectedPlayerSport.push(action.payload);
            }
        },
        removePlayerFromSelectedSportFavorites: (state, action) => {
            state.favoritePlayersOfSelectedPlayerSport = state.favoritePlayersOfSelectedPlayerSport.filter(player => {
                return player.playerId != action.payload;
            });
        },

        // New reducers for managing favoritePlayersOfSelectedPlayerSport
        addFavoriteTeamsOfSelectedTeamSport: (state, action) => {
            if (!state.favoriteTeamsOfSelectedTeamSport.includes(action.payload)) {
                state.favoriteTeamsOfSelectedTeamSport.push(action.payload);
            }
        },

        removeFavoriteTeamsOfSelectedTeamSport: (state, action) => {
            state.favoriteTeamsOfSelectedTeamSport = state.favoriteTeamsOfSelectedTeamSport.filter(team => {
                return team.teamId != action.payload;
            });
        },


        // New reducers for handling player, team, and league highlights
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
            if (!state.favoriteTeamsHighlights.some(highlight => highlight.id === action.payload.id)) {
                state.favoriteTeamsHighlights.push(action.payload);
            }
        },
        removeTeamHighlight: (state, action) => {
            state.favoriteTeamsHighlights = state.favoriteTeamsHighlights.filter(
                highlight => highlight.id !== action.payload
            );
        },
        addLeagueHighlight: (state, action) => {
            if (!state.favoriteLeaguessHighlights.some(highlight => highlight.id === action.payload.id)) {
                state.favoriteLeaguessHighlights.push(action.payload);
            }
        },
        removeLeagueHighlight: (state, action) => {
            state.favoriteLeaguessHighlights = state.favoriteLeaguessHighlights.filter(
                highlight => highlight.id !== action.payload
            );
        },

        clearAllFavorites: (state) => {
            state.favoritePlayers = [];
            state.favoriteTeams = [];
            state.favoritePlayersHighlights = [];
            state.favoriteTeamsHighlights = [];
            state.favoriteLeaguessHighlights = [];
        },
        resetHighlights: (state) => {
            state.favoritePlayersHighlights = [];
            state.favoriteTeamsHighlights = [];
            state.favoriteLeaguessHighlights = [];
        },
        // New reducers for favoritePlayersOfSelectedPlayerSport
        setFavoritePlayersOfSelectedPlayerSport: (state, action) => {
            state.favoritePlayersOfSelectedPlayerSport = action.payload;
        },
        // New reducers for favoriteTeamsOfSelectedTeamSport
        setFavoriteTeamsOfSelectedTeamSport: (state, action) => {
            state.favoriteTeamsOfSelectedTeamSport = action.payload;
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
        setFavoriteTeamsHighlights: (state, action) => {
            state.favoriteTeamsHighlights = action.payload;
        },
        setFavoriteLeaguesHighlights: (state, action) => {
            state.favoriteLeaguessHighlights = action.payload;
        },
    },
});

export const {
    addPlayerToFavorites,
    removePlayerFromFavorites,
    addPlayerToSelectedSportFavorites, // ✅ New export
    removePlayerFromSelectedSportFavorites, // ✅ New export
    addTeamToFavorites,
    removeTeamFromFavorites,
    addPlayerHighlight,
    removePlayerHighlight,
    addTeamHighlight,
    removeTeamHighlight,
    addLeagueHighlight,
    removeLeagueHighlight,
    clearAllFavorites,
    setFavoritePlayersList,
    setFavoriteTeamsList,
    setFavoritePlayersHighlights,
    setFavoriteTeamsHighlights,
    setFavoritePlayersOfSelectedPlayerSport,
    setFavoriteTeamsOfSelectedTeamSport,
    addFavoriteTeamsOfSelectedTeamSport,
    removeFavoriteTeamsOfSelectedTeamSport,
    setFavoriteLeaguesHighlights,
    resetHighlights,

} = favoritesSlice.actions;

export default favoritesSlice.reducer;
