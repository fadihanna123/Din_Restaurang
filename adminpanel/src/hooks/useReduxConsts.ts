import { getError } from '../redux/reducers/error';
import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import {
  getAddForm,
  getEditForm,
  getIdState,
  getList,
  getLoading,
  getView,
} from '../redux/reducers';
import { useSelector } from 'react-redux';

const useReduxConsts = () => {
  const addForm = useAppSelector(getAddForm);

  const editForm = useAppSelector(getEditForm);

  const list = useSelector(getList);

  const error = useAppSelector(getError);

  const view = useAppSelector(getView);

  const loading = useAppSelector(getLoading);

  const dispatch = useAppDispatch();

  const getId = useAppSelector(getIdState);

  return { addForm, error, loading, list, view, editForm, getId, dispatch };
};

export default useReduxConsts;
