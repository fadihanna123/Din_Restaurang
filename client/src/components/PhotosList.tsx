import { useRecoilState } from "recoil";
import { errorState, listState, loadingState } from "States";
import {
  Col,
  ErrorData,
  FoodImg,
  FoodTitle,
  Loading,
  MainPhotos,
  MainTxt,
  Row,
} from "styles";

const PhotosList = () => {
  const [err] = useRecoilState(errorState);
  const [loading] = useRecoilState(loadingState);
  const [list] = useRecoilState(listState);

  return (
    <Row>
      <br />
      <MainPhotos>
        {err ? (
          <div style={{ color: "red" }}>{err}</div>
        ) : !loading ? (
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
            <ErrorData data-aos="zoom-out">
              Inga data. Var vänlig försök igen
            </ErrorData>
          )
        ) : (
          <Loading>Laddar...</Loading>
        )}
      </MainPhotos>
    </Row>
  );
};

export default PhotosList;
