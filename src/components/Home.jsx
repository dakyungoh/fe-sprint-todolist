import { useNavigate } from "react-router-dom";
import photo from "./img/2.png";
import Style from "./Style";

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
          🔎 어제 한 일 보러 가기
        </button>
        <button className="madeButton" onClick={onclickMadeButton}>
          🎀 만든 사람 보러 가기 🎀
        </button>
      </div>
    </Style.home>
  );
}

export default Home;
