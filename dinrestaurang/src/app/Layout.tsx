import WelcomeComp from '@components/WelcomeComp';
import PhotosList from '@containers/PhotosList';
import Footer from '@inc/Footer';
import Header from '@inc/Header';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from '@styles/index';

const Layout: React.FC = () => (
  <Container>
    <Header />
    <main>
      <WelcomeComp />
      <PhotosList />
    </main>
    <Footer />
    <ToastContainer />
  </Container>
);

export default Layout;
