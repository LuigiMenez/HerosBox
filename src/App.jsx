import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SelectGame from './components/SelectGame';
import CharacterChoice from './components/CharacterChoice';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SelectGame />} />
        <Route path="/:id" element={<CharacterChoice />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
