import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navListStatus: false,
};

export const NavListSlice = createSlice({
  name: "NavListSlice",
  initialState,
  reducers: {
    openList: (state) => {
      state.navListStatus = true;
    },
    closeList: (state) => {
      state.navListStatus = false;
    },
  },
});

export default NavListSlice.reducer;
export const NavListSliceActions = NavListSlice.actions;
