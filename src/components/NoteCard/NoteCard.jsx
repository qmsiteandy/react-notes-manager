import s from "./style.module.css";
import { TrashFill as TrashIcon } from "react-bootstrap-icons";

export function NoteCard({ title, subtitle, content, onClick, onClickDelete }) {
  function onClickDelete_(e) {
    onClickDelete();
    e.stopPropagation();
  }

  return (
    // bootstrap card component example
    <div className={`card ${s.card}`} onClick={onClick}>
      <div className="card-body">
        <div className={s.title_row}>
          <h5 className="card-title">{title}</h5>
          <TrashIcon
            size={20}
            className={s.deleteIcon}
            onClick={onClickDelete_}
          />
        </div>
        <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
        <p className={`card-text ${s.text_content}`}>{content}</p>
      </div>
    </div>
  );
}
