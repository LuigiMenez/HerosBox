import axios from 'axios';
import { toast } from 'react-toastify';
import useModal from 'hooks/useModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../Modal';
import Sbutton from './style';

export default function ButtonSignUp() {
  const { isShowing: isSignUp, toggle: toggleSignUp } = useModal();

  const [form, setForm] = useState({
    email: '',
    password: '',
    userName: '',
  });
  const dispatch = useDispatch();

  const changeForm = (evt) => {
    const newData = { ...form };
    newData[evt.target.name] = evt.target.value;
    setForm(newData);
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post('http://localhost:5050/auth/signup', form)
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
        <Sbutton type="button" className="signUp" onClick={toggleSignUp}>
          Inscrivez vous
        </Sbutton>
      </div>
      <Modal isShowing={isSignUp} hide={toggleSignUp} title="Inscrivez Vous">
        <form onSubmit={hSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Email Address"
              onChange={changeForm}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="userName"
              value={form.userName}
              placeholder="Username"
              onChange={changeForm}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={form.password}
              placeholder="Password"
              onChange={changeForm}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Register" />
          </div>
        </form>
      </Modal>
    </>
  );
}
