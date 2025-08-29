import * as _measured_puck from '@measured/puck';
import { DefaultComponentProps } from '@measured/puck';
import { FC } from 'react';

type CategoryGridProps = {
    title?: string;
    subtitle?: string;
    storeId?: string;
    urlRedirect?: string;
    mobile?: number;
    tablet?: number;
    desktop?: number;
    limit?: number;
};

type ButtonProps = {
    label: string;
    href?: string;
};

type LayoutFieldProps = {
    paddingTop?: string;
    paddingRight?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    spanCol?: number;
    spanRow?: number;
    startCol?: number;
    startRow?: number;
    grow?: boolean;
    shrink?: boolean;
    basis?: string;
    alignSelf?: string;
    justifySelf?: string;
    bgColor?: any;
    bgImage?: string;
    border?: string;
    borderRadius?: string;
};
type WithLayout<Props extends DefaultComponentProps> = Props & {
    layout?: LayoutFieldProps;
};

type HeadingProps = WithLayout<{
    align: "left" | "center" | "right";
    text?: string;
    level?: "1" | "2" | "3" | "4" | "5" | "6";
    size: "xxxxl" | "xxxl" | "xxl" | "xl" | "l" | "m" | "s" | "xs";
}>;

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
            defaultExpanded: boolean;
        };
        typography: {
            components: string[];
            defaultExpanded: boolean;
        };
        interactive: {
            title: string;
            components: string[];
            defaultExpanded: boolean;
        };
        storefront: {
            title: string;
            components: string[];
            defaultExpanded: boolean;
        };
    };
    components: {
        Container: {
            render: _measured_puck.PuckComponent<_measured_puck.DefaultComponentProps>;
            label?: string;
            defaultProps?: _measured_puck.DefaultComponentProps | undefined;
            fields?: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>;
                lastFields: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}> | Promise<_measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<_measured_puck.DefaultComponentProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<_measured_puck.DefaultComponentProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        Grid: {
            render: _measured_puck.PuckComponent<_measured_puck.DefaultComponentProps>;
            label?: string;
            defaultProps?: _measured_puck.DefaultComponentProps | undefined;
            fields?: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>;
                lastFields: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}> | Promise<_measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<_measured_puck.DefaultComponentProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<_measured_puck.DefaultComponentProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        Flex: {
            render: _measured_puck.PuckComponent<_measured_puck.DefaultComponentProps>;
            label?: string;
            defaultProps?: _measured_puck.DefaultComponentProps | undefined;
            fields?: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>;
                lastFields: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}> | Promise<_measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<_measured_puck.DefaultComponentProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<_measured_puck.DefaultComponentProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
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
                changed: Partial<Record<"text" | "layout" | "size" | "align" | "level", boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<HeadingProps, {}>;
                lastFields: _measured_puck.Fields<HeadingProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<HeadingProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<HeadingProps, {}> | Promise<_measured_puck.Fields<HeadingProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<HeadingProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"text" | "layout" | "size" | "align" | "level", boolean> & {
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
                changed: Partial<Record<"text" | "layout" | "size" | "align" | "level", boolean> & {
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
            render: _measured_puck.PuckComponent<{
                layout?: {
                    paddingTop?: string;
                    paddingRight?: string;
                    paddingBottom?: string;
                    paddingLeft?: string;
                    marginTop?: string;
                    marginRight?: string;
                    marginBottom?: string;
                    marginLeft?: string;
                    spanCol?: number;
                    spanRow?: number;
                    startCol?: number;
                    startRow?: number;
                    grow?: boolean;
                    shrink?: boolean;
                    basis?: string;
                    alignSelf?: string;
                    justifySelf?: string;
                    bgColor?: any;
                    bgImage?: string;
                    border?: string;
                    borderRadius?: string;
                };
            }>;
            label?: string;
            defaultProps?: {
                layout?: {
                    paddingTop?: string;
                    paddingRight?: string;
                    paddingBottom?: string;
                    paddingLeft?: string;
                    marginTop?: string;
                    marginRight?: string;
                    marginBottom?: string;
                    marginLeft?: string;
                    spanCol?: number;
                    spanRow?: number;
                    startCol?: number;
                    startRow?: number;
                    grow?: boolean;
                    shrink?: boolean;
                    basis?: string;
                    alignSelf?: string;
                    justifySelf?: string;
                    bgColor?: any;
                    bgImage?: string;
                    border?: string;
                    borderRadius?: string;
                };
            } | undefined;
            fields?: _measured_puck.Fields<{
                layout?: {
                    paddingTop?: string;
                    paddingRight?: string;
                    paddingBottom?: string;
                    paddingLeft?: string;
                    marginTop?: string;
                    marginRight?: string;
                    marginBottom?: string;
                    marginLeft?: string;
                    spanCol?: number;
                    spanRow?: number;
                    startCol?: number;
                    startRow?: number;
                    grow?: boolean;
                    shrink?: boolean;
                    basis?: string;
                    alignSelf?: string;
                    justifySelf?: string;
                    bgColor?: any;
                    bgImage?: string;
                    border?: string;
                    borderRadius?: string;
                };
            }, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<{
                layout?: {
                    paddingTop?: string;
                    paddingRight?: string;
                    paddingBottom?: string;
                    paddingLeft?: string;
                    marginTop?: string;
                    marginRight?: string;
                    marginBottom?: string;
                    marginLeft?: string;
                    spanCol?: number;
                    spanRow?: number;
                    startCol?: number;
                    startRow?: number;
                    grow?: boolean;
                    shrink?: boolean;
                    basis?: string;
                    alignSelf?: string;
                    justifySelf?: string;
                    bgColor?: any;
                    bgImage?: string;
                    border?: string;
                    borderRadius?: string;
                };
            }, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"layout", boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<{
                    layout?: {
                        paddingTop?: string;
                        paddingRight?: string;
                        paddingBottom?: string;
                        paddingLeft?: string;
                        marginTop?: string;
                        marginRight?: string;
                        marginBottom?: string;
                        marginLeft?: string;
                        spanCol?: number;
                        spanRow?: number;
                        startCol?: number;
                        startRow?: number;
                        grow?: boolean;
                        shrink?: boolean;
                        basis?: string;
                        alignSelf?: string;
                        justifySelf?: string;
                        bgColor?: any;
                        bgImage?: string;
                        border?: string;
                        borderRadius?: string;
                    };
                }, {}>;
                lastFields: _measured_puck.Fields<{
                    layout?: {
                        paddingTop?: string;
                        paddingRight?: string;
                        paddingBottom?: string;
                        paddingLeft?: string;
                        marginTop?: string;
                        marginRight?: string;
                        marginBottom?: string;
                        marginLeft?: string;
                        spanCol?: number;
                        spanRow?: number;
                        startCol?: number;
                        startRow?: number;
                        grow?: boolean;
                        shrink?: boolean;
                        basis?: string;
                        alignSelf?: string;
                        justifySelf?: string;
                        bgColor?: any;
                        bgImage?: string;
                        border?: string;
                        borderRadius?: string;
                    };
                }, {}>;
                lastData: Omit<_measured_puck.ComponentData<{
                    layout?: {
                        paddingTop?: string;
                        paddingRight?: string;
                        paddingBottom?: string;
                        paddingLeft?: string;
                        marginTop?: string;
                        marginRight?: string;
                        marginBottom?: string;
                        marginLeft?: string;
                        spanCol?: number;
                        spanRow?: number;
                        startCol?: number;
                        startRow?: number;
                        grow?: boolean;
                        shrink?: boolean;
                        basis?: string;
                        alignSelf?: string;
                        justifySelf?: string;
                        bgColor?: any;
                        bgImage?: string;
                        border?: string;
                        borderRadius?: string;
                    };
                }, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<{
                layout?: {
                    paddingTop?: string;
                    paddingRight?: string;
                    paddingBottom?: string;
                    paddingLeft?: string;
                    marginTop?: string;
                    marginRight?: string;
                    marginBottom?: string;
                    marginLeft?: string;
                    spanCol?: number;
                    spanRow?: number;
                    startCol?: number;
                    startRow?: number;
                    grow?: boolean;
                    shrink?: boolean;
                    basis?: string;
                    alignSelf?: string;
                    justifySelf?: string;
                    bgColor?: any;
                    bgImage?: string;
                    border?: string;
                    borderRadius?: string;
                };
            }, {}> | Promise<_measured_puck.Fields<{
                layout?: {
                    paddingTop?: string;
                    paddingRight?: string;
                    paddingBottom?: string;
                    paddingLeft?: string;
                    marginTop?: string;
                    marginRight?: string;
                    marginBottom?: string;
                    marginLeft?: string;
                    spanCol?: number;
                    spanRow?: number;
                    startCol?: number;
                    startRow?: number;
                    grow?: boolean;
                    shrink?: boolean;
                    basis?: string;
                    alignSelf?: string;
                    justifySelf?: string;
                    bgColor?: any;
                    bgImage?: string;
                    border?: string;
                    borderRadius?: string;
                };
            }, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<{
                layout?: {
                    paddingTop?: string;
                    paddingRight?: string;
                    paddingBottom?: string;
                    paddingLeft?: string;
                    marginTop?: string;
                    marginRight?: string;
                    marginBottom?: string;
                    marginLeft?: string;
                    spanCol?: number;
                    spanRow?: number;
                    startCol?: number;
                    startRow?: number;
                    grow?: boolean;
                    shrink?: boolean;
                    basis?: string;
                    alignSelf?: string;
                    justifySelf?: string;
                    bgColor?: any;
                    bgImage?: string;
                    border?: string;
                    borderRadius?: string;
                };
            }, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"layout", boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<{
                    layout?: {
                        paddingTop?: string;
                        paddingRight?: string;
                        paddingBottom?: string;
                        paddingLeft?: string;
                        marginTop?: string;
                        marginRight?: string;
                        marginBottom?: string;
                        marginLeft?: string;
                        spanCol?: number;
                        spanRow?: number;
                        startCol?: number;
                        startRow?: number;
                        grow?: boolean;
                        shrink?: boolean;
                        basis?: string;
                        alignSelf?: string;
                        justifySelf?: string;
                        bgColor?: any;
                        bgImage?: string;
                        border?: string;
                        borderRadius?: string;
                    };
                }, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<{
                layout?: {
                    paddingTop?: string;
                    paddingRight?: string;
                    paddingBottom?: string;
                    paddingLeft?: string;
                    marginTop?: string;
                    marginRight?: string;
                    marginBottom?: string;
                    marginLeft?: string;
                    spanCol?: number;
                    spanRow?: number;
                    startCol?: number;
                    startRow?: number;
                    grow?: boolean;
                    shrink?: boolean;
                    basis?: string;
                    alignSelf?: string;
                    justifySelf?: string;
                    bgColor?: any;
                    bgImage?: string;
                    border?: string;
                    borderRadius?: string;
                };
            }, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<{
                    layout?: {
                        paddingTop?: string;
                        paddingRight?: string;
                        paddingBottom?: string;
                        paddingLeft?: string;
                        marginTop?: string;
                        marginRight?: string;
                        marginBottom?: string;
                        marginLeft?: string;
                        spanCol?: number;
                        spanRow?: number;
                        startCol?: number;
                        startRow?: number;
                        grow?: boolean;
                        shrink?: boolean;
                        basis?: string;
                        alignSelf?: string;
                        justifySelf?: string;
                        bgColor?: any;
                        bgImage?: string;
                        border?: string;
                        borderRadius?: string;
                    };
                }> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<{
                layout?: {
                    paddingTop?: string;
                    paddingRight?: string;
                    paddingBottom?: string;
                    paddingLeft?: string;
                    marginTop?: string;
                    marginRight?: string;
                    marginBottom?: string;
                    marginLeft?: string;
                    spanCol?: number;
                    spanRow?: number;
                    startCol?: number;
                    startRow?: number;
                    grow?: boolean;
                    shrink?: boolean;
                    basis?: string;
                    alignSelf?: string;
                    justifySelf?: string;
                    bgColor?: any;
                    bgImage?: string;
                    border?: string;
                    borderRadius?: string;
                };
            }, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<{
                    layout?: {
                        paddingTop?: string;
                        paddingRight?: string;
                        paddingBottom?: string;
                        paddingLeft?: string;
                        marginTop?: string;
                        marginRight?: string;
                        marginBottom?: string;
                        marginLeft?: string;
                        spanCol?: number;
                        spanRow?: number;
                        startCol?: number;
                        startRow?: number;
                        grow?: boolean;
                        shrink?: boolean;
                        basis?: string;
                        alignSelf?: string;
                        justifySelf?: string;
                        bgColor?: any;
                        bgImage?: string;
                        border?: string;
                        borderRadius?: string;
                    };
                }> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<{
                layout?: {
                    paddingTop?: string;
                    paddingRight?: string;
                    paddingBottom?: string;
                    paddingLeft?: string;
                    marginTop?: string;
                    marginRight?: string;
                    marginBottom?: string;
                    marginLeft?: string;
                    spanCol?: number;
                    spanRow?: number;
                    startCol?: number;
                    startRow?: number;
                    grow?: boolean;
                    shrink?: boolean;
                    basis?: string;
                    alignSelf?: string;
                    justifySelf?: string;
                    bgColor?: any;
                    bgImage?: string;
                    border?: string;
                    borderRadius?: string;
                };
            }, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"layout", boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<{
                    layout?: {
                        paddingTop?: string;
                        paddingRight?: string;
                        paddingBottom?: string;
                        paddingLeft?: string;
                        marginTop?: string;
                        marginRight?: string;
                        marginBottom?: string;
                        marginLeft?: string;
                        spanCol?: number;
                        spanRow?: number;
                        startCol?: number;
                        startRow?: number;
                        grow?: boolean;
                        shrink?: boolean;
                        basis?: string;
                        alignSelf?: string;
                        justifySelf?: string;
                        bgColor?: any;
                        bgImage?: string;
                        border?: string;
                        borderRadius?: string;
                    };
                }, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        Input: {
            render: _measured_puck.PuckComponent<_measured_puck.DefaultComponentProps>;
            label?: string;
            defaultProps?: _measured_puck.DefaultComponentProps | undefined;
            fields?: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>;
                lastFields: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}> | Promise<_measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<_measured_puck.DefaultComponentProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<_measured_puck.DefaultComponentProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
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
        Products: {
            render: _measured_puck.PuckComponent<_measured_puck.DefaultComponentProps>;
            label?: string;
            defaultProps?: _measured_puck.DefaultComponentProps | undefined;
            fields?: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>;
                lastFields: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}> | Promise<_measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<_measured_puck.DefaultComponentProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<_measured_puck.DefaultComponentProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
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
        Checkout: {
            render: _measured_puck.PuckComponent<_measured_puck.DefaultComponentProps>;
            label?: string;
            defaultProps?: _measured_puck.DefaultComponentProps | undefined;
            fields?: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>;
                lastFields: _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<_measured_puck.DefaultComponentProps, {}> | Promise<_measured_puck.Fields<_measured_puck.DefaultComponentProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<_measured_puck.DefaultComponentProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<_measured_puck.DefaultComponentProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<_measured_puck.DefaultComponentProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
    };
};

interface PuckProviderProps {
    children?: React.ReactNode;
}
declare const PuckProvider: FC<PuckProviderProps>;

export { PuckConfig, PuckProvider };
