import { connect } from 'react-redux';
import { getUserName } from '../../../redux/auth/authSelectors';
import defAvatar from '../../../img/noPhoto.png';
import {
  userMenuBox,
  userAvatar,
  welcomeText,
  logOutBtn,
} from './UserMenu.module.scss';
import { logOut } from '../../../redux/auth/authOperations';

const UserMenu = ({ name, avatar, onLogout }) => {
  return (
    <div className={userMenuBox}>
      <img src={avatar} alt="avatar" className={userAvatar} />
      <p className={welcomeText}>Welcome, {name}</p>
      <button className={logOutBtn} type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: getUserName(state),
  avatar: defAvatar,
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
