import axios from "axios";
import PhotosList from "components/PhotosList";
import WelcomeComp from "components/WelcomeComp";
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
        <WelcomeComp />
        <PhotosList />
        <Footer />
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  font-family: Cambria, Georgia;
  overflow: hidden;
  width: 1900px;
  margin: 0 auto;

  @media (max-width: 1900px) {
    width: 100%;
    margin: 0;
    font-size: 16px;
  }
`;
