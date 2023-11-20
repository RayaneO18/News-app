import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: {
    favorites: [],
    favoritesTitles: [],
  },
};

export const bookmarksSlice = createSlice({
  name: `bookmarks`,
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      if (state.value.favoritesTitles.includes(action.payload.title)) {
        return;
      }
      state.value.favoritesTitles = [
        ...state.value.favoritesTitles,
        action.payload.title,
      ];
      state.value.favorites = [...state.value.favorites, action.payload];
    },
    removeBookmark: (state, action) => {
      state.value.favorites = state.value.favorites.filter((fav) => {
        if (action.payload !== fav.title) {
          return fav;
        }
      });
      state.value.favoritesTitles = state.value.favoritesTitles.filter(
        (fav) => {
          if (action.payload !== fav) {
            return fav;
          }
        }
      );
    },
  },
});
export const { addBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
