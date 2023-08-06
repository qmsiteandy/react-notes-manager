import s from "./style.module.css";
import { Logo } from "components/logo";
import logoImg from "../../assets/images/logo.png";
import { ButtonPrimary } from "components/ButtomPrimary/ButtonPrimary";
import { useNavigate } from "react-router-dom";

export function Header(props) {
  const navigate = useNavigate();
  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-md-4">
        <Logo
          onClick={() => navigate("/")}
          title={"Note Online"}
          subtitle={"Record Your Idea"}
          image={logoImg}
        />
      </div>
      <div className="col-xs-12 col-md-8 text-end">
        <ButtonPrimary onClick={() => navigate("/note/create")}>
          Add Note
        </ButtonPrimary>
      </div>
    </div>
  );
}
