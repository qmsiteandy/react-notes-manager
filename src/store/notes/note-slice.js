import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    setNoteList: (currentSlice, action) => {
      currentSlice.noteList = action.payload;
    },
    addNoteToList: (currentSlice, action) => {
      currentSlice.noteList.push(action.payload);
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const { setNoteList, addNoteToList } = noteSlice.actions;
