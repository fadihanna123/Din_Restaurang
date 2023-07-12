import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import 'sal.js/dist/sal.css';

import App from 'containers/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/app/store';
import GlobalStyles from 'styles/global';
import { toast } from 'react-toastify';

const { NODE_ENV, REACT_APP_APIKEY, REACT_APP_AUTHORIZATION } = process.env;

if (NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.log("It's looks like we are in a development mode");
}

if (!REACT_APP_APIKEY || !REACT_APP_AUTHORIZATION) {
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
