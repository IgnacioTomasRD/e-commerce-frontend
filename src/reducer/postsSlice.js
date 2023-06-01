import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    setPosts: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;