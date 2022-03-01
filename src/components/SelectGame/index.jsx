import rpgs from '../../db';
// import { Link } from 'react-router-dom';
import { Container, Game } from './style';
// import CharacterChoice from './components/CharacterChoice';

export default function SelectGame() {
  return (
    <Container>
      <h2>Les univers</h2>
      <div className="games">
        {rpgs.map((rpg) => {
          return (
            <Game img={rpg.img} alt={rpg.title}>
              <p>{rpg.title}</p>
            </Game>
          );
        })}
      </div>
    </Container>
  );
}
