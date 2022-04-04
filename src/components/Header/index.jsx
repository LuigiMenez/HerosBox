import ButtonSignUp from '../ButtonLoginSignUP/signup';
import ButtonLogin from '../ButtonLoginSignUP/login';
import User from '../ButtonLoginSignUP/User';
import SHeader from './style';

export default function Header() {
  return (
    <SHeader>
      <h1>HerosBOX</h1>
      <div className="auth">
        <ButtonSignUp />
        <ButtonLogin />
        <User />
      </div>
    </SHeader>
  );
}
