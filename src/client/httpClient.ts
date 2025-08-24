"use client";

import axios from "axios";
import { get } from "lodash";

let URL = "";
if (typeof process !== "undefined") {
  URL = process?.env?.NEXT_PUBLIC_CUSTOMER_API_URL as string;
  console.log("jaosdfjosdjfjasdfjsdjfsidfifiififjasidfjiasdf", URL);
} else {
  URL = get(import.meta, "env.VITE_CUSTOMER_API_URL", "");
  console.log("aj828238jklasjdf", URL);
}

console.log("ajsodfjoasjdfo, ", URL);

const httpClient = axios.create({
  baseURL: URL,
});

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
export { httpClient };

// export const initHttpClient = () => {
//   let URL = "";
//   if (typeof process !== "undefined") {
//     console.log("jaosdfjosdjfjasdfjsdjfsidfifiififjasidfjiasdf");
//     URL = process?.env?.NEXT_PUBLIC_CUSTOMER_API_URL as string;
//   } else {
//     console.log("aj828238jklasjdf");
//     URL = get(import.meta, "meta.VITE_CUSTOMER_API_URL", "");
//   }

//   const httpClient = axios.create({
//     baseURL: URL,
//   });

//   const getLocalToken = () => {
//     return localStorage.getItem("accessToken");
//   };

//   const refreshToken = async () => {
//     const token = localStorage.getItem("refreshToken");

//     const response = await httpClient.get("/api/v1/auth/refresh-token", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (response?.data) {
//       const { refreshToken, accessToken } = response.data;
//       localStorage.setItem("refreshToken", refreshToken);
//       localStorage.setItem("accessToken", accessToken);
//     }
//   };

//   httpClient.interceptors.request.use(
//     (config) => {
//       const token = getLocalToken();
//       if (token && !config?.headers?.Authorization) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

//   httpClient.interceptors.response.use(
//     (res) => res,
//     async (e) => {
//       const status = e.response ? e.response.status : null;
//       const config = e.config;

//       switch (status) {
//         case 401:
//           if (
//             config.url !== "/api/v1/auth/refresh-token" &&
//             config.url !== "/api/v1/auth/login"
//           ) {
//             await refreshToken();
//           } else if (config.url === "/api/v1/auth/refresh-token") {
//             localStorage.removeItem("refreshToken");
//             localStorage.removeItem("accessToken");
//             const url = encodeURIComponent(location.href);
//             location.href = `/sign-in?return=${url}`;
//           }
//           break;
//         default:
//           break;
//       }
//       throw e;
//     }
//   );

//   return httpClient;
// };
