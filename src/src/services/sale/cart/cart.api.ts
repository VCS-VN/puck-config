"use client";

import { initHttpClient } from "@/client/httpClient";


export const createSessionCart = async () => {
  const httpClient = initHttpClient();
  const response = await httpClient.post(
    `/api/v1/carts`,
      {}
  );

  return response.data;
};


export const processToCheckout = async (payload: {
  id?: string;
  body: any;
}) => {
  const httpClient = initHttpClient();
  const response = await httpClient.put(
    `/api/v1/carts/${payload?.id}`,
    payload?.body
  );

  return response?.data;
};

