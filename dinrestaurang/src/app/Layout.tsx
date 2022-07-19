import WelcomeComp from 'components/WelcomeComp';
import PhotosList from 'containers/PhotosList';
import Footer from 'inc/Footer';
import Header from 'inc/Header';
import React from 'react';
import { Container } from 'styles';

const Layout: React.FC = () => (
  <Container>
    <Header />
    <main>
      <WelcomeComp />
      <PhotosList />
    </main>
    <Footer />
  </Container>
);

export default Layout;
