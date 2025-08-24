"use client";

import axios from "axios";
import { getEnv } from "@/utils/env-key";
console.log(
  ";jaosdasdfasdfasdjfoasdf",
  getEnv("VITE_CUSTOMER_API_URL") || getEnv("NEXT_PUBLIC_CUSTOMER_API_URL")
);
const httpClient = axios.create({
  baseURL: "http://localhost:9800",
  // getEnv("VITE_CUSTOMER_API_URL") || getEnv("NEXT_PUBLIC_CUSTOMER_API_URL"),
});
console.log(
  ";jaosdasdfasdfasdjfoasdf httpClienthttpClienthttpClient",
  httpClient
);

const getLocalToken = () => {
  return localStorage.getItem("accessToken");
};

const refreshToken = async () => {
  const token = localStorage.getItem("refreshToken");

  const response = await httpClient.get("/api/v1/auth/refresh-token", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response?.data) {
    const { refreshToken, accessToken } = response.data;
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("accessToken", accessToken);
  }
};

httpClient.interceptors.request.use(
  (config) => {
    const token = getLocalToken();
    if (token && !config?.headers?.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (res) => res,
  async (e) => {
    const status = e.response ? e.response.status : null;
    const config = e.config;

    switch (status) {
      case 401:
        if (
          config.url !== "/api/v1/auth/refresh-token" &&
          config.url !== "/api/v1/auth/login"
        ) {
          await refreshToken();
        } else if (config.url === "/api/v1/auth/refresh-token") {
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("accessToken");
          const url = encodeURIComponent(location.href);
          location.href = `/sign-in?return=${url}`;
        }
        break;
      default:
        break;
    }
    throw e;
  }
);

export default httpClient;
