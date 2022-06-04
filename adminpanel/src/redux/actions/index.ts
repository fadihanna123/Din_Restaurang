import { AddForm, Food, IEditForm } from "models";
import { SET_ADD_FORM, SET_EDIT_FORM, SET_GET_ID, SET_ID, SET_LIST, SET_LOADING, SET_VIEW } from "utils/constants";

export const setAddForm = (payload: AddForm): object => {
    return { type: SET_ADD_FORM, payload };
};

export const setEditForm = (payload: IEditForm) => {
    return { type: SET_EDIT_FORM, payload };
};

export const setView = (payload: string) => {
    return { type: SET_VIEW, payload };
};

export const setId = (payload: string | null): object => {
    return { type: SET_ID, payload };
};

export const setLoading = (payload: boolean): object => {
    return { type: SET_LOADING, payload };
};

export const setList = (payload: Food[]) => {
    return { type: SET_LIST, payload };
};

export const setGetId = (payload: string | null): object => {
    return { type: SET_GET_ID, payload };
};
