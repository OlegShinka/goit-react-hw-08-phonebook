import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://6548032b902874dff3acedfe.mockapi.io/api/v1';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      console.log('при логині', data.token);
      token.set(data.token);

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async thunkApi => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset();

    return data;
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token; //token з минулої сесії
    //console.log('state', thunkApi.getState());
    if (persistedToken === null) {
      console.log('not user');
      return thunkApi.rejectWithValue('Unable to fetch user');
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contacts, thunkApi) => {
    try {
      const response = await axios.post('/contacts', contacts);
      console.log('resp.data: ', response.data);

      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);

      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
