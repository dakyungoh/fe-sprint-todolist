let todoList = [
  {
    name: "공부하기",
    isDone: false,
  },
  {
    name: "밥 먹기",
    isDone: false,
  },
  {
    name: "산책하기",
    isDone: false,
  },
];

function getAllTodoList() {
  return todoList;
}

function deleteTodoItem(index) {
  const nextTodoList = [...todoList];
  nextTodoList.splice(index, 1);
  todoList = nextTodoList;
}

export { getAllTodoList, deleteTodoItem };
