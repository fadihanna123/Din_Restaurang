import React from 'react';
import { ToastContainer } from 'react-toastify';

// Components
import { Container, ToggleThemeBtn } from '@styles/layoutStyles';
import Header from '@inc/Header';
import Footer from '@inc/Footer';
import AdminTitleComp from '@containers/AdminTitleComp';
import FoodTable from '@containers/FoodTable';
import useReduxConsts from '@hooks/useReduxConsts';
import { setDarkMode } from '@redux/reducers/darkMode';

const Layout: React.FC = () => {
  const { dispatch, darkMode } = useReduxConsts();

  const toggleTheme = () => {
    dispatch(setDarkMode(!darkMode));
  };

  return (
    <Container theme={darkMode ? 'dark' : 'light'}>
      <Header />
      <AdminTitleComp />
      <FoodTable />
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
