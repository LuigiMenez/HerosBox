import useModal from 'hooks/useModal';
import Modal from '../Modal';
import SHeader from './style';

export default function Header() {
  const { isShowing, toggle } = useModal();

  return (
    <SHeader>
      <>
        <div>
          <button type="button" onClick={toggle}>
            Connexion
          </button>
          <Modal isShowing={isShowing} hide={toggle} />
          <a href="test">Inscrivez-vous</a>
        </div>
        <h1> La boite à perso !</h1>
      </>
    </SHeader>
  );
}
