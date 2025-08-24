import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";

interface PuckProvider {
  children?: React.ReactNode;
}

const queryClient = new QueryClient();

const PuckProvider: FC<PuckProvider> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default PuckProvider;
