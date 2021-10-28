import axios from "axios";
import { useRecoilState } from "recoil";
import { addFormState, listState } from "states";
import { Food } from "typings";

export const AddItem = async (): Promise<void> => {
  const [addForm] = useRecoilState(addFormState);
  const [list, setList] = useRecoilState(listState);
  const endPoint: string = "food/add";

  try {
    const { data } = await axios.post<Food>(endPoint, addForm);
    setList([...list, data]);
  } catch (err) {
    console.log((err as Error).message);
  }
};
