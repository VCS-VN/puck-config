'use client';
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { QueryClient } from "@tanstack/react-query";
import { PageEditorProvider } from "./providers";

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
    </PageEditorProvider>
    // </ChakraProvider>
  );
}
