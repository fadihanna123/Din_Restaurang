import { addTyper } from "functions";
import React from "react";
import { useRecoilState } from "recoil";
import { addFormState } from "states";
import { Input } from "styles/global";

const IncludedField: React.FC = () => {
  const [addForm, setAddForm] = useRecoilState(addFormState);

  return (
    <Input
      name="included"
      id="included"
      value={addForm.included}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        addTyper(e, addForm, setAddForm)
      }
    />
  );
};

export default IncludedField;
