import { createSelector } from 'reselect';

const contactsSelector = state => state.contacts;
const itemsSelector = state => state.contacts.items;
const filterSelector = state => state.contacts.filter;

const filtredContactsSelector = createSelector(
  [itemsSelector, filterSelector],
  (contacts, filter) => {
    const normFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normFilter),
    );
  },
);

// const filtredContactsSelector = state => {
//   const items = itemsSelector(state);
//   const normFilter = filterSelector(state).toLowerCase();

//   return items.filter(item => item.name.toLowerCase().includes(normFilter));
// };

export {
  filterSelector,
  contactsSelector,
  filtredContactsSelector,
  itemsSelector,
};
