import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showNotifs: false,
  showMsssages: false,
};

export const ProfileAlertsSlice = createSlice({
  name: "ProfileAlertsSlice",
  initialState,
  reducers: {
    openNotifs: (state) => {
      state.showNotifs = true;
    },
    closeNotifs: (state) => {
      state.showNotifs = false;
    },
    openMessages: (state) => {
      state.showMsssages = true;
    },
    closeMessages: (state) => {
      state.showMsssages = false;
    },
  },
});

export default ProfileAlertsSlice.reducer;
export const profileAlertsActions = ProfileAlertsSlice.actions;
