import { request } from "api";
import { EditFormReducerTypes, Food, GetIdReducerTypes, ListReducerTypes } from "models";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setList, setView } from "redux/actions";

export const EditItem = async (): Promise<void> => {
    const getId = useSelector((state: GetIdReducerTypes) => state.getIdReducer);
    const editForm = useSelector(
        (state: EditFormReducerTypes) => state.editFormReducer
    );
    const list = useSelector((state: ListReducerTypes) => state.listReducer);

    const dispatch = useDispatch();

    const endPoint: string = `food/${getId}`;

    try {
        await request.put<Food>(endPoint, editForm);

        const temp = [...list];
        const index = temp.findIndex((i: Food) => i.id === getId);
        temp[index] = editForm;
        dispatch(setList(temp));

        dispatch(setView(""));
    } catch (err) {
        toast.error((err as Error).message);
    }
};
