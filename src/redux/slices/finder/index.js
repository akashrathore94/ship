import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Music", active: false },
  { id: 2, name: "Pictures", active: false },
  { id: 3, name: "Files", active: false },
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
    removeActive: (state) => {
      return state.map((el) => {
        return { ...el, active: false };
      });
    },
    updateOrder: (state, action) => {
      return action.payload;
    },
  },
});

export const { add, remove, addActive, removeActive, updateOrder } =
  finderSlice.actions;

export default finderSlice.reducer;
