import axios from "axios";
import { Food } from "typings";

export const getData = async (
  setLoading: (loading: boolean) => void,
  setList: (list: Food[]) => void
): Promise<void> => {
  try {
    const endPoint: string = "food";

    setLoading(true);

    const { data } = await axios.get<Food[]>(endPoint);
    setList(data);
  } catch (err) {
    console.log((err as Error).message);
  } finally {
    setLoading(false);
  }
};
