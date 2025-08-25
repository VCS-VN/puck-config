// src/utils/get-class-name-factory.ts
import classnames from "classnames";
var getGlobalClassName = (rootClass, options) => {
  if (typeof options === "string") {
    return `${rootClass}-${options}`;
  } else {
    const mappedOptions = {};
    for (const option in options) {
      mappedOptions[`${rootClass}--${option}`] = options[option];
    }
    return classnames({
      [rootClass]: true,
      ...mappedOptions
    });
  }
};
var getClassNameFactory = (rootClass, styles, config = { baseClass: "" }) => (options = {}) => {
  if (typeof options === "string") {
    const descendant = options;
    const style = styles[`${rootClass}-${descendant}`];
    if (style) {
      return config.baseClass + styles[`${rootClass}-${descendant}`] || "";
    }
    return "";
  } else if (typeof options === "object") {
    const modifiers = options;
    const prefixedModifiers = {};
    for (const modifier in modifiers) {
      prefixedModifiers[styles[`${rootClass}--${modifier}`]] = modifiers[modifier];
    }
    const c = styles[rootClass];
    return config.baseClass + classnames({
      [c]: !!c,
      // only apply the class if it exists
      ...prefixedModifiers
    });
  } else {
    return config.baseClass + styles[rootClass] || "";
  }
};
var get_class_name_factory_default = getClassNameFactory;

// src/utils/index.ts
var spacingOptions = [
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
  { label: "160px", value: "160px" }
];

// src/blocks/puck.config.tsx
import {
  Divider as AntDivider,
  Form as AntForm,
  Image as AntImage,
  Input as AntdInput,
  Button as AntdButton
} from "antd";

// src/blocks/Grid/styles.module.css
var styles_default = {};

// src/components/Section/index.tsx
import { forwardRef } from "react";

// src/components/Section/styles.module.css
var styles_default2 = {};

// src/components/Section/index.tsx
import { jsx } from "react/jsx-runtime";
var getClassName = get_class_name_factory_default("Section", styles_default2);
var Section = forwardRef(
  ({ children, className, maxWidth = "1280px", style = {} }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: `${getClassName()}${className ? ` ${className}` : ""}`,
        style: {
          ...style
        },
        ref,
        children: /* @__PURE__ */ jsx("div", { className: getClassName("inner"), style: { maxWidth }, children })
      }
    );
  }
);

// src/components/Layout/index.tsx
import { forwardRef as forwardRef2 } from "react";

// src/components/Layout/styles.module.css
var styles_default3 = {};

// src/components/Layout/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var getClassName2 = get_class_name_factory_default("Layout", styles_default3);
var layoutField = {
  type: "object",
  objectFields: {
    spanCol: {
      label: "Grid Columns",
      type: "number",
      min: 1,
      max: 12
    },
    spanRow: {
      label: "Grid Rows",
      type: "number",
      min: 1,
      max: 12
    },
    grow: {
      label: "Flex Grow",
      type: "radio",
      options: [
        { label: "true", value: true },
        { label: "false", value: false }
      ]
    },
    padding: {
      type: "select",
      label: "Vertical Padding",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions]
    },
    padding2: {
      type: "select",
      label: "Vertical Padding2",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions]
    }
  }
};
var Layout = forwardRef2(
  ({ children, className, layout, style }, ref) => {
    return /* @__PURE__ */ jsx2(
      "div",
      {
        className,
        style: {
          gridColumn: layout?.spanCol ? `span ${Math.max(Math.min(layout.spanCol, 12), 1)}` : void 0,
          gridRow: layout?.spanRow ? `span ${Math.max(Math.min(layout.spanRow, 12), 1)}` : void 0,
          paddingTop: layout?.padding,
          paddingBottom: layout?.padding,
          flex: layout?.grow ? "1 1 0" : void 0,
          ...style
        },
        ref,
        children
      }
    );
  }
);
Layout.displayName = "Layout";
function withLayout(componentConfig) {
  return {
    ...componentConfig,
    fields: {
      ...componentConfig.fields,
      layout: layoutField
    },
    defaultProps: {
      ...componentConfig.defaultProps,
      layout: {
        spanCol: 1,
        spanRow: 1,
        padding: "0px",
        padding2: "0px",
        grow: false,
        ...componentConfig.defaultProps?.layout
      }
    },
    resolveFields: (_, params) => {
      if (params.parent?.type === "Grid") {
        return {
          ...componentConfig.fields,
          layout: {
            ...layoutField,
            objectFields: {
              spanCol: layoutField.objectFields.spanCol,
              spanRow: layoutField.objectFields.spanRow,
              padding: layoutField.objectFields.padding,
              padding2: layoutField.objectFields.padding2
            }
          }
        };
      }
      if (params.parent?.type === "Flex") {
        return {
          ...componentConfig.fields,
          layout: {
            ...layoutField,
            objectFields: {
              grow: layoutField.objectFields.grow,
              padding: layoutField.objectFields.padding,
              padding2: layoutField.objectFields.padding2
            }
          }
        };
      }
      return {
        ...componentConfig.fields,
        layout: {
          ...layoutField,
          objectFields: {
            padding: layoutField.objectFields.padding,
            padding2: layoutField.objectFields.padding2
          }
        }
      };
    },
    inline: true,
    render: (props) => /* @__PURE__ */ jsx2(
      Layout,
      {
        className: getClassName2(),
        layout: props.layout,
        ref: props.puck.dragRef,
        children: componentConfig.render(props)
      }
    )
  };
}

