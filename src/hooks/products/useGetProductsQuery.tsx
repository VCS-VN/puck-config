import { getProducts } from "../../services/sale/product/product.api";
import { IProduct } from "../../services/sale/product/product.type";
import { QueryType } from "../../utils/type";
import { useQuery } from "@tanstack/react-query";

type Props = Partial<QueryType<{ data: IProduct[]; total: number }>>;

export const useGetProductsQuery = (queries?: any, props?: Props) => {
  return useQuery({
    ...props,
    queryKey: ["products", queries],
    queryFn: () => getProducts(queries),
  });
};
