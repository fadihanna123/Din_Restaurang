import axios from "axios";
import PhotosList from "components/PhotosList";
import Footer from "Includes/Footer";
import Header from "Includes/Header";
import { useState } from "react";
import styled from "styled-components";
import { Food } from "typings";

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.headers["Content-Type"] = "application/json";

const App = () => {
  const [list, setList] = useState<Food[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  return (
    <>
      <Container>
        <Header />
        <Welcome data-aos="zoom-in">Välkommen till din restaurang</Welcome>
        <PhotosList error={error} loading={loading} list={list} />
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

const Welcome = styled.h1`
  font-size: 35px;
  font-style: italic;
  margin-left: 700px;
  margin-top: 80px;

  @media (max-width: 1900px) {
    margin: 10px;
    text-align: center;
  }
`;
