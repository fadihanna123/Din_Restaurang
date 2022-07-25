import Layout from 'app/Layout';
import axios from 'axios';
import { apiKey, authorizationKey, backendURL } from 'utils/envs';

axios.defaults.baseURL = backendURL;
axios.defaults.headers.common.apiKey = apiKey as string;
axios.defaults.headers.common.authorization =
  authorizationKey as string;

const App: React.FC = () => <Layout />;

export default App;
