import { getData } from 'functions';
import { ErrorReducerTypes, Food, ListReducerTypes, LoadingReducerTypes } from 'models';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sal from 'sal.js';
import { ErrorData, Loading, MainPhotos, Row } from 'styles';
import { debounce } from 'ts-debounce';

import FoodItem from './FoodItem';

const PhotosList: React.FC = () => {
  const dispatch = useDispatch();
  const err = useSelector(
    (state: ErrorReducerTypes) => state.errorReducer
  );

  const loading = useSelector(
    (state: LoadingReducerTypes) => state.loadingReducer
  );

  const list = useSelector(
    (state: ListReducerTypes) => state.listReducer
  );

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
            list.map((item: Food) => (
              <FoodItem key={item.id} item={item} />
            ))
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
