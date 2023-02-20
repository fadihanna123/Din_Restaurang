import React from 'react';
import AdminTitleComp from 'containers/AdminTitleComp';
import FoodTable from 'containers/FoodTable';
import Footer from 'inc/Footer';
import Header from 'inc/Header';
import { ToastContainer } from 'react-toastify';
import { Container } from 'styles';

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
