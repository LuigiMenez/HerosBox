import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import SelectGame from './components/SelectGame';
import CharacterChoice from './components/CharacterChoice';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SelectGame />} />
        <Route path="/:id" element={<CharacterChoice />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <Footer />
    </>
  );
}

export default App;