// src/blocks/Grid/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var getClassName3 = get_class_name_factory_default("Grid", styles_default);
var GridInternal = {
  fields: {
    numColumns: {
      type: "number",
      label: "Number of columns",
      min: 1,
      max: 12
    },
    gap: {
      label: "Gap",
      type: "number",
      min: 0
    },
    items: {
      type: "slot"
    }
  },
  defaultProps: {
    numColumns: 1,
    gap: 24,
    items: []
  },
  render: ({ gap, numColumns, items: Items }) => {
    return /* @__PURE__ */ jsx3(Section, { children: /* @__PURE__ */ jsx3(
      Items,
      {
        disallow: ["Hero", "Stats"],
        className: getClassName3(),
        style: {
          gap,
          gridTemplateColumns: `repeat(${numColumns}, 1fr)`
        }
      }
    ) });
  }
};
var Grid = withLayout(GridInternal);

// src/blocks/Flex/styles.module.css
var styles_default4 = {};

// src/blocks/Flex/index.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var getClassName4 = get_class_name_factory_default("Flex", styles_default4);
var FlexInternal = {
  fields: {
    direction: {
      label: "Direction",
      type: "radio",
      options: [
        { label: "Row", value: "row" },
        { label: "Column", value: "column" }
      ]
    },
    justifyContent: {
      label: "Justify Content",
      type: "radio",
      options: [
        { label: "Start", value: "start" },
        { label: "Center", value: "center" },
        { label: "End", value: "end" }
      ]
    },
    gap: {
      label: "Gap",
      type: "number",
      min: 0
    },
    wrap: {
      label: "Wrap",
      type: "radio",
      options: [
        { label: "true", value: "wrap" },
        { label: "false", value: "nowrap" }
      ]
    },
    items: {
      type: "slot"
    }
  },
  defaultProps: {
    justifyContent: "start",
    direction: "row",
    gap: 24,
    wrap: "wrap",
    layout: {
      grow: true
    },
    items: []
  },
  render: ({ justifyContent, direction, gap, wrap, items: Items }) => {
    return /* @__PURE__ */ jsx4(Section, { style: { height: "100%" }, children: /* @__PURE__ */ jsx4(
      Items,
      {
        className: getClassName4(),
        style: {
          justifyContent,
          flexDirection: direction,
          gap,
          flexWrap: wrap
        },
        disallow: ["Hero", "Stats"]
      }
    ) });
  }
};
var Flex = withLayout(FlexInternal);

// src/blocks/Space/styles.module.css
var styles_default5 = {};

// src/blocks/Space/index.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var getClassName5 = get_class_name_factory_default("Space", styles_default5);
var Space = {
  label: "Space",
  fields: {
    size: {
      type: "select",
      options: spacingOptions
    },
    direction: {
      type: "radio",
      options: [
        { value: "vertical", label: "Vertical" },
        { value: "horizontal", label: "Horizontal" },
        { value: "", label: "Both" }
      ]
    }
  },
  defaultProps: {
    direction: "",
    size: "24px"
  },
  inline: true,
  render: ({ direction, size, puck }) => {
    return /* @__PURE__ */ jsx5(
      "div",
      {
        ref: puck.dragRef,
        className: getClassName5(direction ? { [direction]: direction } : {}),
        style: { "--size": size }
      }
    );
  }
};

