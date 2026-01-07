import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    items: [],
  },
  reducers: {
    setFavourite: (state, action) => {
      state.items = action.payload;
    },
    addToFavourite: (state, action) => {
      const exists = state.items.find(
        (course) => course.id === action.payload.id
      );

      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromFavourite: (state, action) => {
      state.items = state.items.filter(
        (course) => course.id !== action.payload
      );
    },
  },
});

export const {
  addToFavourite,
  removeFromFavourite,
  setFavourite,
} = favouriteSlice.actions;

export default favouriteSlice.reducer;
