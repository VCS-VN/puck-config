import { AppState } from '@measured/puck';
import { AsFieldProps } from '@measured/puck';
import { BaseField } from '@measured/puck';
import { ColorModeProviderProps } from '../components/ui/color-mode';
import { ComponentData } from '@measured/puck';
import { DefaultComponentProps } from '@measured/puck';
import { DefaultRootProps } from '@measured/puck';
import { Fields } from '@measured/puck';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { Metadata } from '@measured/puck';
import { Permissions as Permissions_2 } from '@measured/puck';
import { PuckComponent } from '@measured/puck';
import { QueryClient } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { ResolveDataTrigger } from '@measured/puck';
import { RootData } from '@measured/puck';
import { WithChildren } from '@measured/puck';

declare type BannerProps = {
    height?: number | HeightByBreakpoint;
    textSide?: "left" | "right";
    verticalAlign?: "start" | "center" | "end";
    imageFit?: "cover" | "contain";
    autoplay?: boolean;
    intervalMs?: number;
    showDots?: boolean;
    showArrows?: boolean;
    overlayEnabled?: boolean;
    overlayOpacity?: number;
    overlayWidthPercent?: number;
    slides: Slide[];
};

declare type ButtonProps = {
    label: string;
    typeView?: string;
    href?: string;
    variant?: "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain" | undefined;
    size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
    color?: string;
    backgroundColor?: string;
    icon?: string;
    iconSize?: string;
    iconColor?: string;
    positionIcon?: 'left' | 'right';
};

declare type CategoryGridProps = {
    title?: string;
    subtitle?: string;
    storeId?: string;
    urlRedirect?: string;
    mobile?: number;
    tablet?: number;
    desktop?: number;
    limit?: number;
    header?: any;
    footer?: any;
    showAll?: boolean;
    selectionMode?: "limit" | "select" | "ids";
    selectedCategories?: Array<{
        id: string;
        name: string;
        icon?: string;
    }>;
    categoryIds?: string;
    parentCategoryId?: string;
    bindSelectedCategoryVariableName?: string;
};

declare type CategoryItem = {
    id: string;
    name: string;
    icon?: string;
};

declare type CategoryListProps = {
    title?: string;
    urlRedirect?: string;
    showAll?: boolean;
    selectionMode?: "limit" | "select" | "ids";
    selectedCategories?: CategoryItem[];
    categoryIds?: string;
    limit?: number;
    itemHeight?: number;
    hoverSubmenu?: boolean;
    submenuWidth?: number;
};

declare type FacetControlsProps = {
    bindSortVariableName?: string;
    bindHideOutOfStockVariableName?: string;
    bindFiltersVariableName?: string;
};

declare type FooterProps = {
    columns: {
        title?: string;
        links: {
            label: string;
            href: string;
        }[];
    }[];
    showNewsletter?: boolean;
    newsletterPlaceholder?: string;
    showSocial?: boolean;
    socialLinks?: {
        platform: string;
        href: string;
    }[];
};

declare type HeaderProps = {
    logoType?: "text" | "image";
    logoText?: string;
    logoImageUrl?: string;
    navLinks?: {
        label: string;
        href: string;
    }[];
    showSearch?: boolean;
    searchVariableName?: string;
    searchPlaceholder?: string;
    showWishlist?: boolean;
    showCart?: boolean;
    sticky?: boolean;
    stickyOffset?: number;
    actionsSlot?: any;
};

declare type HeadingProps = WithLayout<{
    align: "left" | "center" | "right";
    text?: string;
    level?: "1" | "2" | "3" | "4" | "5" | "6";
    size: "xxxxl" | "xxxl" | "xxl" | "xl" | "l" | "m" | "s" | "xs";
}>;

declare type HeightByBreakpoint = {
    base?: number;
    md?: number;
    lg?: number;
};

