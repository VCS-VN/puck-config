import * as _measured_puck from '@measured/puck';
import { DefaultComponentProps, ComponentDataOptionalId, WithId, Content, BaseData, BaseField, PuckComponent, Fields, AppState, Metadata, ResolveDataTrigger, Slot as Slot$1 } from '@measured/puck';
import { ButtonProps as ButtonProps$1, InputProps as InputProps$1 } from 'antd';
import * as react_jsx_runtime from 'react/jsx-runtime';

type OptionsObj = Record<string, any>;
type Options = string | OptionsObj;
declare const getGlobalClassName: (rootClass: string, options: Options) => string;

type Exact<T, Target> = Record<Exclude<keyof T, keyof Target>, never>;
type BuiltinTypes = Date | RegExp | Error | Function | symbol | null | undefined;
type Slot<Props extends {
    [key: string]: DefaultComponentProps;
} = {
    [key: string]: DefaultComponentProps;
}> = {
    [K in keyof Props]: ComponentDataOptionalId<Props[K], K extends string ? K : never>;
}[keyof Props][];
type LeftOrExactRight<Union, Left, Right> = (Left & Union extends Right ? Exact<Union, Right> : Left) | (Right & Exact<Union, Right>);
type ComponentConfigParams<Props extends DefaultComponentProps = DefaultComponentProps, UserFields extends FieldsExtension = never> = {
    props: Props;
    fields?: AssertHasValue<UserFields>;
};
type AssertHasValue<T, True = T, False = never> = [keyof T] extends [
    never
] ? False : True;
type FieldsExtension = {
    [Type in string]: {
        type: Type;
    };
};
type WithDeepSlots<T, SlotType = T> = T extends Slot ? SlotType : T extends (infer U)[] ? Array<WithDeepSlots<U, SlotType>> : T extends (infer U)[] ? WithDeepSlots<U, SlotType>[] : T extends BuiltinTypes ? T : T extends object ? {
    [K in keyof T]: WithDeepSlots<T[K], SlotType>;
} : T;
type ComponentData<Props extends DefaultComponentProps = DefaultComponentProps, Name = string, Components extends Record<string, DefaultComponentProps> = Record<string, DefaultComponentProps>> = {
    type: Name;
    props: WithDeepSlots<WithId<Props>, Content<Components>>;
} & BaseData<Props>;
type ComponentConfig<RenderPropsOrParams extends LeftOrExactRight<RenderPropsOrParams, DefaultComponentProps, ComponentConfigParams> = DefaultComponentProps, FieldProps extends DefaultComponentProps = RenderPropsOrParams extends {
    props: any;
} ? RenderPropsOrParams["props"] : RenderPropsOrParams, DataShape = Omit<ComponentData<FieldProps>, "type">> = RenderPropsOrParams extends ComponentConfigParams<infer ParamsRenderProps, never> ? ComponentConfigInternal<ParamsRenderProps, FieldProps, DataShape, {}> : RenderPropsOrParams extends ComponentConfigParams<infer ParamsRenderProps, infer ParamsFields> ? ComponentConfigInternal<ParamsRenderProps, FieldProps, DataShape, ParamsFields[keyof ParamsFields] & BaseField> : ComponentConfigInternal<RenderPropsOrParams, FieldProps, DataShape>;
type WithPartialProps<T, Props extends DefaultComponentProps> = Omit<T, "props"> & {
    props?: Partial<Props>;
};
type ComponentConfigInternal<RenderProps extends DefaultComponentProps, FieldProps extends DefaultComponentProps, DataShape = Omit<ComponentData<FieldProps>, "type">, // NB this doesn't include AllProps, so types will not contain deep slot types. To fix, we require a breaking change.
UserField extends BaseField = {}> = {
    render: PuckComponent<RenderProps>;
    label?: string;
    defaultProps?: FieldProps;
    fields?: Fields<FieldProps, UserField>;
    permissions?: Partial<Permissions>;
    inline?: boolean;
    resolveFields?: (data: DataShape, params: {
        changed: Partial<Record<keyof FieldProps, boolean> & {
            id: string;
        }>;
        fields: Fields<FieldProps>;
        lastFields: Fields<FieldProps>;
        lastData: DataShape | null;
        appState: AppState;
        parent: ComponentData | null;
    }) => Promise<Fields<FieldProps>> | Fields<FieldProps>;
    resolveData?: (data: DataShape, params: {
        changed: Partial<Record<keyof FieldProps, boolean> & {
            id: string;
        }>;
        lastData: DataShape | null;
        metadata: Metadata;
        trigger: ResolveDataTrigger;
    }) => Promise<WithPartialProps<DataShape, FieldProps>> | WithPartialProps<DataShape, FieldProps>;
    resolvePermissions?: (data: DataShape, params: {
        changed: Partial<Record<keyof FieldProps, boolean> & {
            id: string;
        }>;
        lastPermissions: Partial<Permissions>;
        permissions: Partial<Permissions>;
        appState: AppState;
        lastData: DataShape | null;
    }) => Promise<Partial<Permissions>> | Partial<Permissions>;
    metadata?: Metadata;
};
declare const spacingOptions: {
    label: string;
    value: string;
}[];

