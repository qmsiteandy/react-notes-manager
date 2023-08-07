import s from "./style.module.css";
import { useState } from "react";
import { PenFill, TrashFill } from "react-bootstrap-icons";
import { ButtonPrimary } from "components/ButtomPrimary/ButtonPrimary";
import { ErrorMsg } from "components/ErrorMsg/ErrorMsg";
import { FormValidator } from "services/formValidator";

export function NoteForm({ title, onClickEdit, onClickDelete, onSubmit }) {
  const [formValues, setFormValues] = useState({ title: "", content: "" });
  const [inputErrors, setInputErrors] = useState({
    titleError: "",
    contentError: "",
  });

  function updateFormValue(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function formValidate(formValues) {
    const titleError = FormValidator.min(formValues.title, 3);
    const contentError = FormValidator.max(formValues.content, 1000);
    setInputErrors({ titleError, contentError });
    const isPass = titleError === "" && contentError === "";
    console.log("ispass", isPass);
    return isPass;
  }

  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className={s.title}>{title}</h2>
        </div>
        <div className="col-1">
          {onClickEdit && (
            <PenFill className={s.penIcon} onClick={onClickEdit} />
          )}
        </div>
        <div className="col-1">
          {onClickDelete && (
            <TrashFill className={s.trashIcon} onClick={onClickDelete} />
          )}
        </div>
      </div>
      <div className={s.title_input_container}>
        <label className="form-label">Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          onChange={updateFormValue}
        />
        {inputErrors.titleError && <ErrorMsg msg={inputErrors.titleError} />}
      </div>
      <div className={s.content_input_container}>
        <label className="form-label">Content</label>
        <textarea
          type="text"
          name="content"
          rows="5"
          className="form-control"
          onChange={updateFormValue}
        />
        {inputErrors.contentError && (
          <ErrorMsg msg={inputErrors.contentError} />
        )}
      </div>
      {onSubmit && (
        <ButtonPrimary
          onClick={() => {
            formValidate(formValues) && onSubmit(formValues);
          }}
        >
          Submit
        </ButtonPrimary>
      )}
    </div>
  );
}
