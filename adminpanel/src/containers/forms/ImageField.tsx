import { addTyper } from "functions";
import { useRecoilState } from "recoil";
import { addFormState } from "states";
import { Input } from "styles/global";

const ImageField: React.FC = () => {
  const [addForm, setAddForm] = useRecoilState(addFormState);

  return (
    <Input
      id="image"
      name="image"
      value={addForm.image}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        addTyper(e, addForm, setAddForm)
      }
    />
  );
};

export default ImageField;
