import * as _measured_puck from '@measured/puck';
import { DefaultComponentProps } from '@measured/puck';
import { FC } from 'react';

type MiniCartBlockProps = {
    keyAddToCart?: string;
    showBadge?: boolean;
    placement?: "inline" | "fixed-top-right" | "fixed-bottom-right" | "fixed-bottom-left" | "fixed-top-left";
};

type FacetControlsProps = {
    bindSortVariableName?: string;
    bindHideOutOfStockVariableName?: string;
    bindFiltersVariableName?: string;
};

type ProductDetailProps = {
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

type FooterProps = {
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

type HeaderProps = {
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

type WidthByBreakpoint = {
    base?: string;
    md?: string;
    lg?: string;
};
type HeroTwoColumnProps = {
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

type Slide = {
    imageUrl: string;
    alt?: string;
    textEnabled?: boolean;
    eyebrow?: string;
    headline?: string;
    description?: string;
    ctaLabel?: string;
    ctaHref?: string;
};
type HeightByBreakpoint = {
    base?: number;
    md?: number;
    lg?: number;
};
type BannerProps = {
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

type CategoryItem = {
    id: string;
    name: string;
    icon?: string;
};
type CategoryListProps = {
    title?: string;
    storeId?: string;
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

type CategoryGridProps = {
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

type IconProps$2 = {
    size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
    color?: string;
    content?: string;
};

type IconProps$1 = {
    href?: string;
    size?: string;
    color?: string;
    icon?: string;
};

type ButtonProps = {
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
    positionIcon?: "left" | "right";
};

type IconProps = {
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
    bgColor?: string;
    bgImage?: string;
    border?: string;
    borderRadius?: string;
};
type WithLayout<Props extends DefaultComponentProps> = Props & {
    layout?: LayoutFieldProps;
};

type TextProps = WithLayout<{
    text?: any;
    maxWidth?: string;
    href?: string;
}>;

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
            render: _measured_puck.PuckComponent<TextProps>;
            label?: string;
            defaultProps?: TextProps | undefined;
            fields?: _measured_puck.Fields<TextProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<TextProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"text" | "layout" | "maxWidth" | "href", boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<TextProps, {}>;
                lastFields: _measured_puck.Fields<TextProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<TextProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<TextProps, {}> | Promise<_measured_puck.Fields<TextProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<TextProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<"text" | "layout" | "maxWidth" | "href", boolean> & {
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
                changed: Partial<Record<"text" | "layout" | "maxWidth" | "href", boolean> & {
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
            render: _measured_puck.PuckComponent<IconProps>;
            label?: string;
            defaultProps?: IconProps | undefined;
            fields?: _measured_puck.Fields<IconProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<IconProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<IconProps, {}>;
                lastFields: _measured_puck.Fields<IconProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<IconProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<IconProps, {}> | Promise<_measured_puck.Fields<IconProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<IconProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<IconProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<IconProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<IconProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<IconProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<IconProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<IconProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<IconProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        ButtonPlugins: {
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
        IconPlugins: {
            render: _measured_puck.PuckComponent<IconProps$1>;
            label?: string;
            defaultProps?: IconProps$1 | undefined;
            fields?: _measured_puck.Fields<IconProps$1, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<IconProps$1, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps$1, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<IconProps$1, {}>;
                lastFields: _measured_puck.Fields<IconProps$1, {}>;
                lastData: Omit<_measured_puck.ComponentData<IconProps$1, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<IconProps$1, {}> | Promise<_measured_puck.Fields<IconProps$1, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<IconProps$1, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps$1, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<IconProps$1, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<IconProps$1, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<IconProps$1> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<IconProps$1, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<IconProps$1> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<IconProps$1, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps$1, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<IconProps$1, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        QrCodePlugins: {
            render: _measured_puck.PuckComponent<IconProps$2>;
            label?: string;
            defaultProps?: IconProps$2 | undefined;
            fields?: _measured_puck.Fields<IconProps$2, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<IconProps$2, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps$2, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<IconProps$2, {}>;
                lastFields: _measured_puck.Fields<IconProps$2, {}>;
                lastData: Omit<_measured_puck.ComponentData<IconProps$2, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<IconProps$2, {}> | Promise<_measured_puck.Fields<IconProps$2, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<IconProps$2, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps$2, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<IconProps$2, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<IconProps$2, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<IconProps$2> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<IconProps$2, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<IconProps$2> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<IconProps$2, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof IconProps$2, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<IconProps$2, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
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
        CategoryList: {
            render: _measured_puck.PuckComponent<CategoryListProps>;
            label?: string;
            defaultProps?: CategoryListProps | undefined;
            fields?: _measured_puck.Fields<CategoryListProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<CategoryListProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof CategoryListProps, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<CategoryListProps, {}>;
                lastFields: _measured_puck.Fields<CategoryListProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<CategoryListProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<CategoryListProps, {}> | Promise<_measured_puck.Fields<CategoryListProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<CategoryListProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof CategoryListProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<CategoryListProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<CategoryListProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<CategoryListProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<CategoryListProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<CategoryListProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<CategoryListProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof CategoryListProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<CategoryListProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        Cart: {
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
        Banner: {
            render: _measured_puck.PuckComponent<BannerProps>;
            label?: string;
            defaultProps?: BannerProps | undefined;
            fields?: _measured_puck.Fields<BannerProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<BannerProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof BannerProps, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<BannerProps, {}>;
                lastFields: _measured_puck.Fields<BannerProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<BannerProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<BannerProps, {}> | Promise<_measured_puck.Fields<BannerProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<BannerProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof BannerProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<BannerProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<BannerProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<BannerProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<BannerProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<BannerProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<BannerProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof BannerProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<BannerProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        HeroTwoColumn: {
            render: _measured_puck.PuckComponent<HeroTwoColumnProps>;
            label?: string;
            defaultProps?: HeroTwoColumnProps | undefined;
            fields?: _measured_puck.Fields<HeroTwoColumnProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<HeroTwoColumnProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof HeroTwoColumnProps, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<HeroTwoColumnProps, {}>;
                lastFields: _measured_puck.Fields<HeroTwoColumnProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<HeroTwoColumnProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<HeroTwoColumnProps, {}> | Promise<_measured_puck.Fields<HeroTwoColumnProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<HeroTwoColumnProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof HeroTwoColumnProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<HeroTwoColumnProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<HeroTwoColumnProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<HeroTwoColumnProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<HeroTwoColumnProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<HeroTwoColumnProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<HeroTwoColumnProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof HeroTwoColumnProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<HeroTwoColumnProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        Header: {
            render: _measured_puck.PuckComponent<HeaderProps>;
            label?: string;
            defaultProps?: HeaderProps | undefined;
            fields?: _measured_puck.Fields<HeaderProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<HeaderProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof HeaderProps, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<HeaderProps, {}>;
                lastFields: _measured_puck.Fields<HeaderProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<HeaderProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<HeaderProps, {}> | Promise<_measured_puck.Fields<HeaderProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<HeaderProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof HeaderProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<HeaderProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<HeaderProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<HeaderProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<HeaderProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<HeaderProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<HeaderProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof HeaderProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<HeaderProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        Footer: {
            render: _measured_puck.PuckComponent<FooterProps>;
            label?: string;
            defaultProps?: FooterProps | undefined;
            fields?: _measured_puck.Fields<FooterProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<FooterProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof FooterProps, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<FooterProps, {}>;
                lastFields: _measured_puck.Fields<FooterProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<FooterProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<FooterProps, {}> | Promise<_measured_puck.Fields<FooterProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<FooterProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof FooterProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<FooterProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<FooterProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<FooterProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<FooterProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<FooterProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<FooterProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof FooterProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<FooterProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        ProductDetail: {
            render: _measured_puck.PuckComponent<ProductDetailProps>;
            label?: string;
            defaultProps?: ProductDetailProps | undefined;
            fields?: _measured_puck.Fields<ProductDetailProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<ProductDetailProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ProductDetailProps, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<ProductDetailProps, {}>;
                lastFields: _measured_puck.Fields<ProductDetailProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<ProductDetailProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<ProductDetailProps, {}> | Promise<_measured_puck.Fields<ProductDetailProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<ProductDetailProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ProductDetailProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<ProductDetailProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<ProductDetailProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<ProductDetailProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<ProductDetailProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<ProductDetailProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<ProductDetailProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof ProductDetailProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<ProductDetailProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        FacetControls: {
            render: _measured_puck.PuckComponent<FacetControlsProps>;
            label?: string;
            defaultProps?: FacetControlsProps | undefined;
            fields?: _measured_puck.Fields<FacetControlsProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<FacetControlsProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof FacetControlsProps, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<FacetControlsProps, {}>;
                lastFields: _measured_puck.Fields<FacetControlsProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<FacetControlsProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<FacetControlsProps, {}> | Promise<_measured_puck.Fields<FacetControlsProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<FacetControlsProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof FacetControlsProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<FacetControlsProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<FacetControlsProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<FacetControlsProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<FacetControlsProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<FacetControlsProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<FacetControlsProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof FacetControlsProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<FacetControlsProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
            }) => Promise<Partial<_measured_puck.Permissions>> | Partial<_measured_puck.Permissions>) | undefined;
            metadata?: _measured_puck.Metadata;
        };
        MiniCartBlock: {
            render: _measured_puck.PuckComponent<MiniCartBlockProps>;
            label?: string;
            defaultProps?: MiniCartBlockProps | undefined;
            fields?: _measured_puck.Fields<MiniCartBlockProps, {}> | undefined;
            permissions?: Partial<_measured_puck.Permissions>;
            inline?: boolean;
            resolveFields?: ((data: Omit<_measured_puck.ComponentData<MiniCartBlockProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof MiniCartBlockProps, boolean> & {
                    id: string;
                }>;
                fields: _measured_puck.Fields<MiniCartBlockProps, {}>;
                lastFields: _measured_puck.Fields<MiniCartBlockProps, {}>;
                lastData: Omit<_measured_puck.ComponentData<MiniCartBlockProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                appState: _measured_puck.AppState;
                parent: _measured_puck.ComponentData | null;
            }) => _measured_puck.Fields<MiniCartBlockProps, {}> | Promise<_measured_puck.Fields<MiniCartBlockProps, {}>>) | undefined;
            resolveData?: ((data: Omit<_measured_puck.ComponentData<MiniCartBlockProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof MiniCartBlockProps, boolean> & {
                    id: string;
                }>;
                lastData: Omit<_measured_puck.ComponentData<MiniCartBlockProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
                metadata: _measured_puck.Metadata;
                trigger: _measured_puck.ResolveDataTrigger;
            }) => (Omit<Omit<_measured_puck.ComponentData<MiniCartBlockProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<MiniCartBlockProps> | undefined;
            }) | Promise<Omit<Omit<_measured_puck.ComponentData<MiniCartBlockProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, "props"> & {
                props?: Partial<MiniCartBlockProps> | undefined;
            }>) | undefined;
            resolvePermissions?: ((data: Omit<_measured_puck.ComponentData<MiniCartBlockProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type">, params: {
                changed: Partial<Record<keyof MiniCartBlockProps, boolean> & {
                    id: string;
                }>;
                lastPermissions: Partial<_measured_puck.Permissions>;
                permissions: Partial<_measured_puck.Permissions>;
                appState: _measured_puck.AppState;
                lastData: Omit<_measured_puck.ComponentData<MiniCartBlockProps, string, Record<string, _measured_puck.DefaultComponentProps>>, "type"> | null;
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
