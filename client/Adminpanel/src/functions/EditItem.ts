import axios from "axios";
import { useRecoilState } from "recoil";
import { editFormState, getIdState, listState, viewState } from "States";
import { Food } from "typings";

export const EditItem = async (): Promise<void> => {
  const [getId] = useRecoilState(getIdState);
  const [editForm] = useRecoilState(editFormState);
  const [list, setList] = useRecoilState(listState);
  const [, setView] = useRecoilState(viewState);

  try {
    await axios.put<Food>(`food/${getId}`, editForm);

    const temp = [...list];
    const index = temp.findIndex((i) => i._id === getId);
    temp[index] = editForm;
    setList(temp);

    setView("");
  } catch (err) {
    console.log(err);
  }
};
