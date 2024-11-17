import { createSlice } from "@reduxjs/toolkit";

export interface authMood {
  authMoodIsSignUp: boolean;
}

const initialState: authMood = {
  authMoodIsSignUp: false,
};

export const authMood = createSlice({
  name: "authMood",
  initialState,
  reducers: {
    setAuthMoodToSignUp: (state) => {
      state.authMoodIsSignUp = true;
    },
    setAuthMoodToSignIn: (state) => {
      state.authMoodIsSignUp = false;
    },
  },
});

// Action creators are generated for each case reducer function
export default authMood.reducer;
export const authActions = authMood.actions;

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
