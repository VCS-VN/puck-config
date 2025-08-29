// src/blocks/Grid/index.tsx
import { Box as Box2, SimpleGrid } from "@chakra-ui/react";

// src/components/Layout/index.tsx
import { forwardRef } from "react";
import { Box } from "@chakra-ui/react";

// src/components/ColorField/index.tsx
import { FieldLabel } from "@measured/puck";
import { jsx } from "react/jsx-runtime";
var colorField = {
  type: "custom",
  render: ({
    name,
    onChange,
    value
  }) => /* @__PURE__ */ jsx(FieldLabel, { label: "Background Color", children: /* @__PURE__ */ jsx(
    "input",
    {
      type: "color",
      name,
      value: value?.startsWith("#") ? value : "#ffffff",
      onChange: (e) => onChange(e.target.value)
    }
  ) })
};

// src/components/Layout/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
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
]?.map(({ value }, key) => ({ label: value, value, key }));
var layoutField = {
  type: "object",
  objectFields: {
    spanCol: {
      label: "Grid Column Span",
      type: "number",
      min: 1,
      max: 12
    },
    startCol: {
      label: "Grid Column Start",
      type: "number",
      min: 1,
      max: 12
    },
    spanRow: {
      label: "Grid Row Span",
      type: "number",
      min: 1,
      max: 12
    },
    startRow: {
      label: "Grid Row Start",
      type: "number",
      min: 1,
      max: 12
    },
    justifySelf: {
      label: "Justify Self (Grid)",
      type: "select",
      options: [
        { label: "Auto", value: "auto" },
        { label: "Start", value: "start" },
        { label: "End", value: "end" },
        { label: "Center", value: "center" },
        { label: "Stretch", value: "stretch" }
      ]
    },
    alignSelf: {
      label: "Align Self (Flex/Grid)",
      type: "select",
      options: [
        { label: "Auto", value: "auto" },
        { label: "Start", value: "start" },
        { label: "End", value: "end" },
        { label: "Center", value: "center" },
        { label: "Stretch", value: "stretch" },
        { label: "Baseline", value: "baseline" }
      ]
    },
    grow: {
      label: "Flex Grow",
      type: "radio",
      options: [
        { label: "true", value: true },
        { label: "false", value: false }
      ]
    },
    shrink: {
      label: "Flex Shrink",
      type: "radio",
      options: [
        { label: "true", value: true },
        { label: "false", value: false }
      ]
    },
    basis: {
      label: "Flex Basis",
      type: "text"
    },
    paddingTop: {
      type: "select",
      label: "Padding Top",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions]
    },
    paddingRight: {
      type: "select",
      label: "Padding Right",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions]
    },
    paddingBottom: {
      type: "select",
      label: "Padding Bottom",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions]
    },
    paddingLeft: {
      type: "select",
      label: "Padding Left",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions]
    },
    marginTop: {
      type: "select",
      label: "Margin Top",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions]
    },
    marginRight: {
      type: "select",
      label: "Margin Right",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions]
    },
    marginBottom: {
      type: "select",
      label: "Margin Bottom",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions]
    },
    marginLeft: {
      type: "select",
      label: "Margin Left",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions]
    },
    bgColor: {
      label: "Background Color",
      ...colorField
    },
    bgImage: {
      label: "Background Image",
      type: "text"
    },
    border: {
      label: "Border",
      type: "text"
    },
    borderRadius: {
      label: "Border Radius",
      type: "text"
    }
  }
};
var Layout = forwardRef(
  ({ children, className, layout, style }, ref) => {
    const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
    return /* @__PURE__ */ jsx2(
      Box,
      {
        ref,
        className,
        gridColumn: layout?.spanCol ? `${layout.startCol || "auto"} / span ${clamp(
          layout.spanCol,
          1,
          12
        )}` : void 0,
        gridRow: layout?.spanRow ? `${layout.startRow || "auto"} / span ${clamp(
          layout.spanRow,
          1,
          12
        )}` : void 0,
        justifySelf: layout?.justifySelf,
        alignSelf: layout?.alignSelf,
        flexGrow: layout?.grow ? 1 : void 0,
        flexShrink: layout?.shrink ? 1 : void 0,
        flexBasis: layout?.basis,
        pt: layout?.paddingTop,
        pr: layout?.paddingRight,
        pb: layout?.paddingBottom,
        pl: layout?.paddingLeft,
        mt: layout?.marginTop,
        mr: layout?.marginRight,
        mb: layout?.marginBottom,
        ml: layout?.marginLeft,
        bg: layout?.bgColor,
        bgImage: layout?.bgImage,
        border: layout?.border,
        borderRadius: layout?.borderRadius,
        style,
        children
      }
    );
  }
);
Layout.displayName = "Layout";
function withLayout(componentConfig) {
  const baseFields = {
    paddingTop: layoutField.objectFields.paddingTop,
    paddingRight: layoutField.objectFields.paddingRight,
    paddingBottom: layoutField.objectFields.paddingBottom,
    paddingLeft: layoutField.objectFields.paddingLeft,
    marginTop: layoutField.objectFields.marginTop,
    marginRight: layoutField.objectFields.marginRight,
    marginBottom: layoutField.objectFields.marginBottom,
    marginLeft: layoutField.objectFields.marginLeft,
    bgColor: layoutField.objectFields.bgColor,
    bgImage: layoutField.objectFields.bgImage,
    border: layoutField.objectFields.border,
    borderRadius: layoutField.objectFields.borderRadius
  };
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
        startCol: void 0,
        spanRow: 1,
        startRow: void 0,
        grow: false,
        shrink: true,
        basis: "auto",
        paddingTop: "0px",
        paddingRight: "0px",
        paddingBottom: "0px",
        paddingLeft: "0px",
        marginTop: "0px",
        marginRight: "0px",
        marginBottom: "0px",
        marginLeft: "0px",
        bgColor: "#ffffff",
        bgImage: "",
        border: "none",
        borderRadius: "0",
        ...componentConfig.defaultProps?.layout
      }
    },
    resolveFields: (_3, params) => {
      const parentType = params.parent?.type;
      let adjustedObjectFields = baseFields;
      if (parentType === "Grid") {
        adjustedObjectFields = {
          ...baseFields,
          spanCol: layoutField.objectFields.spanCol,
          startCol: layoutField.objectFields.startCol,
          spanRow: layoutField.objectFields.spanRow,
          startRow: layoutField.objectFields.startRow,
          justifySelf: layoutField.objectFields.justifySelf,
          alignSelf: layoutField.objectFields.alignSelf
        };
      } else if (parentType === "Flex") {
        adjustedObjectFields = {
          ...baseFields,
          grow: layoutField.objectFields.grow,
          shrink: layoutField.objectFields.shrink,
          basis: layoutField.objectFields.basis,
          alignSelf: layoutField.objectFields.alignSelf
        };
      }
      const adjustedLayout = {
        ...layoutField,
        objectFields: adjustedObjectFields
      };
      return {
        ...componentConfig.fields,
        layout: adjustedLayout
      };
    },
    inline: true,
    render: (props) => /* @__PURE__ */ jsx2(
      Layout,
      {
        className: props.className,
        layout: props.layout,
        ref: props.puck?.dragRef,
        style: props.style,
        children: componentConfig.render(props)
      }
    )
  };
}

