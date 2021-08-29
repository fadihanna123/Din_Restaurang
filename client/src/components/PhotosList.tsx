import styled from "@emotion/styled";
import { FC, useEffect } from "react";
import { useRecoilState } from "recoil";
import sal from "sal.js";
import { errorState, listState, loadingState } from "states";
import { space, typography } from "styled-system";
import { ErrorData, Loading, Row } from "styles";
import { Food } from "typings";

import FoodItem from "./FoodItem";

const PhotosList: FC = () => {
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
            list.map(({ _id, title, sorts, included, price, image }: Food) => {
              const props = {
                _id,
                title,
                sorts,
                included,
                price,
                image,
              };

              return <FoodItem key={_id} {...props} />;
            })
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
