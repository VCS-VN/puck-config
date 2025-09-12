/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import {
  AppState,
  BaseData,
  BaseField,
  ComponentDataOptionalId,
  Content,
  DefaultComponentProps,
  Fields,
  Metadata,
  PuckComponent,
  ResolveDataTrigger,
  WithId,
} from "@measured/puck";

export * from "./get-class-name-factory";

export type Exact<T, Target> = Record<Exclude<keyof T, keyof Target>, never>;

type BuiltinTypes =
  | Date
  | RegExp
  | Error
  | Function
  | symbol
  | null
  | undefined;

export type Slot<
  Props extends { [key: string]: DefaultComponentProps } = {
    [key: string]: DefaultComponentProps;
  },
> = {
  [K in keyof Props]: ComponentDataOptionalId<
    Props[K],
    K extends string ? K : never
  >;
}[keyof Props][];

export type LeftOrExactRight<Union, Left, Right> =
  | (Left & Union extends Right ? Exact<Union, Right> : Left)
  | (Right & Exact<Union, Right>);

export type ComponentConfigParams<
  Props extends DefaultComponentProps = DefaultComponentProps,
  UserFields extends FieldsExtension = never,
> = {
  props: Props;
  fields?: AssertHasValue<UserFields>;
};

export type AssertHasValue<T, True = T, False = never> = [keyof T] extends [
  never,
]
  ? False
  : True;

export type FieldsExtension = { [Type in string]: { type: Type } };

export type WithDeepSlots<T, SlotType = T> =
  // ────────────────────────────── leaf conversions ─────────────────────────────
  T extends Slot
    ? SlotType
    : // ────────────────────────── recurse into arrays & tuples ─────────────────
      T extends (infer U)[]
      ? Array<WithDeepSlots<U, SlotType>>
      : T extends (infer U)[]
        ? WithDeepSlots<U, SlotType>[]
        : // ────────────────────────── preserve objects like Date ───────────────────
          T extends BuiltinTypes
          ? T
          : // ───────────── recurse into objects while preserving optionality ─────────
            T extends object
            ? { [K in keyof T]: WithDeepSlots<T[K], SlotType> }
            : T;

export type ComponentData<
  Props extends DefaultComponentProps = DefaultComponentProps,
  Name = string,
  Components extends Record<string, DefaultComponentProps> = Record<
    string,
    DefaultComponentProps
  >,
> = {
  type: Name;
  props: WithDeepSlots<WithId<Props>, Content<Components>>;
} & BaseData<Props>;

export type ComponentConfig<
  RenderPropsOrParams extends LeftOrExactRight<
    RenderPropsOrParams,
    DefaultComponentProps,
    ComponentConfigParams
  > = DefaultComponentProps,
  FieldProps extends DefaultComponentProps = RenderPropsOrParams extends {
    props: any;
  }
    ? RenderPropsOrParams["props"]
    : RenderPropsOrParams,
  DataShape = Omit<ComponentData<FieldProps>, "type">, // NB this doesn't include AllProps, so types will not contain deep slot types. To fix, we require a breaking change.
> =
  RenderPropsOrParams extends ComponentConfigParams<
    infer ParamsRenderProps,
    never
  >
    ? ComponentConfigInternal<ParamsRenderProps, FieldProps, DataShape, {}>
    : RenderPropsOrParams extends ComponentConfigParams<
          infer ParamsRenderProps,
          infer ParamsFields
        >
      ? ComponentConfigInternal<
          ParamsRenderProps,
          FieldProps,
          DataShape,
          ParamsFields[keyof ParamsFields] & BaseField
        >
      : ComponentConfigInternal<RenderPropsOrParams, FieldProps, DataShape>;

type WithPartialProps<T, Props extends DefaultComponentProps> = Omit<
  T,
  "props"
> & {
  props?: Partial<Props>;
};

type ComponentConfigInternal<
  RenderProps extends DefaultComponentProps,
  FieldProps extends DefaultComponentProps,
  DataShape = Omit<ComponentData<FieldProps>, "type">, // NB this doesn't include AllProps, so types will not contain deep slot types. To fix, we require a breaking change.
  UserField extends BaseField = {},
> = {
  render: PuckComponent<RenderProps>;
  label?: string;
  defaultProps?: FieldProps;
  fields?: Fields<FieldProps, UserField>;
  permissions?: Partial<Permissions>;
  inline?: boolean;
  resolveFields?: (
    data: DataShape,
    params: {
      changed: Partial<Record<keyof FieldProps, boolean> & { id: string }>;
      fields: Fields<FieldProps>;
      lastFields: Fields<FieldProps>;
      lastData: DataShape | null;
      appState: AppState;
      parent: ComponentData | null;
    }
  ) => Promise<Fields<FieldProps>> | Fields<FieldProps>;
  resolveData?: (
    data: DataShape,
    params: {
      changed: Partial<Record<keyof FieldProps, boolean> & { id: string }>;
      lastData: DataShape | null;
      metadata: Metadata;
      trigger: ResolveDataTrigger;
    }
  ) =>
    | Promise<WithPartialProps<DataShape, FieldProps>>
    | WithPartialProps<DataShape, FieldProps>;
  resolvePermissions?: (
    data: DataShape,
    params: {
      changed: Partial<Record<keyof FieldProps, boolean> & { id: string }>;
      lastPermissions: Partial<Permissions>;
      permissions: Partial<Permissions>;
      appState: AppState;
      lastData: DataShape | null;
    }
  ) => Promise<Partial<Permissions>> | Partial<Permissions>;
  metadata?: Metadata;
};

export const spacingOptions = [
  { label: "8px", value: "8px" },
  { label: "16px", value: "16px" },
  { label: "24px", value: "24px" },
  { label: "32px", value: "32px" },
  { label: "40px", value: "40px" },
  { label: "48px", value: "48px" },
  { label: "56px", value: "56px" },
  { label: "64px", value: "64px" },
  { label: "72px", value: "72px" },
  { label: "80px", value: "80px" },
  { label: "88px", value: "88px" },
  { label: "96px", value: "96px" },
  { label: "104px", value: "104px" },
  { label: "112px", value: "112px" },
  { label: "120px", value: "120px" },
  { label: "128px", value: "128px" },
  { label: "136px", value: "136px" },
  { label: "144px", value: "144px" },
  { label: "152px", value: "152px" },
  { label: "160px", value: "160px" },
];
