import { feelinType } from "@/app/components/Posts/NewPost/FeelingsSelections/FellingsTags";
import { createSlice } from "@reduxjs/toolkit";

export interface newPost {
  postImagesURLs: string[] | null;
  feeling: feelinType | null;
  feelingIsOpened: boolean;
  emojisIsOpened: boolean;
  posetErrorMessage: boolean;
}

const initialState: newPost = {
  postImagesURLs: null,
  feeling: null,
  feelingIsOpened: false,
  emojisIsOpened: false,
  posetErrorMessage: false,
};

export const newPost = createSlice({
  name: "newPost",
  initialState,
  reducers: {
    setPostImagesURLs: (state, action) => {
      state.postImagesURLs = [...action.payload];
    },
    setFeeling: (state, action) => {
      const payed = { ...action.payload };
      state.feeling = { ...payed };
    },
    openFeeling: (state) => {
      state.feelingIsOpened = true;
    },
    closeFeeling: (state) => {
      state.feelingIsOpened = false;
    },
    openEmoji: (state) => {
      state.emojisIsOpened = true;
    },
    closeEmoji: (state) => {
      state.emojisIsOpened = false;
    },
    enableErrorMsg: (state) => {
      state.posetErrorMessage = true;
    },
    disableErrorMsg: (state) => {
      state.posetErrorMessage = false;
    },
  },
});

export default newPost.reducer;
export const newPostActions = newPost.actions;
