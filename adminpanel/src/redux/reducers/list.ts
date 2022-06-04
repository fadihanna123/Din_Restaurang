import { ActionTypes, Food } from "models";
import { SET_LIST } from "utils/constants";

const initialState: Food[] = [];

export const listReducer = (
    state = initialState,
    { type, payload }: ActionTypes
) => {
    switch (type) {
        case SET_LIST:
            return payload;

        default:
            return state;
    }
};
