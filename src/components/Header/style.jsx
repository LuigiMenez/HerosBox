import styled from 'styled-components';

const SHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  background-color: #1f1d36;
  height: 30vh;

  h1 {
    justify-content: flex-start;
    width: 100%;
    margin-top: 9.5vh;
    color: #d5d5d5;
    font-size: 64px;
    margin-left: 30px;
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 12vw;
    margin: 10px 10px 0 0;
  }

  button {
    background: #d5d5d5;
    color: #1f1d36;
    height: 30px;
    border-radius: 15px;
  }

  a {
    color: #d5d5d5;
  }
`;

export default SHeader;
