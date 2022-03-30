import { useSelector } from 'react-redux';

export default function User() {
  const { user } = useSelector((state) => state);
  return (
    <>
      <p>id: {user.id || '---'}</p>
      <p>Email: {user.mail || '---'}</p>
      <p>UserName: {user.login || '---'}</p>
      <p>Pass: {user.password || '---'}</p>
    </>
  );
}