// src/blocks/Grid/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var baseGrid = {
  fields: {
    items: {
      type: "array",
      label: "Grid Columns",
      arrayFields: {
        label: {
          type: "text",
          label: "Column Label (for editor reference)"
        },
        content: {
          type: "slot"
        }
      },
      min: 1
      // At least 1 column
    },
    mobile: {
      label: "Mobile Settings",
      type: "object",
      objectFields: {
        columns: {
          label: "Number of Columns ",
          type: "number",
          min: 1,
          max: 12
        },
        gap: { label: "Gap (px)", type: "text" }
      }
    },
    tablet: {
      label: "Tablet Settings",
      type: "object",
      objectFields: {
        columns: {
          label: "Number of Columns (Tablet)",
          type: "number",
          min: 1,
          max: 12
        },
        gap: { label: "Gap (Tablet)", type: "text" }
      }
    },
    desktop: {
      label: "Desktop Settings",
      type: "object",
      objectFields: {
        columns: {
          label: "Number of Columns (Desktop)",
          type: "number",
          min: 1,
          max: 12
        },
        gap: { label: "Gap (Desktop)", type: "text" }
      }
    }
  },
  defaultProps: {
    items: [{ label: "Column 1", content: [] }],
    mobile: {
      columns: 1,
      gap: "4"
    },
    tablet: {
      columns: 1,
      gap: "4"
    },
    desktop: {
      columns: 1,
      gap: "4"
    },
    layout: {
      paddingTop: "0px",
      paddingRight: "0px",
      paddingBottom: "0px",
      paddingLeft: "0px",
      marginTop: "0px",
      marginRight: "0px",
      marginBottom: "0px",
      marginLeft: "0px",
      bgColor: "transparent",
      bgImage: "",
      border: "none",
      borderRadius: "0"
    }
  },
  render: ({ items, mobile, tablet, desktop, bgImage }) => {
    const content = items.map((col, index) => /* @__PURE__ */ jsx3(Box2, { children: /* @__PURE__ */ jsx3(col.content, { minEmptyHeight: 100 }) }, index));
    return /* @__PURE__ */ jsx3(
      SimpleGrid,
      {
        backgroundImage: bgImage,
        columns: {
          base: mobile.columns,
          sm: tablet.columns,
          md: tablet.columns,
          lg: desktop.columns
        },
        gap: {
          base: mobile.gap,
          sm: tablet.gap,
          md: tablet.gap,
          lg: desktop.gap
        },
        children: content
      }
    );
  }
};
var Grid = withLayout(baseGrid);

// src/blocks/Flex/index.tsx
import { Box as Box3, Flex as ChakraFlex } from "@chakra-ui/react";
import { jsx as jsx4 } from "react/jsx-runtime";
var baseFlex = {
  fields: {
    flexItems: {
      type: "array",
      label: "Flex Items",
      arrayFields: {
        label: { type: "text", label: "Item Label (for editor)" },
        flexProps: {
          type: "object",
          label: "Item Flex/Width",
          objectFields: {
            width: {
              type: "object",
              label: "Width (e.g., 100% or 200px)",
              objectFields: {
                base: {
                  type: "select",
                  label: "Mobile (base)",
                  options: [
                    { label: "Auto", value: "auto" },
                    { label: "Full (100%)", value: "100%" },
                    { label: "Half (50%)", value: "50%" },
                    { label: "Third (33.33%)", value: "33.33%" },
                    { label: "Quarter (25%)", value: "25%" }
                  ]
                },
                md: {
                  type: "select",
                  label: "Tablet",
                  options: [
                    { label: "Auto", value: "auto" },
                    { label: "Full (100%)", value: "100%" },
                    { label: "Half (50%)", value: "50%" },
                    { label: "Third (33.33%)", value: "33.33%" },
                    { label: "Quarter (25%)", value: "25%" }
                  ]
                },
                lg: {
                  type: "select",
                  label: "Desktop",
                  options: [
                    { label: "Auto", value: "auto" },
                    { label: "Full (100%)", value: "100%" },
                    { label: "Half (50%)", value: "50%" },
                    { label: "Third (33.33%)", value: "33.33%" },
                    { label: "Quarter (25%)", value: "25%" }
                  ]
                }
              }
            }
          }
        },
        content: {
          type: "slot"
        }
      },
      min: 1,
      max: 6,
      defaultItemProps: {
        label: "Item ",
        flexProps: {
          width: { base: "100%" },
          // Full on mobile, half on medium+
          flex: { base: 1 }
          // Optional: Grow to fill space
        },
        content: []
      }
    },
    flexOptions: {
      type: "object",
      label: "Flex Settings",
      objectFields: {
        direction: {
          type: "object",
          label: "Direction per Breakpoint",
          layout: "horizontal",
          objectFields: {
            base: {
              type: "radio",
              label: "Mobile (base)",
              options: [
                { label: "Row", value: "row" },
                { label: "Column", value: "column" }
              ]
            },
            md: {
              type: "radio",
              label: "Tablet",
              options: [
                { label: "Row", value: "row" },
                { label: "Column", value: "column" }
              ]
            },
            lg: {
              type: "radio",
              label: "Desktop",
              options: [
                { label: "Row", value: "row" },
                { label: "Column", value: "column" }
              ]
            }
          }
        },
        justify: {
          type: "select",
          label: "Justify Content",
          options: [
            { label: "Flex Start", value: "flex-start" },
            { label: "Flex End", value: "flex-end" },
            { label: "Center", value: "center" },
            { label: "Space Between", value: "space-between" },
            { label: "Space Around", value: "space-around" },
            { label: "Space Evenly", value: "space-evenly" }
          ]
        },
        align: {
          type: "select",
          label: "Align Items",
          options: [
            { label: "Stretch", value: "stretch" },
            { label: "Flex Start", value: "flex-start" },
            { label: "Flex End", value: "flex-end" },
            { label: "Center", value: "center" },
            { label: "Baseline", value: "baseline" }
          ]
        },
        gap: { type: "number", label: "Gap (px)", min: 0, max: 20 }
      }
    }
  },
  defaultProps: {
    flexItems: [
      {
        label: "Item 1",
        flexProps: {
          width: { base: "100%" },
          // Full on mobile, half on medium+
          flex: { base: 1 }
          // Optional: Grow to fill space
        },
        content: []
      },
      {
        label: "Item 2",
        flexProps: {
          width: { base: "100%" },
          flex: { base: 1 }
        },
        content: []
      }
    ],
    flexOptions: {
      direction: { base: "column", md: "row", lg: "row" },
      justify: { base: "flex-start" },
      align: { base: "stretch" },
      wrap: true,
      gap: 4
    }
  },
  render: ({ flexItems, flexOptions }) => {
    return /* @__PURE__ */ jsx4(
      ChakraFlex,
      {
        direction: flexOptions.direction,
        justify: flexOptions.justify,
        align: flexOptions.align,
        wrap: flexOptions.wrap ? "wrap" : "nowrap",
        gap: flexOptions.gap,
        children: flexItems.map((item, index) => {
          const { content: Content } = item;
          return /* @__PURE__ */ jsx4(
            Box3,
            {
              flex: item.flexProps?.flex,
              width: item.flexProps?.width,
              minHeight: "100px",
              ...item.layoutProps,
              bg: item.layoutProps?.bgColor,
              p: item.layoutProps?.p || 2,
              children: /* @__PURE__ */ jsx4(Content, { minEmptyHeight: 100 })
            },
            index
          );
        })
      }
    );
  }
};
var Flex = withLayout(baseFlex);

// src/blocks/Container/index.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var baseContainer = {
  fields: {
    content: {
      type: "slot"
    }
  },
  defaultProps: {
    content: []
    // Empty array for slot
  },
  render: ({ content: Content }) => /* @__PURE__ */ jsx5(Content, { minEmptyHeight: 100 })
};
var Container = withLayout(baseContainer);

