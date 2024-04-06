import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instructors: [],
  dirty: true,
};

export const instructorSlice = createSlice({
  name: "instructor",
  initialState,
  reducers: {
    setInstructors: (state, { payload }) => {
      (state.instructors = payload), (state.dirty = false);
    },
  },
});

export const { setInstructors } = instructorSlice.actions;
export default instructorSlice.reducer;