declare type HeroTwoColumnProps = {
    height?: number;
    gap?: number;
    leftWidth?: WidthByBreakpoint;
    rightWidth?: WidthByBreakpoint;
    leftScrollable?: boolean;
    leftSticky?: boolean;
    stickyOffsetTop?: number;
    left: any;
    right: any;
};

declare type HttpClientConfig = {
    baseURL?: string;
    getAccessToken?: () => string | null | undefined;
    onRefreshToken?: (http: any) => Promise<void>;
};

declare type IconProps = {
    variableName?: string;
    placeholder?: string;
    initialValue?: string;
    size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
    variant?: "outline" | "subtle" | "flushed" | undefined;
    color?: string;
    backgroundColor?: string;
    iconLeft?: string;
    textLeft?: string;
    iconRight?: string;
    textRight?: string;
};

declare type IconProps_2 = {
    href?: string;
    size?: string;
    color?: string;
    icon?: string;
};

declare type IconProps_3 = {
    size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
    color?: string;
    content?: string;
};

declare type LayoutFieldProps = {
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
    bgColor?: string;
    bgImage?: string;
    border?: string;
    borderRadius?: string;
};

declare type MiniCartBlockProps = {
    keyAddToCart?: string;
    showBadge?: boolean;
    placement?: "inline" | "fixed-top-right" | "fixed-bottom-right" | "fixed-bottom-left" | "fixed-top-left";
};

export declare function PageEditorProvider({ children, queryClient, http, ...colorModeProps }: PageEditorProviderProps): JSX_2.Element;

declare type PageEditorProviderProps = ColorModeProviderProps & {
    children: ReactNode;
    queryClient?: QueryClient;
    http?: HttpClientConfig;
    chakraSystem?: any;
};

declare type ProductDetailProps = {
    productId?: string;
    showBreadcrumbs?: boolean;
    showCompareAtPrice?: boolean;
    showStockState?: boolean;
    lowStockThreshold?: number;
    variantSelectorStyle?: "dropdown" | "swatch";
    showQuantity?: boolean;
    enableStickyATC?: boolean;
    enableJsonLd?: boolean;
    enableThumbnails?: boolean;
    enableZoom?: boolean;
};

export declare const Products: {
    render: PuckComponent<DefaultComponentProps>;
    label?: string;
    defaultProps?: DefaultComponentProps;
    fields?: Fields<DefaultComponentProps, {}>;
    permissions?: Partial<Permissions_2>;
    inline?: boolean;
    resolveFields?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
        changed: Partial<Record<string | number, boolean> & {
            id: string;
        }>;
        fields: Fields<DefaultComponentProps, {}>;
        lastFields: Fields<DefaultComponentProps, {}>;
        lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
        appState: AppState;
        parent: ComponentData | null;
    }) => Fields<DefaultComponentProps, {}> | Promise<Fields<DefaultComponentProps, {}>>;
    resolveData?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
        changed: Partial<Record<string | number, boolean> & {
            id: string;
        }>;
        lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
        metadata: Metadata;
        trigger: ResolveDataTrigger;
    }) => (Omit<Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
        props?: Partial<DefaultComponentProps>;
    }) | Promise<Omit<Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
        props?: Partial<DefaultComponentProps>;
    }>;
    resolvePermissions?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
        changed: Partial<Record<string | number, boolean> & {
            id: string;
        }>;
        lastPermissions: Partial<Permissions_2>;
        permissions: Partial<Permissions_2>;
        appState: AppState;
        lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
    }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
    metadata?: Metadata;
};

export declare type ProductsProps = {
    mobile: number;
    tablet: number;
    desktop: number;
    limit: number;
    categoryId?: string;
    variableName?: string;
    noResultsText?: string;
    header?: any;
    footer?: any;
    selectionMode?: "limit" | "ids" | "select" | "category";
    productIds?: string;
    selectedProducts?: Array<{
        id: string;
        name: string;
        image?: string;
        price?: number;
    }>;
    sortBy?: "newest" | "priceAsc" | "priceDesc" | "featured";
    hideOutOfStock?: boolean;
    bindSortVariableName?: string;
    bindHideOutOfStockVariableName?: string;
    bindCategoryVariableName?: string;
    bindFiltersVariableName?: string;
    enableUrlSync?: boolean;
    openMiniCartAfterAdd?: boolean;
};

