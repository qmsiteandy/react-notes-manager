import s from "./style.module.css";
import { NoteCard } from "components/NoteCard/NoteCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function NoteList() {
  const noteList = useSelector((store) => store.NOTE.noteList);
  const navigate = useNavigate();

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
              alert("Delete note id: " + note.id);
            }}
          />
        );
      })}
    </div>
  );
}
