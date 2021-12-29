import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SelectGame from './components/SelectGame';
import CharacterChoice from './components/CharacterChoice';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SelectGame />} />
        <Route path="/games/name" element={<CharacterChoice />} />
      </Routes>
    </>
  );
}

export default App;
