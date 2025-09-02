import { Puck } from "@measured/puck";
import { Render } from "@measured/puck";
import { ReactNode } from "react";
import { AppProvider, type AppProviderProps } from "../components/ui/app-provider";
import { PuckConfig } from "../blocks/puck.config";

export type PuckEditorProps = {
  data: any;
  metadata?: Record<string, any>;
  onChange?: (data: any) => void;
  onPublish?: (data: any) => void;
  children?: ReactNode;
  providerProps?: Omit<AppProviderProps, 'children'>;
};

export function PuckEditor({ data, metadata, onChange, onPublish, providerProps }: PuckEditorProps) {
  return (
    <AppProvider {...(providerProps as any)}>
      <Puck data={data} config={PuckConfig} metadata={metadata} onChange={onChange as any} onPublish={onPublish as any} />
    </AppProvider>
  );
}

export type PuckRendererProps = {
  data: any;
  metadata?: Record<string, any>;
};

export function PuckRenderer({ data, metadata }: PuckRendererProps) {
  return (
    <AppProvider>
      <Render data={data} config={PuckConfig} metadata={metadata} />
    </AppProvider>
  );
}
