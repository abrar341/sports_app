import { createSlice } from '@reduxjs/toolkit';
import { clearAllFavorites } from './favoritesSlice';
import { resetSelection } from './selectionSlice';

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

// 🔹 Thunk action to clear other slices on logout
export const logoutUser = () => (dispatch) => {
  dispatch(logout()); // Clears auth state
  dispatch(clearAllFavorites()); // Clears favorites
  dispatch(resetSelection()); // Clears teams
};

export default authSlice.reducer;