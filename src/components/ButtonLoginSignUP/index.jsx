import useModal from 'hooks/useModal';
import Modal from '../Modal';

export default function Button() {
  const { isShowing: isLoginForm, toggle: toggleLogin } = useModal();
  const { isShowing: isSignUp, toggle: toggleSignUp } = useModal();

  return (
    <>
      <div className="button">
        <button type="button" className="signUp" onClick={toggleSignUp}>
          Inscrivez vous
        </button>
        <button type="button" className="logIn" onClick={toggleLogin}>
          Connexion
        </button>
      </div>
      <Modal isShowing={isSignUp} hide={toggleSignUp} title="Inscrivez Vous">
        <form>
          <div className="form-group">
            <input type="text" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Password" />
          </div>
          <div className="form-group">
            <input type="submit" value="Register" />
          </div>
        </form>
      </Modal>
      <Modal isShowing={isLoginForm} hide={toggleLogin} title="Connexion">
        <form>
          <div className="form-group">
            <input type="text" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Password" />
          </div>
          <div className="form-group">
            <input type="submit" value="Register" />
          </div>
        </form>
      </Modal>
    </>
  );
}