// src/components/Section/index.tsx
import { forwardRef as forwardRef2 } from "react";

// src/components/Section/styles.module.css
var styles_default = {};

// src/utils/get-class-name-factory.ts
import classnames from "classnames";
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

// src/components/Section/index.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var getClassName = get_class_name_factory_default("Section", styles_default);
var Section = forwardRef2(
  ({ children, className, maxWidth = "1280px", style = {} }, ref) => {
    return /* @__PURE__ */ jsx6(
      "div",
      {
        className: `${getClassName()}${className ? ` ${className}` : ""}`,
        style: {
          ...style
        },
        ref,
        children: /* @__PURE__ */ jsx6("div", { className: getClassName("inner"), style: { maxWidth }, children })
      }
    );
  }
);

// src/blocks/Heading/styles.module.css
var styles_default2 = {};

// src/blocks/Heading/index.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var getClassName2 = get_class_name_factory_default("Heading", styles_default2);
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
      // padding: "8px",
    }
  },
  render: ({ align, text, size, level }) => {
    const Tag = level ? `h${level}` : "span";
    return /* @__PURE__ */ jsx7(Section, { children: /* @__PURE__ */ jsx7(
      Tag,
      {
        className: getClassName2({
          [size]: true
        }),
        children: /* @__PURE__ */ jsx7("span", { style: { display: "block", textAlign: align, width: "100%" }, children: text })
      }
    ) });
  }
};
var Heading = withLayout(HeadingInternal);

// src/blocks/Text/index.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var TextInner = {
  fields: {
    text: {
      label: "Content"
      // ...InputRichText
    },
    maxWidth: { type: "text" }
  },
  defaultProps: {
    text: "Text"
  },
  render: ({ text, maxWidth }) => {
    return /* @__PURE__ */ jsx8(Section, { maxWidth, children: /* @__PURE__ */ jsx8("article", { className: "prose max-w-none lg:prose-xl", children: /* @__PURE__ */ jsx8("div", { dangerouslySetInnerHTML: { __html: text } }) }) });
  }
};
var Text = withLayout(TextInner);

// src/blocks/root.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var Root = {
  defaultProps: {},
  render: ({ puck: { renderDropZone: DropZone } }) => {
    return /* @__PURE__ */ jsx9(
      "div",
      {
        style: { display: "flex", flexDirection: "column", minHeight: "100vh" },
        children: /* @__PURE__ */ jsx9(DropZone, { zone: "default-zone", style: { flexGrow: 1 } })
      }
    );
  }
};
var root_default = Root;

// src/services/common/variable.state.ts
import { atom } from "recoil";
var VariableState = atom({
  key: "VariableState",
  default: {}
});

// src/blocks/Input/index.tsx
import { useRecoilState } from "recoil";
import { Input as ChakraInput } from "@chakra-ui/react";
import { useEffect, useMemo } from "react";
import { get } from "lodash";
import { jsx as jsx10 } from "react/jsx-runtime";
var baseInput = {
  fields: {
    variableName: { type: "text", label: "Variable Name (e.g., searchQuery)" },
    placeholder: { type: "text", label: "Placeholder" },
    initialValue: { type: "text", label: "Value" }
  },
  defaultProps: {
    variableName: "",
    placeholder: "",
    initialValue: ""
  },
  render: ({ variableName, placeholder, initialValue }) => {
    const [variables, setVariables] = useRecoilState(VariableState);
    const value = useMemo(() => {
      return get("variables", variableName, initialValue);
    }, [variableName, variables, initialValue]);
    useEffect(() => {
      if (variableName) {
        setVariables({ ...variables, [variableName]: value });
      }
    }, [value, variableName]);
    return /* @__PURE__ */ jsx10(
      ChakraInput,
      {
        placeholder: placeholder || "Placeholder",
        onChange: (e) => {
          return setVariables((prev) => ({
            ...prev,
            [variableName]: e.target.value
          }));
        }
      }
    );
  }
};
var Input = withLayout(baseInput);

// src/blocks/Button/index.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var Button = {
  label: "Button",
  fields: {
    label: {
      type: "text",
      placeholder: "Lorem ipsum...",
      contentEditable: true
    },
    // size: {
    //   type: "select",
    //   labelIcon: <ALargeSmall size={16} />,
    //   options: [
    //     { label: "Large", value: "large" },
    //     { label: "Default", value: "default" },
    //     { label: "Small", value: "small" },
    //   ],
    // },
    href: { type: "text" }
    // variant: {
    //   type: "select",
    //   options: [
    //     { label: "Link", value: "link" },
    //     { label: "Text", value: "text" },
    //     { label: "Outlined", value: "outlined" },
    //     { label: "Dashed", value: "dashed" },
    //     { label: "Solid", value: "solid" },
    //     { label: "Filled", value: "filled" },
    //   ],
    // },
  },
  defaultProps: {
    // label: "Button",
    // variant: "solid",
    // size: "large",
  },
  render: ({ href, variant, label, puck, size }) => {
    return /* @__PURE__ */ jsx11("div", {});
  }
};

// src/blocks/Products/index.tsx
import { useEffect as useEffect4, useMemo as useMemo2, useState as useState3 } from "react";
import { debounce, get as get3, round as round2 } from "lodash";

