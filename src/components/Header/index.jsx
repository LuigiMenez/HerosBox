import ButtonSignUp from '../ButtonLoginSignUP/signup';
import ButtonLogin from '../ButtonLoginSignUP/login';
import User from '../ButtonLoginSignUP/User';
import SHeader from './style';

export default function Header() {
  return (
    <SHeader>
      <>
        <ButtonSignUp />
        <ButtonLogin />
        <User />
        <h1> La boite à perso !</h1>
      </>
    </SHeader>
  );
}