// src/blocks/Heading/styles.module.css
var styles_default6 = {};

// src/blocks/Heading/index.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var getClassName6 = get_class_name_factory_default("Heading", styles_default6);
var sizeOptions = [
  { value: "xxxl", label: "XXXL" },
  { value: "xxl", label: "XXL" },
  { value: "xl", label: "XL" },
  { value: "l", label: "L" },
  { value: "m", label: "M" },
  { value: "s", label: "S" },
  { value: "xs", label: "XS" }
];
var levelOptions = [
  { label: "", value: "" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" }
];
var HeadingInternal = {
  fields: {
    text: {
      type: "textarea",
      contentEditable: true
    },
    size: {
      type: "select",
      options: sizeOptions
    },
    level: {
      type: "select",
      options: levelOptions
    },
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" }
      ]
    }
  },
  defaultProps: {
    align: "left",
    text: "Heading",
    size: "m",
    layout: {
      padding: "8px"
    }
  },
  render: ({ align, text, size, level }) => {
    const Tag = level ? `h${level}` : "span";
    return /* @__PURE__ */ jsx6(Section, { children: /* @__PURE__ */ jsx6(
      Tag,
      {
        className: getClassName6({
          [size]: true
        }),
        children: /* @__PURE__ */ jsx6("span", { style: { display: "block", textAlign: align, width: "100%" }, children: text })
      }
    ) });
  }
};
var Heading = withLayout(HeadingInternal);

// src/blocks/Text/index.tsx
import { ALargeSmall, AlignLeft } from "lucide-react";
import { jsx as jsx7 } from "react/jsx-runtime";
var TextInner = {
  fields: {
    text: {
      type: "textarea",
      contentEditable: true
    },
    size: {
      type: "select",
      labelIcon: /* @__PURE__ */ jsx7(ALargeSmall, { size: 16 }),
      options: [
        { label: "S", value: "s" },
        { label: "M", value: "m" }
      ]
    },
    align: {
      type: "radio",
      labelIcon: /* @__PURE__ */ jsx7(AlignLeft, { size: 16 }),
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" }
      ]
    },
    color: {
      type: "radio",
      options: [
        { label: "Default", value: "default" },
        { label: "Muted", value: "muted" }
      ]
    },
    maxWidth: { type: "text" }
  },
  defaultProps: {
    align: "left",
    text: "Text",
    size: "m",
    color: "default"
  },
  render: ({ align, color, text, size, maxWidth }) => {
    return /* @__PURE__ */ jsx7(Section, { maxWidth, children: /* @__PURE__ */ jsx7(
      "span",
      {
        style: {
          color: color === "default" ? "inherit" : "var(--puck-color-grey-05)",
          display: "flex",
          textAlign: align,
          width: "100%",
          fontSize: size === "m" ? "20px" : "16px",
          fontWeight: 300,
          maxWidth,
          justifyContent: align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start"
        },
        children: text
      }
    ) });
  }
};
var Text = withLayout(TextInner);

// src/blocks/root.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var Root = {
  defaultProps: {},
  render: ({ puck: { renderDropZone: DropZone } }) => {
    return /* @__PURE__ */ jsx8(
      "div",
      {
        style: { display: "flex", flexDirection: "column", minHeight: "100vh" },
        children: /* @__PURE__ */ jsx8(DropZone, { zone: "default-zone", style: { flexGrow: 1 } })
      }
    );
  }
};
var root_default = Root;

// src/blocks/Input/index.tsx
import { ALargeSmall as ALargeSmall2 } from "lucide-react";
import { Input as AntInput } from "antd";
import { jsx as jsx9 } from "react/jsx-runtime";
var InnerInput = {
  fields: {
    placeholder: {
      type: "text"
    },
    size: {
      type: "select",
      labelIcon: /* @__PURE__ */ jsx9(ALargeSmall2, { size: 16 }),
      options: [
        { label: "Large", value: "large" },
        { label: "Default", value: "default" },
        { label: "Small", value: "small" }
      ]
    },
    // disabled: { type: "" },
    variant: {
      type: "select",
      labelIcon: /* @__PURE__ */ jsx9(ALargeSmall2, { size: 16 }),
      options: [
        { label: "Borderless", value: "borderless" },
        { label: "Filled", value: "filled" },
        {
          label: "Outlined",
          value: "outlined"
        },
        {
          label: "Underlined",
          value: "underlined"
        }
      ]
    }
  },
  defaultProps: {
    placeholder: "Placeholder",
    variant: "outlined",
    size: "large",
    disabled: false
  },
  render: ({ placeholder, maxWidth, size, variant }) => {
    return /* @__PURE__ */ jsx9(Section, { maxWidth, children: /* @__PURE__ */ jsx9(
      AntInput,
      {
        placeholder,
        variant: variant || "filled",
        size
      }
    ) });
  }
};
var Input = withLayout(InnerInput);

