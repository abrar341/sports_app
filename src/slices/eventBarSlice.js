import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedSport: "soccer",
    selectedLeague: null,
};

const eventBarSlice = createSlice({
    name: "eventBar",
    initialState,
    reducers: {
        setSelectedSport: (state, action) => {
            state.selectedSport = action.payload;
        },
        setSelectedLeague: (state, action) => {
            state.selectedLeague = action.payload;
        },
    },
});

export const { setSelectedSport, setSelectedLeague } = eventBarSlice.actions;
export default eventBarSlice.reducer;