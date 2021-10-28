import { atom } from "recoil";
import { Food } from "typings";

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
