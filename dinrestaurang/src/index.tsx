import 'normalize.css';
import 'sal.js/dist/sal.css';

import App from 'containers/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { GlobalStyles } from 'styles';

if (process.env.NODE_ENV === 'development') {
  console.log("It's looks like that we are in a development mode!");
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
