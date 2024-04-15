import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instructors: [],
  dirty: true,
};

export const instructorSlice = createSlice({
  name: "instructor",
  initialState,
  reducers: {
    clearInstructors: (state, {}) => {
      (state.instructors = []), (state.dirty = true);
    },
    setInstructors: (state, { payload }) => {
      (state.instructors = payload), (state.dirty = false);
    },
  },
});

export const { clearInstructors, setInstructors } = instructorSlice.actions;
export default instructorSlice.reducer;
