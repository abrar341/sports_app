import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUpcomingFixturesPredictions } from '../Api/Predictions/Prediction';

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

const initialState = {
    upcomingFixturesPredictions: [], // Initial state for storing upcoming fixtures predictions
    predictionLoading: false, // Loading state
};

const predictionSlice = createSlice({
    name: 'predictions',
    initialState,
    reducers: {
        setUpcomingFixturesPredictions: (state, action) => {
            state.upcomingFixturesPredictions = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpcomingFixturesPredictions.pending, (state) => {
                state.predictionLoading = true;
            })
            .addCase(fetchUpcomingFixturesPredictions.fulfilled, (state, action) => {
                state.predictionLoading = false;
                state.upcomingFixturesPredictions = action.payload.data;
            })
            .addCase(fetchUpcomingFixturesPredictions.rejected, (state) => {
                state.predictionLoading = false;
            });
    },
});

export const { setUpcomingFixturesPredictions } = predictionSlice.actions;
export default predictionSlice.reducer;
