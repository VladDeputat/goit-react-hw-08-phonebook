const isAuth = state => state.auth.token;
const getUserName = state => state.auth.user.name;

export { isAuth, getUserName };
