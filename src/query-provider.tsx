import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";
import { RecoilRoot } from "recoil";

interface PuckProviderProps {
  children?: React.ReactNode;
}

const queryClient = new QueryClient();

export const PuckProvider: FC<PuckProviderProps> = ({ children }) => {
  return (
    <RecoilRoot>
      <ChakraProvider value={defaultSystem}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ChakraProvider>
    </RecoilRoot>
  );
};
