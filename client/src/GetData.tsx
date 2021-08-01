import axios from "axios";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { errorState, listState, loadingState } from "States";
import { debounce } from "ts-debounce";
import { Food } from "typings";

export async function GetData() {
  const [, setLoading] = useRecoilState(loadingState);
  const [, setList] = useRecoilState(listState);
  const [, setError] = useRecoilState(errorState);
  const endPoint: string = "food";

  const GetData = useCallback(async (): Promise<void> => {
    try {
      setLoading && setLoading(true);

      const { data } = await axios.get<Food[]>(endPoint);
      setList && setList(data);
    } catch (err) {
      setError && setError((err as Error).message);
    } finally {
      setLoading && setLoading(false);
    }
  }, [setLoading, setList, setError]);

  useEffect(() => {
    debounce<any>(GetData(), 1500);
  }, [setList, setLoading, setError, GetData]);
}
