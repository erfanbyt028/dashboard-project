import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  profile: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.isAuthenticated = true;
      state.profile = action.payload; // { name, email }
    },
    signInUser: (state, action) => {
      state.isAuthenticated = true;
      state.profile = action.payload; // { name?, email }
    },
    signOutUser: (state) => {
      state.isAuthenticated = false;
      state.profile = null;
    },
    updateProfile: (state, action) => {
      if (!state.profile) return;
      state.profile = { ...state.profile, ...action.payload };
    },
  },
});

export const { registerUser, signInUser, signOutUser, updateProfile } = userSlice.actions;
export default userSlice.reducer;

