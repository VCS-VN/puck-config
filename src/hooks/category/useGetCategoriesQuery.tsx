import { getCategories } from "@/services/sale/category/category.api";
import { ICategory } from "@/services/sale/category/category.type";
import { QueryType } from "@/utils/type";
import { useQuery } from "@tanstack/react-query";

type Props = Partial<QueryType<{ data: Partial<ICategory>[]; total: number }>>;

export const useGetCategoriesQuery = (queries?: any, props?: Props) => {
  return useQuery({
    ...props,
    queryKey: ["categories", queries],
    queryFn: () => getCategories(queries),
  });
};
