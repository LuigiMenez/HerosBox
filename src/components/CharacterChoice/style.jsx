import styled from 'styled-components';

const SCharacterChoice = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 60vh;

  div {
    margin-top: 10px;
    height: 50vh;
  }

  img {
    border: solid #1f1d35 4px;
    border-radius: 15px;
    height: 32vh;
    background-color: #1f1d35bd;
  }

  h2 {
    width: 100%;
    text-align: center;
    font-size: 30px;
    color: #1f1d35;
  }

  @media only screen and (min-width: 500px) {
    justify-content: space-around;
    margin-top: 13vh;

    div {
      transition: transform 1s;
      :hover {
        transform: scale(1.1);
      }
    }
  }
`;

export default SCharacterChoice;
