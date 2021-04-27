const isAuth = state => state.auth.isAuth;
const getUserName = state => state.auth.user.name;

export { isAuth, getUserName };
