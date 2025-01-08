import { configureStore } from "@reduxjs/toolkit";
import authMood from "./slices/authSlice/Slice";
import newPost from "./slices/newPostSlice/slice";
import commentsSlice from "./slices/commentsSlice/commentsSlice";
import ProfileAlertsSlice from "./slices/ProfileAlertsSlice/ProfileAlertsSlice";
import MessagingSlice from "./slices/MessagingSlice/MessagingSlice";
import NavListSlice from "./slices/NavListSlice/NavListSlice";

export const store = configureStore({
  reducer: {
    authMood,
    newPost,
    commentsSlice,
    ProfileAlertsSlice,
    MessagingSlice,
    NavListSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
