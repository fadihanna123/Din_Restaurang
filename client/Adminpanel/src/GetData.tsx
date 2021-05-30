import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { listState, loadingState } from "States";
import { Food } from "typings";

export async function GetData() {
  const [, setLoading] = useRecoilState(loadingState);
  const [, setList] = useRecoilState(listState);

  useEffect(() => {
    async function GetData(): Promise<void> {
      try {
        setLoading(true);
        const { data } = await axios.get<Food[]>("food");
        setList(data);
      } catch (err) {
        console.log(err.response);
      } finally {
        setLoading(false);
      }
    }
  }, [setList, setLoading]);
}
