import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from '@store';
import { GlobalStyle } from '@components/global-style';

import { App } from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
