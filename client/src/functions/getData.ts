import axios from "axios";
import { Food } from "typings";

export const getData = async (
  setLoading: (loading: boolean) => void,
  setList: (list: Food[]) => void,
  setError: (error: string) => void
): Promise<void> => {
  try {
    const endPoint: string = "food";

    setLoading && setLoading(true);

    const { data } = await axios.get<Food[]>(endPoint);
    setList && setList(data);
  } catch (err) {
    setError && setError((err as Error).message);
  } finally {
    setLoading && setLoading(false);
  }
};
