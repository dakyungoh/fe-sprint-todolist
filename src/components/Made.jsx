import Style from "./Style";
import photo from "../assets/img/2.png";
import { useNavigate } from "react-router-dom";

export default function Made() {
  const navigate = useNavigate();
  function homeButton() {
    navigate("/");
  }
  return (
    <Style.made>
      <div>
        <p className="todoBy">🎀 Todo By 다경 🎀</p>
        <img className="photoImage" src={photo} />
        <p className="githubLink">github : dakyunoh</p>
        <button className="homeButton" onClick={homeButton}>
          홈으로 돌아가기
        </button>
      </div>
    </Style.made>
  );
}
