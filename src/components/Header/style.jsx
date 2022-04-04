import styled from 'styled-components';

const SHeader = styled.header`
  height: 18vh;
  background-color: var(--second-color);
  display: flex;
  justify-content: space-between;
  padding: 3em;

  h1 {
    color: var(--main-color);
    text-align: center;
    font-size: 42px;
    font-weight: bold;
    margin-top: 22px;
  }

  .auth {
    height: 25px;
    border-radius: 15px;
    font-size: 16px;
    /* margin: 10px 10px 0 10px; */
  }
`;

export default SHeader;
