import styled from "styled-components";

const home = styled.div`
  .photoImage {
    width: 300px;
    height: 300px;
    border-radius: 20px;
    margin: 0 auto;
    display: flex;
    padding-top: 80px;
  }
  p {
    font-size: 40px;
    text-align: center;
  }
  .startButton,
  .memoButton {
    display: block;
    width: 270px;
    height: 50px;
    font-size: 20px;
    border: 1px solid #ffbfa9;
    background-color: #ffebb4;
    border-radius: 10px;
    margin: 15px auto;
  }
  .madeButton {
    display: block;
    margin: 100px auto 20px auto;
    width: 350px;
    height: 50px;
    font-size: 20px;
    border: 1px solid white;
    background-color: #e3d7ae;
    border-radius: 10px;
  }
`;

const made = styled.div`
  .photoImage {
    width: 300px;
    height: 300px;
    border-radius: 20px;
    margin: 100px auto 10px auto;
    display: flex;
  }
  .todoBy {
    text-align: center;
    font-size: 30px;
    margin-top: 150px;
  }
  .githubLink {
    text-align: center;
    font-size: 30px;
    margin-top: 40px;
  }
  .homeButton {
    width: 270px;
    height: 50px;
    font-size: 20px;
    border: 1px solid white;
    background-color: #e3d7ae;
    border-radius: 10px;
    margin: 0 auto;
    display: block;
  }
`;

const TodoListPage = styled.div`
  * {
    box-sizing: border-box;
  }
  .homeButton {
    width: 40px;
    height: 40px;
  }
  h1 {
    font-size: 45px;
    text-align: center;
  }
  .totalCount {
    font-size: 20px;
    text-align: center;
  }
  .input {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .inputBox {
    width: 300px;
    height: 40px;
    margin-right: 10px;
    border-radius: 10px;
    font-size: 20px;
  }
  .todoInputButton {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  .line-through {
    text-decoration: line-through;
  }
  .todo-list {
    width: 400px;
    margin: auto;
  }
  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 10px;
    text-align: center;
  }
  .checkbox {
    width: 20px;
    height: 20px;
  }
  .trashcan {
    border: none;
    color: red;
    font-size: 20px;
  }
`;

export default { home, made, TodoListPage };
