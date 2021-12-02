import styled from 'styled-components';

export const Container = styled.div`
  background: #d5d5d5;

  h2 {
    font-size: 52px;
    text-align: center;
  }
  .games {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Game = styled.div`
  background: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 30vw;
  height: 25vh;
  border: solid 4px #1f1d36;
  border-radius: 15px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  p {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    width: 100%;
    height: 23vh;
  }
`;
