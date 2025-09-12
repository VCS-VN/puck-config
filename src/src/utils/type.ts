import {
  DefinedInitialDataOptions,
  UndefinedInitialDataOptions,
  UseQueryOptions,
} from "@tanstack/react-query";

export type QueryType<T> = DefinedInitialDataOptions<T> &
  UseQueryOptions<T> &
  UndefinedInitialDataOptions<T>;
