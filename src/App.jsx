import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Aside from 'components/DoubleVolet';
import Header from './components/Header';
import SelectGame from './components/SelectGame';
import CharacterChoice from './components/CharacterChoice';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="home">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<SelectGame />} />
          <Route path="/:id" element={<CharacterChoice />} />
        </Routes>
        <Footer />
      </div>
      <Aside />
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
    </div>
  );
}

export default App;
