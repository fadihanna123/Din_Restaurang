import { Food } from "models";

import { getFoodData } from "./api";

export const getData = async (
    setLoading: (loading: boolean) => void,
    setList: (list: Food[]) => void,
    setError: (error: string) => void
): Promise<void> => {
    if (setLoading) {
        setLoading(true);
    }

    getFoodData()
        .then((data: any) => setList && setList(data))
        .catch((err: Error) => setError && setError(err.message))
        .finally(() => setLoading && setLoading(false));
};
