import { addTyper } from 'functions';
import { AddFormReducerTypes } from 'models';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'styles/global';

const AddImageField: React.FC = () => {
  const addForm = useSelector(
    (state: AddFormReducerTypes) => state.addFormReducer
  );

  const dispatch = useDispatch();

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
