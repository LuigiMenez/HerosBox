import styled from 'styled-components';

const SHeader = styled.header`
  background-color: var(--main-color);
  height: 18vh;
  width: 100vw;

  h1 {
    width: 100vw;
    color: var(--second-color);
    text-align: center;
    font-size: 42px;
    font-weight: bold;
    margin-top: 22px;
  }

  div {
    display: inline;
  }

  button {
    background: var(--second-color);
    color: var(--main-color);
    height: 25px;
    border-radius: 15px;
    font-size: 16px;
    margin: 10px 10px 0 10px;
  }

  a {
    color: var(--second-color);
    padding-top: 10px;
    font-size: 15px;
  }
`;

export default SHeader;
