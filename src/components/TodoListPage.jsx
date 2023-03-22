import { useNavigate } from "react-router-dom";
import Style from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function TodoListPage() {
  const navigate = useNavigate();
  // TODO: Mock API로 분리하기
  const [todoItems, setTodoItems] = useState([
    "공부하기",
    "밥 먹기",
    "산책하기",
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [isChecked, setIsChecked] = useState([false, false, false]);

  function movoToHomeButton() {
    navigate("/");
  }

  function onclickAddButton() {
    setTodoItems([...todoItems, newTodo]);
    setIsChecked([...isChecked, false]);
    setNewTodo("");
  }

  function activeEnter(e) {
    if (e.key === "Enter") {
      setTodoItems([...todoItems, newTodo]);
      setNewTodo("");
    }
    setIsChecked([...isChecked, false]);
  }

  function onclickDeleteButton(index) {
    const deleteButton = [...todoItems];
    deleteButton.splice(index, 1);
    setTodoItems(deleteButton);
  }

  function onclickCheckboxButton(event, index) {
    const checkboxButton = [...isChecked];
    checkboxButton[index] = event.target.checked;
    setIsChecked(checkboxButton);
  }

  return (
    <Style.TodoListPage>
      <div className="todo">
        <FontAwesomeIcon
          className="homeButton"
          icon={faHouse}
          onClick={movoToHomeButton}
        />
        <h1>📝 Todo List</h1>
        <p className="totalCount">Total : {todoItems.length}</p>
        <div className="input">
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
        </div>
        <div className="todo-list">
          {todoItems.map((todoItems, index) => (
            <div className="todo-item" key={index}>
              <input
                className="checkbox"
                type="checkbox"
                onClick={(event) => onclickCheckboxButton(event, index)}
                checked={isChecked[index]}
              />
              {isChecked[index] === false ? (
                <span className="todoItems">{todoItems}</span>
              ) : (
                <span className="line-through ">{todoItems}</span>
              )}

              <button
                className="trashcan"
                onClick={() => onclickDeleteButton(index)}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Style.TodoListPage>
  );
}
export default TodoListPage;
