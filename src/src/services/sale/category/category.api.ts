import { initHttpClient } from "@/client/httpClient";

export const getCategories = async (payload?: any, signal?: AbortSignal) => {
  const httpClient = initHttpClient();
  const response = await httpClient.get(`/api/v1/categories`, {
    params: payload,
    signal,
  });

  return response.data;
};

export const getCategoryTree = async (payload?: any, signal?: AbortSignal) => {
  const httpClient = initHttpClient();
  const response = await httpClient.get(`/api/v1/categories/tree`, {
    params: payload,
    signal,
  });

  return response.data;
};

export const createCategory = async (payload: any) => {
  const httpClient = initHttpClient();
  const response = await httpClient.post(`/api/v1/categories`, payload);

  return response.data;
};

export const getCategory = async (id: string, queries?: any) => {
  const httpClient = initHttpClient();
  const response = await httpClient.get(`/api/v1/categories/${id}`, {
    params: queries,
  });

  return response.data;
};
