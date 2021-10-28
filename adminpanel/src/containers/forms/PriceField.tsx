import { addTyper } from "functions";
import { useRecoilState } from "recoil";
import { addFormState } from "states";
import { Input } from "styles/global";

const PriceField: React.FC = () => {
  const [addForm, setAddForm] = useRecoilState(addFormState);

  return (
    <Input
      name="price"
      id="price"
      value={addForm.price}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        addTyper(e, addForm, setAddForm)
      }
    />
  );
};

export default PriceField;
