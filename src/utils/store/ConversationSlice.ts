import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
 import type { PayloadAction } from '@reduxjs/toolkit';
 import { ListConversations } from '../types';
import { getConversations } from '../api';
 
 export interface ConversationsState {
   conversations: ListConversations[];
 }
 
 const initialState: ConversationsState = {
   conversations: [],
 };

 export const fetchConversationsThunk = createAsyncThunk(
    'conversations/fetch',
    async () => {
      return getConversations();
    }
  );
  
 
 export const conversationsSlice = createSlice({
   name: 'conversations',
   initialState,
   reducers: {
     addConversation: (state, action: PayloadAction<ListConversations>) => {
      
       //state.conversations.push(action.payload);
     },
    
   },
   extraReducers: (builder) => {
    builder.addCase(fetchConversationsThunk.fulfilled, (state, action) => {
      action.payload.data.forEach((conversation) => {
        state.conversations.push(conversation)
      });
    });
  },
 });
 
 // Action creators are generated for each case reducer function
 export const { addConversation } = conversationsSlice.actions;
 
 export default conversationsSlice.reducer;