// src/client/httpClient.ts
import axios from "axios";
var initHttpClient = () => {
  let URL = "";
  if (typeof process !== "undefined") {
    URL = process?.env?.NEXT_PUBLIC_CUSTOMER_API_URL;
  } else {
    URL = import.meta.env.VITE_CUSTOMER_API_URL;
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

// src/hooks/products/useGetProductDetailQuery.tsx
import { useQuery } from "@tanstack/react-query";

// src/hooks/products/useGetProductsQuery.tsx
import { useQuery as useQuery2 } from "@tanstack/react-query";
var useGetProductsQuery = (queries, props) => {
  let storeId = queries?.storeId;
  if (typeof process !== "undefined") {
    storeId = process?.env?.NEXT_PUBLIC_ENTITY_ID;
  } else {
    storeId = import.meta?.env?.VITE_ENTITY_ID;
  }
  queries = {
    ...queries,
    storeId: queries?.storeId || storeId
  };
  return useQuery2({
    ...props,
    queryKey: ["products", queries],
    queryFn: () => getProducts(queries)
  });
};

// src/blocks/Products/index.tsx
import {
  Card as Card2,
  CardBody as CardBody2,
  CardFooter as CardFooter2,
  Image as Image3,
  Pagination,
  SimpleGrid as SimpleGrid2,
  Skeleton,
  Text as Text3,
  Box as Box4
} from "@chakra-ui/react";
import { useRecoilState as useRecoilState2, useRecoilValue } from "recoil";

// src/blocks/Products/components/ButtonAddToCart.tsx
import {
  Drawer,
  Button as Button2,
  CloseButton,
  Portal,
  Card,
  CardBody,
  Image as Image2,
  Text as Text2
} from "@chakra-ui/react";
import { get as get2, round } from "lodash";

// src/blocks/Products/components/ListModel.tsx
import { HStack, Image, IconButton, RadioCard, NumberInput } from "@chakra-ui/react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useEffect as useEffect2, useState } from "react";
import { Fragment, jsx as jsx12, jsxs } from "react/jsx-runtime";
var ListModel = (props) => {
  const {
    models,
    productId,
    onChangeDataProduct,
    onChangeQuantity
  } = props;
  let styleConfig = {
    "--chakra-spacing-4": "4px"
  };
  const [value, setValue] = useState("");
  const [quantity, setQuantity] = useState(1);
  useEffect2(() => {
    setValue(productId);
  }, [productId]);
  const onChangeProduct = (modelId) => {
    setValue(modelId);
    let modelItem = models.find((model) => model.id === modelId);
    if (modelItem && onChangeDataProduct) {
      onChangeDataProduct(modelItem);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx12(
      RadioCard.Root,
      {
        orientation: "horizontal",
        align: "center",
        justify: "center",
        maxW: "sm",
        style: styleConfig,
        defaultValue: productId,
        value,
        onValueChange: (e) => {
          onChangeProduct(e.value);
        },
        children: /* @__PURE__ */ jsx12(HStack, { align: "stretch", children: models && models.map((item) => /* @__PURE__ */ jsxs(RadioCard.Item, { value: item.id, children: [
          /* @__PURE__ */ jsx12(RadioCard.ItemHiddenInput, {}),
          /* @__PURE__ */ jsxs(
            RadioCard.ItemControl,
            {
              children: [
                /* @__PURE__ */ jsx12(
                  Image,
                  {
                    src: item.image || "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg",
                    alt: item.name,
                    borderRadius: "md",
                    h: "50px",
                    w: "50px",
                    fit: "contain"
                  }
                ),
                /* @__PURE__ */ jsx12(RadioCard.ItemText, { ms: "-4", children: item.name })
              ]
            }
          )
        ] }, item.id)) })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-2 flex justify-between items-center", children: [
      /* @__PURE__ */ jsx12("div", { children: "Quantity" }),
      /* @__PURE__ */ jsx12("div", { children: /* @__PURE__ */ jsx12(
        NumberInput.Root,
        {
          defaultValue: "1",
          unstyled: true,
          spinOnPress: false,
          onValueChange: (e) => {
            if (e?.valueAsNumber >= 0) {
              setQuantity(e?.valueAsNumber);
              if (onChangeQuantity) {
                onChangeQuantity(e?.valueAsNumber);
              }
            }
          },
          children: /* @__PURE__ */ jsxs(HStack, { gap: "2", children: [
            /* @__PURE__ */ jsx12(NumberInput.DecrementTrigger, { asChild: true, disabled: quantity === 0, children: /* @__PURE__ */ jsx12(IconButton, { variant: "outline", size: "sm", children: /* @__PURE__ */ jsx12(LuMinus, {}) }) }),
            /* @__PURE__ */ jsx12(NumberInput.ValueText, { textAlign: "center", fontSize: "lg", minW: "3ch" }),
            /* @__PURE__ */ jsx12(NumberInput.IncrementTrigger, { asChild: true, children: /* @__PURE__ */ jsx12(IconButton, { variant: "outline", size: "sm", children: /* @__PURE__ */ jsx12(LuPlus, {}) }) })
          ] })
        }
      ) })
    ] })
  ] });
};
var ListModel_default = ListModel;

// src/blocks/Products/components/ButtonAddToCart.tsx
import { useEffect as useEffect3, useState as useState2 } from "react";
import { Fragment as Fragment2, jsx as jsx13, jsxs as jsxs2 } from "react/jsx-runtime";
var ButtonAddToCart = (props) => {
  const { product, keyAddToCart, saveCartToStore } = props;
  const [valueProduct, setValueProduct] = useState2(null);
  const [openDrawer, setOpenDrawer] = useState2(false);
  const [quantity, setQuantity] = useState2(1);
  useEffect3(() => {
    setValueProduct({
      ...product,
      price: product?.defaultModel?.price ?? product.price ?? 0
    });
  }, [props?.product]);
  const onChangeDataProduct = (value) => {
    setValueProduct((prev) => {
      return {
        ...prev,
        ...value
      };
    });
  };
  const onChangeQuantity = (value) => {
    setQuantity(value);
  };
  const defaultModel = (value) => {
    return get2(
      value,
      "defaultModel",
      get2(value, "models.0")
    );
  };
  function addToCart() {
    const cart = JSON.parse(localStorage.getItem(keyAddToCart)) || [];
    const existing = cart.find((item) => item.id === valueProduct.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        ...valueProduct,
        quantity,
        // an bot 1 so truong
        defaultModel: null,
        defaultModelId: null,
        models: null
      });
    }
    console.log("cart", cart);
    if (saveCartToStore) {
      saveCartToStore(cart);
    }
    localStorage.setItem(keyAddToCart, JSON.stringify(cart));
    setOpenDrawer(false);
  }
  return /* @__PURE__ */ jsx13(Fragment2, { children: /* @__PURE__ */ jsxs2(
    Drawer.Root,
    {
      placement: "bottom",
      open: openDrawer,
      onOpenChange: () => {
        setOpenDrawer(!openDrawer);
      },
      children: [
        /* @__PURE__ */ jsx13(Drawer.Trigger, { asChild: true, children: /* @__PURE__ */ jsx13(Button2, { colorPalette: "orange", children: "Add to cart" }) }),
        /* @__PURE__ */ jsxs2(Portal, { children: [
          /* @__PURE__ */ jsx13(Drawer.Backdrop, {}),
          /* @__PURE__ */ jsx13(Drawer.Positioner, { children: /* @__PURE__ */ jsxs2(
            Drawer.Content,
            {
              roundedTop: "l3",
              roundedBottom: void 0,
              children: [
                /* @__PURE__ */ jsx13(Drawer.Header, { children: /* @__PURE__ */ jsx13(Drawer.Title, { children: valueProduct?.name }) }),
                /* @__PURE__ */ jsx13(Drawer.Body, { children: valueProduct && /* @__PURE__ */ jsx13(Card.Root, { variant: "outline", children: /* @__PURE__ */ jsxs2(CardBody, { children: [
                  /* @__PURE__ */ jsx13(
                    Image2,
                    {
                      border: "1px solid red",
                      src: valueProduct?.image || "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg",
                      alt: valueProduct?.name,
                      borderRadius: "md",
                      h: "100px",
                      w: "100px",
                      fit: "contain"
                    }
                  ),
                  /* @__PURE__ */ jsx13(Card.Title, { children: valueProduct?.name }),
                  /* @__PURE__ */ jsxs2(Text2, { textStyle: "2xl", fontWeight: "medium", letterSpacing: "tight", mt: "2", children: [
                    "$",
                    `${round(
                      (defaultModel(valueProduct)?.price ?? valueProduct?.price ?? 0) / 100,
                      0
                    )}`
                  ] }),
                  /* @__PURE__ */ jsx13(
                    ListModel_default,
                    {
                      models: valueProduct?.models,
                      productId: valueProduct?.defaultModelId,
                      onChangeDataProduct,
                      onChangeQuantity
                    }
                  )
                ] }) }) }),
                /* @__PURE__ */ jsxs2(Drawer.Footer, { children: [
                  /* @__PURE__ */ jsx13(Drawer.ActionTrigger, { asChild: true, children: /* @__PURE__ */ jsx13(Button2, { variant: "outline", children: "Cancel" }) }),
                  /* @__PURE__ */ jsx13(Button2, { colorPalette: "orange", onClick: () => {
                    addToCart();
                  }, children: "Add to cart" })
                ] }),
                /* @__PURE__ */ jsx13(Drawer.CloseTrigger, { asChild: true, children: /* @__PURE__ */ jsx13(CloseButton, { size: "sm" }) })
              ]
            }
          ) })
        ] })
      ]
    }
  ) });
};
var ButtonAddToCart_default = ButtonAddToCart;

// src/services/common/production.state.ts
import { atom as atom2 } from "recoil";
var ProductionState = atom2({
  key: "ProductionState",
  default: {}
});

