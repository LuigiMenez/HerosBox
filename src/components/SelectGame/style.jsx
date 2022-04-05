import styled from 'styled-components';

export const Container = styled.div`
  width: 70vw;
  min-height: 68vh;

  h2 {
    font-size: 3em;
    text-align: center;
    font-weight: bold;
    color: var(--main-color);
    margin-top: 1em;
    margin-bottom: 1em;
  }
  div {
    display: flex;
    justify-content: space-around;
    margin: 1rem;
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
  width: 25rem;
  height: 23vh;
  outline: solid 4px var(--main-color);
  border-radius: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;
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
    background-color: #1f1d359c;
    color: var(--second-color);
  }
`;
