import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from 'styles';

// Components
import Header from 'inc/Header';
import Footer from 'inc/Footer';
import AdminTitleComp from 'containers/AdminTitleComp';
import FoodTable from 'containers/FoodTable';

const Layout: React.FC = () => (
  <Container>
    <Header />
    <AdminTitleComp />
    <FoodTable />
    <Footer />
    <ToastContainer />
  </Container>
);

export default Layout;
