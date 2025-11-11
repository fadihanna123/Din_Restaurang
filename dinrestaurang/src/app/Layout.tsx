import WelcomeComp from '@components/WelcomeComp';
import PhotosList from '@containers/PhotosList';
import Footer from '@inc/Footer';
import Header from '@inc/Header';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container, ToggleThemeBtn } from '@styles/index';
import useReduxConsts from '@core/hooks/useReduxConsts';
import { setDarkMode } from '@redux/reducers/darkMode';

const Layout: React.FC = () => {
  const { darkMode, dispatch } = useReduxConsts();

  const toggleTheme = () => {
    dispatch(setDarkMode(!darkMode));
  };

  return (
    <Container theme={darkMode ? 'dark' : 'light'}>
      <Header />
      <main>
        <WelcomeComp />
        <PhotosList />
      </main>
      <Footer />
      <ToggleThemeBtn onClick={() => toggleTheme()}>
        {!darkMode ? (
          <i className='fa-solid fa-moon'></i>
        ) : (
          <i className='fa-solid fa-sun'></i>
        )}
      </ToggleThemeBtn>
      <ToastContainer />
    </Container>
  );
};

export default Layout;
