import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPlayerAggregatedStats, getPlayerProfile } from '../Api/Player/SearchPlayer';
import { setPlayerProfileLoading, setPlayerStatsLoading } from './index.js';


// Thunk to fetch player profile and stats
export const fetchPlayerData = createAsyncThunk(
    'selection/fetchPlayerData',
    async (playerId, { dispatch, rejectWithValue }) => {
        try {
            // Dispatch loading actions from loadingSlice
            dispatch(setPlayerProfileLoading(true));
            dispatch(setPlayerStatsLoading(true));

            const { data: profileData } = await getPlayerProfile(playerId);

            let playerProfile = null;
            if (Array.isArray(profileData) && profileData.length > 0) {
                playerProfile = profileData[0];
            } else if (profileData) {
                playerProfile = profileData;
            } else {
                console.warn("No profile data found for the selected player.");
            }
            const statsResponse = await getPlayerAggregatedStats(playerId);
            const playerStats = statsResponse?.data || [];

            return { profile: playerProfile, stats: playerStats };
        } catch (error) {
            console.error("Error fetching player profile or stats:", error);
            return rejectWithValue(error.response?.data || "Error fetching player data");
        } finally {
            // Stop loading state when API call completes
            dispatch(setPlayerProfileLoading(false));
            dispatch(setPlayerStatsLoading(false));
        }
    }
);



const initialState = {
    selectedPlayer: null,
    selectedTeam: null,
    selectedTeamStats: [],
    selectedPlayerStats: [],
    selectedPlayerSports: null, // Added state
    selectedTeamSports: null, // Added state
    favoritePlayersSports: "soccer", // Added state
    playerOrTeam: "player", // Added state
    sportsNameDashboard: "soccer", // selected Sports Name at Dashboard
};

const selectionSlice = createSlice({
    name: 'selection',
    initialState,
    reducers: {
        setSelectedPlayer: (state, action) => {
            state.selectedPlayer = action.payload ? { ...action.payload } : null;
        },
        setSelectedTeam: (state, action) => {
            state.selectedTeam = action.payload ? { ...action.payload } : null;
        },
        setSelectedTeamStats: (state, action) => {
            state.selectedTeamStats = action.payload ? [...action.payload] : [];
        },
        setSelectedPlayerStats: (state, action) => {
            state.selectedPlayerStats = action.payload ? [...action.payload] : [];
        },
        setPlayerOrTeam: (state, action) => {
            state.playerOrTeam = action.payload;
        },
        setSportsNameDashboard: (state, action) => {
            state.sportsNameDashboard = action.payload;
        },
        setSelectedPlayerSports: (state, action) => {
            state.selectedPlayerSports = action.payload;
        },
        setSelectedTeamSports: (state, action) => {
            state.selectedTeamSports = action.payload;
        },
        setFavoritePlayersSports: (state, action) => {
            state.favoritePlayersSports = action.payload;
        },
        resetSelection: (state) => {
            state.selectedPlayer = null;
            state.selectedTeam = null;
            state.selectedTeamStats = [];
            state.selectedPlayerStats = [];
            state.playerOrTeam = "player"; // Reset to default
            state.sportsNameDashboard = "soccer"; // Reset to default
            state.selectedPlayerSports = "soccer"; // Reset to default
            state.selectedTeamSports = "soccer"; // Reset to default
            state.favoritePlayersSports = "soccer"; // Reset to default
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPlayerData.fulfilled, (state, action) => {
            state.selectedPlayer = action.payload.profile;
            state.selectedPlayerStats = action.payload.stats;
        });
    },
});

export const { setSelectedPlayer, setFavoritePlayersSports, setSelectedPlayerStats, setSelectedTeamSports, setSelectedPlayerSports, setSelectedTeam, setSelectedTeamStats, setPlayerOrTeam, setSportsNameDashboard, resetSelection } = selectionSlice.actions;
export default selectionSlice.reducer;