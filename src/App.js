import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TodoListPage from "./components/TodoListPage";
import Made from "./components/Made";
import Memo from "./components/Memo";

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundColor: "RGB(425, 253, 190)",
        minHeight: "100vh",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todo-list" element={<TodoListPage />}></Route>
          <Route path="/memo" element={<Memo />}></Route>
          <Route path="/made" element={<Made />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
