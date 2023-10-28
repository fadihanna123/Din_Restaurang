import React from 'react';
import Layout from 'app/Layout';
import axios from 'axios';
import { apiKey, authorizationKey, backendURL } from 'utils';

const globalHeader = 'application/json';

axios.defaults.baseURL = backendURL;
axios.defaults.headers.common['Content-Type'] = globalHeader;
axios.defaults.headers.common['apiKey'] = apiKey;
axios.defaults.headers.common.Authorization = authorizationKey as string;

const App: React.FC = () => <Layout />;

export default App;
