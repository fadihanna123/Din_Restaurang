import { addTyper } from 'functions';
import { AddFormReducerTypes } from 'models';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'styles/global';

const AddPriceField: React.FC = () => {
  const addForm = useSelector(
    (state: AddFormReducerTypes) => state.addFormReducer
  );

  const dispatch = useDispatch();

  return (
    <Input
      name='price'
      id='price'
      value={addForm.price || ''}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        addTyper(e, addForm, dispatch)
      }
    />
  );
};

export default AddPriceField;
