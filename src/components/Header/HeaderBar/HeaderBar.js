import styles from '../HeaderBar.module.scss';
import AuthMenu from '../AuthMenu/AuthMenu';
import MainNav from '../MainNav/MainNav';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';

const HeaderBar = () => {
  const isAuth = useSelector(state => state.auth.token);
  return (
    <header className={styles.header}>
      <MainNav />
      {isAuth ? <UserMenu /> : <AuthMenu />}
    </header>
  );
};

export default HeaderBar;