// src/blocks/Button/index.tsx
import { Button as AntButton } from "antd";
import { ALargeSmall as ALargeSmall3 } from "lucide-react";
import { jsx as jsx10 } from "react/jsx-runtime";
var Button = {
  label: "Button",
  fields: {
    label: {
      type: "text",
      placeholder: "Lorem ipsum...",
      contentEditable: true
    },
    size: {
      type: "select",
      labelIcon: /* @__PURE__ */ jsx10(ALargeSmall3, { size: 16 }),
      options: [
        { label: "Large", value: "large" },
        { label: "Default", value: "default" },
        { label: "Small", value: "small" }
      ]
    },
    href: { type: "text" },
    variant: {
      type: "select",
      options: [
        { label: "Link", value: "link" },
        { label: "Text", value: "text" },
        { label: "Outlined", value: "outlined" },
        { label: "Dashed", value: "dashed" },
        { label: "Solid", value: "solid" },
        { label: "Filled", value: "filled" }
      ]
    }
  },
  defaultProps: {
    label: "Button",
    variant: "solid",
    size: "large"
  },
  render: ({ href, variant, label, puck, size }) => {
    console.log("\u{1F680} ~ puck:", puck);
    return /* @__PURE__ */ jsx10("div", { children: /* @__PURE__ */ jsx10(
      AntButton,
      {
        href: href && href || "#",
        variant,
        size,
        tabIndex: puck.isEditing ? -1 : void 0,
        children: label
      }
    ) });
  }
};

// src/blocks/ProductCard/index.tsx
import { Card, Image, Select, Skeleton } from "antd";
import { ErrorBoundary } from "react-error-boundary";
import { useState } from "react";

