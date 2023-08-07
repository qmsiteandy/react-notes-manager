import { NoteForm } from "components/NoteForm/NoteForm";
import { NoteAPI } from "api/note-api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNoteToList } from "store/notes/note-slice";

export function NoteCreate(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function submitCreate(formValue) {
    const result = await NoteAPI.create({
      ...formValue,
      created_at: new Date().toLocaleDateString(),
    });
    dispatch(addNoteToList(result));
    navigate("/");
  }

  return (
    <NoteForm
      title={"Add Note"}
      // onClickEdit={() => alert("edit")}
      // onClickDelete={() => alert("delete")}
      onSubmit={submitCreate}
    />
  );
}
