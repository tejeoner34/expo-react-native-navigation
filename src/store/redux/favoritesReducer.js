import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action) {
      console.log(state, action.payload);
      state.push(action.payload);
    },
    removeFavorite(state, action) {
      state.filter((favorite) => favorite.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
