import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";

interface PuckProviderProps {
  children?: React.ReactNode;
}

const queryClient = new QueryClient();

export const PuckProvider: FC<PuckProviderProps> = ({ children }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ChakraProvider>
  );
};
