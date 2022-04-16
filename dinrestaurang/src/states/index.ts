import { Food } from 'models';
import { atom } from 'recoil';

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
});
