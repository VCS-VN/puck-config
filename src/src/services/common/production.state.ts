// src/store/variableAtom.ts (new file for Recoil atom)
import { atom } from "recoil";

export const ProductionState = atom<Record<string, any>>({
  key: "ProductionState",
  default: {},
});
