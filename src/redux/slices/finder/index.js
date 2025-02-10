import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Music", active: false },
  { id: 2, name: "Fold", active: false },
  { id: 3, name: "ABC", active: false },
];

export const finderSlice = createSlice({
  name: "finder",
  initialState,
  reducers: {
    add: (state) => [
      ...state.map((el) => ({ ...el, active: false })),
      { id: nanoid(), name: "untitled folder", active: true },
    ],
    remove: (state, action) => {
      return state.filter((el) => el.id !== action.payload);
    },
    addActive: (state, action) => {
      return state.map((el) =>
        el.id !== action.payload
          ? { ...el, active: false }
          : { ...el, active: true }
      );
    },
  },
});

export const { add, remove, addActive } = finderSlice.actions;

export default finderSlice.reducer;
