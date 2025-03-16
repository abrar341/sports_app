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
    updateSubscription: (state, action) => {

      // ✅ Update local storage
      if (state.userInfo && state.userInfo.data) {
        state.userInfo.data.subscriptionPlan = action.payload.subscriptionPlan;
        state.userInfo.data.subscriptionStatus = action.payload.subscriptionStatus;
        state.userInfo.data.subscriptionPlanExpiry = action.payload.subcribtionExipry;
        // ✅ Update local storage
        localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
      }
    },
  },
});

export const { setCredentials, logout, updateSubscription } = authSlice.actions;

// 🔹 Thunk action to clear other slices on logout
export const logoutUser = () => (dispatch) => {
  dispatch(logout()); // Clears auth state
  dispatch(clearAllFavorites()); // Clears favorites
  dispatch(resetSelection()); // Clears teams
};

export default authSlice.reducer;