"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  PuckConfig: () => PuckConfig,
  PuckProvider: () => PuckProvider
});
module.exports = __toCommonJS(index_exports);

// src/blocks/Grid/index.tsx
var import_react3 = require("@chakra-ui/react");

// src/components/Layout/index.tsx
var import_react = require("react");
var import_react2 = require("@chakra-ui/react");

// src/components/ColorField/index.tsx
var import_puck = require("@measured/puck");
var import_jsx_runtime = require("react/jsx-runtime");
var colorField = {
  type: "custom",
  render: ({
    name,
    onChange,
    value
  }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_puck.FieldLabel, { label: "Background Color", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_jsx_runtime2 = require("react/jsx-runtime");
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
var Layout = (0, import_react.forwardRef)(
  ({ children, className, layout, style }, ref) => {
    const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.Box,
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
    resolveFields: (_, params) => {
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
    render: (props) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_jsx_runtime3 = require("react/jsx-runtime");
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
    const content = items.map((col, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(col.content, { minEmptyHeight: 100 }) }, index));
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_react3.SimpleGrid,
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
var import_react4 = require("@chakra-ui/react");
var import_jsx_runtime4 = require("react/jsx-runtime");
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
      max: 6
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
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_react4.Flex,
      {
        direction: flexOptions.direction,
        justify: flexOptions.justify,
        align: flexOptions.align,
        wrap: flexOptions.wrap ? "wrap" : "nowrap",
        gap: flexOptions.gap,
        children: flexItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_react4.Box,
          {
            flex: item.flexProps.flex,
            width: item.flexProps.width,
            minHeight: "100px",
            ...item.layoutProps,
            bg: item.layoutProps?.bgColor,
            p: item.layoutProps?.p || 2,
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(item.content, { minEmptyHeight: 100 })
          },
          index
        ))
      }
    );
  }
};
var Flex = withLayout(baseFlex);

// src/blocks/Container/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  render: ({ content: Content }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Content, { minEmptyHeight: 100 })
};
var Container = withLayout(baseContainer);

// src/components/Section/index.tsx
var import_react5 = require("react");

// src/components/Section/styles.module.css
var styles_default = {};

// src/utils/get-class-name-factory.ts
var import_classnames = __toESM(require("classnames"));
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
    return config.baseClass + (0, import_classnames.default)({
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
var import_jsx_runtime6 = require("react/jsx-runtime");
var getClassName = get_class_name_factory_default("Section", styles_default);
var Section = (0, import_react5.forwardRef)(
  ({ children, className, maxWidth = "1280px", style = {} }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "div",
      {
        className: `${getClassName()}${className ? ` ${className}` : ""}`,
        style: {
          ...style
        },
        ref,
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: getClassName("inner"), style: { maxWidth }, children })
      }
    );
  }
);

// src/blocks/Heading/styles.module.css
var styles_default2 = {};

// src/blocks/Heading/index.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
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
    layout: {}
  },
  render: ({ align, text, size, level }) => {
    const Tag = level ? `h${level}` : "span";
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Tag,
      {
        className: getClassName2({
          [size]: true
        }),
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: { display: "block", textAlign: align, width: "100%" }, children: text })
      }
    ) });
  }
};
var Heading = withLayout(HeadingInternal);

