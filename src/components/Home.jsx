import { useNavigate } from "react-router-dom";
import photo from "../assets/img/2.png";
import Style from "./Style";
import NewWindowComponent from "../components/example";

function Home() {
  const navigate = useNavigate();
  function onclickStartButton() {
    navigate("/todo-list");
  }
  function onclickMemoButton() {
    navigate("/memo");
  }
  function onclickMadeButton() {
    navigate("/made");
  }
  return (
    <Style.home>
      <div className="photo">
        <img className="photoImage" src={photo} />
        <p>오늘 뭐 해야 되지?🤔</p>
        <button className="startButton" onClick={onclickStartButton}>
          🔎 시작하기
        </button>
        <button className="memoButton" onClick={onclickMemoButton}>
          🔎 메모장에 적어보기
        </button>
        <button className="madeButton" onClick={onclickMadeButton}>
          🎀 만든 사람 보러 가기 🎀
        </button>
        <button style={{ backgroundColor: "red", color: "white" }}>
          <NewWindowComponent />
        </button>
      </div>
    </Style.home>
  );
}

export default Home;
