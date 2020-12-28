import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Includes/Header";
import Footer from "./Includes/Footer";
import axios from "axios";

const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios({
        url: "http://localhost:5000/food",
        headers: { "Content-Type": "application/json" },
      });
      setList(data);
    } catch (err) {
      console.log(err.response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <Welcome>Välkommen till din restaurang</Welcome>
        <Row>
          <br />
          <MainPhotos>
            {loading ? (
              list.length > 0 ? (
                list.map((item, i) => (
                  <Col key={i}>
                    <FoodImg
                      src={require("./Images/" + item.image).default}
                      alt="Maträtten"
                    />
                    <FoodTitle>{item.title}</FoodTitle>
                    <MainTxt>
                      <span>Sorter: {item.sorts} </span>
                      <br />
                      Pris: {item.price} kr <br />
                      Ingår: {item.included}
                    </MainTxt>

                    <br />
                  </Col>
                ))
              ) : (
                <ErrorData>Inga data. Var vänlig försök igen</ErrorData>
              )
            ) : (
              <Loading>Laddar...</Loading>
            )}
          </MainPhotos>
        </Row>
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

const Row = styled.div`
  margin: 0 10px 0 10px;
  overflow: hidden;
  display: flex;

  @media (max-width: 1900px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  float: left;
  width: 15%;
  padding: 10px;

  @media (max-width: 1900px) {
    width: 100%;
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

const Loading = styled.span`
  position: absolute;
  top: 50%;
  left: 40%;

  @media (max-width: 1900px) {
    position: relative;
    top: -50px;
    left: 0;
    text-align: center;
  }
`;

const ErrorData = styled.div`
  position: absolute;
  top: 50%;
  left: 37%;
  color: red;

  @media (max-width: 1900px) {
    position: relative;
    top: -50px;
    left: 0;
    text-align: center;
  }
`;

const MainPhotos = styled.div`
  font-size: 35px;
  margin-top: 80px;
  font-style: italic;
`;

const FoodImg = styled.img`
  width: 100%;
  height: 300px;
  padding: 3px;
`;

const FoodTitle = styled.h1`
  text-align: center;
  font-size: 25px;
`;

const MainTxt = styled.p`
  padding: 10px;
  font-size: 20px;
`;
