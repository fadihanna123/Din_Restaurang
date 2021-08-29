import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { listState, loadingState } from "states";
import { debounce } from "ts-debounce";
import { Food } from "typings";

export async function GetData() {
  const [, setLoading] = useRecoilState(loadingState);
  const [, setList] = useRecoilState(listState);
  const endPoint: string = "food";

  useEffect(() => {
    async function GetData(): Promise<void> {
      try {
        setLoading(true);

        const { data } = await axios.get<Food[]>(endPoint);
        setList(data);
      } catch (err) {
        console.log((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    debounce<any>(GetData(), 1500);
  }, [setList, setLoading]);
}
