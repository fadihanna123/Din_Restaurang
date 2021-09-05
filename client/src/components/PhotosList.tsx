import styled from "@emotion/styled";
import { getData } from "functions";
import { FC, useEffect } from "react";
import { useRecoilState } from "recoil";
import sal from "sal.js";
import { errorState, listState, loadingState } from "states";
import { space, typography } from "styled-system";
import { ErrorData, Loading, Row } from "styles";
import { debounce } from "ts-debounce";
import { Food } from "typings";

import FoodItem from "./FoodItem";

const PhotosList: FC = () => {
  const [err, setError] = useRecoilState(errorState);
  const [loading, setLoading] = useRecoilState(loadingState);
  const [list, setList] = useRecoilState(listState);

  useEffect(() => {
    sal();

    debounce<any>(getData(setLoading, setList, setError), 1500);
  }, [setList, setLoading, setError]);

  return (
    <Row>
      <br />
      <MainPhotos fontSize={35} mt={80} fontStyle="italic">
        {err ? (
          <ErrorData>{err}</ErrorData>
        ) : !loading ? (
          list.length ? (
            list.map((item: Food) => <FoodItem key={item._id} item={item} />)
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
