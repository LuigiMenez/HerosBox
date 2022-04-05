import axios from 'axios';
import { toast } from 'react-toastify';
import useModal from 'hooks/useModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../Modal';
import Sbutton from './style';

export default function ButtonLogin() {
  const { isShowing: isLoginForm, toggle: toggleLogin } = useModal();

  const [log, setLog] = useState({
    userName: '',
    password: '',
  });
  const dispatch = useDispatch();

  const changeLog = (evt) => {
    const newData = { ...log };
    newData[evt.target.name] = evt.target.value;
    setLog(newData);
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post('http://localhost:5050/auth/login', log)
      .then(({ data }) => {
        dispatch({
          type: 'LOGIN',
          payload: data,
        });
        toast.success('🎲 Réussite critique!');
      })
      .catch(() => {
        toast.error('🎲 Echec critique !');
      });
  };
  return (
    <>
      <div className="button">
        <Sbutton type="button" className="logIn" onClick={toggleLogin}>
          Connexion
        </Sbutton>
      </div>
      <Modal isShowing={isLoginForm} hide={toggleLogin} title="Connexion">
        <form onSubmit={hSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="userName"
              value={log.userName}
              placeholder="Username"
              onChange={changeLog}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={log.password}
              placeholder="Password"
              onChange={changeLog}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Log in" />
          </div>
        </form>
      </Modal>
    </>
  );
}
