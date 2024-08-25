import FoodItem from 'components/FoodItem';
import { getData } from 'functions';
import React, { useEffect } from 'react';
import { ErrorData, Loading, MainPhotos, Row } from 'styles';
import useReduxConsts from 'hooks/useReduxConsts';

const PhotosList: React.FC = () => {
  const { dispatch, err, loading, list } = useReduxConsts();

  useEffect(() => {
    let mounted = true;
    getData(dispatch, mounted);
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Row>
      <br />
      <MainPhotos>
        {err ? (
          <ErrorData>{err}</ErrorData>
        ) : !loading ? (
          list && list.length ? (
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
