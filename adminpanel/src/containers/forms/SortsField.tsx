import { addTyper } from "functions";
import { useRecoilState } from "recoil";
import { addFormState } from "states";
import { Input } from "styles/global";

const SortsField: React.FC = () => {
  const [addForm, setAddForm] = useRecoilState(addFormState);

  return (
    <Input
      name="sorts"
      id="sorts"
      value={addForm.sorts}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        addTyper(e, addForm, setAddForm)
      }
    />
  );
};

export default SortsField;
