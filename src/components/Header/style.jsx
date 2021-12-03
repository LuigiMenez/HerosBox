import styled from 'styled-components';

const SHeader = styled.header`
  background-color: #1f1d36;
  height: 18vh;
  width: 100vw;

  h1 {
    width: 100vw;
    color: #d5d5d5;
    text-align: center;
    font-size: 42px;
    font-weight: bold;
    margin-top: 22px;
  }

  div {
    display: inline;
  }

  button {
    background: #d5d5d5;
    color: #1f1d36;
    height: 25px;
    border-radius: 15px;
    font-size: 16px;
    margin: 10px 10px 0 10px;
  }

  a {
    color: #d5d5d5;
    padding-top: 10px;
    font-size: 15px;
  }
`;

export default SHeader;