// src/blocks/Text/index.tsx
var import_lucide_react = require("lucide-react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var TextInner = {
  fields: {
    text: {
      type: "textarea",
      contentEditable: true
    },
    size: {
      type: "select",
      labelIcon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react.ALargeSmall, { size: 16 }),
      options: [
        { label: "S", value: "s" },
        { label: "M", value: "m" }
      ]
    },
    align: {
      type: "radio",
      labelIcon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react.AlignLeft, { size: 16 }),
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
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Section, { maxWidth, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
var import_jsx_runtime9 = require("react/jsx-runtime");
var Root = {
  defaultProps: {},
  render: ({ puck: { renderDropZone: DropZone } }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "div",
      {
        style: { display: "flex", flexDirection: "column", minHeight: "100vh" },
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(DropZone, { zone: "default-zone", style: { flexGrow: 1 } })
      }
    );
  }
};
var root_default = Root;

// src/services/common/variable.state.ts
var import_recoil = require("recoil");
var VariableState = (0, import_recoil.atom)({
  key: "VariableState",
  default: {}
});

// src/blocks/Input/index.tsx
var import_recoil2 = require("recoil");
var import_react6 = require("@chakra-ui/react");
var import_react7 = require("react");
var import_lodash = require("lodash");
var import_jsx_runtime10 = require("react/jsx-runtime");
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
    const [variables, setVariables] = (0, import_recoil2.useRecoilState)(VariableState);
    const value = (0, import_react7.useMemo)(() => {
      return (0, import_lodash.get)("variables", variableName, initialValue);
    }, [variableName, variables, initialValue]);
    (0, import_react7.useEffect)(() => {
      if (variableName) {
        setVariables({ ...variables, [variableName]: value });
      }
    }, [value, variableName]);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      import_react6.Input,
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
var import_jsx_runtime11 = require("react/jsx-runtime");
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
    label: "Button"
  },
  render: ({ href, label, puck }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {});
  }
};

// src/blocks/Product/index.tsx
var import_react_error_boundary = require("react-error-boundary");
var import_react8 = require("react");

// src/client/httpClient.ts
var import_axios = __toESM(require("axios"));
var import_meta = {};
var initHttpClient = () => {
  let URL = "";
  if (typeof process !== "undefined") {
    URL = process?.env?.NEXT_PUBLIC_CUSTOMER_API_URL;
  } else {
    URL = import_meta.env.VITE_CUSTOMER_API_URL;
  }
  const httpClient = import_axios.default.create({
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
var import_react_query = require("@tanstack/react-query");
var useGetProductDetailQuery = (productId, queries, props) => {
  const data = (0, import_react_query.useQuery)({
    ...props,
    queryKey: ["product-detail", productId, queries],
    queryFn: () => getProductDetail(productId, queries)
  });
  return data;
};

// src/hooks/products/useGetProductsQuery.tsx
var import_react_query2 = require("@tanstack/react-query");
var import_meta2 = {};
var useGetProductsQuery = (queries, props) => {
  let storeId = queries?.storeId;
  if (typeof process !== "undefined") {
    storeId = process?.env?.NEXT_PUBLIC_ENTITY_ID;
  } else {
    storeId = import_meta2?.env?.VITE_ENTITY_ID;
  }
  queries = {
    ...queries,
    storeId: queries?.storeId || storeId
  };
  return (0, import_react_query2.useQuery)({
    ...props,
    queryKey: ["products", queries],
    queryFn: () => getProducts(queries)
  });
};

// src/blocks/Product/index.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var ProductRender = ({
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
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, {});
  }
  const defaultModel = product?.models?.find((m) => m.isDefault);
  const [model, setModel] = (0, import_react8.useState)(defaultModel);
  const price = model?.price ?? product.price ?? 0;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, {});
};
var ProductInternal = {
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
  render: (props) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_error_boundary.ErrorBoundary, { fallbackRender: () => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { children: "Unable to load product." }), children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ProductRender, { ...props }) }) })
};
var Product = withLayout(ProductInternal);

