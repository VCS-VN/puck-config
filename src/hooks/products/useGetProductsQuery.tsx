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
    storeId = import.meta?.env?.VITE_ENTITY_ID;
  }

  queries = {
    ...queries,
    storeId: queries?.storeId || storeId,
  };

  return useQuery({
    ...props,
    queryKey: ["products", queries],
    queryFn: () => getProducts(queries),
  });
};
