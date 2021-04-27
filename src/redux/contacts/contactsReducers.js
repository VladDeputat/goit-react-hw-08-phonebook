import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getContactSuccess,
  addContactSuccess,
  deleteContactSuccess,
  filterContacts,
} from './contactsActions';

const contactsItems = createReducer([], {
  [getContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const filterContact = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: contactsItems,
  filter: filterContact,
});

export { contactsReducer };
