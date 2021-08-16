import { atom } from "recoil";
import { AddForm, Food, IEditForm } from "typings";

export const loadingState = atom<boolean>({
  key: "loadingState",
  default: false,
});

export const listState = atom<Food[]>({
  key: "listState",
  default: [],
});

export const errorState = atom<string>({
  key: "errorState",
  default: "",
});

export const addFormState = atom<AddForm>({
  key: "addFormState",
  default: {
    title: "",
    sorts: "",
    price: 0,
    image: "",
    included: "",
  },
});

export const editFormState = atom<IEditForm>({
  key: "editFormState",
  default: {
    _id: "",
    title: "",
    sorts: "",
    price: 0,
    image: "",
    included: "",
  },
});

export const viewState = atom<string>({
  key: "viewState",
  default: "",
});

export const getIdState = atom<null | string>({
  key: "getIdState",
  default: null,
});
