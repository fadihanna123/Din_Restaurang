import axios from "axios";
import FoodTable from "components/FoodTable";
import Footer from "Includes/Footer";
import Header from "Includes/Header";
import styled from "styled-components";

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.headers["Content-Type"] = "application/json";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Admin>Välkommen till din restaurang</Admin>
        <FoodTable />
        <Footer />
      </Container>
    </>
  );
};

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

const Admin = styled.h1`
  font-size: 30px;
  font-style: italic;
  margin-left: 800px;
  margin-top: 80px;

  @media (max-width: 1900px) {
    margin: 10px;
    text-align: center;
  }
`;
