import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NoteAPI } from "api/note-api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { updateNote, deleteNoteId } from "store/notes/note-slice";

export function NotePage(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === parseInt(id))
  );
  const [isEditable, setIsEditable] = useState(false);

  const submitUpdate = async (formValues) => {
    const updatedNote = await NoteAPI.updateById(note.id, formValues);
    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  };

  const submitDelete = async (noteId) => {
    if (window.confirm("確認刪除?")) {
      await NoteAPI.deleteById(noteId);
      dispatch(deleteNoteId(noteId));
      navigate("/");
    }
  };

  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={note.title}
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickDelete={() => submitDelete(note.id)}
          onSubmit={submitUpdate}
        />
      )}
    </>
  );
}
