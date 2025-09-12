import { getCategories } from "@/services/sale/category/category.api";
import { ICategory } from "@/services/sale/category/category.type";
import { QueryType } from "@/utils/type";
import { useQuery } from "@tanstack/react-query";

type Props = Partial<QueryType<{ data: Partial<ICategory>[]; total: number }>>;

export const useGetCategoriesQuery = (queries?: any, props?: Props) => {
  return useQuery({
    queryKey: ["categories", queries],
    queryFn: ({ signal }) => getCategories(queries, signal as AbortSignal),
    // Sensible defaults for smoother UX; can be overridden by props
    staleTime: 60_000,
    gcTime: 300_000,
    placeholderData: (prev) => prev as any,
    retry: 1,
    ...(props as any),
  });
};
