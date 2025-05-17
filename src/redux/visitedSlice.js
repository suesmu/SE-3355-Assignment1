
import { createSlice } from '@reduxjs/toolkit';

const visitedSlice = createSlice({
  name: 'visited',
  initialState: [],
  reducers: {
    addVisited(state, action) {
      const alreadyExists = state.find(item => item.id === action.payload.id);
      if (!alreadyExists) {
        state.unshift(action.payload);
        if (state.length > 10) state.pop(); 
      }
    }
  }
});

export const { addVisited } = visitedSlice.actions;
export default visitedSlice.reducer;
