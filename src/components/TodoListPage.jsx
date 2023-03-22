import { useNavigate } from "react-router-dom";
import Style from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import { getAllTodoList } from "../mock/api";

function TodoListPage() {
  const navigate = useNavigate();
  // TODO: Mock API로 분리하기
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // 컴포넌트가 최초로 렌더링될 때 실행되게하려면 두번째 매개변수를 빈 배열로 한다.
  useEffect(() => {
    const currentTodoList = getAllTodoList();
    setTodoList(currentTodoList);
  });

  function movoToHomeButton() {
    navigate("/");
  }

  function onclickAddButton() {
    setTodoList([...todoList, { name: newTodo, isDone: false }]);
    setNewTodo("");
  }

  function activeEnter(e) {
    if (e.key === "Enter") {
      onclickAddButton();
    }
  }

  function onclickDeleteButton(index) {
    const nextTodoList = [...todoList];
    nextTodoList.splice(index, 1);
    setTodoList(nextTodoList);
  }

  function onChangeCheckboxButton(event, index) {
    const nextTodoList = [...todoList];
    nextTodoList[index].isDone = event.target.checked;
    setTodoList(nextTodoList);
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
        <p className="totalCount">Total : {todoList.length}</p>
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
          {todoList.map((todoItem, index) => (
            <div className="todo-item" key={index}>
              <input
                className="checkbox"
                type="checkbox"
                onChange={(event) => onChangeCheckboxButton(event, index)}
                checked={todoItem.isDone}
              />
              <span className={todoItem.isDone ? "line-through" : ""}>
                {todoItem.name}
              </span>
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
