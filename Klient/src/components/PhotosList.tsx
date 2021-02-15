import PropTypes from "prop-types";
import styled from "styled-components";

import { Props } from "../typings/List";

const PhotosList = ({ loading, list }: Props) => {
  return (
    <>
      <Row>
        <br />
        <MainPhotos>
          {loading ? (
            list.length > 0 ? (
              list.map((item, i) => (
                <Col key={i}>
                  <FoodImg
                    src={require("../Images/" + item.image).default}
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
    </>
  );
};

PhotosList.propTypes = {
  loading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
};

PhotosList.defaultProps = {
  loading: false,
  list: [],
};

export default PhotosList;

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
