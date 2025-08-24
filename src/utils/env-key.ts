"use client";

import { get } from "lodash";

export function getEnv(key: string): string | undefined {
  if (key.includes("VITE_")) {
    return get(import.meta, `env.${key}`);
  }

  return get(process, `env.${key}`);
}
