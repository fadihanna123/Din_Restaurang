import 'react-toastify/dist/ReactToastify.css';

import App from '@containers/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import { GlobalStyles } from '@styles/index';
import { toast } from 'react-toastify';

const { VITE_API_KEY, VITE_AUTHORIZATION_KEY } = import.meta.env;

if (process.env.NODE_ENV === 'development') {
  console.log("It's looks like that we are in a development mode!");
}

if (!VITE_API_KEY || !VITE_AUTHORIZATION_KEY) {
  toast.error('Missing keys! Add them and restart the app.');
  throw new Error('Missing keys! Add them and restart the app.');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
