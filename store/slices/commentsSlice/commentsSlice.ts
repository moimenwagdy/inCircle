import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  getCommentsState: false,
};

export const commentsSlice = createSlice({
  name: "authMood",
  initialState,
  reducers: {
    enableGetComments: (state) => {
      state.getCommentsState = true;
    },
    disableGetComments: (state) => {
      state.getCommentsState = false;
    },
  },
});

export default commentsSlice.reducer;
export const commentsSliceActions = commentsSlice.actions;
