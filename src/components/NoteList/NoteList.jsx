import s from "./style.module.css";
import { NoteCard } from "components/NoteCard/NoteCard";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NoteAPI } from "api/note-api";
import { deleteNoteId } from "store/notes/note-slice";

export function NoteList() {
  const noteList = useSelector((store) => store.NOTE.noteList);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitDelete = async (noteId) => {
    if (window.confirm("確認刪除?")) {
      await NoteAPI.deleteById(noteId);
      dispatch(deleteNoteId(noteId));
    }
  };

  return (
    <div className={`row justify-content-begin ${s.card_list}`}>
      {noteList.map((note) => {
        return (
          <NoteCard
            key={note.id}
            title={note.title}
            subtitle={note.created_at}
            content={note.content}
            onClick={() => navigate("/note/" + note.id)}
            onClickDelete={() => {
              submitDelete(note.id);
            }}
          />
        );
      })}
    </div>
  );
}
