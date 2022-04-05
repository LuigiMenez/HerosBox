import { useSelector } from 'react-redux';
import ButtonSignUp from '../ButtonLoginSignUP/signup';
import ButtonLogin from '../ButtonLoginSignUP/login';
import User from '../ButtonLoginSignUP/User';
import ButtonLogout from '../ButtonLoginSignUP/logout';
import SHeader from './style';

export default function Header() {
  const { user } = useSelector((state) => state);

  return (
    <SHeader>
      <h1>HerosBOX</h1>
      {user.id ? (
        <div className="auth">
          <User />
          <ButtonLogout />
        </div>
      ) : (
        <div className="auth">
          <ButtonSignUp />
          <ButtonLogin />
        </div>
      )}
    </SHeader>
  );
}
