import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={{}}>
        <BrowserRouter basename="goit-react-hw-08-phonebook">
          <App />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
