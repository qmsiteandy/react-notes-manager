export function ErrorMsg({ msg }) {
  return <>{msg && <span style={{ color: "red" }}>{msg}</span>}</>;
}