type CategoryGridProps = {
    limit: number;
    depth: number;
};

type ProductGridProps = {
    columns: number;
    limit: number;
    categoryId?: string;
};

type ProductCardProps = {
    productId?: string;
    showVariantSelector?: boolean;
};

type ButtonProps = {
    label: string;
    href?: string;
    variant: ButtonProps$1["variant"];
    size: ButtonProps$1["size"];
};

type LayoutFieldProps = {
    padding?: string;
    spanCol?: number;
    spanRow?: number;
    grow?: boolean;
    color?: string;
};
type WithLayout<Props extends DefaultComponentProps> = Props & {
    layout?: LayoutFieldProps;
};

type InputProps = WithLayout<{
    placeholder?: string;
    padding?: string;
    size?: InputProps$1["size"];
    maxWidth?: string;
    variant?: InputProps$1["variant"];
    disabled?: boolean;
}>;

type TextProps = WithLayout<{
    align: "left" | "center" | "right";
    text?: string;
    padding?: string;
    size?: "s" | "m";
    color: "default" | "muted";
    maxWidth?: string;
}>;

type HeadingProps = WithLayout<{
    align: "left" | "center" | "right";
    text?: string;
    level?: "1" | "2" | "3" | "4" | "5" | "6";
    size: "xxxxl" | "xxxl" | "xxl" | "xl" | "l" | "m" | "s" | "xs";
}>;

type SpaceProps = {
    direction?: "" | "vertical" | "horizontal";
    size: string;
};

type FlexProps = WithLayout<{
    justifyContent: "start" | "center" | "end";
    direction: "row" | "column";
    gap: number;
    wrap: "wrap" | "nowrap";
    items: Slot$1;
}>;

type GridProps = {
    numColumns: number;
    gap: number;
    items: Slot$1;
};

