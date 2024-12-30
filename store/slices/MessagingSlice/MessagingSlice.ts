import { participant } from "@/globalTypes/globalTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipientIDs: [],
  chatState: false,
  conversationID: "",
  participantsData: [] as participant[],
  profileChatState: false,
};

export const MessagingSlice = createSlice({
  name: "MessagingSlice",
  initialState,
  reducers: {
    setRecipientIDs: (state, action) => {
      state.recipientIDs = action.payload;
      console.log("from participantsid", action.payload);
    },
    openChat: (state) => {
      state.chatState = true;
    },
    closeChat: (state) => {
      state.chatState = false;
    },
    setConversationId: (state, action) => {
      state.conversationID = action.payload;
      console.log("from conversationID", action.payload);
    },
    setParticipantsData: (state, action) => {
      state.participantsData = [...action.payload];
    },
    openProfileChat: (state) => {
      state.profileChatState = true;
    },
    closeProfileChat: (state) => {
      state.profileChatState = false;
    },
  },
});

export default MessagingSlice.reducer;
export const MessagingSliceActions = MessagingSlice.actions;
