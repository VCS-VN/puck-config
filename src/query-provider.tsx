import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";

interface PuckProviderProps {
  children?: React.ReactNode;
}

const queryClient = new QueryClient();

const PuckProvider: FC<PuckProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default PuckProvider;
