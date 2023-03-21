import styled from "styled-components";

const home = styled.div`
  .photoImage {
    width: 300px;
    height: 300px;
    border-radius: 20px;
    margin: 100px auto 10px auto;
    display: flex;
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
    margin: 500px auto 20px auto;
    width: 350px;
    height: 50px;
    font-size: 20px;
    border: 1px solid white;
    background-color: #e3d7ae;
    border-radius: 10px;
  }
`;

export default { home };
