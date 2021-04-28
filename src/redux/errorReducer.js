import { createReducer } from '@reduxjs/toolkit';
import {
  registerError,
  loginError,
  logoutError,
  getCurrentUserError,
} from '../redux/auth/authActions';
import {
  getContactError,
  addContactError,
  deleteContactError,
} from '../redux/contacts/contactsActions';

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
  [getContactError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
});

export default error;
