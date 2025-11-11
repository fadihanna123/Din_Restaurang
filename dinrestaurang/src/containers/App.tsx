import React, { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

// Components
import Layout from '@app/Layout';
import { LoaderContainer } from '@core/styles';
import useReduxConsts from '@hooks/useReduxConsts';
import { setPageLoading } from '@redux/reducers/pageLoading';

const App: React.FC = () => {
  const { dispatch, pageLoading } = useReduxConsts();

  useEffect(() => {
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
