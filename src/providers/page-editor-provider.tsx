"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ReactNode, useMemo } from "react";
import { type ColorModeProviderProps } from "@/components/ui/color-mode";
import {
  setHttpClientConfig,
  type HttpClientConfig,
} from "../client/httpConfig";
import "@/styles/index.css";
import "@measured/puck/puck.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "../components/ui/provider";
import {createRouter, RouterProvider} from "@tanstack/react-router";
import {routeTree} from "../routeTree.gen";
// Use the generated Provider

// const theme = extendTheme({});

export type PageEditorProviderProps = ColorModeProviderProps & {
  children?: ReactNode;
  queryClient?: QueryClient;
  http?: HttpClientConfig;
  chakraSystem?: any;
  router?: any;
};

const qc = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const routers = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <></>,
  defaultPendingComponent: () => (
    <div className="h-screen flex items-center justify-center">
      {/* <Spin /> */}
    </div>
  ),
  context: {
    queryClient: new QueryClient(),
  },
});
export function PageEditorProvider({
  children,
  queryClient,
  http,
  router,
  ...colorModeProps // Spread color mode props (e.g., defaultTheme)
}: PageEditorProviderProps) {
  if (http) {
    setHttpClientConfig(http);
  }

  // Apply default light theme if not provided
  const propsWithDefaults = useMemo(
    () => ({
      ...colorModeProps,
      defaultTheme: colorModeProps.defaultTheme || "light",
    }),
    [colorModeProps]
  );
  return (
    <QueryClientProvider client={qc}>
      <Provider {...propsWithDefaults}>
        <RecoilRoot>
          <RouterProvider router={router ? router: routers } />
          </RecoilRoot>
      </Provider>
    </QueryClientProvider>
  );
}
