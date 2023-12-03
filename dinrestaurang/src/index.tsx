import 'react-toastify/dist/ReactToastify.css';

import App from 'containers/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/app/store';
import { GlobalStyles } from 'styles';
import { toast } from 'react-toastify';

const { REACT_APP_APIKEY, REACT_APP_AUTHORIZATION } = process.env;

if (process.env.NODE_ENV === 'development') {
  console.log("It's looks like that we are in a development mode!");
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
