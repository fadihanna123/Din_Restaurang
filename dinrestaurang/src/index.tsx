import 'react-toastify/dist/ReactToastify.css';

import App from '@containers/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import { GlobalStyles } from '@styles/index';
import AOS from 'aos';

if (process.env.NODE_ENV === 'development') {
  console.log("It's looks like that we are in a development mode!");
}

AOS.init();

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
