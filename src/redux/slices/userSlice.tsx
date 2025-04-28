import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null, // Store user details here
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state:any, action:any) => {
      state.userData = action.payload;
    },
    clearUserData: (state) => {
      state.userData = null;
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
