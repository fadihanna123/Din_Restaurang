import { useEffect } from 'react';

// Components
import { setEditForm } from '@redux/reducers';
import useReduxConsts from './useReduxConsts';

const useEditItem = () => {
  const { getId, list, dispatch } = useReduxConsts();

  useEffect(() => {
    const item = list.find((item: Food) => item.id === getId);

    if (item) {
      dispatch(setEditForm(item));
    }
  }, [dispatch, getId, list]);
};

export default useEditItem;
