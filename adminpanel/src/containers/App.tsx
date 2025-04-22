import React from 'react';
import axios from 'axios';

// Components
import Layout from '@app/Layout';
import { apiKey, authorizationKey, backendURL } from '@utils/envsVariables';

axios.defaults.baseURL = backendURL;
axios.defaults.headers.common['apiKey'] = apiKey;
axios.defaults.headers.common.Authorization = authorizationKey as string;

const App: React.FC = () => <Layout />;

export default App;
