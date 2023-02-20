import FoodItem from 'components/FoodItem';
import { getData } from 'functions';
import { Food } from 'models';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/app';
import { getError, getList, getLoading } from 'redux/reducers';
import sal from 'sal.js';
import { ErrorData, Loading, MainPhotos, Row } from 'styles';
import { debounce } from 'ts-debounce';
import React from 'react';

const PhotosList: React.FC = () => {
  const dispatch = useAppDispatch();
  const err = useAppSelector(getError);

  const loading = useAppSelector(getLoading);

  const list = useAppSelector(getList);

  useEffect(() => {
    sal();

    debounce(getData(dispatch) as any, 1500);
  }, []);

  return (
    <Row>
      <br />
      <MainPhotos fontSize={35} mt={80} fontStyle='italic'>
        {err ? (
          <ErrorData>{err}</ErrorData>
        ) : !loading ? (
          list.length ? (
            list.map((item: Food) => <FoodItem key={item.id} item={item} />)
          ) : (
            <ErrorData>Inga data. Var vänlig försök igen</ErrorData>
          )
        ) : (
          <Loading>Laddar...</Loading>
        )}
      </MainPhotos>
    </Row>
  );
};

export default PhotosList;
