import { ActionTypes } from "models";
import { SET_GET_ID } from "utils/constants";

const initialState: string | null = null;

export const getIdReducer = (
    state = initialState,
    { type, payload }: ActionTypes
) => {
    switch (type) {
        case SET_GET_ID:
            return payload;

        default:
            return state;
    }
};
