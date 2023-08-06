import { Header } from "components/Header/Header";
import { Outlet } from "react-router-dom";
import { NoteAPI } from "api/note-api";
import { useDispatch } from "react-redux";
import { setNoteList } from "store/notes/notes-slice";
import { useEffect } from "react";

export function App() {
  const dispatch = useDispatch();

  async function fetchAllNotes() {
    const data = await NoteAPI.fetchAll();
    console.log(typeof setNoteList);
    dispatch(setNoteList(data));
  }

  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
