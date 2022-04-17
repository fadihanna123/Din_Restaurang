import { addTyper } from 'functions';
import { AddFormReducerTypes } from 'models';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'styles/global';

const AddSortsField: React.FC = () => {
  const addForm = useSelector(
    (state: AddFormReducerTypes) => state.addFormReducer
  );

  const dispatch = useDispatch();

  return (
    <Input
      name="sorts"
      id="sorts"
      value={addForm.sorts}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        addTyper(e, addForm, dispatch)
      }
    />
  );
};

export default AddSortsField;
