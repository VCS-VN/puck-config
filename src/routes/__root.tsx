import { Provider } from "@/components/ui/provider";
import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import "@measured/puck/puck.css";
import { ColorModeButton } from "@/components/ui/color-mode";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: () => {
    return (
      <Provider>
        <ColorModeButton />
        <Outlet />
      </Provider>
    );
  },
});
