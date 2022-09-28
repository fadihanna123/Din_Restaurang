import { addTyper } from 'functions';
import { useAppDispatch, useAppSelector } from 'redux/app/hooks';
import { getAddForm } from 'redux/reducers';
import { Input } from 'styles/global';

const AddImageField: React.FC = () => {
  const addForm = useAppSelector(getAddForm);

  const dispatch = useAppDispatch();

  return (
    <Input
      id='image'
      name='image'
      value={addForm.image}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        addTyper(e, addForm, dispatch)
      }
    />
  );
};

export default AddImageField;
