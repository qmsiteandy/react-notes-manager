import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { NoteForm } from "components/NoteForm/NoteForm";

export function NotePage(props) {
  const { id } = useParams();
  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === parseInt(id))
  );
  return (
    <>
      {note && (
        <NoteForm
          isEditable={false}
          title={note.title}
          note={note}
          onClickEdit={() => alert("edit")}
          onClickDelete={() => alert("delete")}
        />
      )}
    </>
  );
}
