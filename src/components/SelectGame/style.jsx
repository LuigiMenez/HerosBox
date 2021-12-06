import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  h2 {
    font-size: 38px;
    text-align: center;
    font-weight: bold;
    color: #1f1d36;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .games {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Game = styled.div`
  background: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  width: 22rem;
  height: 23vh;
  border: solid 4px #1f1d36;
  border-radius: 15px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 14vh;
  transition: transform 1s;
  :hover {
    transform: scale(1.1);
  }
  p {
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    width: 100%;
    grid-area: 2 / 1 / 3 / 2;
    background-color: #1f1d359c;
    color: #d5d5d5;
    padding-top: 5px;
  }
`;
