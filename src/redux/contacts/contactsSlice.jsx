import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  logOut,
} from '../operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    token: null,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
      state.token = action.payload.token;
    },
    [fetchContacts.rejected](state, action) {
      state.error = action.payload;
    },
    // add contacts
    [addContact.pending](state) {
      state.isLoading = true;
    },

    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = [...state.contacts, action.payload];
      state.token = action.payload.token;
    },

    [addContact.rejected](state, action) {
      state.error = action.payload;
    },

    // delete contact
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.token = action.payload.token;
      const index = state.contacts.findIndex(
        item => item.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.error = action.payload;
    },
    [logOut.fulfilled](state) {
      state.contacts = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
