import 'react-toastify/dist/ReactToastify.css';

import App from 'containers/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import GlobalStyles from 'styles/global';
import { toast } from 'react-toastify';
import { apiKey, authorizationKey } from './utils';

const { NODE_ENV } = process.env;

if (NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.log("It's looks like we are in a development mode");
}

if (!apiKey || !authorizationKey) {
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
