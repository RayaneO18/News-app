import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};

export const bookmarksSlice = createSlice({
  name: `bookmarks`,
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export const { addBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
