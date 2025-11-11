import { useSelector } from 'react-redux';

// Components
import { getError } from '@redux/reducers/error';
import { useAppDispatch, useAppSelector } from '@redux/app/hooks';
import {
  getAddForm,
  getEditForm,
  getIdState,
  getList,
  getLoading,
  getView,
} from '@redux/reducers';
import { getPageLoading } from '@redux/reducers/pageLoading';
import { getDarkMode } from '@core/redux/reducers/darkMode';

const useReduxConsts = () => {
  const addForm = useAppSelector(getAddForm);

  const editForm = useAppSelector(getEditForm);

  const list = useSelector(getList);

  const error = useAppSelector(getError);

  const view = useAppSelector(getView);

  const loading = useAppSelector(getLoading);

  const pageLoading = useAppSelector(getPageLoading);

  const darkMode = useAppSelector(getDarkMode);

  const dispatch = useAppDispatch();

  const getId = useAppSelector(getIdState);

  return {
    addForm,
    error,
    loading,
    list,
    view,
    editForm,
    getId,
    pageLoading,
    darkMode,
    dispatch,
  };
};

export default useReduxConsts;
