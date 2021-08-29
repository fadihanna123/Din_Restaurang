import axios from "axios";
import AdminTitleComp from "components/AdminTitleComp";
import FoodTable from "components/FoodTable";
import Footer from "includes/Footer";
import Header from "includes/Header";
import { FC } from "react";
import styled from "styled-components";

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.headers["Content-Type"] = "application/json";

const App: FC = () => (
  <Container>
    <Header />
    <AdminTitleComp />
    <FoodTable />
    <Footer />
  </Container>
);

export default App;

const Container = styled.div`
  font-family: Cambria, Georgia;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 1900px) {
    width: 100%;
    margin: 0;
    font-size: 16px;
  }
`;
