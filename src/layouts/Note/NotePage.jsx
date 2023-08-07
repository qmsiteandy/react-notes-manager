import { useParams } from "react-router-dom";
import { useSelector, dispatch, useDispatch } from "react-redux";
import { useState } from "react";
import { NoteAPI } from "api/note-api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { updateNote } from "store/notes/note-slice";

export function NotePage(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === parseInt(id))
  );
  const [isEditable, setIsEditable] = useState(false);

  const submitUpdate = async (formValues) => {
    const updatedNote = await NoteAPI.updateById(note.id, formValues);
    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  };

  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={note.title}
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickDelete={() => alert("delete")}
          onSubmit={submitUpdate}
        />
      )}
    </>
  );
}
