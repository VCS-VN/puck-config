// src/store/variableAtom.ts (new file for Recoil atom)
import { atom } from "recoil";

export type VariableValue = string | number | boolean | Record<string, unknown> | undefined;

export const VariableState = atom<Record<string, VariableValue>>({
  key: "VariableState",
  default: {},
});
