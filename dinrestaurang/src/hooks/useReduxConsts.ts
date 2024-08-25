import { getError, getList, getLoading } from '../redux/reducers';
import { useAppDispatch, useAppSelector } from '../redux/app';

const useReduxConsts = () => {
  const err = useAppSelector(getError);

  const loading = useAppSelector(getLoading);

  const list = useAppSelector(getList);

  const dispatch = useAppDispatch();

  return { err, loading, list, dispatch };
};

export default useReduxConsts;
