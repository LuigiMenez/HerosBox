import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  h2 {
    font-size: 38px;
    text-align: center;
    font-weight: bold;
    color: var(--main-color);
    margin-top: 15px;
    margin-bottom: 15px;
  }
  div {
    display: flex;
    justify-content: space-around;
  }

  a {
    text-decoration: none;
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
  border: solid 4px var(--main-color);
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
    position: relative;
    top: 81%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    width: 100%;
    height: 20%;
    grid-area: 2 / 2/ 3 / 2;
    background-color: #1f1d359c;
    color: var(--second-color);
    padding-top: 5px;
  }
`;
