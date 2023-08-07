import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { setNoteList, addNoteToList } from "store/notes/note-slice";

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
  matcher: isAnyOf(setNoteList, addNoteToList),
  effect: async (action, listenerAPI) => {
    console.log("Action ", action);
    console.log("New store value ", listenerAPI.getState());
  },
});
