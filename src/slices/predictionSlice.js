import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUpcomingAFPredictions, getAllUpcomingFixturesPredictions, getAFPredictionByGameId } from '../Api/Predictions/Prediction';

// Async thunk to fetch upcoming fixtures predictions
export const fetchUpcomingFixturesPredictions = createAsyncThunk(
    'predictions/fetchUpcomingFixturesPredictions',
    async (_, { rejectWithValue }) => {
        try {
            const data = await getAllUpcomingFixturesPredictions();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Async thunk to fetch American Football upcoming fixtures predictions
export const fetchUpcomingAFFixturesPredictions = createAsyncThunk(
    'predictions/fetchUpcomingAFFixturesPredictions',
    async (_, { rejectWithValue }) => {
        try {
            const data = await getAllUpcomingAFPredictions();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Async thunk to fetch American Football prediction by gameId
export const fetchAFPredictionByGameId = createAsyncThunk(
    'predictions/fetchAFPredictionByGameId',
    async (gameId, { rejectWithValue }) => {
        try {
            const data = await getAFPredictionByGameId(gameId);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    upcomingFixturesPredictions: [], // Initial state for storing upcoming fixtures predictions
    AFupcomingFixturesPredictions: [], // Initial state for storing american football upcoming fixtures predictions
    predictionLoading: false, // Loading state
    gameIdPredictionLoading: false, // Loading state specifically for individual gameId predictions
};

const predictionSlice = createSlice({
    name: 'predictions',
    initialState,
    reducers: {
        //soccer
        setUpcomingFixturesPredictions: (state, action) => {
            state.upcomingFixturesPredictions = action.payload;
        },
        //american football 
        setAFUpcomingFixturesPredictions: (state, action) => {
            state.AFupcomingFixturesPredictions = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Soccer fixtures
            .addCase(fetchUpcomingFixturesPredictions.pending, (state) => {
                state.predictionLoading = true;
            })
            .addCase(fetchUpcomingFixturesPredictions.fulfilled, (state, action) => {
                state.predictionLoading = false;
                state.upcomingFixturesPredictions = action.payload.data;
            })
            .addCase(fetchUpcomingFixturesPredictions.rejected, (state) => {
                state.predictionLoading = false;
            })
            // American Football fixtures
            .addCase(fetchUpcomingAFFixturesPredictions.pending, (state) => {
                state.predictionLoading = true;
            })
            .addCase(fetchUpcomingAFFixturesPredictions.fulfilled, (state, action) => {
                state.predictionLoading = false;
                state.AFupcomingFixturesPredictions = action.payload.data;
            })
            .addCase(fetchUpcomingAFFixturesPredictions.rejected, (state) => {
                state.predictionLoading = false;
            })
            // American Football prediction by gameId
            .addCase(fetchAFPredictionByGameId.pending, (state) => {
                state.gameIdPredictionLoading = true;
            })
            .addCase(fetchAFPredictionByGameId.fulfilled, (state, action) => {
                state.gameIdPredictionLoading = false;
                if (action.payload && action.payload.data) {
                    const newPrediction = action.payload.data;
                    const existingIndex = state.AFupcomingFixturesPredictions.findIndex(
                        pred => pred.gameId === newPrediction.gameId
                    );

                    if (existingIndex !== -1) {
                        // Replace existing prediction
                        state.AFupcomingFixturesPredictions[existingIndex] = newPrediction;
                    } else {
                        // Add new prediction
                        state.AFupcomingFixturesPredictions.push(newPrediction);
                    }
                }
            })
            .addCase(fetchAFPredictionByGameId.rejected, (state) => {
                state.gameIdPredictionLoading = false;
            });
    },
});

export const { setUpcomingFixturesPredictions, setAFUpcomingFixturesPredictions } = predictionSlice.actions;
export default predictionSlice.reducer;