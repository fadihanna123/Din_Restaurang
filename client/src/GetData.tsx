import axios from "axios";
import { useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import { errorState, listState, loadingState } from "States";
import { Food } from "typings";

export async function GetData() {
  const [, setLoading] = useRecoilState(loadingState);
  const [, setList] = useRecoilState(listState);
  const [, setError] = useRecoilState(errorState);

  const GetData = useCallback(async (): Promise<void> => {
    try {
      setLoading && setLoading(true);
      const { data } = await axios.get<Food[]>("food");
      setList && setList(data);
    } catch (err) {
      setError && setError(err.response);
    } finally {
      setLoading && setLoading(false);
    }
  }, [setLoading, setList, setError]);

  useEffect(() => {
    GetData();
  }, [setList, setLoading, setError, GetData]);
}
