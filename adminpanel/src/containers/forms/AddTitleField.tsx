import { addTyper } from 'functions';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'styles/global';
import { AddFormReducerTypes } from 'typings';

const AddTitleField: React.FC = () => {
  const addForm = useSelector(
    (state: AddFormReducerTypes) => state.addFormReducer
  );

  const dispatch = useDispatch();

  return (
    <Input
      name="title"
      id="title"
      value={addForm.title}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        addTyper(e, addForm, dispatch)
      }
    />
  );
};

export default AddTitleField;
