import styles from '../HeaderBar.module.scss';
import { connect } from 'react-redux';
import AuthMenu from '../AuthMenu/AuthMenu';
import MainNav from '../MainNav/MainNav';
import UserMenu from '../UserMenu/UserMenu';
import { isAuth } from '../../../redux/auth/authSelectors';

const HeaderBar = ({ isAuth }) => {
  return (
    <header className={styles.header}>
      <MainNav />
      {isAuth ? <UserMenu /> : <AuthMenu />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuth: isAuth(state),
});

export default connect(mapStateToProps)(HeaderBar);
