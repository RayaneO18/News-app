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
    removeBookmark: (state, action) => {
      state.value = state.value.filter((el) => el.id !== action.payload.id);
    },
  },
});
export const { addBookmark, reduceBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
