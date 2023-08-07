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
    updateNote: (currentSlice, action) => {
      const updateIndex = currentSlice.noteList.findIndex(
        (note) => note.id === action.payload.id
      );
      currentSlice.noteList[updateIndex] = action.payload;
    },
    deleteNoteId: (currentSlice, action) => {
      const filtered = currentSlice.noteList.filter(
        (note) => note.id !== action.payload
      );
      currentSlice.noteList = filtered;
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const { setNoteList, addNoteToList, updateNote, deleteNoteId } =
  noteSlice.actions;
