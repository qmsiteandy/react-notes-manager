import s from "./style.module.css";

export function ButtonPrimary({ onClick, children }) {
  return (
    <button className={`btn btn-primary ${s.button}`} onClick={onClick}>
      {children}
    </button>
  );
}
