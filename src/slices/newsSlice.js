import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedSport: 'soccer', // Default sport
    trendingNews: [],        // Trending news array
    allNews: [],
    page: 1,
    totalPages: 1,
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setSelectedSport: (state, action) => {
            state.selectedSport = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setTrendingNews: (state, action) => {
            state.trendingNews = action.payload ? [...action.payload] : [];
        },
        setAllNews: (state, action) => {
            state.allNews = action.payload ? [...action.payload] : [];
        },

    },
});

export const { setSelectedSport, setTrendingNews, setAllNews, setPage, setTotalPages } = newsSlice.actions;
export default newsSlice.reducer;
