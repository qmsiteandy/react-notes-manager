import { NoteForm } from "components/NoteForm/NoteForm";

export function NoteCreate(props) {
  return (
    <NoteForm
      title={"Add Note"}
      onClickEdit={() => alert("edit")}
      onClickDelete={() => alert("delete")}
    />
  );
}
