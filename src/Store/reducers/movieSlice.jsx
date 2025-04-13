import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const movieSlice = createSlice({
  name: "medicine",
  initialState,
  reducers: {
    loadmedicine: (state, action) => {
      state.info = action.payload;
    },
    removemedicine: (state, action) => {
      state.info = null;
    }
  },
});

export const { loadmovie, removemovie } = movieSlice.actions;

export default movieSlice.reducer;


//6 min