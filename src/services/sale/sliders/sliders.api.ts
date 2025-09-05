"use client";

import { initHttpClient } from "@/client/httpClient";

export const getListSlider = async (payload?:any) => {
  const httpClient = initHttpClient();
  const response = await httpClient.get(`/api/v1/sdui-sliders`, {
    params: payload,
  });

  return response.data;
};


