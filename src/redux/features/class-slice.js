import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  classes: [],
  dirty: true,
};

export const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    clearClasses: (state, {}) => {
      (state.classes = []), (state.dirty = true);
    },
    setClasses: (state, { payload }) => {
      (state.classes = payload), (state.dirty = false);
    },
  },
});

export const { clearClasses, setClasses } = classSlice.actions;
export default classSlice.reducer;
