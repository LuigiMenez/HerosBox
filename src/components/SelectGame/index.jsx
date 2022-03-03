import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Game } from './style';

export default function SelectGame() {
  const [jdrs, setJdrs] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5050/`).then(({ data }) => {
      setJdrs(data);
    });
  }, []);

  return (
    <Container>
      <h2>Les univers</h2>
      <div className="games">
        {jdrs.map((rpg) => {
          return (
            <Game key={rpg.id} img={rpg.image} alt={rpg.name}>
              <p>{rpg.name}</p>
            </Game>
          );
        })}
      </div>
    </Container>
  );
}
