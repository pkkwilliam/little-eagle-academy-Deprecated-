import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  classes: [],
  dirty: true,
};

export const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    setClasses: (state, { payload }) => {
      (state.classes = payload), (state.dirty = false);
    },
  },
});

export const { setClasses } = classSlice.actions;
export default classSlice.reducer;
