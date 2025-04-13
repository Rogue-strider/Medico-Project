// src/Store/reducers/medicineSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info: null,
};

export const medicineSlice = createSlice({
    name: "medicine",
    initialState,
    reducers: {
        loadmedicine: (state, action) => {
            state.info = action.payload;
        },
        removemedicine: (state) => {
            state.info = null;
        },
    },
});

export const { loadmedicine, removemedicine } = medicineSlice.actions;

export default medicineSlice.reducer;