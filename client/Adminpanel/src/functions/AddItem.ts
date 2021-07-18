import axios from "axios";
import { useRecoilState } from "recoil";
import { addFormState, listState } from "States";
import { Food } from "typings";

export const AddItem = async (): Promise<void> => {
  const [addForm] = useRecoilState(addFormState);
  const [list, setList] = useRecoilState(listState);

  try {
    const { data } = await axios.post<Food>("food/add", addForm);
    setList([...list, data]);
  } catch (error) {
    console.log((error as Error).message);
  }
};
