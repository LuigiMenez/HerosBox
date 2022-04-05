import { useDispatch } from 'react-redux';
import Sbutton from './style';

export default function ButtonLogout() {
  const dispatch = useDispatch();

  const hLogOut = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <>
      <Sbutton type="button" onClick={hLogOut}>
        Deconnexion
      </Sbutton>
    </>
  );
}
