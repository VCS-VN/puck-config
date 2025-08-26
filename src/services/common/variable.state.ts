// src/store/variableAtom.ts (new file for Recoil atom)
import { atom } from "recoil";

export const VariableState = atom<Record<string, string>>({
  key: "VariableState",
  default: {},
});
