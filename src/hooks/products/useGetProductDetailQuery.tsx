import { getProductDetail } from "../../services/sale/product/product.api";
import { IProduct } from "../../services/sale/product/product.type";
import { QueryType } from "../../utils/type";

import { useQuery } from "@tanstack/react-query";

type Props = Partial<QueryType<IProduct>>;

export const useGetProductDetailQuery = (
  productId: string,
  queries?: any,
  props?: Props
) => {
  const data = useQuery({
    ...props,
    queryKey: ["product-detail", productId, queries],
    queryFn: () => getProductDetail(productId, queries),
  });

  return data;
};