// src/client/httpClient.ts
import axios from "axios";
var initHttpClient = () => {
  let URL = "";
  if (typeof process !== "undefined") {
    URL = process?.env?.NEXT_PUBLIC_CUSTOMER_API_URL;
    console.log("jaosdfjosdjfjasdfjsdjfsidfifiififjasidfjiasdf", URL);
  } else {
    URL = import.meta.env.VITE_CUSTOMER_API_URL;
    console.log("aj828238jklasjdf", import.meta, import.meta);
  }
  const httpClient = axios.create({
    baseURL: URL
  });
  const getLocalToken = () => {
    return localStorage.getItem("accessToken");
  };
  const refreshToken = async () => {
    const token = localStorage.getItem("refreshToken");
    const response = await httpClient.get("/api/v1/auth/refresh-token", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (response?.data) {
      const { refreshToken: refreshToken2, accessToken } = response.data;
      localStorage.setItem("refreshToken", refreshToken2);
      localStorage.setItem("accessToken", accessToken);
    }
  };
  httpClient.interceptors.request.use(
    (config) => {
      const token = getLocalToken();
      if (token && !config?.headers?.Authorization) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  httpClient.interceptors.response.use(
    (res) => res,
    async (e) => {
      const status = e.response ? e.response.status : null;
      const config = e.config;
      switch (status) {
        case 401:
          if (config.url !== "/api/v1/auth/refresh-token" && config.url !== "/api/v1/auth/login") {
            await refreshToken();
          } else if (config.url === "/api/v1/auth/refresh-token") {
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("accessToken");
            const url = encodeURIComponent(location.href);
            location.href = `/sign-in?return=${url}`;
          }
          break;
        default:
          break;
      }
      throw e;
    }
  );
  return httpClient;
};

// src/services/sale/product/product.api.ts
var getProducts = async (payload) => {
  const httpClient = initHttpClient();
  const response = await httpClient.get(`/api/v1/products`, {
    params: payload
  });
  return response.data;
};
var getProductDetail = async (id, queries) => {
  const httpClient = initHttpClient();
  const response = await httpClient.get(`/api/v1/products/${id}`, {
    params: queries
  });
  return response.data;
};

// src/hooks/products/useGetProductDetailQuery.tsx
import { useQuery } from "@tanstack/react-query";
var useGetProductDetailQuery = (productId, queries, props) => {
  const data = useQuery({
    ...props,
    queryKey: ["product-detail", productId, queries],
    queryFn: () => getProductDetail(productId, queries)
  });
  return data;
};

// src/hooks/products/useGetProductsQuery.tsx
import { useQuery as useQuery2 } from "@tanstack/react-query";
var useGetProductsQuery = (queries, props) => {
  return useQuery2({
    ...props,
    queryKey: ["products", queries],
    queryFn: () => getProducts(queries)
  });
};

// src/blocks/ProductCard/index.tsx
import { jsx as jsx11, jsxs } from "react/jsx-runtime";
var ProductCardRender = ({
  productId,
  showVariantSelector
}) => {
  const { data: product, isLoading } = useGetProductDetailQuery(
    productId || "",
    {
      // storeSlug: store?.slug,
      isGettingModels: true,
      isGettingDefaultModel: true
    },
    {
      enabled: !!productId
    }
  );
  if (isLoading || !product) {
    return /* @__PURE__ */ jsxs(Card, { style: { width: 240 }, children: [
      /* @__PURE__ */ jsx11(Skeleton.Image, { style: { width: "100%", height: 200 } }),
      /* @__PURE__ */ jsx11(Skeleton, { active: true, paragraph: { rows: 2 } })
    ] });
  }
  const defaultModel = product?.models?.find((m) => m.isDefault);
  const [model, setModel] = useState(defaultModel);
  const price = model?.price ?? product.price ?? 0;
  return /* @__PURE__ */ jsxs(
    Card,
    {
      hoverable: true,
      style: { width: 240 },
      cover: /* @__PURE__ */ jsx11(
        Image,
        {
          src: product.image || "/no-product-image.png",
          alt: product.name,
          preview: false
        }
      ),
      children: [
        showVariantSelector && product?.models?.length > 1 && /* @__PURE__ */ jsx11(
          Select,
          {
            value: model?.id,
            onChange: (id) => {
              const m = product?.models?.find((mm) => mm.id === id);
              setModel(m);
            },
            style: { width: "100%", marginBottom: 8 },
            children: product?.models?.map((m) => /* @__PURE__ */ jsx11(Select.Option, { value: m.id, children: m.name }, m.id))
          }
        ),
        /* @__PURE__ */ jsx11(Card.Meta, { title: product.name, description: `${price} \u20AB` })
      ]
    }
  );
};
var ProductCardInternal = {
  fields: {
    productId: { type: "text", label: "Product ID" },
    showVariantSelector: {
      type: "radio",
      label: "Show Variant Selector",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    }
  },
  defaultProps: {
    productId: "",
    showVariantSelector: false
  },
  render: (props) => /* @__PURE__ */ jsx11(Section, { children: /* @__PURE__ */ jsx11(ErrorBoundary, { fallbackRender: () => /* @__PURE__ */ jsx11("div", { children: "Unable to load product." }), children: /* @__PURE__ */ jsx11(ProductCardRender, { ...props }) }) })
};
var ProductCard = withLayout(ProductCardInternal);

// src/blocks/ProductGrid/index.tsx
import { Card as Card2, Image as Image2, List, Input as Input2, Divider } from "antd";
import { useState as useState2 } from "react";
import { get, round } from "lodash";
import { jsx as jsx12, jsxs as jsxs2 } from "react/jsx-runtime";
var ProductGridRender = ({
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  limit,
  categoryId
}) => {
  const [search, setSearch] = useState2("");
  const [page, setPage] = useState2(1);
  const { data: products, isLoading } = useGetProductsQuery(
    {
      // storeSlug: store?.slug,
      query: search,
      isGettingModels: true,
      isGettingDefaultModel: true,
      limit,
      page,
      categoryId
    }
    // { enabled: !!store?.slug }
  );
  console.log({ xs, sm, md, lg, xl, xxl });
  return /* @__PURE__ */ jsxs2(Section, { children: [
    /* @__PURE__ */ jsx12(
      Input2.Search,
      {
        placeholder: "Search...",
        onSearch: setSearch,
        loading: isLoading
      }
    ),
    /* @__PURE__ */ jsx12(Divider, {}),
    /* @__PURE__ */ jsx12(
      List,
      {
        grid: {
          gutter: 16,
          xs,
          sm,
          md,
          lg,
          xl,
          xxl
        },
        dataSource: products?.data || [],
        loading: isLoading,
        pagination: {
          total: products?.total,
          onChange: (p) => setPage(p)
        },
        renderItem: (p) => {
          const defaultModel = get(p, "defaultModel", get(p, "models.0"));
          return /* @__PURE__ */ jsx12(List.Item, { children: /* @__PURE__ */ jsx12(
            Card2,
            {
              hoverable: true,
              cover: /* @__PURE__ */ jsx12(
                Image2,
                {
                  src: p.image || "/no-product-image.png",
                  alt: p.name,
                  preview: false
                }
              ),
              children: /* @__PURE__ */ jsx12(
                Card2.Meta,
                {
                  title: p.name,
                  description: `${round(
                    (defaultModel?.price ?? p.price ?? 0) / 100,
                    0
                  )} \u20AB`
                }
              )
            }
          ) });
        }
      }
    )
  ] });
};
var ProductGridInternal = {
  fields: {
    xs: { type: "number", label: "Xs Columns", min: 1, max: 2 },
    sm: { type: "number", label: "Sm Columns", min: 1, max: 4 },
    md: { type: "number", label: "Md Columns", min: 1, max: 4 },
    lg: { type: "number", label: "Lg Columns", min: 1, max: 6 },
    xl: { type: "number", label: "Xl Columns", min: 1, max: 8 },
    xxl: { type: "number", label: "Xxl Columns", min: 1, max: 12 },
    limit: { type: "number", label: "Limit", min: 1, max: 20 }
    // categoryId: {
    //   type: "custom",
    //   label: "Category",
    //   render: (props) => <CategoryField {...props} />,
    // },
  },
  defaultProps: {
    xs: 2,
    sm: 2,
    md: 4,
    lg: 4,
    xl: 5,
    xxl: 6,
    limit: 10,
    categoryId: void 0
  },
  render: (props) => /* @__PURE__ */ jsx12(ProductGridRender, { ...props })
};
var ProductGrid = withLayout(ProductGridInternal);

// src/blocks/CategoryGrid/index.tsx
import { ErrorBoundary as ErrorBoundary2 } from "react-error-boundary";
import { Fragment, jsx as jsx13 } from "react/jsx-runtime";
var CategoryGridRender = ({ limit, depth }) => {
  return /* @__PURE__ */ jsx13(Section, { children: /* @__PURE__ */ jsx13(Fragment, {}) });
};
var CategoryGridInternal = {
  fields: {
    limit: { type: "number", label: "Limit", min: 1, max: 20 },
    depth: { type: "number", label: "Depth", min: 1, max: 5 }
  },
  defaultProps: {
    limit: 6,
    depth: 1
  },
  render: (props) => /* @__PURE__ */ jsx13(ErrorBoundary2, { fallbackRender: () => /* @__PURE__ */ jsx13("div", { children: "Unable to load categories." }), children: /* @__PURE__ */ jsx13(CategoryGridRender, { ...props }) })
};
var CategoryGrid = withLayout(CategoryGridInternal);

// src/blocks/puck.config.tsx
import { jsx as jsx14, jsxs as jsxs3 } from "react/jsx-runtime";
var PuckConfig = {
  root: root_default,
  categories: {
    layout: {
      components: ["Grid", "Flex", "Space"]
    },
    typography: {
      components: ["Heading", "Text"]
    },
    interactive: {
      title: "Actions",
      components: ["Button", "RichText", "Input"]
    },
    other: {
      title: "Other",
      components: ["Card", "Hero", "Logos", "Stats", "Template"]
    },
    storefront: {
      title: "Product",
      components: ["ProductCard", "ProductGrid", "CategoryGrid"]
    }
  },
  components: {
    Container: {
      fields: {
        background: { type: "text" },
        padding: { type: "number" }
      },
      render: ({ background, padding, children }) => /* @__PURE__ */ jsx14("div", { style: { background, padding }, children })
    },
    Grid,
    Flex,
    Space,
    Heading,
    Text,
    Input,
    Button,
    ProductCard,
    ProductGrid,
    CategoryGrid,
    Divider: { fields: {}, render: () => /* @__PURE__ */ jsx14(AntDivider, {}) },
    // Typography
    RichText: {
      fields: { html: { type: "textarea" } },
      render: ({ html }) => /* @__PURE__ */ jsx14("div", { dangerouslySetInnerHTML: { __html: html } })
    },
    // Media
    Image: {
      fields: { src: { type: "text" }, alt: { type: "text" } },
      render: ({ src, alt }) => /* @__PURE__ */ jsx14(AntImage, { src, alt })
    },
    Video: {
      fields: { url: { type: "text" } },
      render: ({ url }) => /* @__PURE__ */ jsx14(
        "iframe",
        {
          width: "560",
          height: "315",
          src: url,
          frameBorder: "0",
          allowFullScreen: true
        }
      )
    },
    // // CMS
    // BlogList: {
    //   fields: {},
    //   render: () => (
    //     <Row gutter={16}>
    //       {fetchBlogPosts().map((b) => (
    //         <Col span={8} key={b.id}>
    //           <Card title={b.title}>{b.excerpt}</Card>
    //         </Col>
    //       ))}
    //     </Row>
    //   ),
    // },
    // BlogDetail: {
    //   fields: { id: { type: "text" } },
    //   render: ({ id }) => {
    //     const blog = fetchBlogPosts().find((b) => b.id === id);
    //     if (!blog) return <Paragraph>Blog not found</Paragraph>;
    //     return (
    //       <Card title={blog.title}>
    //         <Paragraph>{blog.excerpt}</Paragraph>
    //       </Card>
    //     );
    //   },
    // },
    // Storefront
    // Navigation
    // Navbar: {
    //   fields: {
    //     links: {
    //       type: "list",
    //       of: {
    //         type: "object",
    //         fields: { href: { type: "text" }, label: { type: "text" } },
    //       },
    //     },
    //   },
    //   render: ({ links }) => (
    //     <Header>
    //       <Menu theme="dark" mode="horizontal">
    //         {links?.map((l: any) => (
    //           <Menu.Item key={l.href}>
    //             <a href={l.href}>{l.label}</a>
    //           </Menu.Item>
    //         ))}
    //       </Menu>
    //     </Header>
    //   ),
    // },
    // Breadcrumb: {
    //   fields: {
    //     items: {
    //       type: "list",
    //       of: {
    //         type: "object",
    //         fields: { href: { type: "text" }, label: { type: "text" } },
    //       },
    //     },
    //   },
    //   render: ({ items }) => (
    //     <AntBreadcrumb>
    //       {items?.map((i: any) => (
    //         <AntBreadcrumb.Item key={i.href}>
    //           <a href={i.href}>{i.label}</a>
    //         </AntBreadcrumb.Item>
    //       ))}
    //     </AntBreadcrumb>
    //   ),
    // },
    // Footer: {
    //   fields: { text: { type: "text" } },
    //   render: ({ text }) => (
    //     <Footer style={{ textAlign: "center" }}>{text}</Footer>
    //   ),
    // },
    // Interaction
    Form: {
      fields: { placeholder: { type: "text" } },
      render: ({ placeholder }) => /* @__PURE__ */ jsxs3(AntForm, { layout: "inline", onFinish: (v) => console.log(v), children: [
        /* @__PURE__ */ jsx14(AntForm.Item, { name: "input", children: /* @__PURE__ */ jsx14(AntdInput, { placeholder }) }),
        /* @__PURE__ */ jsx14(AntForm.Item, { children: /* @__PURE__ */ jsx14(AntdButton, { htmlType: "submit", children: "G\u1EEDi" }) })
      ] })
    },
    SearchBar: {
      fields: {},
      render: () => /* @__PURE__ */ jsx14(AntdInput.Search, { placeholder: "T\xECm ki\u1EBFm..." })
    },
    // Utility
    SEO: {
      fields: { title: { type: "text" }, description: { type: "text" } },
      render: ({
        title,
        description
      }) => {
        document.title = title || "";
        return /* @__PURE__ */ jsx14("meta", { name: "description", content: description });
      }
    }
  }
};

// src/query-provider.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { jsx as jsx15 } from "react/jsx-runtime";
var queryClient = new QueryClient();
var PuckProvider = ({ children }) => {
  return /* @__PURE__ */ jsx15(QueryClientProvider, { client: queryClient, children });
};
export {
  PuckConfig,
  PuckProvider,
  getGlobalClassName,
  spacingOptions
};
//# sourceMappingURL=index.mjs.map