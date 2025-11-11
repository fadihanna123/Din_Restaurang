import { getError, getList, getLoading } from '../redux/reducers';
import { useAppDispatch, useAppSelector } from '../redux/app';
import { getPageLoading } from '@redux/reducers/pageLoading';
import { getDarkMode } from '@core/redux/reducers/darkMode';

const useReduxConsts = () => {
  const err = useAppSelector(getError);

  const loading = useAppSelector(getLoading);

  const list = useAppSelector(getList);

  const pageLoading = useAppSelector(getPageLoading);

  const darkMode = useAppSelector(getDarkMode);

  const dispatch = useAppDispatch();

  return { err, loading, list, pageLoading, darkMode, dispatch };
};

export default useReduxConsts;
