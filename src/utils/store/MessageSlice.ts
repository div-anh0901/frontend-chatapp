import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
 import type { PayloadAction } from '@reduxjs/toolkit';
 import { Message } from '../types';
import { getConversations, getMessagefollowCon } from '../api';
 
 export interface MessageState {
   messages: Message[];
 }
 
 const initialState: MessageState = {
    messages: [],
 };

 export const fetchMesagesThunk = createAsyncThunk(
    'messages/fetch',
    async (id: number) => {
      return getMessagefollowCon(id);
    }
  );
  
 
 export const messageSlice = createSlice({
   name: 'messages',
   initialState,
   reducers: {
     addMessage: (state, action: PayloadAction<Message>) => {
       state.messages.push(action.payload);
     },
    
   },
   extraReducers: (builder) => {
    builder.addCase(fetchMesagesThunk.fulfilled, (state, action) => {
      state.messages = []
      action.payload.data.forEach((message) => {
        state.messages.push(message)
      });
    });
  },
 });
 
 // Action creators are generated for each case reducer function
 export const { addMessage } = messageSlice.actions;
 
 export default messageSlice.reducer;