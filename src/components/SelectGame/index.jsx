import rpgs from '../../db';
import Container from './style';

export default function SelectGame() {
  return (
    <Container>
      <h2>Les univers</h2>
      <div>
        {rpgs.map((rpg) => {
          return (
            <div>
              <img src={rpg.img} alt={rpg.title} />
              <img src={rpg.imgTitle} alt={rpg.title} />
            </div>
          );
        })}
      </div>
    </Container>
  );
}
