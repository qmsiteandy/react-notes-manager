import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "store/notes/note-slice";

export const store = configureStore({
  reducer: {
    noteSlice: noteReducer,
  },
});
