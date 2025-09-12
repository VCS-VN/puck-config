import { Render } from "@measured/puck";
import { AppProvider, type AppProviderProps } from "../components/ui/app-provider";
import { PuckConfig } from "../blocks/puck.config";

export type PuckRendererProps = {
  data: any;
  metadata?: Record<string, any>;
  providerProps?: Omit<AppProviderProps, 'children'>;
};

export function PuckRenderer({ data, metadata, providerProps }: PuckRendererProps) {
  return (
    <AppProvider {...(providerProps as any)}>
      <Render data={data} config={PuckConfig} metadata={metadata} />
    </AppProvider>
  );
}