// src/blocks/Products/index.tsx
import { jsx as jsx14, jsxs as jsxs3 } from "react/jsx-runtime";
var ProductsRender = ({
  mobile,
  tablet,
  desktop,
  limit,
  categoryId,
  // searchSize,
  storeId,
  variableName,
  noResultsText
}) => {
  const variables = useRecoilValue(VariableState);
  const [productionState, setProductionState] = useRecoilState2(ProductionState);
  console.log("\u{1F680} ~ ProductsRender ~ variables:", variables);
  console.log("\u{1F680} ~ ProductsRender ~ productionState:", productionState);
  const keyAddToCart = "productCart";
  const valueOfSearchProductsVariable = useMemo2(() => {
    if (!variableName) {
      return null;
    }
    return get3(variables, variableName);
  }, [variableName, variables]);
  const [debouncedValue, setDebouncedValue] = useState3(
    valueOfSearchProductsVariable
  );
  const debouncedSetValue = useMemo2(
    () => debounce((value) => {
      console.log("value", value);
      setDebouncedValue(value);
    }, 800),
    []
  );
  const [queries, setQueries] = useState3({
    search: debouncedValue,
    page: 1,
    limit
  });
  const { data: products, isLoading } = useGetProductsQuery(
    {
      // storeSlug: store?.slug,
      query: queries.search,
      isGettingModels: true,
      isGettingDefaultModel: true,
      limit: queries.limit,
      page: queries?.page,
      categoryId,
      storeId
    }
    // { enabled: !!store?.slug }
  );
  useEffect4(() => {
    debouncedSetValue(valueOfSearchProductsVariable || "");
    return () => debouncedSetValue.cancel();
  }, [valueOfSearchProductsVariable, debouncedSetValue]);
  useEffect4(() => {
    setQueries((prev) => ({
      ...prev,
      search: debouncedValue,
      page: 1
    }));
  }, [debouncedValue]);
  const saveCartToStore = (carts) => {
    setProductionState({ ...productionState, [keyAddToCart]: carts || [] });
  };
  if (!isLoading && !products?.total) {
    return /* @__PURE__ */ jsx14(Box4, { children: /* @__PURE__ */ jsx14(Text3, { children: noResultsText || "No results found" }) });
  }
  return /* @__PURE__ */ jsxs3(Box4, { children: [
    /* @__PURE__ */ jsx14(
      SimpleGrid2,
      {
        columns: {
          base: mobile,
          sm: tablet,
          md: tablet,
          lg: desktop
        },
        gap: 4,
        children: isLoading ? Array.from({ length: limit }).map((_3, index) => /* @__PURE__ */ jsx14(Skeleton, { height: "300px", borderRadius: "md" }, index)) : products?.data?.map((product) => {
          const defaultModel = get3(
            product,
            "defaultModel",
            get3(product, "models.0")
          );
          return /* @__PURE__ */ jsxs3(Card2.Root, { variant: "outline", children: [
            /* @__PURE__ */ jsxs3(CardBody2, { children: [
              /* @__PURE__ */ jsx14(
                Image3,
                {
                  src: product.image || "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg",
                  alt: product.name,
                  borderRadius: "md"
                }
              ),
              /* @__PURE__ */ jsx14(Card2.Title, { children: product.name }),
              /* @__PURE__ */ jsxs3(Text3, { textStyle: "2xl", fontWeight: "medium", letterSpacing: "tight", mt: "2", children: [
                "$",
                `${round2(
                  (defaultModel?.price ?? product.price ?? 0) / 100,
                  0
                )}`
              ] })
            ] }),
            /* @__PURE__ */ jsx14(CardFooter2, { gap: "2", children: /* @__PURE__ */ jsx14(
              ButtonAddToCart_default,
              {
                product,
                keyAddToCart,
                saveCartToStore
              }
            ) })
          ] }, product.id);
        })
      }
    ),
    get3(products, "total", 0) > 0 && /* @__PURE__ */ jsxs3(
      Pagination.Root,
      {
        mt: "6",
        count: get3(products, "total", 0),
        pageSize: queries.limit,
        page: queries.page,
        onPageChange: ({ page }) => setQueries((prev) => ({
          ...prev,
          page
        })),
        children: [
          /* @__PURE__ */ jsx14(Pagination.PrevTrigger, {}),
          /* @__PURE__ */ jsx14(Pagination.NextTrigger, {})
        ]
      }
    )
  ] });
};
var ProductsInternal = {
  fields: {
    mobile: { type: "number", label: "Mobile (base)", min: 1, max: 2 },
    tablet: { type: "number", label: "Tablet", min: 1, max: 4 },
    desktop: { type: "number", label: "Desktop", min: 1, max: 6 },
    limit: { type: "number", label: "Limit", min: 1, max: 20 },
    variableName: {
      type: "text",
      label: "Variable Name to Use"
    },
    noResultsText: { type: "text", label: "No Results Message" }
    // searchSize: {
    //   type: "select",
    //   label: "Search Size",
    //   options: [
    //     { value: "middle", label: "Middle" },
    //     { value: "large", label: "Large" },
    //   ],
    // },
    // categoryId: {
    //   type: "custom",
    //   label: "Category",
    //   render: (props) => <CategoryField {...props} />,
    // },
  },
  defaultProps: {
    mobile: 2,
    tablet: 4,
    desktop: 4,
    limit: 10,
    categoryId: void 0,
    noResultsText: "No Results",
    variableName: void 0
  },
  render: ({
    puck,
    mobile,
    tablet,
    desktop,
    limit,
    noResultsText,
    categoryId,
    variableName
  }) => {
    return /* @__PURE__ */ jsx14(
      ProductsRender,
      {
        mobile,
        tablet,
        desktop,
        categoryId,
        variableName,
        limit,
        noResults: noResultsText,
        storeId: puck?.metadata?.storeId
      }
    );
  }
};
var Products = withLayout(ProductsInternal);

