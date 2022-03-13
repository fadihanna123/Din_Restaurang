import { getData } from 'functions';
import { Food } from 'models';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import sal from 'sal.js';
import { errorState, listState, loadingState } from 'states';
import { ErrorData, Loading, MainPhotos, Row } from 'styles';
import { debounce } from 'ts-debounce';

import FoodItem from './FoodItem';

const PhotosList: React.FC = () => {
  const [err, setError] = useRecoilState(errorState);
  const [loading, setLoading] = useRecoilState(loadingState);
  const [list, setList] = useRecoilState(listState);

  useEffect(() => {
    sal();

    debounce(getData(setLoading, setList, setError) as any, 1500);
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
