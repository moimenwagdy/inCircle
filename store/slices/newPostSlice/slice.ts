import { feelinType } from "@/app/components/Posts/NewPost/Feelings/FellingsTags";
import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface authMood {
  postImagesURLs: string[];
  feeling: feelinType;
}

const initialState: authMood = {
  postImagesURLs: [],
  feeling: { feeling: "", shape: "" },
};

export const newPost = createSlice({
  name: "authMood",
  initialState,
  reducers: {
    setPostImagesURLs: (state, action) => {
      state.postImagesURLs = [...action.payload];
    },
    setFeeling: (state, action) => {
      const payed = { ...action.payload };
      state.feeling = { ...payed };
    },
  },
});

export default newPost.reducer;
export const newPostActions = newPost.actions;
