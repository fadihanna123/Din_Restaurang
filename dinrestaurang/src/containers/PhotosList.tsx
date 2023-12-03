import FoodItem from 'components/FoodItem';
import { getData } from 'functions';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/app';
import { getError, getList, getLoading } from 'redux/reducers';
import { ErrorData, Loading, MainPhotos, Row } from 'styles';

const PhotosList: React.FC = () => {
  const dispatch = useAppDispatch();
  const err = useAppSelector(getError);

  const loading = useAppSelector(getLoading);

  const list = useAppSelector(getList);

  useEffect(() => {
    getData(dispatch);
  }, []);

  return (
    <Row>
      <br />
      <MainPhotos>
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
