import { atom } from "recoil";

export const CartDrawerOpenState = atom<boolean>({
  key: "CartDrawerOpenState",
  default: false,
});

