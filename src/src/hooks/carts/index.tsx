"use client";

import { ISessionCart } from "../../services/sale/cart/cart.type";
import { QueryType } from "../../utils/type";
import { useQuery, useMutation } from "@tanstack/react-query";
import {createSessionCart, processToCheckout} from "../../services/sale/cart/cart.api";

type Props = Partial<QueryType<{ data: ISessionCart }>>;

export const useCreateSessionCart = (props?: any) => {

    return useMutation({
        ...props,
        mutationFn: () => createSessionCart(),
    });
};

export const useProcessToCheckout = (props?: any) => {
    return useMutation({
        ...props,
        mutationFn: processToCheckout,
    })
}
