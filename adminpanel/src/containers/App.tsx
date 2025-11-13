import React, { useEffect } from 'react';
import axios from 'axios';

// Components
import Layout from '@app/Layout';
import { apiKey, backendURL } from '@utils/envsVariables';
import { LoaderContainer } from '@core/styles/AppStyles';
import useReduxConsts from '@hooks/useReduxConsts';
import { ClipLoader } from 'react-spinners';
import { setPageLoading } from '@redux/reducers';
import { getToken } from '@core/functions';

axios.defaults.baseURL = backendURL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['apiKey'] = apiKey;

const App: React.FC = () => {
  const { dispatch, pageLoading } = useReduxConsts();

  useEffect(() => {
    (async () => {
      const tokenData = await getToken();
      localStorage.setItem('token', tokenData!.data!.token);
    })();

    const timer = setTimeout(() => dispatch(setPageLoading(false)), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (pageLoading) {
    return (
      <LoaderContainer>
        <ClipLoader
          color={'#000'}
          loading={pageLoading}
          size={100}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </LoaderContainer>
    );
  }

  return <Layout />;
};

export default App;
