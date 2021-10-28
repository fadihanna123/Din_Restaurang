import { addTyper } from "functions";
import { useRecoilState } from "recoil";
import { addFormState } from "states";
import { Input } from "styles/global";

const TitleField: React.FC = () => {
  const [addForm, setAddForm] = useRecoilState(addFormState);

  return (
    <Input
      name="title"
      id="title"
      value={addForm.title}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        addTyper(e, addForm, setAddForm)
      }
    />
  );
};

export default TitleField;
