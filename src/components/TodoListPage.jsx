import { useNavigate } from "react-router-dom";
import Style from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function TodoListPage() {
  const navigate = useNavigate();
  const [todoItems, setTodoItems] = useState([
    "공부하기",
    "밥 먹기",
    "산책하기",
  ]);
  const [newTodo, setNewTodo] = useState("");

  function movoToHomeButton() {
    navigate("/");
  }

  function onclickAddButton() {
    setTodoItems([...todoItems, newTodo]);
    setNewTodo("");
  }

  function activeEnter(e) {
    if (e.key === "Enter") {
      setTodoItems([...todoItems, newTodo]);
      setNewTodo("");
    }
  }

  function onclickDeleteButton(index) {
    const deleteButton = [...todoItems];
    deleteButton.splice(index, 1);
    setTodoItems(deleteButton);
  }
  return (
    <div className="todo">
      <FontAwesomeIcon icon={faHouse} onClick={movoToHomeButton} />
      <h1>📝 Todo List</h1>
      <p>Total : {todoItems.length}</p>
      <input
        className="inputBox"
        type="text"
        placeholder="할 일을 입력하세요"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        onKeyDown={activeEnter}
      ></input>
      <button className="todoInputButton" onClick={onclickAddButton}>
        +
      </button>
      <div className="todo-list">
        <ul>
          {todoItems.map((todoItems, index) => (
            <li key={index}>
              <input className="checkbox" type="checkbox" />
              <span>{todoItems}</span>
              <button
                className="trashcan"
                onClick={() => onclickDeleteButton(index)}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TodoListPage;
