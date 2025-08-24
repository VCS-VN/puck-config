import httpClient from "../../../client/httpClient";
import { IProduct } from "./product.type";

export const getProducts = async (payload?: any) => {
  const response = await httpClient.get(`/api/v1/products`, {
    params: payload,
  });

  return response.data;
};

export const getProductDetail = async (id?: string, queries?: any) => {
  const response = await httpClient.get(`/api/v1/products/${id}`, {
    params: queries,
  });

  return response.data;
};

export const assignProductToStorageLabel = async (payload: any) => {
  const response = await httpClient.post(
    `/api/v1/ffm/inbound/storage-labels/product`,
    payload
  );

  return response.data;
};

export const deleteProduct = async (id: string) => {
  const response = await httpClient.delete(`/api/v1/products/${id}`);

  return response.data;
};

export const createProduct = async (data: any) => {
  const response = await httpClient.post("/api/v1/products", data);

  return response.data;
};

export const updateProduct = async (payload: {
  id?: string;
  data: Partial<IProduct>;
}) => {
  const response = await httpClient.put(
    `/api/v1/products/${payload.id}`,
    payload.data
  );

  return response?.data;
};

export const createProductOption = async (payload: {
  data: any;
  storeId: string;
}) => {
  const response = await httpClient.post(
    "/api/v1/product-options",
    payload.data,
    {
      params: {
        storeId: payload.storeId,
      },
    }
  );

  return response.data;
};

export const updateProductOption = async (payload: {
  id: string;
  data: any;
  storeId: string;
}) => {
  const response = await httpClient.put(
    `/api/v1/product-options/${payload.id}`,
    payload.data,
    {
      params: {
        storeId: payload.storeId,
      },
    }
  );

  return response.data;
};

export const deleteProductOption = async (payload: {
  id: string;
  storeId: string;
}) => {
  const response = await httpClient.delete(
    `/api/v1/product-options/${payload.id}`,
    {
      params: {
        storeId: payload.storeId,
      },
    }
  );

  return response.data;
};

export const getProductOptions = async (payload?: any) => {
  const response = await httpClient.get(`/api/v1/product-options`, {
    params: payload,
  });

  return response.data;
};