export declare const PuckConfig: {
    root: Partial<Partial<{
        render: PuckComponent<WithChildren<WithChildren<DefaultRootProps>>>;
        label?: string;
        defaultProps?: AsFieldProps<WithChildren<DefaultRootProps>>;
        fields?: Fields<AsFieldProps<WithChildren<DefaultRootProps>>, {
        type: "userField";
        option: boolean;
        } & BaseField>;
        permissions?: Partial<Permissions_2>;
        inline?: boolean;
        resolveFields?: (data: RootData<AsFieldProps<WithChildren<DefaultRootProps>>>, params: {
            changed: Partial<Record<"title", boolean> & {
                id: string;
            }>;
            fields: Fields<AsFieldProps<WithChildren<DefaultRootProps>>, {}>;
            lastFields: Fields<AsFieldProps<WithChildren<DefaultRootProps>>, {}>;
            lastData: RootData<AsFieldProps<WithChildren<DefaultRootProps>>>;
            appState: AppState;
            parent: ComponentData | null;
        }) => Fields<AsFieldProps<WithChildren<DefaultRootProps>>, {}> | Promise<Fields<AsFieldProps<WithChildren<DefaultRootProps>>, {}>>;
        resolveData?: (data: RootData<AsFieldProps<WithChildren<DefaultRootProps>>>, params: {
            changed: Partial<Record<"title", boolean> & {
                id: string;
            }>;
            lastData: RootData<AsFieldProps<WithChildren<DefaultRootProps>>>;
            metadata: Metadata;
            trigger: ResolveDataTrigger;
        }) => (Omit<RootData<AsFieldProps<WithChildren<DefaultRootProps>>>, "props"> & {
            props?: Partial<AsFieldProps<WithChildren<DefaultRootProps>>>;
        }) | Promise<Omit<RootData<AsFieldProps<WithChildren<DefaultRootProps>>>, "props"> & {
            props?: Partial<AsFieldProps<WithChildren<DefaultRootProps>>>;
        }>;
        resolvePermissions?: (data: RootData<AsFieldProps<WithChildren<DefaultRootProps>>>, params: {
            changed: Partial<Record<"title", boolean> & {
                id: string;
            }>;
            lastPermissions: Partial<Permissions_2>;
            permissions: Partial<Permissions_2>;
            appState: AppState;
            lastData: RootData<AsFieldProps<WithChildren<DefaultRootProps>>>;
        }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
        metadata?: Metadata;
    }>>;
    categories: {
        layout: {
            components: string[];
            defaultExpanded: boolean;
        };
        navigation: {
            title: string;
            components: string[];
            defaultExpanded: boolean;
        };
        marketing: {
            title: string;
            components: string[];
            defaultExpanded: boolean;
        };
        footer: {
            title: string;
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
            render: PuckComponent<DefaultComponentProps>;
            label?: string;
            defaultProps?: DefaultComponentProps;
            fields?: Fields<DefaultComponentProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                fields: Fields<DefaultComponentProps, {}>;
                lastFields: Fields<DefaultComponentProps, {}>;
                lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<DefaultComponentProps, {}> | Promise<Fields<DefaultComponentProps, {}>>;
            resolveData?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<DefaultComponentProps>;
            }) | Promise<Omit<Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<DefaultComponentProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        Grid: {
            render: PuckComponent<DefaultComponentProps>;
            label?: string;
            defaultProps?: DefaultComponentProps;
            fields?: Fields<DefaultComponentProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                fields: Fields<DefaultComponentProps, {}>;
                lastFields: Fields<DefaultComponentProps, {}>;
                lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<DefaultComponentProps, {}> | Promise<Fields<DefaultComponentProps, {}>>;
            resolveData?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<DefaultComponentProps>;
            }) | Promise<Omit<Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<DefaultComponentProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        Flex: {
            render: PuckComponent<DefaultComponentProps>;
            label?: string;
            defaultProps?: DefaultComponentProps;
            fields?: Fields<DefaultComponentProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                fields: Fields<DefaultComponentProps, {}>;
                lastFields: Fields<DefaultComponentProps, {}>;
                lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<DefaultComponentProps, {}> | Promise<Fields<DefaultComponentProps, {}>>;
            resolveData?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<DefaultComponentProps>;
            }) | Promise<Omit<Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<DefaultComponentProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        Heading: {
            render: PuckComponent<HeadingProps>;
            label?: string;
            defaultProps?: HeadingProps;
            fields?: Fields<HeadingProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<HeadingProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"text" | "layout" | "size" | "align" | "level", boolean> & {
                    id: string;
                }>;
                fields: Fields<HeadingProps, {}>;
                lastFields: Fields<HeadingProps, {}>;
                lastData: Omit<ComponentData<HeadingProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<HeadingProps, {}> | Promise<Fields<HeadingProps, {}>>;
            resolveData?: (data: Omit<ComponentData<HeadingProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"text" | "layout" | "size" | "align" | "level", boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<HeadingProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<HeadingProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<HeadingProps>;
            }) | Promise<Omit<Omit<ComponentData<HeadingProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<HeadingProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<HeadingProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"text" | "layout" | "size" | "align" | "level", boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<HeadingProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        Text: {
            render: PuckComponent<TextProps>;
            label?: string;
            defaultProps?: TextProps;
            fields?: Fields<TextProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<TextProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"text" | "layout" | "maxWidth" | "href", boolean> & {
                    id: string;
                }>;
                fields: Fields<TextProps, {}>;
                lastFields: Fields<TextProps, {}>;
                lastData: Omit<ComponentData<TextProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<TextProps, {}> | Promise<Fields<TextProps, {}>>;
            resolveData?: (data: Omit<ComponentData<TextProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"text" | "layout" | "maxWidth" | "href", boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<TextProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<TextProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<TextProps>;
            }) | Promise<Omit<Omit<ComponentData<TextProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<TextProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<TextProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"text" | "layout" | "maxWidth" | "href", boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<TextProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        Input: {
            render: PuckComponent<IconProps>;
            label?: string;
            defaultProps?: IconProps;
            fields?: Fields<IconProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<IconProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps, boolean> & {
                    id: string;
                }>;
                fields: Fields<IconProps, {}>;
                lastFields: Fields<IconProps, {}>;
                lastData: Omit<ComponentData<IconProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<IconProps, {}> | Promise<Fields<IconProps, {}>>;
            resolveData?: (data: Omit<ComponentData<IconProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<IconProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<IconProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<IconProps>;
            }) | Promise<Omit<Omit<ComponentData<IconProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<IconProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<IconProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<IconProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        ButtonPlugins: {
            render: PuckComponent<ButtonProps>;
            label?: string;
            defaultProps?: ButtonProps;
            fields?: Fields<ButtonProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<ButtonProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ButtonProps, boolean> & {
                    id: string;
                }>;
                fields: Fields<ButtonProps, {}>;
                lastFields: Fields<ButtonProps, {}>;
                lastData: Omit<ComponentData<ButtonProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<ButtonProps, {}> | Promise<Fields<ButtonProps, {}>>;
            resolveData?: (data: Omit<ComponentData<ButtonProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ButtonProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<ButtonProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<ButtonProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<ButtonProps>;
            }) | Promise<Omit<Omit<ComponentData<ButtonProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<ButtonProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<ButtonProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ButtonProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<ButtonProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        IconPlugins: {
            render: PuckComponent<IconProps_2>;
            label?: string;
            defaultProps?: IconProps_2;
            fields?: Fields<IconProps_2, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<IconProps_2, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps_2, boolean> & {
                    id: string;
                }>;
                fields: Fields<IconProps_2, {}>;
                lastFields: Fields<IconProps_2, {}>;
                lastData: Omit<ComponentData<IconProps_2, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<IconProps_2, {}> | Promise<Fields<IconProps_2, {}>>;
            resolveData?: (data: Omit<ComponentData<IconProps_2, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps_2, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<IconProps_2, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<IconProps_2, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<IconProps_2>;
            }) | Promise<Omit<Omit<ComponentData<IconProps_2, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<IconProps_2>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<IconProps_2, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps_2, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<IconProps_2, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        QrCodePlugins: {
            render: PuckComponent<IconProps_3>;
            label?: string;
            defaultProps?: IconProps_3;
            fields?: Fields<IconProps_3, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<IconProps_3, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps_3, boolean> & {
                    id: string;
                }>;
                fields: Fields<IconProps_3, {}>;
                lastFields: Fields<IconProps_3, {}>;
                lastData: Omit<ComponentData<IconProps_3, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<IconProps_3, {}> | Promise<Fields<IconProps_3, {}>>;
            resolveData?: (data: Omit<ComponentData<IconProps_3, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps_3, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<IconProps_3, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<IconProps_3, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<IconProps_3>;
            }) | Promise<Omit<Omit<ComponentData<IconProps_3, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<IconProps_3>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<IconProps_3, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps_3, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<IconProps_3, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        Products: {
            render: PuckComponent<DefaultComponentProps>;
            label?: string;
            defaultProps?: DefaultComponentProps;
            fields?: Fields<DefaultComponentProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                fields: Fields<DefaultComponentProps, {}>;
                lastFields: Fields<DefaultComponentProps, {}>;
                lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<DefaultComponentProps, {}> | Promise<Fields<DefaultComponentProps, {}>>;
            resolveData?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<DefaultComponentProps>;
            }) | Promise<Omit<Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<DefaultComponentProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        CategoryGrid: {
            render: PuckComponent<CategoryGridProps>;
            label?: string;
            defaultProps?: CategoryGridProps;
            fields?: Fields<CategoryGridProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<CategoryGridProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof CategoryGridProps, boolean> & {
                    id: string;
                }>;
                fields: Fields<CategoryGridProps, {}>;
                lastFields: Fields<CategoryGridProps, {}>;
                lastData: Omit<ComponentData<CategoryGridProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<CategoryGridProps, {}> | Promise<Fields<CategoryGridProps, {}>>;
            resolveData?: (data: Omit<ComponentData<CategoryGridProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof CategoryGridProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<CategoryGridProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<CategoryGridProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<CategoryGridProps>;
            }) | Promise<Omit<Omit<ComponentData<CategoryGridProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<CategoryGridProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<CategoryGridProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof CategoryGridProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<CategoryGridProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        CategoryList: {
            render: PuckComponent<CategoryListProps>;
            label?: string;
            defaultProps?: CategoryListProps;
            fields?: Fields<CategoryListProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<CategoryListProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof CategoryListProps, boolean> & {
                    id: string;
                }>;
                fields: Fields<CategoryListProps, {}>;
                lastFields: Fields<CategoryListProps, {}>;
                lastData: Omit<ComponentData<CategoryListProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<CategoryListProps, {}> | Promise<Fields<CategoryListProps, {}>>;
            resolveData?: (data: Omit<ComponentData<CategoryListProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof CategoryListProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<CategoryListProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<CategoryListProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<CategoryListProps>;
            }) | Promise<Omit<Omit<ComponentData<CategoryListProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<CategoryListProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<CategoryListProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof CategoryListProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<CategoryListProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        Cart: {
            render: PuckComponent<DefaultComponentProps>;
            label?: string;
            defaultProps?: DefaultComponentProps;
            fields?: Fields<DefaultComponentProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                fields: Fields<DefaultComponentProps, {}>;
                lastFields: Fields<DefaultComponentProps, {}>;
                lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<DefaultComponentProps, {}> | Promise<Fields<DefaultComponentProps, {}>>;
            resolveData?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<DefaultComponentProps>;
            }) | Promise<Omit<Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<DefaultComponentProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<string | number, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<DefaultComponentProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        Banner: {
            render: PuckComponent<BannerProps>;
            label?: string;
            defaultProps?: BannerProps;
            fields?: Fields<BannerProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<BannerProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof BannerProps, boolean> & {
                    id: string;
                }>;
                fields: Fields<BannerProps, {}>;
                lastFields: Fields<BannerProps, {}>;
                lastData: Omit<ComponentData<BannerProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<BannerProps, {}> | Promise<Fields<BannerProps, {}>>;
            resolveData?: (data: Omit<ComponentData<BannerProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof BannerProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<BannerProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<BannerProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<BannerProps>;
            }) | Promise<Omit<Omit<ComponentData<BannerProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<BannerProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<BannerProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof BannerProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<BannerProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        HeroTwoColumn: {
            render: PuckComponent<HeroTwoColumnProps>;
            label?: string;
            defaultProps?: HeroTwoColumnProps;
            fields?: Fields<HeroTwoColumnProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<HeroTwoColumnProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof HeroTwoColumnProps, boolean> & {
                    id: string;
                }>;
                fields: Fields<HeroTwoColumnProps, {}>;
                lastFields: Fields<HeroTwoColumnProps, {}>;
                lastData: Omit<ComponentData<HeroTwoColumnProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<HeroTwoColumnProps, {}> | Promise<Fields<HeroTwoColumnProps, {}>>;
            resolveData?: (data: Omit<ComponentData<HeroTwoColumnProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof HeroTwoColumnProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<HeroTwoColumnProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<HeroTwoColumnProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<HeroTwoColumnProps>;
            }) | Promise<Omit<Omit<ComponentData<HeroTwoColumnProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<HeroTwoColumnProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<HeroTwoColumnProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof HeroTwoColumnProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<HeroTwoColumnProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        Header: {
            render: PuckComponent<HeaderProps>;
            label?: string;
            defaultProps?: HeaderProps;
            fields?: Fields<HeaderProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<HeaderProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof HeaderProps, boolean> & {
                    id: string;
                }>;
                fields: Fields<HeaderProps, {}>;
                lastFields: Fields<HeaderProps, {}>;
                lastData: Omit<ComponentData<HeaderProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<HeaderProps, {}> | Promise<Fields<HeaderProps, {}>>;
            resolveData?: (data: Omit<ComponentData<HeaderProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof HeaderProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<HeaderProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<HeaderProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<HeaderProps>;
            }) | Promise<Omit<Omit<ComponentData<HeaderProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<HeaderProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<HeaderProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof HeaderProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<HeaderProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        Footer: {
            render: PuckComponent<FooterProps>;
            label?: string;
            defaultProps?: FooterProps;
            fields?: Fields<FooterProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<FooterProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof FooterProps, boolean> & {
                    id: string;
                }>;
                fields: Fields<FooterProps, {}>;
                lastFields: Fields<FooterProps, {}>;
                lastData: Omit<ComponentData<FooterProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<FooterProps, {}> | Promise<Fields<FooterProps, {}>>;
            resolveData?: (data: Omit<ComponentData<FooterProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof FooterProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<FooterProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<FooterProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<FooterProps>;
            }) | Promise<Omit<Omit<ComponentData<FooterProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<FooterProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<FooterProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof FooterProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<FooterProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        ProductDetail: {
            render: PuckComponent<ProductDetailProps>;
            label?: string;
            defaultProps?: ProductDetailProps;
            fields?: Fields<ProductDetailProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<ProductDetailProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ProductDetailProps, boolean> & {
                    id: string;
                }>;
                fields: Fields<ProductDetailProps, {}>;
                lastFields: Fields<ProductDetailProps, {}>;
                lastData: Omit<ComponentData<ProductDetailProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<ProductDetailProps, {}> | Promise<Fields<ProductDetailProps, {}>>;
            resolveData?: (data: Omit<ComponentData<ProductDetailProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ProductDetailProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<ProductDetailProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<ProductDetailProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<ProductDetailProps>;
            }) | Promise<Omit<Omit<ComponentData<ProductDetailProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<ProductDetailProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<ProductDetailProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ProductDetailProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<ProductDetailProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        FacetControls: {
            render: PuckComponent<FacetControlsProps>;
            label?: string;
            defaultProps?: FacetControlsProps;
            fields?: Fields<FacetControlsProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<FacetControlsProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof FacetControlsProps, boolean> & {
                    id: string;
                }>;
                fields: Fields<FacetControlsProps, {}>;
                lastFields: Fields<FacetControlsProps, {}>;
                lastData: Omit<ComponentData<FacetControlsProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<FacetControlsProps, {}> | Promise<Fields<FacetControlsProps, {}>>;
            resolveData?: (data: Omit<ComponentData<FacetControlsProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof FacetControlsProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<FacetControlsProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<FacetControlsProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<FacetControlsProps>;
            }) | Promise<Omit<Omit<ComponentData<FacetControlsProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<FacetControlsProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<FacetControlsProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof FacetControlsProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<FacetControlsProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
        MiniCartBlock: {
            render: PuckComponent<MiniCartBlockProps>;
            label?: string;
            defaultProps?: MiniCartBlockProps;
            fields?: Fields<MiniCartBlockProps, {}>;
            permissions?: Partial<Permissions_2>;
            inline?: boolean;
            resolveFields?: (data: Omit<ComponentData<MiniCartBlockProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof MiniCartBlockProps, boolean> & {
                    id: string;
                }>;
                fields: Fields<MiniCartBlockProps, {}>;
                lastFields: Fields<MiniCartBlockProps, {}>;
                lastData: Omit<ComponentData<MiniCartBlockProps, string, Record<string, DefaultComponentProps>>, "type">;
                appState: AppState;
                parent: ComponentData | null;
            }) => Fields<MiniCartBlockProps, {}> | Promise<Fields<MiniCartBlockProps, {}>>;
            resolveData?: (data: Omit<ComponentData<MiniCartBlockProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof MiniCartBlockProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<ComponentData<MiniCartBlockProps, string, Record<string, DefaultComponentProps>>, "type">;
                metadata: Metadata;
                trigger: ResolveDataTrigger;
            }) => (Omit<Omit<ComponentData<MiniCartBlockProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<MiniCartBlockProps>;
            }) | Promise<Omit<Omit<ComponentData<MiniCartBlockProps, string, Record<string, DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<MiniCartBlockProps>;
            }>;
            resolvePermissions?: (data: Omit<ComponentData<MiniCartBlockProps, string, Record<string, DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof MiniCartBlockProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<Permissions_2>;
                permissions: Partial<Permissions_2>;
                appState: AppState;
                lastData: Omit<ComponentData<MiniCartBlockProps, string, Record<string, DefaultComponentProps>>, "type">;
            }) => Promise<Partial<Permissions_2>> | Partial<Permissions_2>;
            metadata?: Metadata;
        };
    };
};

declare type Slide = {
    imageUrl: string;
    alt?: string;
    textEnabled?: boolean;
    eyebrow?: string;
    headline?: string;
    description?: string;
    ctaLabel?: string;
    ctaHref?: string;
};

declare type TextProps = WithLayout<{
    text?: any;
    maxWidth?: string;
    href?: string;
}>;

declare type WidthByBreakpoint = {
    base?: string;
    md?: string;
    lg?: string;
};

declare type WithLayout<Props extends DefaultComponentProps> = Props & {
    layout?: LayoutFieldProps;
};

export { }
