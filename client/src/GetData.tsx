import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { errorState, listState, loadingState } from "State";
import { Food } from "typings";

export async function GetData() {
  const [, setLoading] = useRecoilState(loadingState);
  const [, setList] = useRecoilState(listState);
  const [, setError] = useRecoilState(errorState);

  useEffect(() => {
    async function GetData(): Promise<void> {
      try {
        setLoading && setLoading(true);
        const { data } = await axios.get<Food[]>("food");
        setList && setList(data);
      } catch (err) {
        setError && setError(err.response);
      } finally {
        setLoading && setLoading(false);
      }
    }
  }, [setList, setLoading, setError]);
}
