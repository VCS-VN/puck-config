"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import {getListSlider} from "../../services/sale/sliders/sliders.api";

export const useGetSlidersQuery = (queries?: any, props?: Props) => {
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
        queryKey: ["sliders", queries],
        queryFn: () => getListSlider(queries),
        staleTime: 60_000,
        gcTime: 300_000,
        placeholderData: (prev) => prev as any,
        keepPreviousData: true,
        retry: 1,
        ...(props as any),
    });
};
