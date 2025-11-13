import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';

// Components
import App from '@containers/App';
import { store } from '@redux/app/store';
import GlobalStyles from '@styles/global';
import { nodeEnv } from '@utils/envsVariables';

if (nodeEnv === 'development') {
  // eslint-disable-next-line no-console
  console.log("It's looks like we are in a development mode");
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
