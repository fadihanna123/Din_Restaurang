import Layout from 'app/Layout';
import axios from 'axios';
import { backendURL } from 'utils';

axios.defaults.baseURL = backendURL;
axios.defaults.headers.common["Content-Type"] = "application/json";

const App: React.FC = () => <Layout />;

export default App;
