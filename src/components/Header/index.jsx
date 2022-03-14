import ButtonLoginSignUp from '../ButtonLoginSignUP';
import SHeader from './style';

export default function Header() {
  return (
    <SHeader>
      <>
        <ButtonLoginSignUp />
        <h1> La boite à perso !</h1>
      </>
    </SHeader>
  );
}