declare const PuckConfig: {
    root: Partial<Partial<{
        render: _measured_puck.PuckComponent<_measured_puck.WithChildren<_measured_puck.WithChildren<_measured_puck.DefaultRootProps>>>;
        label?: string;
        defaultProps?: _measured_puck.AsFieldProps<_measured_puck.WithChildren<_measured_puck.DefaultRootProps>> | undefined;
        fields?: _measured_puck.Fields<_measured_puck.AsFieldProps<_measured_puck.WithChildren<_measured_puck.DefaultRootProps>>, {
            type: "userField";
            option: boolean;
        } & _measured_puck.BaseField> | undefined;
        permissions?: Partial<_measured_puck.Permissions>;
        inline?: boolean;
        resolveFields?: ((data: _measured_puck.RootData<_measured_puck.AsFieldProps<_measured_puck.WithChildren<_measured_puck.DefaultRootProps>>>, params: {
            changed: Partial<Record<"title", boolean> & {
                id: string;
            }>;
            fields: _measured_puck.Fields<_measured_puck.AsFieldProps<_measured_puck.WithChildren<_measured_puck.DefaultRootProps>>, {}>;
            lastFields: _measured_puck.Fields<_measured_puck.AsFieldProps<_measured_puck.WithChildren<_measured_puck.DefaultRootProps>>, {}>;
            lastData: _measured_puck.RootData<_measured_puck.AsFieldProps<_measured_puck.WithChildren<_measured_puck.DefaultRootProps>>> | null;
            appState: _measured_puck.AppState;
            parent: _measured_puck.ComponentData | null;
        }) => _measured_puck.Fields<_measured_puck.AsFieldProps<_measured_puck.WithChildren<_measured_puck.DefaultRootProps>>, {}> | Promise<_measured_puck.Fields<_measured_puck.AsFieldProps<_measured_puck.WithChildren<_measured_puck.DefaultRootProps>>, {}>>) | undefined;
        resolveData?: ((data: _measured_puck.RootData<_measured_puck.AsFieldProps<_measured_puck.WithChildren<_measured_puck.DefaultRootProps>>>, params: {
            changed: Partial<Record<"title", boolean> & {
                id: string;
            }>;
            lastData: _measured_puck.RootData<_measured_puck.AsFieldProps<_measured_puck.WithChildren<_measured_puck.DefaultRootProps>>> | null;
            metadata: _measured_puck.Metadata;
            trigger: _measured_puck.ResolveDataTrigger;
        }) => (Omit<_measured_puck.RootData<_measured_puck.AsFieldProps<_measured_puck.WithChildren<_measured_puck.DefaultRootProps>>>, "props"> & {
            props?: Partial<_measured_puck.AsFieldProps<_measured_puck.WithChildren<_measured_puck.DefaultRootProps>>> | undefined;
        }) | Promise<Omit<_measured_puck.RootData<_measured_puck.AsFieldProps<_measured_puck.WithChildren<_measured_puck.DefaultRootProps>>>, "props"> & {
            props?: Partial<_measured_puck.AsFieldProps<_measured_puck.WithChildren<_measured_puck.DefaultRootProps>>> | undefined;
        }>) | undefined;
        resolvePermissions?: ((data: _measured_puck.RootData<_measured_puck.AsFieldProps<_measured_puck.WithChildren<_measured_puck.DefaultRootProps>>>, params: {
            changed: Partial<Record<"title", boolean> & {
                id: string;
            }>;
            lastPermissions: Partial<_measured_puck.Permissions>;
            permissions: Partial<_measured_puck.Permissions>;
            appState: _measured_puck.AppState;
            lastData: _measured_puck.RootData<_measured_puck.AsFieldProps<_measured_puck.WithChildren<_measured_puck.DefaultRootProps>>> | null;
        }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
        metadata?: _measured_puck.Metadata;
    }>>;
    categories: {
        layout: {
            components: string[];
        };
        typography: {
            components: string[];
        };
        interactive: {
            title: string;
            components: string[];
        };
        other: {
            title: string;
            components: string[];
        };
        storefront: {
            title: string;
            components: string[];
        };
    };
    components: {
        Container: {
            fields: {
                background: {
                    type: string;
                };
                padding: {
                    type: string;
                };
            };
            render: ({ background, padding, children }: any) => react_jsx_runtime.JSX.Element;
        };
        Grid: {
            render: _measured_puck.PuckComponent<GridProps>;
            label?: string;
            defaultProps?: GridProps | undefined;
            fields?: _measured_puck.Fields<GridProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<GridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof GridProps, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<GridProps, {}>;
                lastFields: _measured_puck.Fields<GridProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<GridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<GridProps, {}> | Promise<_measured_puck.Fields<GridProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<GridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof GridProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<GridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<GridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<GridProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<GridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<GridProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<GridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof GridProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<GridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        Flex: {
            render: _measured_puck.PuckComponent<FlexProps>;
            label?: string;
            defaultProps?: FlexProps | undefined;
            fields?: _measured_puck.Fields<FlexProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<FlexProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"layout" | "wrap" | "gap" | "items" | "justifyContent" | "direction", boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<FlexProps, {}>;
                lastFields: _measured_puck.Fields<FlexProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<FlexProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<FlexProps, {}> | Promise<_measured_puck.Fields<FlexProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<FlexProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"layout" | "wrap" | "gap" | "items" | "justifyContent" | "direction", boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<FlexProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<FlexProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<FlexProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<FlexProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<FlexProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<FlexProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"layout" | "wrap" | "gap" | "items" | "justifyContent" | "direction", boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<FlexProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        Space: {
            render: _measured_puck.PuckComponent<SpaceProps>;
            label?: string;
            defaultProps?: SpaceProps | undefined;
            fields?: _measured_puck.Fields<SpaceProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<SpaceProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof SpaceProps, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<SpaceProps, {}>;
                lastFields: _measured_puck.Fields<SpaceProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<SpaceProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<SpaceProps, {}> | Promise<_measured_puck.Fields<SpaceProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<SpaceProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof SpaceProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<SpaceProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<SpaceProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<SpaceProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<SpaceProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<SpaceProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<SpaceProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof SpaceProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<SpaceProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        Heading: {
            render: _measured_puck.PuckComponent<HeadingProps>;
            label?: string;
            defaultProps?: HeadingProps | undefined;
            fields?: _measured_puck.Fields<HeadingProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<HeadingProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"layout" | "size" | "text" | "align" | "level", boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<HeadingProps, {}>;
                lastFields: _measured_puck.Fields<HeadingProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<HeadingProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<HeadingProps, {}> | Promise<_measured_puck.Fields<HeadingProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<HeadingProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"layout" | "size" | "text" | "align" | "level", boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<HeadingProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<HeadingProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<HeadingProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<HeadingProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<HeadingProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<HeadingProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"layout" | "size" | "text" | "align" | "level", boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<HeadingProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        Text: {
            render: _measured_puck.PuckComponent<TextProps>;
            label?: string;
            defaultProps?: TextProps | undefined;
            fields?: _measured_puck.Fields<TextProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<TextProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"maxWidth" | "color" | "layout" | "size" | "text" | "padding" | "align", boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<TextProps, {}>;
                lastFields: _measured_puck.Fields<TextProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<TextProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<TextProps, {}> | Promise<_measured_puck.Fields<TextProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<TextProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"maxWidth" | "color" | "layout" | "size" | "text" | "padding" | "align", boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<TextProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<TextProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<TextProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<TextProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<TextProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<TextProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"maxWidth" | "color" | "layout" | "size" | "text" | "padding" | "align", boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<TextProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        Input: {
            render: _measured_puck.PuckComponent<InputProps>;
            label?: string;
            defaultProps?: InputProps | undefined;
            fields?: _measured_puck.Fields<InputProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<InputProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"maxWidth" | "layout" | "size" | "padding" | "disabled" | "placeholder" | "variant", boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<InputProps, {}>;
                lastFields: _measured_puck.Fields<InputProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<InputProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<InputProps, {}> | Promise<_measured_puck.Fields<InputProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<InputProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"maxWidth" | "layout" | "size" | "padding" | "disabled" | "placeholder" | "variant", boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<InputProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<InputProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<InputProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<InputProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<InputProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<InputProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"maxWidth" | "layout" | "size" | "padding" | "disabled" | "placeholder" | "variant", boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<InputProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        Button: {
            render: _measured_puck.PuckComponent<ButtonProps>;
            label?: string;
            defaultProps?: ButtonProps | undefined;
            fields?: _measured_puck.Fields<ButtonProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<ButtonProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ButtonProps, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<ButtonProps, {}>;
                lastFields: _measured_puck.Fields<ButtonProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<ButtonProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<ButtonProps, {}> | Promise<_measured_puck.Fields<ButtonProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<ButtonProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ButtonProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<ButtonProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<ButtonProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<ButtonProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<ButtonProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<ButtonProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<ButtonProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ButtonProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<ButtonProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        ProductCard: {
            render: _measured_puck.PuckComponent<ProductCardProps>;
            label?: string;
            defaultProps?: ProductCardProps | undefined;
            fields?: _measured_puck.Fields<ProductCardProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<ProductCardProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ProductCardProps, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<ProductCardProps, {}>;
                lastFields: _measured_puck.Fields<ProductCardProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<ProductCardProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<ProductCardProps, {}> | Promise<_measured_puck.Fields<ProductCardProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<ProductCardProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ProductCardProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<ProductCardProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<ProductCardProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<ProductCardProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<ProductCardProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<ProductCardProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<ProductCardProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ProductCardProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<ProductCardProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        ProductGrid: {
            render: _measured_puck.PuckComponent<ProductGridProps>;
            label?: string;
            defaultProps?: ProductGridProps | undefined;
            fields?: _measured_puck.Fields<ProductGridProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<ProductGridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ProductGridProps, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<ProductGridProps, {}>;
                lastFields: _measured_puck.Fields<ProductGridProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<ProductGridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<ProductGridProps, {}> | Promise<_measured_puck.Fields<ProductGridProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<ProductGridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ProductGridProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<ProductGridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<ProductGridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<ProductGridProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<ProductGridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<ProductGridProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<ProductGridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ProductGridProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<ProductGridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        CategoryGrid: {
            render: _measured_puck.PuckComponent<CategoryGridProps>;
            label?: string;
            defaultProps?: CategoryGridProps | undefined;
            fields?: _measured_puck.Fields<CategoryGridProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<CategoryGridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof CategoryGridProps, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<CategoryGridProps, {}>;
                lastFields: _measured_puck.Fields<CategoryGridProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<CategoryGridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<CategoryGridProps, {}> | Promise<_measured_puck.Fields<CategoryGridProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<CategoryGridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof CategoryGridProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<CategoryGridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<CategoryGridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<CategoryGridProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<CategoryGridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<CategoryGridProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<CategoryGridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof CategoryGridProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<CategoryGridProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        Divider: {
            fields: {};
            render: () => react_jsx_runtime.JSX.Element;
        };
        RichText: {
            fields: {
                html: {
                    type: string;
                };
            };
            render: ({ html }: any) => react_jsx_runtime.JSX.Element;
        };
        Image: {
            fields: {
                src: {
                    type: string;
                };
                alt: {
                    type: string;
                };
            };
            render: ({ src, alt }: any) => react_jsx_runtime.JSX.Element;
        };
        Video: {
            fields: {
                url: {
                    type: string;
                };
            };
            render: ({ url }: any) => react_jsx_runtime.JSX.Element;
        };
        Form: {
            fields: {
                placeholder: {
                    type: string;
                };
            };
            render: ({ placeholder }: any) => react_jsx_runtime.JSX.Element;
        };
        SearchBar: {
            fields: {};
            render: () => react_jsx_runtime.JSX.Element;
        };
        SEO: {
            fields: {
                title: {
                    type: string;
                };
                description: {
                    type: string;
                };
            };
            render: ({ title, description, }: {
                title?: string;
                description?: string;
            }) => react_jsx_runtime.JSX.Element;
        };
    };
};

export { type AssertHasValue, type ComponentConfig, type ComponentConfigParams, type ComponentData, type Exact, type FieldsExtension, type LeftOrExactRight, PuckConfig, type Slot, type WithDeepSlots, getGlobalClassName, spacingOptions };
