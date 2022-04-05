import styled from 'styled-components';

const SHeader = styled.header`
  height: 18vh;
  width: 70vw;
  background-color: var(--second-color);
  display: flex;
  justify-content: space-between;
  padding: 3em;

  h1 {
    color: var(--main-color);
    text-align: center;
    font-size: 3.5em;
    font-weight: bold;
  }

  .auth {
    height: 25px;
    border-radius: 15px;
    font-size: 16px;
  }
`;

export default SHeader;
