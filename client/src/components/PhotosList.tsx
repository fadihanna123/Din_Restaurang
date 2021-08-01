import styled from "@emotion/styled";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import sal from "sal.js";
import { errorState, listState, loadingState } from "states";
import { space, typography } from "styled-system";
import { ErrorData, Loading, Row } from "styles";

import FoodItem from "./FoodItem";

const PhotosList = () => {
  const [err] = useRecoilState(errorState);
  const [loading] = useRecoilState(loadingState);
  const [list] = useRecoilState(listState);

  useEffect(() => {
    sal();
  }, []);

  return (
    <Row>
      <br />
      <MainPhotos fontSize={35} mt={80} fontStyle="italic">
        {err ? (
          <ErrorData>{err}</ErrorData>
        ) : !loading ? (
          list.length ? (
            list.map((item, i) => <FoodItem item={item} i={i} />)
          ) : (
            <ErrorData data-sal="zoom-out">
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

const MainPhotos = styled("section")(typography, space);
