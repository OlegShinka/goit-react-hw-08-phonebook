export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => state.filter.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectIsLoggedin = state => state.auth.isLoggedIn;

export const selectUserEmail = state => state.auth.user.email;

export const selectUserName = state => state.auth.user.name;

export const selectIsRefresh = state => state.auth.isRefresh;
