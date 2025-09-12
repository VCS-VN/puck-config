"use client";

import { getProducts } from "../../services/sale/product/product.api";
import { IProduct } from "../../services/sale/product/product.type";
import { QueryType } from "../../utils/type";
import { useQuery } from "@tanstack/react-query";

type Props = Partial<QueryType<{ data: IProduct[]; total: number }>>;

export const useGetProductsQuery = (queries?: any, props?: Props) => {
  let storeId = queries?.storeId;

  if (typeof process !== "undefined") {
    storeId = process?.env?.NEXT_PUBLIC_ENTITY_ID;
  } else {
    storeId = import.meta.env.VITE_ENTITY_ID ;
  }
  queries = {
    ...queries,
    storeId: queries?.storeId || storeId,
  };

  return useQuery({
    queryKey: ["products", queries],
    queryFn: ({ signal }) => getProducts(queries, signal as AbortSignal),
    staleTime: 60_000,
    gcTime: 300_000,
    placeholderData: (prev) => prev as any,
    keepPreviousData: true,
    retry: 1,
    ...(props as any),
  });
};