// src/blocks/Products/index.tsx
var import_react9 = require("react");
var import_lodash2 = require("lodash");
var import_react10 = require("@chakra-ui/react");
var import_recoil3 = require("recoil");
var import_jsx_runtime13 = require("react/jsx-runtime");
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
  const variables = (0, import_recoil3.useRecoilValue)(VariableState);
  console.log("\u{1F680} ~ ProductsRender ~ variables:", variables);
  const valueOfSearchProductsVariable = (0, import_react9.useMemo)(() => {
    if (!variableName) {
      return null;
    }
    return (0, import_lodash2.get)(variables, variableName);
  }, [variableName, variables]);
  const [debouncedValue, setDebouncedValue] = (0, import_react9.useState)(
    valueOfSearchProductsVariable
  );
  const debouncedSetValue = (0, import_react9.useMemo)(
    () => (0, import_lodash2.debounce)((value) => setDebouncedValue(value), 800),
    []
  );
  const [queries, setQueries] = (0, import_react9.useState)({
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
  (0, import_react9.useEffect)(() => {
    debouncedSetValue(valueOfSearchProductsVariable || "");
    return () => debouncedSetValue.cancel();
  }, [valueOfSearchProductsVariable, debouncedSetValue]);
  (0, import_react9.useEffect)(() => {
    setQueries((prev) => ({
      ...prev,
      search: debouncedValue,
      page: 1
    }));
  }, [debouncedValue]);
  if (!isLoading && !products?.total) {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react10.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react10.Text, { children: noResultsText || "No results found" }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react10.Box, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      import_react10.SimpleGrid,
      {
        columns: {
          base: mobile,
          sm: tablet,
          md: tablet,
          lg: desktop
        },
        gap: 4,
        children: isLoading ? Array.from({ length: limit }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react10.Skeleton, { height: "300px", borderRadius: "md" }, index)) : products?.data?.map((product) => {
          const defaultModel = (0, import_lodash2.get)(
            product,
            "defaultModel",
            (0, import_lodash2.get)(product, "models.0")
          );
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react10.Card.Root, { variant: "outline", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react10.CardBody, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                import_react10.Image,
                {
                  src: product.image || "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg",
                  alt: product.name,
                  borderRadius: "md"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react10.Text, { mt: "2", fontWeight: "bold", children: product.name })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react10.CardFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react10.Text, { fontWeight: "bold", children: [
              "$",
              `${(0, import_lodash2.round)(
                (defaultModel?.price ?? product.price ?? 0) / 100,
                0
              )}`
            ] }) })
          ] }, product.id);
        })
      }
    ),
    (0, import_lodash2.get)(products, "total", 0) > 0 && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      import_react10.Pagination.Root,
      {
        mt: "6",
        count: (0, import_lodash2.get)(products, "total", 0),
        pageSize: queries.limit,
        page: queries.page,
        onPageChange: ({ page }) => setQueries((prev) => ({
          ...prev,
          page
        })),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react10.Pagination.PrevTrigger, {}),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react10.Pagination.NextTrigger, {})
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
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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

// src/blocks/CategoryGrid/index.tsx
var import_react_error_boundary2 = require("react-error-boundary");
var import_jsx_runtime14 = require("react/jsx-runtime");
var CategoryGridRender = ({ limit, depth }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_jsx_runtime14.Fragment, {}) });
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
  render: (props) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_error_boundary2.ErrorBoundary, { fallbackRender: () => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { children: "Unable to load categories." }), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CategoryGridRender, { ...props }) })
};
var CategoryGrid = withLayout(CategoryGridInternal);

// src/blocks/puck.config.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
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
      components: ["Products"],
      defaultExpanded: false
    }
  },
  components: {
    Container,
    Grid,
    Flex,
    Heading,
    Text,
    Input,
    Button,
    Products,
    Product,
    CategoryGrid,
    RichText: {
      fields: { html: { type: "textarea" } },
      render: ({ html }) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { dangerouslySetInnerHTML: { __html: html } })
    },
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
    SEO: {
      fields: { title: { type: "text" }, description: { type: "text" } },
      render: ({
        title,
        description
      }) => {
        document.title = title || "";
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("meta", { name: "description", content: description });
      }
    }
  }
};

// src/query-provider.tsx
var import_react11 = require("@chakra-ui/react");
var import_react_query3 = require("@tanstack/react-query");
var import_recoil4 = require("recoil");
var import_jsx_runtime16 = require("react/jsx-runtime");
var queryClient = new import_react_query3.QueryClient();
var PuckProvider = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_recoil4.RecoilRoot, { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react11.ChakraProvider, { value: import_react11.defaultSystem, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_jsx_runtime16.Fragment, {}) }) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PuckConfig,
  PuckProvider
});
//# sourceMappingURL=index.js.map