// src/blocks/Checkout/index.tsx
import { useEffect as useEffect5, useState as useState4 } from "react";
import { round as round3 } from "lodash";
import {
  Image as Image4,
  Text as Text4,
  Box as Box5,
  Button as Button4,
  Table,
  NumberInput as NumberInput2,
  Card as Card3,
  DataList,
  Input as Input2,
  Link
} from "@chakra-ui/react";
import { useRecoilState as useRecoilState3 } from "recoil";
import _ from "lodash";
import { LuExternalLink } from "react-icons/lu";
import { jsx as jsx15, jsxs as jsxs4 } from "react/jsx-runtime";
var CheckoutRender = ({
  limit,
  categoryId,
  // searchSize,
  storeId,
  variableName,
  noResultsText,
  urlToProduct
}) => {
  const [productionState, setProductionState] = useRecoilState3(ProductionState);
  const [listProduct, setListProduct] = useState4([]);
  const keyAddToCart = "productCart";
  const getProductionCart = () => {
    if (productionState && productionState?.[keyAddToCart]?.length > 0) {
      setListProduct(productionState?.[keyAddToCart]);
      return;
    }
    if (!productionState?.[keyAddToCart]) {
      try {
        const cart = JSON.parse(localStorage.getItem(keyAddToCart)) || [];
        if (cart?.length > 0) {
          saveCartToStore(cart);
        }
      } catch (e) {
        console.log("e", e);
      }
    }
  };
  useEffect5(() => {
    getProductionCart();
  }, [productionState]);
  const saveCartToStore = (carts) => {
    localStorage.setItem(keyAddToCart, JSON.stringify(carts || []));
    setProductionState({ ...productionState, [keyAddToCart]: carts || [] });
  };
  const onChangeQuantity = (value, index) => {
    if (value >= 0) {
      let newListProducts = _.cloneDeep(listProduct);
      newListProducts[index].quantity = value;
      setListProduct(newListProducts);
    }
  };
  const subTotal = () => {
    let total = 0;
    listProduct.forEach((item) => {
      let subTotalItem = round3(
        Number((item.price ?? 0) / 100) * Number(item.quantity),
        0
      );
      total += subTotalItem;
    });
    return total;
  };
  if (!listProduct?.length) {
    return /* @__PURE__ */ jsx15(Box5, { children: /* @__PURE__ */ jsxs4("div", { className: "w-full flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsx15(Text4, { children: noResultsText || "No results found" }),
      urlToProduct && /* @__PURE__ */ jsxs4(Link, { variant: "underline", colorPalette: "blue", href: `${urlToProduct}`, children: [
        "Visit products now",
        /* @__PURE__ */ jsx15(LuExternalLink, {})
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxs4("div", { children: [
    /* @__PURE__ */ jsxs4(Table.Root, { size: "sm", children: [
      /* @__PURE__ */ jsx15(Table.Header, { children: /* @__PURE__ */ jsxs4(Table.Row, { children: [
        /* @__PURE__ */ jsx15(Table.ColumnHeader, { children: "Product" }),
        /* @__PURE__ */ jsx15(Table.ColumnHeader, { children: "Price" }),
        /* @__PURE__ */ jsx15(Table.ColumnHeader, { children: "Quantity" }),
        /* @__PURE__ */ jsx15(Table.ColumnHeader, { children: "Subtotal" })
      ] }) }),
      /* @__PURE__ */ jsx15(Table.Body, { children: listProduct.map((item, index) => /* @__PURE__ */ jsxs4(Table.Row, { children: [
        /* @__PURE__ */ jsx15(Table.Cell, { children: /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-1 w-full", children: [
          /* @__PURE__ */ jsx15(
            Image4,
            {
              src: item.image || "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg",
              width: "50px",
              height: "50px",
              alt: item.name,
              borderRadius: "md"
            }
          ),
          /* @__PURE__ */ jsx15("span", { children: item.name })
        ] }) }),
        /* @__PURE__ */ jsxs4(Table.Cell, { children: [
          "$",
          `${round3(
            (item.price ?? 0) / 100,
            0
          )}`
        ] }),
        /* @__PURE__ */ jsx15(Table.Cell, { children: /* @__PURE__ */ jsxs4(
          NumberInput2.Root,
          {
            style: {
              width: "72px"
            },
            value: item.quantity,
            onValueChange: (e) => {
              onChangeQuantity(e?.valueAsNumber, index);
            },
            children: [
              /* @__PURE__ */ jsx15(NumberInput2.Control, {}),
              /* @__PURE__ */ jsx15(NumberInput2.Input, {})
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs4(Table.Cell, { children: [
          "$",
          `${round3(
            Number((item.price ?? 0) / 100) * Number(item.quantity),
            0
          )}`
        ] })
      ] }, item.id)) })
    ] }),
    /* @__PURE__ */ jsx15("div", { className: "flex justify-between mt-4", children: /* @__PURE__ */ jsx15(Button4, { variant: "outline", children: "Return To Shop" }) }),
    /* @__PURE__ */ jsxs4("div", { className: "flex justify-between mt-10 mb-2", children: [
      /* @__PURE__ */ jsxs4("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx15(Input2, { placeholder: "Coupon Code", variant: "outline" }),
        /* @__PURE__ */ jsx15(Button4, { colorPalette: "red", children: "Apply Coupon" })
      ] }),
      /* @__PURE__ */ jsx15("div", { children: /* @__PURE__ */ jsxs4(Card3.Root, { width: "320px", children: [
        /* @__PURE__ */ jsxs4(Card3.Body, { gap: "2", children: [
          /* @__PURE__ */ jsx15(Card3.Title, { mt: "2", children: "Cart total" }),
          /* @__PURE__ */ jsx15(Card3.Description, { children: /* @__PURE__ */ jsxs4(DataList.Root, { orientation: "horizontal", divideY: "1px", maxW: "md", children: [
            /* @__PURE__ */ jsxs4(DataList.Item, { pt: "4", children: [
              /* @__PURE__ */ jsx15(DataList.ItemLabel, { children: "SubTotal" }),
              /* @__PURE__ */ jsxs4(DataList.ItemValue, { className: "justify-end", children: [
                "$",
                subTotal()
              ] })
            ] }),
            /* @__PURE__ */ jsxs4(DataList.Item, { pt: "4", children: [
              /* @__PURE__ */ jsx15(DataList.ItemLabel, { children: "Shipping" }),
              /* @__PURE__ */ jsx15(DataList.ItemValue, { className: "justify-end", children: "Free" })
            ] }),
            /* @__PURE__ */ jsxs4(DataList.Item, { pt: "4", children: [
              /* @__PURE__ */ jsx15(DataList.ItemLabel, { children: "Total" }),
              /* @__PURE__ */ jsxs4(DataList.ItemValue, { className: "justify-end", children: [
                "$",
                subTotal()
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx15(Card3.Footer, { justifyContent: "center", children: /* @__PURE__ */ jsx15(Button4, { colorPalette: "red", children: "Process to checkout" }) })
      ] }) })
    ] })
  ] });
};
var CheckoutInternal = {
  label: "Cart",
  fields: {
    // mobile: {type: "number", label: "Mobile (base)", min: 1, max: 2},
    // tablet: {type: "number", label: "Tablet", min: 1, max: 4},
    // desktop: {type: "number", label: "Desktop", min: 1, max: 6},
    // limit: {type: "number", label: "Limit", min: 1, max: 20},
    variableName: {
      type: "text",
      label: "Variable Name to Use"
    },
    noResultsText: { type: "text", label: "No Results Message" },
    urlToProduct: { type: "text", label: "Url to product" }
    // searchSize: {
    //   type: "select",
    //   label: "Search Size",
    //   options: [
    //     { value: "middle", label: "Middle" },
    //     { value: "large", label: "Large" },
    //   ],
    // },
    // categoryId: {
    //   type: "custom",
    //   label: "Category",
    //   render: (props) => <CategoryField {...props} />,
    // },
  },
  defaultProps: {
    // mobile: 2,
    // tablet: 4,
    // desktop: 4,
    // limit: 10,
    categoryId: void 0,
    noResultsText: "No Results",
    variableName: void 0,
    urlToProduct: void 0
  },
  render: ({
    puck,
    limit,
    noResultsText,
    urlToProduct,
    categoryId,
    variableName
  }) => {
    return /* @__PURE__ */ jsx15(
      CheckoutRender,
      {
        categoryId,
        variableName,
        limit,
        noResults: noResultsText,
        urlToProduct,
        storeId: puck?.metadata?.storeId
      }
    );
  }
};
var Checkout = withLayout(CheckoutInternal);

// src/blocks/CategoryGrid/index.tsx
import { ErrorBoundary } from "react-error-boundary";
import { useState as useState5, useRef } from "react";
import {
  Box as Box6,
  Text as Text5,
  Flex as Flex2,
  IconButton as IconButton2,
  Stack,
  Button as Button5,
  Icon,
  SimpleGrid as SimpleGrid3,
  Skeleton as Skeleton2,
  Link as Link2
} from "@chakra-ui/react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiSmartphone,
  FiMonitor,
  FiWatch,
  FiCamera,
  FiHeadphones,
  FiZap,
  FiPackage
} from "react-icons/fi";

// src/services/sale/category/category.api.ts
var getCategories = async (payload) => {
  const httpClient = initHttpClient();
  const response = await httpClient.get(`/api/v1/categories`, {
    params: payload
  });
  return response.data;
};

// src/hooks/category/useGetCategoriesQuery.tsx
import { useQuery as useQuery3 } from "@tanstack/react-query";
var useGetCategoriesQuery = (queries, props) => {
  return useQuery3({
    ...props,
    queryKey: ["categories", queries],
    queryFn: () => getCategories(queries)
  });
};

// src/blocks/CommonFunction/function.ts
import _2 from "lodash";
var matchDataCondition = (source, data) => {
  if (!source) return "";
  let formatData = source;
  formatData?.match(/\${(.*?)(?=})}/g)?.map((str) => {
    const key = str.slice(2, str.length - 1);
    const value = _2.get(data, key, "");
    formatData = formatData.replace(str, value);
    return formatData;
  });
  return formatData;
};

// src/blocks/CategoryGrid/index.tsx
import { jsx as jsx16, jsxs as jsxs5 } from "react/jsx-runtime";
var iconMap = {
  FiSmartphone,
  FiMonitor,
  FiWatch,
  FiCamera,
  FiHeadphones,
  FiZap,
  FiPackage
};
var getCategoryIcon = (categoryName) => {
  const name = categoryName.toLowerCase();
  if (name.includes("phone") || name.includes("mobile")) return "FiSmartphone";
  if (name.includes("computer") || name.includes("laptop") || name.includes("pc"))
    return "FiMonitor";
  if (name.includes("watch") || name.includes("smartwatch")) return "FiWatch";
  if (name.includes("camera") || name.includes("photo")) return "FiCamera";
  if (name.includes("headphone") || name.includes("audio") || name.includes("sound"))
    return "FiHeadphones";
  if (name.includes("game") || name.includes("gaming")) return "FiZap";
  return "FiPackage";
};
var CategoryGridRender = ({
  title = "Browse By Category",
  subtitle = "Categories",
  urlRedirect,
  storeId = import.meta.env.VITE_ENTITY_ID || "",
  mobile = 2,
  tablet = 4,
  desktop = 6,
  limit = 6
}) => {
  const [selectedCategory, setSelectedCategory] = useState5("");
  const scrollRef = useRef(null);
  const redColor = "red.500";
  const entityId = import.meta.env.VITE_ENTITY_ID || storeId || "";
  const {
    data: categoriesData,
    isLoading,
    error
  } = useGetCategoriesQuery(
    { storeId: entityId },
    { enabled: true }
    // Always enable the query
  );
  const defaultCategories = [
    { id: "1", name: "Phones", icon: "FiSmartphone" },
    { id: "2", name: "Computers", icon: "FiMonitor" },
    { id: "3", name: "SmartWatch", icon: "FiWatch" },
    { id: "4", name: "Camera", icon: "FiCamera" },
    { id: "5", name: "HeadPhones", icon: "FiHeadphones" },
    { id: "6", name: "Gaming", icon: "FiZap" }
  ];
  const apiCategories = categoriesData?.data || [];
  const shouldUseDefault = false;
  const displayCategories = shouldUseDefault ? defaultCategories.slice(0, limit) : apiCategories.slice(0, limit);
  const getVisibleCategories = () => {
    return displayCategories;
  };
  const visibleCategories = getVisibleCategories();
  const getResponsiveSizing = () => {
    return {
      cardSize: {
        base: `${100 / mobile}%`,
        // Mobile: divide by mobile columns
        md: `${100 / tablet}%`,
        // Tablet: divide by tablet columns
        lg: `${100 / desktop}%`
        // Desktop: divide by desktop columns
      },
      gap: {
        base: 2,
        md: 3,
        lg: 4
      },
      fontSize: {
        base: "xs",
        md: "sm",
        lg: "sm"
      },
      iconSize: {
        base: 5,
        md: 5,
        lg: 6
      }
    };
  };
  const responsiveSizing = getResponsiveSizing();
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  const onClickCategory = (item) => {
  };
  return /* @__PURE__ */ jsx16(Section, { children: /* @__PURE__ */ jsxs5(Box6, { py: 8, children: [
    /* @__PURE__ */ jsxs5(Flex2, { justify: "space-between", align: "center", mb: 6, children: [
      /* @__PURE__ */ jsxs5(Stack, { align: "start", gap: 1, children: [
        /* @__PURE__ */ jsxs5(Flex2, { align: "center", gap: 2, children: [
          /* @__PURE__ */ jsx16(Box6, { w: 2, h: 6, bg: redColor, borderRadius: "sm" }),
          /* @__PURE__ */ jsx16(Text5, { color: redColor, fontSize: "sm", fontWeight: "medium", children: subtitle })
        ] }),
        /* @__PURE__ */ jsx16(Text5, { fontSize: "2xl", fontWeight: "bold", color: "gray.800", children: title })
      ] }),
      /* @__PURE__ */ jsxs5(Stack, { direction: "row", gap: 2, children: [
        /* @__PURE__ */ jsx16(
          IconButton2,
          {
            "aria-label": "Previous categories",
            variant: "outline",
            size: "sm",
            onClick: scrollLeft,
            colorScheme: "gray",
            children: /* @__PURE__ */ jsx16(Icon, { as: FiChevronLeft })
          }
        ),
        /* @__PURE__ */ jsx16(
          IconButton2,
          {
            "aria-label": "Next categories",
            variant: "outline",
            size: "sm",
            onClick: scrollRight,
            colorScheme: "gray",
            children: /* @__PURE__ */ jsx16(Icon, { as: FiChevronRight })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs5(Box6, { children: [
      /* @__PURE__ */ jsx16(
        Box6,
        {
          ref: scrollRef,
          overflowX: "auto",
          overflowY: "hidden",
          css: {
            "&::-webkit-scrollbar": {
              display: "none"
            },
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          },
          display: { base: "block", md: "block", lg: "none" },
          children: /* @__PURE__ */ jsx16(
            Stack,
            {
              direction: "row",
              gap: responsiveSizing.gap,
              minW: "max-content",
              pb: 2,
              display: "flex",
              flexWrap: "nowrap",
              overflowX: "auto",
              css: {
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
                msOverflowStyle: "none"
              },
              children: isLoading ? (
                // Loading skeleton
                Array.from({ length: limit }).map((_3, index) => /* @__PURE__ */ jsx16(
                  Skeleton2,
                  {
                    h: { base: "100px", md: "110px" },
                    w: { base: "100px", md: "110px" },
                    borderRadius: "md"
                  },
                  `skeleton-${index}`
                ))
              ) : error ? (
                // Error state
                /* @__PURE__ */ jsx16(Text5, { color: "red.500", fontSize: "sm", children: "Failed to load categories" })
              ) : visibleCategories.map((category) => {
                const categoryName = category.name || "";
                const categoryId = category.id || "";
                const iconKey = category.icon || getCategoryIcon(categoryName);
                const IconComponent = iconMap[iconKey];
                const isSelected = selectedCategory === categoryId;
                return /* @__PURE__ */ jsx16(Link2, { href: matchDataCondition(urlRedirect, category), children: /* @__PURE__ */ jsxs5(
                  Button5,
                  {
                    variant: "outline",
                    size: "lg",
                    h: { base: "100px", md: "110px" },
                    w: { base: "100px", md: "110px" },
                    minW: { base: "100px", md: "110px" },
                    flexDirection: "column",
                    gap: { base: 2, md: 2 },
                    bg: isSelected ? redColor : "white",
                    borderColor: isSelected ? redColor : "gray.200",
                    color: isSelected ? "white" : "gray.800",
                    _hover: {
                      bg: isSelected ? redColor : "gray.50",
                      borderColor: isSelected ? redColor : "gray.300"
                    },
                    onClick: () => onClickCategory(category),
                    transition: "all 0.2s",
                    flexShrink: 0,
                    children: [
                      /* @__PURE__ */ jsx16(
                        Icon,
                        {
                          as: IconComponent,
                          boxSize: responsiveSizing.iconSize,
                          color: isSelected ? "white" : "gray.800"
                        }
                      ),
                      /* @__PURE__ */ jsx16(
                        Text5,
                        {
                          fontSize: responsiveSizing.fontSize,
                          fontWeight: "medium",
                          children: categoryName
                        }
                      )
                    ]
                  },
                  categoryId
                ) });
              })
            }
          )
        }
      ),
      /* @__PURE__ */ jsx16(
        SimpleGrid3,
        {
          columns: {
            base: mobile,
            md: tablet,
            lg: desktop
          },
          gap: responsiveSizing.gap,
          display: {
            base: "none",
            md: "none",
            lg: "grid"
          },
          children: isLoading ? (
            // Loading skeleton for desktop
            Array.from({ length: limit }).map((_3, index) => /* @__PURE__ */ jsx16(
              Skeleton2,
              {
                h: "120px",
                w: "100%",
                borderRadius: "md"
              },
              `skeleton-desktop-${index}`
            ))
          ) : error ? (
            // Error state
            /* @__PURE__ */ jsx16(Text5, { color: "red.500", fontSize: "sm", children: "Failed to load categories" })
          ) : visibleCategories.map((category) => {
            const categoryName = category.name || "";
            const categoryId = category.id || "";
            const iconKey = category.icon || getCategoryIcon(categoryName);
            const IconComponent = iconMap[iconKey];
            const isSelected = selectedCategory === categoryId;
            return /* @__PURE__ */ jsx16(Link2, { href: matchDataCondition(urlRedirect, category), children: /* @__PURE__ */ jsxs5(
              Button5,
              {
                variant: "outline",
                size: "lg",
                h: "120px",
                w: "100%",
                flexDirection: "column",
                gap: 3,
                bg: isSelected ? redColor : "white",
                borderColor: isSelected ? redColor : "gray.200",
                color: isSelected ? "white" : "gray.800",
                _hover: {
                  bg: isSelected ? redColor : "gray.50",
                  borderColor: isSelected ? redColor : "gray.300"
                },
                onClick: () => onClickCategory(category),
                transition: "all 0.2s",
                children: [
                  /* @__PURE__ */ jsx16(
                    Icon,
                    {
                      as: IconComponent,
                      boxSize: 6,
                      color: isSelected ? "white" : "gray.800"
                    }
                  ),
                  /* @__PURE__ */ jsx16(Text5, { fontSize: "sm", fontWeight: "medium", children: categoryName })
                ]
              },
              categoryId
            ) });
          })
        }
      )
    ] })
  ] }) });
};
var CategoryGridInternal = {
  label: "Categories",
  fields: {
    title: {
      type: "text",
      label: "Title"
    },
    subtitle: {
      type: "text",
      label: "Subtitle"
    },
    storeId: {
      type: "text",
      label: "Store ID"
    },
    urlRedirect: {
      type: "text",
      label: "Url"
    },
    mobile: {
      type: "number",
      label: "Mobile Columns",
      min: 1,
      max: 4
    },
    tablet: {
      type: "number",
      label: "Tablet Columns",
      min: 2,
      max: 6
    },
    desktop: {
      type: "number",
      label: "Desktop Columns",
      min: 3,
      max: 8
    },
    limit: {
      type: "number",
      label: "Total Categories Limit",
      min: 1,
      max: 20
    }
  },
  defaultProps: {
    title: "Browse By Category",
    subtitle: "Categories",
    storeId: import.meta.env.VITE_ENTITY_ID || "",
    urlRedirect: "",
    mobile: 2,
    tablet: 4,
    desktop: 6,
    limit: 6
  },
  render: (props) => /* @__PURE__ */ jsx16(ErrorBoundary, { fallbackRender: () => /* @__PURE__ */ jsx16("div", { children: "Unable to load categories." }), children: /* @__PURE__ */ jsx16(CategoryGridRender, { ...props }) })
};
var CategoryGrid = withLayout(CategoryGridInternal);

// src/blocks/puck.config.tsx
var PuckConfig = {
  root: root_default,
  categories: {
    layout: {
      components: ["Container", "Grid", "Flex"],
      defaultExpanded: true
    },
    typography: {
      components: ["Heading", "Text"],
      defaultExpanded: false
    },
    interactive: {
      title: "Actions",
      components: ["Button", "Input"],
      defaultExpanded: false
    },
    storefront: {
      title: "Product",
      components: ["Products", "Checkout", "CategoryGrid"],
      defaultExpanded: false
    }
  },
  components: {
    Container,
    Grid,
    Flex,
    // Space,
    Heading,
    Text,
    Input,
    Button,
    Products,
    // Product,
    CategoryGrid,
    Checkout
    // Divider: { fields: {}, render: () => <AntDivider /> },
    // Typography
    // RichText: {
    //   label: "RichText",
    //   fields: { html: { ...InputRichText } },
    //   ...InputRichText,
    //   // render: ({ html }: any) => (
    //   //   <div dangerouslySetInnerHTML={{ __html: html }} />
    //   // ),
    // },
    // Media
    // Image: {
    //   fields: { src: { type: "text" }, alt: { type: "text" } },
    //   render: ({ src, alt }: any) => <AntImage src={src} alt={alt} />,
    // },
    // Video: {
    //   fields: { url: { type: "text" } },
    //   render: ({ url }: any) => (
    //     <iframe
    //       width="560"
    //       height="315"
    //       src={url}
    //       frameBorder="0"
    //       allowFullScreen
    //     />
    //   ),
    // },
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
    // Form: {
    //   fields: { placeholder: { type: "text" } },
    //   render: ({ placeholder }: any) => (
    //     <AntForm layout="inline" onFinish={(v) => console.log(v)}>
    //       <AntForm.Item name="input">
    //         <AntdInput placeholder={placeholder} />
    //       </AntForm.Item>
    //       <AntForm.Item>
    //         <AntdButton htmlType="submit">Gửi</AntdButton>
    //       </AntForm.Item>
    //     </AntForm>
    //   ),
    // },
    // SearchBar: {
    //   fields: {},
    //   render: () => <AntdInput.Search placeholder="Tìm kiếm..." />,
    // },
    // Utility
    // SEO: {
    //   fields: { title: { type: "text" }, description: { type: "text" } },
    //   render: ({
    //     title,
    //     description,
    //   }: {
    //     title?: string;
    //     description?: string;
    //   }) => {
    //     document.title = title || "";
    //     return <meta name="description" content={description} />;
    //   },
    // },
  }
};

// src/query-provider.tsx
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { jsx as jsx17 } from "react/jsx-runtime";
var queryClient = new QueryClient();
var PuckProvider = ({ children }) => {
  return /* @__PURE__ */ jsx17(RecoilRoot, { children: /* @__PURE__ */ jsx17(ChakraProvider, { value: defaultSystem, children: /* @__PURE__ */ jsx17(QueryClientProvider, { client: queryClient, children }) }) });
};
export {
  PuckConfig,
  PuckProvider
};
//# sourceMappingURL=index.mjs.map