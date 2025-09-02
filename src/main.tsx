import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { QueryClient } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { PageEditorProvider } from "./providers";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

const router = createRouter({
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    // <ChakraProvider value={defaultSystem}>
    <PageEditorProvider>
      <RouterProvider router={router} />
    </PageEditorProvider>
    // </ChakraProvider>
  );
}
