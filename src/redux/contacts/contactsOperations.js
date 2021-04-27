import axios from 'axios';
import {
  getContactRequest,
  getContactSuccess,
  getContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contactsActions';

const getContacts = () => dispatch => {
  dispatch(getContactRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(getContactSuccess(data)))
    .catch(error => dispatch(getContactError(error.message)));
};

const addContact = ({ name, number }) => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`./contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

export { getContacts, addContact, deleteContact };
