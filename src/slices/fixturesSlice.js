import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAFCompletedFixtures, getAFLiveFixtures, getAFUpcomingFixtures, getCompletedFixtures, getLiveFixtures, getUpcomingFixtures } from "../Api/Fixtures/get/fixtures";

export const fetchFixtures = createAsyncThunk(
    "fixtures/fetchFixtures",
    async (_, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setFixturesLoading(true));
            // Fetch fixtures concurrently
            const fetchUpcoming = getUpcomingFixtures().then((res) => {
                dispatch(setUpcomingFixtures(res));
            }).catch((err) => console.error("Error fetching upcoming fixtures:", err));

            const fetchCompleted = getCompletedFixtures().then((res) => {
                dispatch(setCompletedFixtures(res));
            }).catch((err) => console.error("Error fetching completed fixtures:", err));

            const fetchLive = getLiveFixtures().then((res) => {
                dispatch(setLiveFixtures(res));
            }).catch((err) => console.error("Error fetching live fixtures:", err));

            // const fetchUpcomingOdds = getUpcomingFixturesOdds().then((res) => {
            //     dispatch(setUpcomingFixturesOdds(res));
            // }).catch((err) => console.error("Error fetching upcoming fixtures odds:", err));

            // Wait for all promises to complete (but dispatches happen as each one resolves)
            await Promise.allSettled([fetchUpcoming, fetchCompleted, fetchLive]);

        } catch (error) {
            console.error("Error fetching fixtures:", error);
            return rejectWithValue(error.response?.data || "Error fetching fixtures");
        } finally {
            dispatch(setFixturesLoading(false));
        }
    }
);
export const fetchAFFixtures = createAsyncThunk(
    "fixtures/fetchAFFixtures",
    async (_, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setFixturesLoading(true));
            // Fetch fixtures concurrently
            const fetchUpcoming = getAFUpcomingFixtures().then((res) => {
                dispatch(setAFUpcomingFixtures(res));
            }).catch((err) => console.error("Error fetching upcoming fixtures:", err));

            const fetchCompleted = getAFCompletedFixtures().then((res) => {
                dispatch(setAFCompletedFixtures(res));
            }).catch((err) => console.error("Error fetching completed fixtures:", err));

            const fetchLive = getAFLiveFixtures().then((res) => {
                dispatch(setAFLiveFixtures(res));
            }).catch((err) => console.error("Error fetching live fixtures:", err));


            // Wait for all promises to complete (but dispatches happen as each one resolves)
            await Promise.allSettled([fetchUpcoming, fetchCompleted, fetchLive]);

        } catch (error) {
            console.error("Error fetching fixtures:", error);
            return rejectWithValue(error.response?.data || "Error fetching fixtures");
        } finally {
            dispatch(setFixturesLoading(false));
        }
    }
);

const initialState = {

    gameInsightSelectedGame: 'soccer',

    upcomingFixtures: [],
    liveFixtures: [],
    completedFixtures: [],
    upcomingFixturesOdds: [],
    fixturesLoading: false,

    // American Football States
    AFupcomingFixtures: [],
    AFliveFixtures: [],
    AFcompletedFixtures: [],
    AFupcomingFixturesOdds: [],
    AFfixturesLoading: false,
};

const fixturesSlice = createSlice({
    name: "fixtures",
    initialState,
    reducers: {
        setGameInsightSelectedGame: (state, action) => {
            state.gameInsightSelectedGame = action.payload;
        },
        setUpcomingFixtures: (state, action) => {
            state.upcomingFixtures = action.payload || [];
        },
        setLiveFixtures: (state, action) => {
            state.liveFixtures = action.payload || [];
        },
        setCompletedFixtures: (state, action) => {
            state.completedFixtures = action.payload || [];
        },
        setUpcomingFixturesOdds: (state, action) => {
            state.upcomingFixturesOdds = action.payload || [];
        },
        setFixturesLoading: (state, action) => {
            state.fixturesLoading = action.payload;
        },

        // American Football Reducers
        setAFUpcomingFixtures: (state, action) => {
            state.AFupcomingFixtures = action.payload || [];
        },
        setAFLiveFixtures: (state, action) => {
            state.AFliveFixtures = action.payload || [];
        },
        setAFCompletedFixtures: (state, action) => {
            state.AFcompletedFixtures = action.payload || [];
        },
        setAFfixturesLoading: (state, action) => {
            state.AFfixturesLoading = action.payload;
        },
        resetFixtures: (state) => {
            state.upcomingFixtures = [];
            state.liveFixtures = [];
            state.completedFixtures = [];
            state.AFupcomingFixtures = [];
            state.AFliveFixtures = [];
            state.AFcompletedFixtures = [];
        },
        // resetFixtures: (state) => {
        //     state.upcomingFixtures = [];
        //     state.liveFixtures = [];
        //     state.completedFixtures = [];
        // },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchFixtures.fulfilled, (state, action) => {
    //         state.upcomingFixtures = action.payload.upcoming;
    //         state.liveFixtures = action.payload.live;
    //         state.completedFixtures = action.payload.completed;
    //     });
    // },
});

export const { setUpcomingFixtures, setLiveFixtures, setUpcomingFixturesOdds, setFixturesLoading, setCompletedFixtures, resetFixtures, setAFUpcomingFixtures, setAFLiveFixtures, setAFCompletedFixtures, setGameInsightSelectedGame } = fixturesSlice.actions;
export default fixturesSlice.reducer;
