export const selectContacts = state => state.contacts.items;

export const selectFilterContact = state => state.filter.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
