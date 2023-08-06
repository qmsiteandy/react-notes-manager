import { useState } from "react";
import s from "./style.module.css";
import { Trash as TrashIcon } from "react-bootstrap-icons";

export function NoteCard({ title, subtitle, content, onClick, onClickDelete }) {
  const [isCardHover, setIsCardHover] = useState(false);
  const [isDeleteHover, setIsDeleteHover] = useState(false);

  function onClickDelete_(e) {
    onClickDelete();
    e.Propagation();
  }

  return (
    // bootstrap card component example
    <div
      className={`card ${s.card}`}
      style={{ borderColor: isCardHover ? "#0d6efd" : "transparent" }}
      onClick={onClick}
      onMouseEnter={() => setIsCardHover(true)}
      onMouseLeave={() => setIsCardHover(false)}
    >
      <div className="card-body">
        <div className={s.title_row}>
          <h5 className="card-title">{title}</h5>
          <TrashIcon
            size={20}
            onMouseEnter={() => setIsDeleteHover(true)}
            onMouseLeave={() => setIsDeleteHover(false)}
            style={{ color: isDeleteHover ? "#FF7373" : "#b8b8b8" }}
            onClick={onClickDelete_}
          />
        </div>
        <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
        <p className={`card-text ${s.text_content}`}>{content}</p>
      </div>
    </div>
  );
}
