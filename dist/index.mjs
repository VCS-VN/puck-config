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
    value,
    label
  }) => {
    console.log("label", label);
    return /* @__PURE__ */ jsx(FieldLabel, { label: label || "Background Color", children: /* @__PURE__ */ jsx(
      "input",
      {
        type: "color",
        name,
        value: value?.startsWith("#") ? value : "#ffffff",
        onChange: (e) => onChange(e.target.value)
      }
    ) });
  }
};

// src/components/Layout/index.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
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
    render: (props) => /* @__PURE__ */ jsxs(
      Layout,
      {
        className: props.className,
        layout: props.layout,
        ref: props.puck?.dragRef,
        style: {
          ...props.style || {},
          position: props.puck?.isEditing ? props.style?.position ?? "relative" : props.style?.position,
          cursor: props.puck?.isEditing ? "grab" : props.style?.cursor,
          outline: props.puck?.isEditing ? "1px dashed rgba(0,0,0,0.15)" : void 0
        },
        children: [
          props.puck?.isEditing ? /* @__PURE__ */ jsx2(
            "div",
            {
              style: {
                position: "absolute",
                top: 4,
                right: 4,
                fontSize: 10,
                background: "rgba(0,0,0,0.5)",
                color: "#fff",
                borderRadius: 4,
                padding: "2px 6px",
                pointerEvents: "none",
                userSelect: "none"
              },
              children: "Drag"
            }
          ) : null,
          componentConfig.render(props)
        ]
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
    size: "m"
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

// src/components/InputRichText/index.tsx
import { FieldLabel as FieldLabel2 } from "@measured/puck";

// src/components/InputRichText/Tinymce.tsx
import { useEffect, useRef, useState } from "react";
import tinymce from "tinymce/tinymce";
import "tinymce/icons/default/index";
import "tinymce/themes/silver";
import "tinymce/models/dom/model";
import "tinymce/skins/ui/oxide/skin.css";
import "tinymce/plugins/advlist";
import "tinymce/plugins/autolink";
import "tinymce/plugins/autoresize";
import "tinymce/plugins/lists";
import "tinymce/plugins/link";
import "tinymce/plugins/image";
import "tinymce/plugins/charmap";
import "tinymce/plugins/preview";
import "tinymce/plugins/anchor";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/code";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/media";
import "tinymce/plugins/table";
import "tinymce/plugins/help";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/pagebreak";
import "tinymce/plugins/visualchars";
import "tinymce/plugins/template";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/emoticons";
import "tinymce/plugins/emoticons/js/emojis";
import "tinymce/plugins/quickbars/plugin";
import "tinymce/plugins/help/js/i18n/keynav/zh_CN";
import "tinymce/plugins/help/js/i18n/keynav/en";
import "tinymce/plugins/help/js/i18n/keynav/de";
import { jsx as jsx8 } from "react/jsx-runtime";
var TinymceRender = ({
  model,
  onModelChange,
  onFocus,
  onBlur,
  disabled,
  config = {},
  outputFormat = "html"
  // locale,
}) => {
  const elementRef = useRef(null);
  const [editor, setEditor] = useState(null);
  const [currentContent, setCurrentContent] = useState(
    model
  );
  const [editorInitialized, setEditorInitialized] = useState(false);
  const initTiny = async () => {
    const {
      onLoaded,
      ...rest
    } = config;
    const tinymceConfig = {
      inline: false,
      skin: false,
      min_height: 500,
      language: "en",
      branding: false,
      plugins: [
        "advlist",
        "autolink",
        "autoresize",
        "link",
        "image",
        "lists",
        "charmap",
        "preview",
        "anchor",
        "pagebreak",
        "searchreplace",
        "wordcount",
        "visualblocks",
        "visualchars",
        "code",
        "fullscreen",
        "insertdatetime",
        "media",
        "nonbreaking",
        "table",
        "emoticons",
        "template",
        "help",
        "quickbars"
      ],
      toolbar: "undo redo | blocks | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media | fontfamily fontsize forecolor backcolor emoticons | print",
      quickbars_selection_toolbar: "bold italic | link h2 h3 blockquote",
      quickbars_insert_toolbar: "quickimage quicktable",
      menu: {
        file: {
          title: "File",
          items: "newdocument restoredraft | preview | print "
        },
        edit: {
          title: "Edit",
          items: "undo redo | cut copy paste | selectall | searchreplace"
        },
        view: {
          title: "View",
          items: "code | visualaid visualchars visualblocks | preview fullscreen"
        },
        insert: {
          title: "Insert",
          items: "image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime"
        },
        format: {
          title: "Format",
          items: "bold italic underline strikethrough superscript subscript codeformat | styles blocks fontsize align | forecolor backcolor | removeformat"
        },
        tools: {
          title: "Tools",
          items: "code wordcount"
        },
        table: {
          title: "Table",
          items: "inserttable | cell row column | tableprops deletetable"
        }
        // help: { title: "Help", items: "help" },
      },
      paste_data_images: true,
      content_style: [
        ".mce-content-body div.mce-resizehandle { background-color: #4099ff; border-color: #4099ff; border-style: solid; border-width: 1px; box-sizing: border-box; height: 10px; position: absolute; width: 10px; z-index: 1298 } .mce-content-body .mce-clonedresizable { cursor: default; opacity: .5; outline: 1px dashed #000; position: absolute; z-index: 10001 }",
        "[data-mce-bogus] video {display:none;}"
      ].join("\n"),
      // ...rest,
      target: elementRef.current,
      readOnly: disabled,
      promotion: false,
      setup: (editorInstance) => {
        setEditor(editorInstance);
        editorInstance.on("init", (e) => {
          setEditorInitialized(true);
          initEditor(editorInstance);
        });
      }
    };
    tinymce.init(tinymceConfig);
  };
  const initEditor = (editorInstance) => {
    editorInstance.setContent(currentContent || "");
    if (onModelChange) {
      editorInstance.on("change keyup setcontent", () => {
        const newContent = editorInstance.getContent({ format: outputFormat });
        if (newContent !== currentContent) {
          setCurrentContent(newContent);
          onModelChange(newContent);
        }
      });
    }
    if (onFocus) {
      editorInstance.on("focus", onFocus);
    }
    if (onBlur) {
      editorInstance.on("blur", (e) => {
        onBlur(e, editorInstance.getContent({ format: outputFormat }));
      });
    }
  };
  useEffect(() => {
    initTiny();
    return () => {
      if (editor) {
        tinymce.remove(editor);
      }
    };
  }, []);
  useEffect(() => {
    if (editorInitialized && model !== currentContent) {
      editor?.setContent(model || "");
      setCurrentContent(model);
    }
  }, [model, editorInitialized]);
  return /* @__PURE__ */ jsx8("textarea", { ref: elementRef });
};
var Tinymce_default = TinymceRender;

// src/components/InputRichText/index.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var InputRichText = {
  type: "custom",
  render: ({
    name,
    onChange,
    value,
    label
  }) => {
    return /* @__PURE__ */ jsx9(FieldLabel2, { label: label || "Content", children: /* @__PURE__ */ jsx9(
      Tinymce_default,
      {
        name,
        model: value || "",
        onBlur: (_3, editor) => {
          onChange(editor);
        }
      }
    ) });
  }
};

// src/blocks/Text/index.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var TextInner = {
  fields: {
    text: {
      label: "Content",
      ...InputRichText
    },
    maxWidth: { type: "text" },
    href: {
      label: "Link",
      type: "text"
    }
  },
  defaultProps: {
    text: "Text",
    href: ""
  },
  render: ({ text, maxWidth, href }) => {
    return /* @__PURE__ */ jsx10(Section, { maxWidth, children: /* @__PURE__ */ jsx10("a", { href, children: /* @__PURE__ */ jsx10("article", { className: "prose max-w-none lg:prose-xl", children: /* @__PURE__ */ jsx10("div", { dangerouslySetInnerHTML: { __html: text } }) }) }) });
  }
};
var Text = withLayout(TextInner);

// src/blocks/root.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var Root = {
  defaultProps: {},
  render: ({ puck: { renderDropZone: DropZone } }) => {
    return /* @__PURE__ */ jsx11(
      "div",
      {
        style: { display: "flex", flexDirection: "column", minHeight: "100vh" },
        children: /* @__PURE__ */ jsx11(DropZone, { zone: "default-zone", style: { flexGrow: 1 } })
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
import { Input as ChakraInput, InputGroup } from "@chakra-ui/react";
import { useEffect as useEffect2, useMemo } from "react";
import { get } from "lodash";
import { ALargeSmall } from "lucide-react";

// src/components/Icon/index.tsx
import { FieldLabel as FieldLabel3 } from "@measured/puck";

// src/components/Icon/SelectIcon.tsx
import {
  Combobox,
  HStack,
  Portal,
  Span,
  Stack,
  useComboboxContext,
  useFilter,
  useListCollection
} from "@chakra-ui/react";

// src/components/Icon/IconConstant.tsx
import { Fragment, jsx as jsx12 } from "react/jsx-runtime";
var renderIcon = (dataIcon) => {
  if (dataIcon?.iconName) {
    return /* @__PURE__ */ jsx12(
      "i",
      {
        className: dataIcon?.iconName,
        style: {
          fontSize: `${dataIcon?.mf_font_size}`,
          color: `${dataIcon?.mf_color}`
        }
      }
    );
  }
  return /* @__PURE__ */ jsx12(Fragment, {});
};
var listIcon = [
  {
    "value": "bi bi-0-circle",
    "label": "0-circle"
  },
  {
    "value": "bi bi-0-circle-fill",
    "label": "0-circle-fill"
  },
  {
    "value": "bi bi-0-square",
    "label": "0-square"
  },
  {
    "value": "bi bi-0-square-fill",
    "label": "0-square-fill"
  },
  {
    "value": "bi bi-1-circle",
    "label": "1-circle"
  },
  {
    "value": "bi bi-1-circle-fill",
    "label": "1-circle-fill"
  },
  {
    "value": "bi bi-1-square",
    "label": "1-square"
  },
  {
    "value": "bi bi-1-square-fill",
    "label": "1-square-fill"
  },
  {
    "value": "bi bi-123",
    "label": "123"
  },
  {
    "value": "bi bi-2-circle",
    "label": "2-circle"
  },
  {
    "value": "bi bi-2-circle-fill",
    "label": "2-circle-fill"
  },
  {
    "value": "bi bi-2-square",
    "label": "2-square"
  },
  {
    "value": "bi bi-2-square-fill",
    "label": "2-square-fill"
  },
  {
    "value": "bi bi-3-circle",
    "label": "3-circle"
  },
  {
    "value": "bi bi-3-circle-fill",
    "label": "3-circle-fill"
  },
  {
    "value": "bi bi-3-square",
    "label": "3-square"
  },
  {
    "value": "bi bi-3-square-fill",
    "label": "3-square-fill"
  },
  {
    "value": "bi bi-4-circle",
    "label": "4-circle"
  },
  {
    "value": "bi bi-4-circle-fill",
    "label": "4-circle-fill"
  },
  {
    "value": "bi bi-4-square",
    "label": "4-square"
  },
  {
    "value": "bi bi-4-square-fill",
    "label": "4-square-fill"
  },
  {
    "value": "bi bi-5-circle",
    "label": "5-circle"
  },
  {
    "value": "bi bi-5-circle-fill",
    "label": "5-circle-fill"
  },
  {
    "value": "bi bi-5-square",
    "label": "5-square"
  },
  {
    "value": "bi bi-5-square-fill",
    "label": "5-square-fill"
  },
  {
    "value": "bi bi-6-circle",
    "label": "6-circle"
  },
  {
    "value": "bi bi-6-circle-fill",
    "label": "6-circle-fill"
  },
  {
    "value": "bi bi-6-square",
    "label": "6-square"
  },
  {
    "value": "bi bi-6-square-fill",
    "label": "6-square-fill"
  },
  {
    "value": "bi bi-7-circle",
    "label": "7-circle"
  },
  {
    "value": "bi bi-7-circle-fill",
    "label": "7-circle-fill"
  },
  {
    "value": "bi bi-7-square",
    "label": "7-square"
  },
  {
    "value": "bi bi-7-square-fill",
    "label": "7-square-fill"
  },
  {
    "value": "bi bi-8-circle",
    "label": "8-circle"
  },
  {
    "value": "bi bi-8-circle-fill",
    "label": "8-circle-fill"
  },
  {
    "value": "bi bi-8-square",
    "label": "8-square"
  },
  {
    "value": "bi bi-8-square-fill",
    "label": "8-square-fill"
  },
  {
    "value": "bi bi-9-circle",
    "label": "9-circle"
  },
  {
    "value": "bi bi-9-circle-fill",
    "label": "9-circle-fill"
  },
  {
    "value": "bi bi-9-square",
    "label": "9-square"
  },
  {
    "value": "bi bi-9-square-fill",
    "label": "9-square-fill"
  },
  {
    "value": "bi bi-activity",
    "label": "activity"
  },
  {
    "value": "bi bi-airplane",
    "label": "airplane"
  },
  {
    "value": "bi bi-airplane-engines",
    "label": "airplane-engines"
  },
  {
    "value": "bi bi-airplane-engines-fill",
    "label": "airplane-engines-fill"
  },
  {
    "value": "bi bi-airplane-fill",
    "label": "airplane-fill"
  },
  {
    "value": "bi bi-alarm",
    "label": "alarm"
  },
  {
    "value": "bi bi-alarm-fill",
    "label": "alarm-fill"
  },
  {
    "value": "bi bi-alexa",
    "label": "alexa"
  },
  {
    "value": "bi bi-align-bottom",
    "label": "align-bottom"
  },
  {
    "value": "bi bi-align-center",
    "label": "align-center"
  },
  {
    "value": "bi bi-align-end",
    "label": "align-end"
  },
  {
    "value": "bi bi-align-middle",
    "label": "align-middle"
  },
  {
    "value": "bi bi-align-start",
    "label": "align-start"
  },
  {
    "value": "bi bi-align-top",
    "label": "align-top"
  },
  {
    "value": "bi bi-alipay",
    "label": "alipay"
  },
  {
    "value": "bi bi-alphabet",
    "label": "alphabet"
  },
  {
    "value": "bi bi-alphabet-uppercase",
    "label": "alphabet-uppercase"
  },
  {
    "value": "bi bi-alt",
    "label": "alt"
  },
  {
    "value": "bi bi-amazon",
    "label": "amazon"
  },
  {
    "value": "bi bi-amd",
    "label": "amd"
  },
  {
    "value": "bi bi-android",
    "label": "android"
  },
  {
    "value": "bi bi-android2",
    "label": "android2"
  },
  {
    "value": "bi bi-app",
    "label": "app"
  },
  {
    "value": "bi bi-app-indicator",
    "label": "app-indicator"
  },
  {
    "value": "bi bi-apple",
    "label": "apple"
  },
  {
    "value": "bi bi-archive",
    "label": "archive"
  },
  {
    "value": "bi bi-archive-fill",
    "label": "archive-fill"
  },
  {
    "value": "bi bi-arrow-90deg-down",
    "label": "arrow-90deg-down"
  },
  {
    "value": "bi bi-arrow-90deg-left",
    "label": "arrow-90deg-left"
  },
  {
    "value": "bi bi-arrow-90deg-right",
    "label": "arrow-90deg-right"
  },
  {
    "value": "bi bi-arrow-90deg-up",
    "label": "arrow-90deg-up"
  },
  {
    "value": "bi bi-arrow-bar-down",
    "label": "arrow-bar-down"
  },
  {
    "value": "bi bi-arrow-bar-left",
    "label": "arrow-bar-left"
  },
  {
    "value": "bi bi-arrow-bar-right",
    "label": "arrow-bar-right"
  },
  {
    "value": "bi bi-arrow-bar-up",
    "label": "arrow-bar-up"
  },
  {
    "value": "bi bi-arrow-clockwise",
    "label": "arrow-clockwise"
  },
  {
    "value": "bi bi-arrow-counterclockwise",
    "label": "arrow-counterclockwise"
  },
  {
    "value": "bi bi-arrow-down",
    "label": "arrow-down"
  },
  {
    "value": "bi bi-arrow-down-circle",
    "label": "arrow-down-circle"
  },
  {
    "value": "bi bi-arrow-down-circle-fill",
    "label": "arrow-down-circle-fill"
  },
  {
    "value": "bi bi-arrow-down-left-circle",
    "label": "arrow-down-left-circle"
  },
  {
    "value": "bi bi-arrow-down-left-circle-fill",
    "label": "arrow-down-left-circle-fill"
  },
  {
    "value": "bi bi-arrow-down-left-square",
    "label": "arrow-down-left-square"
  },
  {
    "value": "bi bi-arrow-down-left-square-fill",
    "label": "arrow-down-left-square-fill"
  },
  {
    "value": "bi bi-arrow-down-right-circle",
    "label": "arrow-down-right-circle"
  },
  {
    "value": "bi bi-arrow-down-right-circle-fill",
    "label": "arrow-down-right-circle-fill"
  },
  {
    "value": "bi bi-arrow-down-right-square",
    "label": "arrow-down-right-square"
  },
  {
    "value": "bi bi-arrow-down-right-square-fill",
    "label": "arrow-down-right-square-fill"
  },
  {
    "value": "bi bi-arrow-down-square",
    "label": "arrow-down-square"
  },
  {
    "value": "bi bi-arrow-down-square-fill",
    "label": "arrow-down-square-fill"
  },
  {
    "value": "bi bi-arrow-down-left",
    "label": "arrow-down-left"
  },
  {
    "value": "bi bi-arrow-down-right",
    "label": "arrow-down-right"
  },
  {
    "value": "bi bi-arrow-down-short",
    "label": "arrow-down-short"
  },
  {
    "value": "bi bi-arrow-down-up",
    "label": "arrow-down-up"
  },
  {
    "value": "bi bi-arrow-left",
    "label": "arrow-left"
  },
  {
    "value": "bi bi-arrow-left-circle",
    "label": "arrow-left-circle"
  },
  {
    "value": "bi bi-arrow-left-circle-fill",
    "label": "arrow-left-circle-fill"
  },
  {
    "value": "bi bi-arrow-left-square",
    "label": "arrow-left-square"
  },
  {
    "value": "bi bi-arrow-left-square-fill",
    "label": "arrow-left-square-fill"
  },
  {
    "value": "bi bi-arrow-left-right",
    "label": "arrow-left-right"
  },
  {
    "value": "bi bi-arrow-left-short",
    "label": "arrow-left-short"
  },
  {
    "value": "bi bi-arrow-repeat",
    "label": "arrow-repeat"
  },
  {
    "value": "bi bi-arrow-return-left",
    "label": "arrow-return-left"
  },
  {
    "value": "bi bi-arrow-return-right",
    "label": "arrow-return-right"
  },
  {
    "value": "bi bi-arrow-right",
    "label": "arrow-right"
  },
  {
    "value": "bi bi-arrow-right-circle",
    "label": "arrow-right-circle"
  },
  {
    "value": "bi bi-arrow-right-circle-fill",
    "label": "arrow-right-circle-fill"
  },
  {
    "value": "bi bi-arrow-right-square",
    "label": "arrow-right-square"
  },
  {
    "value": "bi bi-arrow-right-square-fill",
    "label": "arrow-right-square-fill"
  },
  {
    "value": "bi bi-arrow-right-short",
    "label": "arrow-right-short"
  },
  {
    "value": "bi bi-arrow-through-heart",
    "label": "arrow-through-heart"
  },
  {
    "value": "bi bi-arrow-through-heart-fill",
    "label": "arrow-through-heart-fill"
  },
  {
    "value": "bi bi-arrow-up",
    "label": "arrow-up"
  },
  {
    "value": "bi bi-arrow-up-circle",
    "label": "arrow-up-circle"
  },
  {
    "value": "bi bi-arrow-up-circle-fill",
    "label": "arrow-up-circle-fill"
  },
  {
    "value": "bi bi-arrow-up-left-circle",
    "label": "arrow-up-left-circle"
  },
  {
    "value": "bi bi-arrow-up-left-circle-fill",
    "label": "arrow-up-left-circle-fill"
  },
  {
    "value": "bi bi-arrow-up-left-square",
    "label": "arrow-up-left-square"
  },
  {
    "value": "bi bi-arrow-up-left-square-fill",
    "label": "arrow-up-left-square-fill"
  },
  {
    "value": "bi bi-arrow-up-right-circle",
    "label": "arrow-up-right-circle"
  },
  {
    "value": "bi bi-arrow-up-right-circle-fill",
    "label": "arrow-up-right-circle-fill"
  },
  {
    "value": "bi bi-arrow-up-right-square",
    "label": "arrow-up-right-square"
  },
  {
    "value": "bi bi-arrow-up-right-square-fill",
    "label": "arrow-up-right-square-fill"
  },
  {
    "value": "bi bi-arrow-up-square",
    "label": "arrow-up-square"
  },
  {
    "value": "bi bi-arrow-up-square-fill",
    "label": "arrow-up-square-fill"
  },
  {
    "value": "bi bi-arrow-up-left",
    "label": "arrow-up-left"
  },
  {
    "value": "bi bi-arrow-up-right",
    "label": "arrow-up-right"
  },
  {
    "value": "bi bi-arrow-up-short",
    "label": "arrow-up-short"
  },
  {
    "value": "bi bi-arrows",
    "label": "arrows"
  },
  {
    "value": "bi bi-arrows-angle-contract",
    "label": "arrows-angle-contract"
  },
  {
    "value": "bi bi-arrows-angle-expand",
    "label": "arrows-angle-expand"
  },
  {
    "value": "bi bi-arrows-collapse",
    "label": "arrows-collapse"
  },
  {
    "value": "bi bi-arrows-collapse-vertical",
    "label": "arrows-collapse-vertical"
  },
  {
    "value": "bi bi-arrows-expand",
    "label": "arrows-expand"
  },
  {
    "value": "bi bi-arrows-expand-vertical",
    "label": "arrows-expand-vertical"
  },
  {
    "value": "bi bi-arrows-fullscreen",
    "label": "arrows-fullscreen"
  },
  {
    "value": "bi bi-arrows-move",
    "label": "arrows-move"
  },
  {
    "value": "bi bi-arrows-vertical",
    "label": "arrows-vertical"
  },
  {
    "value": "bi bi-aspect-ratio",
    "label": "aspect-ratio"
  },
  {
    "value": "bi bi-aspect-ratio-fill",
    "label": "aspect-ratio-fill"
  },
  {
    "value": "bi bi-asterisk",
    "label": "asterisk"
  },
  {
    "value": "bi bi-at",
    "label": "at"
  },
  {
    "value": "bi bi-award",
    "label": "award"
  },
  {
    "value": "bi bi-award-fill",
    "label": "award-fill"
  },
  {
    "value": "bi bi-back",
    "label": "back"
  },
  {
    "value": "bi bi-backpack",
    "label": "backpack"
  },
  {
    "value": "bi bi-backpack-fill",
    "label": "backpack-fill"
  },
  {
    "value": "bi bi-backpack2",
    "label": "backpack2"
  },
  {
    "value": "bi bi-backpack2-fill",
    "label": "backpack2-fill"
  },
  {
    "value": "bi bi-backpack3",
    "label": "backpack3"
  },
  {
    "value": "bi bi-backpack3-fill",
    "label": "backpack3-fill"
  },
  {
    "value": "bi bi-backpack4",
    "label": "backpack4"
  },
  {
    "value": "bi bi-backpack4-fill",
    "label": "backpack4-fill"
  },
  {
    "value": "bi bi-backspace",
    "label": "backspace"
  },
  {
    "value": "bi bi-backspace-fill",
    "label": "backspace-fill"
  },
  {
    "value": "bi bi-backspace-reverse",
    "label": "backspace-reverse"
  },
  {
    "value": "bi bi-backspace-reverse-fill",
    "label": "backspace-reverse-fill"
  },
  {
    "value": "bi bi-badge-3d",
    "label": "badge-3d"
  },
  {
    "value": "bi bi-badge-3d-fill",
    "label": "badge-3d-fill"
  },
  {
    "value": "bi bi-badge-4k",
    "label": "badge-4k"
  },
  {
    "value": "bi bi-badge-4k-fill",
    "label": "badge-4k-fill"
  },
  {
    "value": "bi bi-badge-8k",
    "label": "badge-8k"
  },
  {
    "value": "bi bi-badge-8k-fill",
    "label": "badge-8k-fill"
  },
  {
    "value": "bi bi-badge-ad",
    "label": "badge-ad"
  },
  {
    "value": "bi bi-badge-ad-fill",
    "label": "badge-ad-fill"
  },
  {
    "value": "bi bi-badge-ar",
    "label": "badge-ar"
  },
  {
    "value": "bi bi-badge-ar-fill",
    "label": "badge-ar-fill"
  },
  {
    "value": "bi bi-badge-cc",
    "label": "badge-cc"
  },
  {
    "value": "bi bi-badge-cc-fill",
    "label": "badge-cc-fill"
  },
  {
    "value": "bi bi-badge-hd",
    "label": "badge-hd"
  },
  {
    "value": "bi bi-badge-hd-fill",
    "label": "badge-hd-fill"
  },
  {
    "value": "bi bi-badge-sd",
    "label": "badge-sd"
  },
  {
    "value": "bi bi-badge-sd-fill",
    "label": "badge-sd-fill"
  },
  {
    "value": "bi bi-badge-tm",
    "label": "badge-tm"
  },
  {
    "value": "bi bi-badge-tm-fill",
    "label": "badge-tm-fill"
  },
  {
    "value": "bi bi-badge-vo",
    "label": "badge-vo"
  },
  {
    "value": "bi bi-badge-vo-fill",
    "label": "badge-vo-fill"
  },
  {
    "value": "bi bi-badge-vr",
    "label": "badge-vr"
  },
  {
    "value": "bi bi-badge-vr-fill",
    "label": "badge-vr-fill"
  },
  {
    "value": "bi bi-badge-wc",
    "label": "badge-wc"
  },
  {
    "value": "bi bi-badge-wc-fill",
    "label": "badge-wc-fill"
  },
  {
    "value": "bi bi-bag",
    "label": "bag"
  },
  {
    "value": "bi bi-bag-check",
    "label": "bag-check"
  },
  {
    "value": "bi bi-bag-check-fill",
    "label": "bag-check-fill"
  },
  {
    "value": "bi bi-bag-dash",
    "label": "bag-dash"
  },
  {
    "value": "bi bi-bag-dash-fill",
    "label": "bag-dash-fill"
  },
  {
    "value": "bi bi-bag-fill",
    "label": "bag-fill"
  },
  {
    "value": "bi bi-bag-heart",
    "label": "bag-heart"
  },
  {
    "value": "bi bi-bag-heart-fill",
    "label": "bag-heart-fill"
  },
  {
    "value": "bi bi-bag-plus",
    "label": "bag-plus"
  },
  {
    "value": "bi bi-bag-plus-fill",
    "label": "bag-plus-fill"
  },
  {
    "value": "bi bi-bag-x",
    "label": "bag-x"
  },
  {
    "value": "bi bi-bag-x-fill",
    "label": "bag-x-fill"
  },
  {
    "value": "bi bi-balloon",
    "label": "balloon"
  },
  {
    "value": "bi bi-balloon-fill",
    "label": "balloon-fill"
  },
  {
    "value": "bi bi-balloon-heart",
    "label": "balloon-heart"
  },
  {
    "value": "bi bi-balloon-heart-fill",
    "label": "balloon-heart-fill"
  },
  {
    "value": "bi bi-ban",
    "label": "ban"
  },
  {
    "value": "bi bi-ban-fill",
    "label": "ban-fill"
  },
  {
    "value": "bi bi-bandaid",
    "label": "bandaid"
  },
  {
    "value": "bi bi-bandaid-fill",
    "label": "bandaid-fill"
  },
  {
    "value": "bi bi-bank",
    "label": "bank"
  },
  {
    "value": "bi bi-bank2",
    "label": "bank2"
  },
  {
    "value": "bi bi-bar-chart",
    "label": "bar-chart"
  },
  {
    "value": "bi bi-bar-chart-fill",
    "label": "bar-chart-fill"
  },
  {
    "value": "bi bi-bar-chart-line",
    "label": "bar-chart-line"
  },
  {
    "value": "bi bi-bar-chart-line-fill",
    "label": "bar-chart-line-fill"
  },
  {
    "value": "bi bi-bar-chart-steps",
    "label": "bar-chart-steps"
  },
  {
    "value": "bi bi-basket",
    "label": "basket"
  },
  {
    "value": "bi bi-basket-fill",
    "label": "basket-fill"
  },
  {
    "value": "bi bi-basket2",
    "label": "basket2"
  },
  {
    "value": "bi bi-basket2-fill",
    "label": "basket2-fill"
  },
  {
    "value": "bi bi-basket3",
    "label": "basket3"
  },
  {
    "value": "bi bi-basket3-fill",
    "label": "basket3-fill"
  },
  {
    "value": "bi bi-battery",
    "label": "battery"
  },
  {
    "value": "bi bi-battery-charging",
    "label": "battery-charging"
  },
  {
    "value": "bi bi-battery-full",
    "label": "battery-full"
  },
  {
    "value": "bi bi-battery-half",
    "label": "battery-half"
  },
  {
    "value": "bi bi-behance",
    "label": "behance"
  },
  {
    "value": "bi bi-bell",
    "label": "bell"
  },
  {
    "value": "bi bi-bell-fill",
    "label": "bell-fill"
  },
  {
    "value": "bi bi-bell-slash",
    "label": "bell-slash"
  },
  {
    "value": "bi bi-bell-slash-fill",
    "label": "bell-slash-fill"
  },
  {
    "value": "bi bi-bezier",
    "label": "bezier"
  },
  {
    "value": "bi bi-bezier2",
    "label": "bezier2"
  },
  {
    "value": "bi bi-bicycle",
    "label": "bicycle"
  },
  {
    "value": "bi bi-bing",
    "label": "bing"
  },
  {
    "value": "bi bi-binoculars",
    "label": "binoculars"
  },
  {
    "value": "bi bi-binoculars-fill",
    "label": "binoculars-fill"
  },
  {
    "value": "bi bi-blockquote-left",
    "label": "blockquote-left"
  },
  {
    "value": "bi bi-blockquote-right",
    "label": "blockquote-right"
  },
  {
    "value": "bi bi-bluetooth",
    "label": "bluetooth"
  },
  {
    "value": "bi bi-body-text",
    "label": "body-text"
  },
  {
    "value": "bi bi-book",
    "label": "book"
  },
  {
    "value": "bi bi-book-fill",
    "label": "book-fill"
  },
  {
    "value": "bi bi-book-half",
    "label": "book-half"
  },
  {
    "value": "bi bi-bookmark",
    "label": "bookmark"
  },
  {
    "value": "bi bi-bookmark-check",
    "label": "bookmark-check"
  },
  {
    "value": "bi bi-bookmark-check-fill",
    "label": "bookmark-check-fill"
  },
  {
    "value": "bi bi-bookmark-dash",
    "label": "bookmark-dash"
  },
  {
    "value": "bi bi-bookmark-dash-fill",
    "label": "bookmark-dash-fill"
  },
  {
    "value": "bi bi-bookmark-fill",
    "label": "bookmark-fill"
  },
  {
    "value": "bi bi-bookmark-heart",
    "label": "bookmark-heart"
  },
  {
    "value": "bi bi-bookmark-heart-fill",
    "label": "bookmark-heart-fill"
  },
  {
    "value": "bi bi-bookmark-plus",
    "label": "bookmark-plus"
  },
  {
    "value": "bi bi-bookmark-plus-fill",
    "label": "bookmark-plus-fill"
  },
  {
    "value": "bi bi-bookmark-star",
    "label": "bookmark-star"
  },
  {
    "value": "bi bi-bookmark-star-fill",
    "label": "bookmark-star-fill"
  },
  {
    "value": "bi bi-bookmark-x",
    "label": "bookmark-x"
  },
  {
    "value": "bi bi-bookmark-x-fill",
    "label": "bookmark-x-fill"
  },
  {
    "value": "bi bi-bookmarks",
    "label": "bookmarks"
  },
  {
    "value": "bi bi-bookmarks-fill",
    "label": "bookmarks-fill"
  },
  {
    "value": "bi bi-bookshelf",
    "label": "bookshelf"
  },
  {
    "value": "bi bi-boombox",
    "label": "boombox"
  },
  {
    "value": "bi bi-boombox-fill",
    "label": "boombox-fill"
  },
  {
    "value": "bi bi-bootstrap",
    "label": "bootstrap"
  },
  {
    "value": "bi bi-bootstrap-fill",
    "label": "bootstrap-fill"
  },
  {
    "value": "bi bi-bootstrap-reboot",
    "label": "bootstrap-reboot"
  },
  {
    "value": "bi bi-border",
    "label": "border"
  },
  {
    "value": "bi bi-border-all",
    "label": "border-all"
  },
  {
    "value": "bi bi-border-bottom",
    "label": "border-bottom"
  },
  {
    "value": "bi bi-border-center",
    "label": "border-center"
  },
  {
    "value": "bi bi-border-inner",
    "label": "border-inner"
  },
  {
    "value": "bi bi-border-left",
    "label": "border-left"
  },
  {
    "value": "bi bi-border-middle",
    "label": "border-middle"
  },
  {
    "value": "bi bi-border-outer",
    "label": "border-outer"
  },
  {
    "value": "bi bi-border-right",
    "label": "border-right"
  },
  {
    "value": "bi bi-border-style",
    "label": "border-style"
  },
  {
    "value": "bi bi-border-top",
    "label": "border-top"
  },
  {
    "value": "bi bi-border-width",
    "label": "border-width"
  },
  {
    "value": "bi bi-bounding-box",
    "label": "bounding-box"
  },
  {
    "value": "bi bi-bounding-box-circles",
    "label": "bounding-box-circles"
  },
  {
    "value": "bi bi-box",
    "label": "box"
  },
  {
    "value": "bi bi-box-arrow-down-left",
    "label": "box-arrow-down-left"
  },
  {
    "value": "bi bi-box-arrow-down-right",
    "label": "box-arrow-down-right"
  },
  {
    "value": "bi bi-box-arrow-down",
    "label": "box-arrow-down"
  },
  {
    "value": "bi bi-box-arrow-in-down",
    "label": "box-arrow-in-down"
  },
  {
    "value": "bi bi-box-arrow-in-down-left",
    "label": "box-arrow-in-down-left"
  },
  {
    "value": "bi bi-box-arrow-in-down-right",
    "label": "box-arrow-in-down-right"
  },
  {
    "value": "bi bi-box-arrow-in-left",
    "label": "box-arrow-in-left"
  },
  {
    "value": "bi bi-box-arrow-in-right",
    "label": "box-arrow-in-right"
  },
  {
    "value": "bi bi-box-arrow-in-up",
    "label": "box-arrow-in-up"
  },
  {
    "value": "bi bi-box-arrow-in-up-left",
    "label": "box-arrow-in-up-left"
  },
  {
    "value": "bi bi-box-arrow-in-up-right",
    "label": "box-arrow-in-up-right"
  },
  {
    "value": "bi bi-box-arrow-left",
    "label": "box-arrow-left"
  },
  {
    "value": "bi bi-box-arrow-right",
    "label": "box-arrow-right"
  },
  {
    "value": "bi bi-box-arrow-up",
    "label": "box-arrow-up"
  },
  {
    "value": "bi bi-box-arrow-up-left",
    "label": "box-arrow-up-left"
  },
  {
    "value": "bi bi-box-arrow-up-right",
    "label": "box-arrow-up-right"
  },
  {
    "value": "bi bi-box-fill",
    "label": "box-fill"
  },
  {
    "value": "bi bi-box-seam",
    "label": "box-seam"
  },
  {
    "value": "bi bi-box-seam-fill",
    "label": "box-seam-fill"
  },
  {
    "value": "bi bi-box2",
    "label": "box2"
  },
  {
    "value": "bi bi-box2-fill",
    "label": "box2-fill"
  },
  {
    "value": "bi bi-box2-heart",
    "label": "box2-heart"
  },
  {
    "value": "bi bi-box2-heart-fill",
    "label": "box2-heart-fill"
  },
  {
    "value": "bi bi-boxes",
    "label": "boxes"
  },
  {
    "value": "bi bi-braces",
    "label": "braces"
  },
  {
    "value": "bi bi-braces-asterisk",
    "label": "braces-asterisk"
  },
  {
    "value": "bi bi-bricks",
    "label": "bricks"
  },
  {
    "value": "bi bi-briefcase",
    "label": "briefcase"
  },
  {
    "value": "bi bi-briefcase-fill",
    "label": "briefcase-fill"
  },
  {
    "value": "bi bi-brightness-alt-high",
    "label": "brightness-alt-high"
  },
  {
    "value": "bi bi-brightness-alt-high-fill",
    "label": "brightness-alt-high-fill"
  },
  {
    "value": "bi bi-brightness-alt-low",
    "label": "brightness-alt-low"
  },
  {
    "value": "bi bi-brightness-alt-low-fill",
    "label": "brightness-alt-low-fill"
  },
  {
    "value": "bi bi-brightness-high",
    "label": "brightness-high"
  },
  {
    "value": "bi bi-brightness-high-fill",
    "label": "brightness-high-fill"
  },
  {
    "value": "bi bi-brightness-low",
    "label": "brightness-low"
  },
  {
    "value": "bi bi-brightness-low-fill",
    "label": "brightness-low-fill"
  },
  {
    "value": "bi bi-brilliance",
    "label": "brilliance"
  },
  {
    "value": "bi bi-broadcast",
    "label": "broadcast"
  },
  {
    "value": "bi bi-broadcast-pin",
    "label": "broadcast-pin"
  },
  {
    "value": "bi bi-browser-chrome",
    "label": "browser-chrome"
  },
  {
    "value": "bi bi-browser-edge",
    "label": "browser-edge"
  },
  {
    "value": "bi bi-browser-firefox",
    "label": "browser-firefox"
  },
  {
    "value": "bi bi-browser-safari",
    "label": "browser-safari"
  },
  {
    "value": "bi bi-brush",
    "label": "brush"
  },
  {
    "value": "bi bi-brush-fill",
    "label": "brush-fill"
  },
  {
    "value": "bi bi-bucket",
    "label": "bucket"
  },
  {
    "value": "bi bi-bucket-fill",
    "label": "bucket-fill"
  },
  {
    "value": "bi bi-bug",
    "label": "bug"
  },
  {
    "value": "bi bi-bug-fill",
    "label": "bug-fill"
  },
  {
    "value": "bi bi-building",
    "label": "building"
  },
  {
    "value": "bi bi-building-add",
    "label": "building-add"
  },
  {
    "value": "bi bi-building-check",
    "label": "building-check"
  },
  {
    "value": "bi bi-building-dash",
    "label": "building-dash"
  },
  {
    "value": "bi bi-building-down",
    "label": "building-down"
  },
  {
    "value": "bi bi-building-exclamation",
    "label": "building-exclamation"
  },
  {
    "value": "bi bi-building-fill",
    "label": "building-fill"
  },
  {
    "value": "bi bi-building-fill-add",
    "label": "building-fill-add"
  },
  {
    "value": "bi bi-building-fill-check",
    "label": "building-fill-check"
  },
  {
    "value": "bi bi-building-fill-dash",
    "label": "building-fill-dash"
  },
  {
    "value": "bi bi-building-fill-down",
    "label": "building-fill-down"
  },
  {
    "value": "bi bi-building-fill-exclamation",
    "label": "building-fill-exclamation"
  },
  {
    "value": "bi bi-building-fill-gear",
    "label": "building-fill-gear"
  },
  {
    "value": "bi bi-building-fill-lock",
    "label": "building-fill-lock"
  },
  {
    "value": "bi bi-building-fill-slash",
    "label": "building-fill-slash"
  },
  {
    "value": "bi bi-building-fill-up",
    "label": "building-fill-up"
  },
  {
    "value": "bi bi-building-fill-x",
    "label": "building-fill-x"
  },
  {
    "value": "bi bi-building-gear",
    "label": "building-gear"
  },
  {
    "value": "bi bi-building-lock",
    "label": "building-lock"
  },
  {
    "value": "bi bi-building-slash",
    "label": "building-slash"
  },
  {
    "value": "bi bi-building-up",
    "label": "building-up"
  },
  {
    "value": "bi bi-building-x",
    "label": "building-x"
  },
  {
    "value": "bi bi-buildings",
    "label": "buildings"
  },
  {
    "value": "bi bi-buildings-fill",
    "label": "buildings-fill"
  },
  {
    "value": "bi bi-bullseye",
    "label": "bullseye"
  },
  {
    "value": "bi bi-bus-front",
    "label": "bus-front"
  },
  {
    "value": "bi bi-bus-front-fill",
    "label": "bus-front-fill"
  },
  {
    "value": "bi bi-c-circle",
    "label": "c-circle"
  },
  {
    "value": "bi bi-c-circle-fill",
    "label": "c-circle-fill"
  },
  {
    "value": "bi bi-c-square",
    "label": "c-square"
  },
  {
    "value": "bi bi-c-square-fill",
    "label": "c-square-fill"
  },
  {
    "value": "bi bi-cake",
    "label": "cake"
  },
  {
    "value": "bi bi-cake-fill",
    "label": "cake-fill"
  },
  {
    "value": "bi bi-cake2",
    "label": "cake2"
  },
  {
    "value": "bi bi-cake2-fill",
    "label": "cake2-fill"
  },
  {
    "value": "bi bi-calculator",
    "label": "calculator"
  },
  {
    "value": "bi bi-calculator-fill",
    "label": "calculator-fill"
  },
  {
    "value": "bi bi-calendar",
    "label": "calendar"
  },
  {
    "value": "bi bi-calendar-check",
    "label": "calendar-check"
  },
  {
    "value": "bi bi-calendar-check-fill",
    "label": "calendar-check-fill"
  },
  {
    "value": "bi bi-calendar-date",
    "label": "calendar-date"
  },
  {
    "value": "bi bi-calendar-date-fill",
    "label": "calendar-date-fill"
  },
  {
    "value": "bi bi-calendar-day",
    "label": "calendar-day"
  },
  {
    "value": "bi bi-calendar-day-fill",
    "label": "calendar-day-fill"
  },
  {
    "value": "bi bi-calendar-event",
    "label": "calendar-event"
  },
  {
    "value": "bi bi-calendar-event-fill",
    "label": "calendar-event-fill"
  },
  {
    "value": "bi bi-calendar-fill",
    "label": "calendar-fill"
  },
  {
    "value": "bi bi-calendar-heart",
    "label": "calendar-heart"
  },
  {
    "value": "bi bi-calendar-heart-fill",
    "label": "calendar-heart-fill"
  },
  {
    "value": "bi bi-calendar-minus",
    "label": "calendar-minus"
  },
  {
    "value": "bi bi-calendar-minus-fill",
    "label": "calendar-minus-fill"
  },
  {
    "value": "bi bi-calendar-month",
    "label": "calendar-month"
  },
  {
    "value": "bi bi-calendar-month-fill",
    "label": "calendar-month-fill"
  },
  {
    "value": "bi bi-calendar-plus",
    "label": "calendar-plus"
  },
  {
    "value": "bi bi-calendar-plus-fill",
    "label": "calendar-plus-fill"
  },
  {
    "value": "bi bi-calendar-range",
    "label": "calendar-range"
  },
  {
    "value": "bi bi-calendar-range-fill",
    "label": "calendar-range-fill"
  },
  {
    "value": "bi bi-calendar-week",
    "label": "calendar-week"
  },
  {
    "value": "bi bi-calendar-week-fill",
    "label": "calendar-week-fill"
  },
  {
    "value": "bi bi-calendar-x",
    "label": "calendar-x"
  },
  {
    "value": "bi bi-calendar-x-fill",
    "label": "calendar-x-fill"
  },
  {
    "value": "bi bi-calendar2",
    "label": "calendar2"
  },
  {
    "value": "bi bi-calendar2-check",
    "label": "calendar2-check"
  },
  {
    "value": "bi bi-calendar2-check-fill",
    "label": "calendar2-check-fill"
  },
  {
    "value": "bi bi-calendar2-date",
    "label": "calendar2-date"
  },
  {
    "value": "bi bi-calendar2-date-fill",
    "label": "calendar2-date-fill"
  },
  {
    "value": "bi bi-calendar2-day",
    "label": "calendar2-day"
  },
  {
    "value": "bi bi-calendar2-day-fill",
    "label": "calendar2-day-fill"
  },
  {
    "value": "bi bi-calendar2-event",
    "label": "calendar2-event"
  },
  {
    "value": "bi bi-calendar2-event-fill",
    "label": "calendar2-event-fill"
  },
  {
    "value": "bi bi-calendar2-fill",
    "label": "calendar2-fill"
  },
  {
    "value": "bi bi-calendar2-heart",
    "label": "calendar2-heart"
  },
  {
    "value": "bi bi-calendar2-heart-fill",
    "label": "calendar2-heart-fill"
  },
  {
    "value": "bi bi-calendar2-minus",
    "label": "calendar2-minus"
  },
  {
    "value": "bi bi-calendar2-minus-fill",
    "label": "calendar2-minus-fill"
  },
  {
    "value": "bi bi-calendar2-month",
    "label": "calendar2-month"
  },
  {
    "value": "bi bi-calendar2-month-fill",
    "label": "calendar2-month-fill"
  },
  {
    "value": "bi bi-calendar2-plus",
    "label": "calendar2-plus"
  },
  {
    "value": "bi bi-calendar2-plus-fill",
    "label": "calendar2-plus-fill"
  },
  {
    "value": "bi bi-calendar2-range",
    "label": "calendar2-range"
  },
  {
    "value": "bi bi-calendar2-range-fill",
    "label": "calendar2-range-fill"
  },
  {
    "value": "bi bi-calendar2-week",
    "label": "calendar2-week"
  },
  {
    "value": "bi bi-calendar2-week-fill",
    "label": "calendar2-week-fill"
  },
  {
    "value": "bi bi-calendar2-x",
    "label": "calendar2-x"
  },
  {
    "value": "bi bi-calendar2-x-fill",
    "label": "calendar2-x-fill"
  },
  {
    "value": "bi bi-calendar3",
    "label": "calendar3"
  },
  {
    "value": "bi bi-calendar3-event",
    "label": "calendar3-event"
  },
  {
    "value": "bi bi-calendar3-event-fill",
    "label": "calendar3-event-fill"
  },
  {
    "value": "bi bi-calendar3-fill",
    "label": "calendar3-fill"
  },
  {
    "value": "bi bi-calendar3-range",
    "label": "calendar3-range"
  },
  {
    "value": "bi bi-calendar3-range-fill",
    "label": "calendar3-range-fill"
  },
  {
    "value": "bi bi-calendar3-week",
    "label": "calendar3-week"
  },
  {
    "value": "bi bi-calendar3-week-fill",
    "label": "calendar3-week-fill"
  },
  {
    "value": "bi bi-calendar4",
    "label": "calendar4"
  },
  {
    "value": "bi bi-calendar4-event",
    "label": "calendar4-event"
  },
  {
    "value": "bi bi-calendar4-range",
    "label": "calendar4-range"
  },
  {
    "value": "bi bi-calendar4-week",
    "label": "calendar4-week"
  },
  {
    "value": "bi bi-camera",
    "label": "camera"
  },
  {
    "value": "bi bi-camera2",
    "label": "camera2"
  },
  {
    "value": "bi bi-camera-fill",
    "label": "camera-fill"
  },
  {
    "value": "bi bi-camera-reels",
    "label": "camera-reels"
  },
  {
    "value": "bi bi-camera-reels-fill",
    "label": "camera-reels-fill"
  },
  {
    "value": "bi bi-camera-video",
    "label": "camera-video"
  },
  {
    "value": "bi bi-camera-video-fill",
    "label": "camera-video-fill"
  },
  {
    "value": "bi bi-camera-video-off",
    "label": "camera-video-off"
  },
  {
    "value": "bi bi-camera-video-off-fill",
    "label": "camera-video-off-fill"
  },
  {
    "value": "bi bi-capslock",
    "label": "capslock"
  },
  {
    "value": "bi bi-capslock-fill",
    "label": "capslock-fill"
  },
  {
    "value": "bi bi-capsule",
    "label": "capsule"
  },
  {
    "value": "bi bi-capsule-pill",
    "label": "capsule-pill"
  },
  {
    "value": "bi bi-car-front",
    "label": "car-front"
  },
  {
    "value": "bi bi-car-front-fill",
    "label": "car-front-fill"
  },
  {
    "value": "bi bi-card-checklist",
    "label": "card-checklist"
  },
  {
    "value": "bi bi-card-heading",
    "label": "card-heading"
  },
  {
    "value": "bi bi-card-image",
    "label": "card-image"
  },
  {
    "value": "bi bi-card-list",
    "label": "card-list"
  },
  {
    "value": "bi bi-card-text",
    "label": "card-text"
  },
  {
    "value": "bi bi-caret-down",
    "label": "caret-down"
  },
  {
    "value": "bi bi-caret-down-fill",
    "label": "caret-down-fill"
  },
  {
    "value": "bi bi-caret-down-square",
    "label": "caret-down-square"
  },
  {
    "value": "bi bi-caret-down-square-fill",
    "label": "caret-down-square-fill"
  },
  {
    "value": "bi bi-caret-left",
    "label": "caret-left"
  },
  {
    "value": "bi bi-caret-left-fill",
    "label": "caret-left-fill"
  },
  {
    "value": "bi bi-caret-left-square",
    "label": "caret-left-square"
  },
  {
    "value": "bi bi-caret-left-square-fill",
    "label": "caret-left-square-fill"
  },
  {
    "value": "bi bi-caret-right",
    "label": "caret-right"
  },
  {
    "value": "bi bi-caret-right-fill",
    "label": "caret-right-fill"
  },
  {
    "value": "bi bi-caret-right-square",
    "label": "caret-right-square"
  },
  {
    "value": "bi bi-caret-right-square-fill",
    "label": "caret-right-square-fill"
  },
  {
    "value": "bi bi-caret-up",
    "label": "caret-up"
  },
  {
    "value": "bi bi-caret-up-fill",
    "label": "caret-up-fill"
  },
  {
    "value": "bi bi-caret-up-square",
    "label": "caret-up-square"
  },
  {
    "value": "bi bi-caret-up-square-fill",
    "label": "caret-up-square-fill"
  },
  {
    "value": "bi bi-cart",
    "label": "cart"
  },
  {
    "value": "bi bi-cart-check",
    "label": "cart-check"
  },
  {
    "value": "bi bi-cart-check-fill",
    "label": "cart-check-fill"
  },
  {
    "value": "bi bi-cart-dash",
    "label": "cart-dash"
  },
  {
    "value": "bi bi-cart-dash-fill",
    "label": "cart-dash-fill"
  },
  {
    "value": "bi bi-cart-fill",
    "label": "cart-fill"
  },
  {
    "value": "bi bi-cart-plus",
    "label": "cart-plus"
  },
  {
    "value": "bi bi-cart-plus-fill",
    "label": "cart-plus-fill"
  },
  {
    "value": "bi bi-cart-x",
    "label": "cart-x"
  },
  {
    "value": "bi bi-cart-x-fill",
    "label": "cart-x-fill"
  },
  {
    "value": "bi bi-cart2",
    "label": "cart2"
  },
  {
    "value": "bi bi-cart3",
    "label": "cart3"
  },
  {
    "value": "bi bi-cart4",
    "label": "cart4"
  },
  {
    "value": "bi bi-cash",
    "label": "cash"
  },
  {
    "value": "bi bi-cash-coin",
    "label": "cash-coin"
  },
  {
    "value": "bi bi-cash-stack",
    "label": "cash-stack"
  },
  {
    "value": "bi bi-cassette",
    "label": "cassette"
  },
  {
    "value": "bi bi-cassette-fill",
    "label": "cassette-fill"
  },
  {
    "value": "bi bi-cast",
    "label": "cast"
  },
  {
    "value": "bi bi-cc-circle",
    "label": "cc-circle"
  },
  {
    "value": "bi bi-cc-circle-fill",
    "label": "cc-circle-fill"
  },
  {
    "value": "bi bi-cc-square",
    "label": "cc-square"
  },
  {
    "value": "bi bi-cc-square-fill",
    "label": "cc-square-fill"
  },
  {
    "value": "bi bi-chat",
    "label": "chat"
  },
  {
    "value": "bi bi-chat-dots",
    "label": "chat-dots"
  },
  {
    "value": "bi bi-chat-dots-fill",
    "label": "chat-dots-fill"
  },
  {
    "value": "bi bi-chat-fill",
    "label": "chat-fill"
  },
  {
    "value": "bi bi-chat-heart",
    "label": "chat-heart"
  },
  {
    "value": "bi bi-chat-heart-fill",
    "label": "chat-heart-fill"
  },
  {
    "value": "bi bi-chat-left",
    "label": "chat-left"
  },
  {
    "value": "bi bi-chat-left-dots",
    "label": "chat-left-dots"
  },
  {
    "value": "bi bi-chat-left-dots-fill",
    "label": "chat-left-dots-fill"
  },
  {
    "value": "bi bi-chat-left-fill",
    "label": "chat-left-fill"
  },
  {
    "value": "bi bi-chat-left-heart",
    "label": "chat-left-heart"
  },
  {
    "value": "bi bi-chat-left-heart-fill",
    "label": "chat-left-heart-fill"
  },
  {
    "value": "bi bi-chat-left-quote",
    "label": "chat-left-quote"
  },
  {
    "value": "bi bi-chat-left-quote-fill",
    "label": "chat-left-quote-fill"
  },
  {
    "value": "bi bi-chat-left-text",
    "label": "chat-left-text"
  },
  {
    "value": "bi bi-chat-left-text-fill",
    "label": "chat-left-text-fill"
  },
  {
    "value": "bi bi-chat-quote",
    "label": "chat-quote"
  },
  {
    "value": "bi bi-chat-quote-fill",
    "label": "chat-quote-fill"
  },
  {
    "value": "bi bi-chat-right",
    "label": "chat-right"
  },
  {
    "value": "bi bi-chat-right-dots",
    "label": "chat-right-dots"
  },
  {
    "value": "bi bi-chat-right-dots-fill",
    "label": "chat-right-dots-fill"
  },
  {
    "value": "bi bi-chat-right-fill",
    "label": "chat-right-fill"
  },
  {
    "value": "bi bi-chat-right-heart",
    "label": "chat-right-heart"
  },
  {
    "value": "bi bi-chat-right-heart-fill",
    "label": "chat-right-heart-fill"
  },
  {
    "value": "bi bi-chat-right-quote",
    "label": "chat-right-quote"
  },
  {
    "value": "bi bi-chat-right-quote-fill",
    "label": "chat-right-quote-fill"
  },
  {
    "value": "bi bi-chat-right-text",
    "label": "chat-right-text"
  },
  {
    "value": "bi bi-chat-right-text-fill",
    "label": "chat-right-text-fill"
  },
  {
    "value": "bi bi-chat-square",
    "label": "chat-square"
  },
  {
    "value": "bi bi-chat-square-dots",
    "label": "chat-square-dots"
  },
  {
    "value": "bi bi-chat-square-dots-fill",
    "label": "chat-square-dots-fill"
  },
  {
    "value": "bi bi-chat-square-fill",
    "label": "chat-square-fill"
  },
  {
    "value": "bi bi-chat-square-heart",
    "label": "chat-square-heart"
  },
  {
    "value": "bi bi-chat-square-heart-fill",
    "label": "chat-square-heart-fill"
  },
  {
    "value": "bi bi-chat-square-quote",
    "label": "chat-square-quote"
  },
  {
    "value": "bi bi-chat-square-quote-fill",
    "label": "chat-square-quote-fill"
  },
  {
    "value": "bi bi-chat-square-text",
    "label": "chat-square-text"
  },
  {
    "value": "bi bi-chat-square-text-fill",
    "label": "chat-square-text-fill"
  },
  {
    "value": "bi bi-chat-text",
    "label": "chat-text"
  },
  {
    "value": "bi bi-chat-text-fill",
    "label": "chat-text-fill"
  },
  {
    "value": "bi bi-check",
    "label": "check"
  },
  {
    "value": "bi bi-check-all",
    "label": "check-all"
  },
  {
    "value": "bi bi-check-circle",
    "label": "check-circle"
  },
  {
    "value": "bi bi-check-circle-fill",
    "label": "check-circle-fill"
  },
  {
    "value": "bi bi-check-lg",
    "label": "check-lg"
  },
  {
    "value": "bi bi-check-square",
    "label": "check-square"
  },
  {
    "value": "bi bi-check-square-fill",
    "label": "check-square-fill"
  },
  {
    "value": "bi bi-check2",
    "label": "check2"
  },
  {
    "value": "bi bi-check2-all",
    "label": "check2-all"
  },
  {
    "value": "bi bi-check2-circle",
    "label": "check2-circle"
  },
  {
    "value": "bi bi-check2-square",
    "label": "check2-square"
  },
  {
    "value": "bi bi-chevron-bar-contract",
    "label": "chevron-bar-contract"
  },
  {
    "value": "bi bi-chevron-bar-down",
    "label": "chevron-bar-down"
  },
  {
    "value": "bi bi-chevron-bar-expand",
    "label": "chevron-bar-expand"
  },
  {
    "value": "bi bi-chevron-bar-left",
    "label": "chevron-bar-left"
  },
  {
    "value": "bi bi-chevron-bar-right",
    "label": "chevron-bar-right"
  },
  {
    "value": "bi bi-chevron-bar-up",
    "label": "chevron-bar-up"
  },
  {
    "value": "bi bi-chevron-compact-down",
    "label": "chevron-compact-down"
  },
  {
    "value": "bi bi-chevron-compact-left",
    "label": "chevron-compact-left"
  },
  {
    "value": "bi bi-chevron-compact-right",
    "label": "chevron-compact-right"
  },
  {
    "value": "bi bi-chevron-compact-up",
    "label": "chevron-compact-up"
  },
  {
    "value": "bi bi-chevron-contract",
    "label": "chevron-contract"
  },
  {
    "value": "bi bi-chevron-double-down",
    "label": "chevron-double-down"
  },
  {
    "value": "bi bi-chevron-double-left",
    "label": "chevron-double-left"
  },
  {
    "value": "bi bi-chevron-double-right",
    "label": "chevron-double-right"
  },
  {
    "value": "bi bi-chevron-double-up",
    "label": "chevron-double-up"
  },
  {
    "value": "bi bi-chevron-down",
    "label": "chevron-down"
  },
  {
    "value": "bi bi-chevron-expand",
    "label": "chevron-expand"
  },
  {
    "value": "bi bi-chevron-left",
    "label": "chevron-left"
  },
  {
    "value": "bi bi-chevron-right",
    "label": "chevron-right"
  },
  {
    "value": "bi bi-chevron-up",
    "label": "chevron-up"
  },
  {
    "value": "bi bi-circle",
    "label": "circle"
  },
  {
    "value": "bi bi-circle-fill",
    "label": "circle-fill"
  },
  {
    "value": "bi bi-circle-half",
    "label": "circle-half"
  },
  {
    "value": "bi bi-slash-circle",
    "label": "slash-circle"
  },
  {
    "value": "bi bi-circle-square",
    "label": "circle-square"
  },
  {
    "value": "bi bi-clipboard",
    "label": "clipboard"
  },
  {
    "value": "bi bi-clipboard-check",
    "label": "clipboard-check"
  },
  {
    "value": "bi bi-clipboard-check-fill",
    "label": "clipboard-check-fill"
  },
  {
    "value": "bi bi-clipboard-data",
    "label": "clipboard-data"
  },
  {
    "value": "bi bi-clipboard-data-fill",
    "label": "clipboard-data-fill"
  },
  {
    "value": "bi bi-clipboard-fill",
    "label": "clipboard-fill"
  },
  {
    "value": "bi bi-clipboard-heart",
    "label": "clipboard-heart"
  },
  {
    "value": "bi bi-clipboard-heart-fill",
    "label": "clipboard-heart-fill"
  },
  {
    "value": "bi bi-clipboard-minus",
    "label": "clipboard-minus"
  },
  {
    "value": "bi bi-clipboard-minus-fill",
    "label": "clipboard-minus-fill"
  },
  {
    "value": "bi bi-clipboard-plus",
    "label": "clipboard-plus"
  },
  {
    "value": "bi bi-clipboard-plus-fill",
    "label": "clipboard-plus-fill"
  },
  {
    "value": "bi bi-clipboard-pulse",
    "label": "clipboard-pulse"
  },
  {
    "value": "bi bi-clipboard-x",
    "label": "clipboard-x"
  },
  {
    "value": "bi bi-clipboard-x-fill",
    "label": "clipboard-x-fill"
  },
  {
    "value": "bi bi-clipboard2",
    "label": "clipboard2"
  },
  {
    "value": "bi bi-clipboard2-check",
    "label": "clipboard2-check"
  },
  {
    "value": "bi bi-clipboard2-check-fill",
    "label": "clipboard2-check-fill"
  },
  {
    "value": "bi bi-clipboard2-data",
    "label": "clipboard2-data"
  },
  {
    "value": "bi bi-clipboard2-data-fill",
    "label": "clipboard2-data-fill"
  },
  {
    "value": "bi bi-clipboard2-fill",
    "label": "clipboard2-fill"
  },
  {
    "value": "bi bi-clipboard2-heart",
    "label": "clipboard2-heart"
  },
  {
    "value": "bi bi-clipboard2-heart-fill",
    "label": "clipboard2-heart-fill"
  },
  {
    "value": "bi bi-clipboard2-minus",
    "label": "clipboard2-minus"
  },
  {
    "value": "bi bi-clipboard2-minus-fill",
    "label": "clipboard2-minus-fill"
  },
  {
    "value": "bi bi-clipboard2-plus",
    "label": "clipboard2-plus"
  },
  {
    "value": "bi bi-clipboard2-plus-fill",
    "label": "clipboard2-plus-fill"
  },
  {
    "value": "bi bi-clipboard2-pulse",
    "label": "clipboard2-pulse"
  },
  {
    "value": "bi bi-clipboard2-pulse-fill",
    "label": "clipboard2-pulse-fill"
  },
  {
    "value": "bi bi-clipboard2-x",
    "label": "clipboard2-x"
  },
  {
    "value": "bi bi-clipboard2-x-fill",
    "label": "clipboard2-x-fill"
  },
  {
    "value": "bi bi-clock",
    "label": "clock"
  },
  {
    "value": "bi bi-clock-fill",
    "label": "clock-fill"
  },
  {
    "value": "bi bi-clock-history",
    "label": "clock-history"
  },
  {
    "value": "bi bi-cloud",
    "label": "cloud"
  },
  {
    "value": "bi bi-cloud-arrow-down",
    "label": "cloud-arrow-down"
  },
  {
    "value": "bi bi-cloud-arrow-down-fill",
    "label": "cloud-arrow-down-fill"
  },
  {
    "value": "bi bi-cloud-arrow-up",
    "label": "cloud-arrow-up"
  },
  {
    "value": "bi bi-cloud-arrow-up-fill",
    "label": "cloud-arrow-up-fill"
  },
  {
    "value": "bi bi-cloud-check",
    "label": "cloud-check"
  },
  {
    "value": "bi bi-cloud-check-fill",
    "label": "cloud-check-fill"
  },
  {
    "value": "bi bi-cloud-download",
    "label": "cloud-download"
  },
  {
    "value": "bi bi-cloud-download-fill",
    "label": "cloud-download-fill"
  },
  {
    "value": "bi bi-cloud-drizzle",
    "label": "cloud-drizzle"
  },
  {
    "value": "bi bi-cloud-drizzle-fill",
    "label": "cloud-drizzle-fill"
  },
  {
    "value": "bi bi-cloud-fill",
    "label": "cloud-fill"
  },
  {
    "value": "bi bi-cloud-fog",
    "label": "cloud-fog"
  },
  {
    "value": "bi bi-cloud-fog-fill",
    "label": "cloud-fog-fill"
  },
  {
    "value": "bi bi-cloud-fog2",
    "label": "cloud-fog2"
  },
  {
    "value": "bi bi-cloud-fog2-fill",
    "label": "cloud-fog2-fill"
  },
  {
    "value": "bi bi-cloud-hail",
    "label": "cloud-hail"
  },
  {
    "value": "bi bi-cloud-hail-fill",
    "label": "cloud-hail-fill"
  },
  {
    "value": "bi bi-cloud-haze",
    "label": "cloud-haze"
  },
  {
    "value": "bi bi-cloud-haze-fill",
    "label": "cloud-haze-fill"
  },
  {
    "value": "bi bi-cloud-haze2",
    "label": "cloud-haze2"
  },
  {
    "value": "bi bi-cloud-haze2-fill",
    "label": "cloud-haze2-fill"
  },
  {
    "value": "bi bi-cloud-lightning",
    "label": "cloud-lightning"
  },
  {
    "value": "bi bi-cloud-lightning-fill",
    "label": "cloud-lightning-fill"
  },
  {
    "value": "bi bi-cloud-lightning-rain",
    "label": "cloud-lightning-rain"
  },
  {
    "value": "bi bi-cloud-lightning-rain-fill",
    "label": "cloud-lightning-rain-fill"
  },
  {
    "value": "bi bi-cloud-minus",
    "label": "cloud-minus"
  },
  {
    "value": "bi bi-cloud-minus-fill",
    "label": "cloud-minus-fill"
  },
  {
    "value": "bi bi-cloud-moon",
    "label": "cloud-moon"
  },
  {
    "value": "bi bi-cloud-moon-fill",
    "label": "cloud-moon-fill"
  },
  {
    "value": "bi bi-cloud-plus",
    "label": "cloud-plus"
  },
  {
    "value": "bi bi-cloud-plus-fill",
    "label": "cloud-plus-fill"
  },
  {
    "value": "bi bi-cloud-rain",
    "label": "cloud-rain"
  },
  {
    "value": "bi bi-cloud-rain-fill",
    "label": "cloud-rain-fill"
  },
  {
    "value": "bi bi-cloud-rain-heavy",
    "label": "cloud-rain-heavy"
  },
  {
    "value": "bi bi-cloud-rain-heavy-fill",
    "label": "cloud-rain-heavy-fill"
  },
  {
    "value": "bi bi-cloud-slash",
    "label": "cloud-slash"
  },
  {
    "value": "bi bi-cloud-slash-fill",
    "label": "cloud-slash-fill"
  },
  {
    "value": "bi bi-cloud-sleet",
    "label": "cloud-sleet"
  },
  {
    "value": "bi bi-cloud-sleet-fill",
    "label": "cloud-sleet-fill"
  },
  {
    "value": "bi bi-cloud-snow",
    "label": "cloud-snow"
  },
  {
    "value": "bi bi-cloud-snow-fill",
    "label": "cloud-snow-fill"
  },
  {
    "value": "bi bi-cloud-sun",
    "label": "cloud-sun"
  },
  {
    "value": "bi bi-cloud-sun-fill",
    "label": "cloud-sun-fill"
  },
  {
    "value": "bi bi-cloud-upload",
    "label": "cloud-upload"
  },
  {
    "value": "bi bi-cloud-upload-fill",
    "label": "cloud-upload-fill"
  },
  {
    "value": "bi bi-clouds",
    "label": "clouds"
  },
  {
    "value": "bi bi-clouds-fill",
    "label": "clouds-fill"
  },
  {
    "value": "bi bi-cloudy",
    "label": "cloudy"
  },
  {
    "value": "bi bi-cloudy-fill",
    "label": "cloudy-fill"
  },
  {
    "value": "bi bi-code",
    "label": "code"
  },
  {
    "value": "bi bi-code-slash",
    "label": "code-slash"
  },
  {
    "value": "bi bi-code-square",
    "label": "code-square"
  },
  {
    "value": "bi bi-coin",
    "label": "coin"
  },
  {
    "value": "bi bi-collection",
    "label": "collection"
  },
  {
    "value": "bi bi-collection-fill",
    "label": "collection-fill"
  },
  {
    "value": "bi bi-collection-play",
    "label": "collection-play"
  },
  {
    "value": "bi bi-collection-play-fill",
    "label": "collection-play-fill"
  },
  {
    "value": "bi bi-columns",
    "label": "columns"
  },
  {
    "value": "bi bi-columns-gap",
    "label": "columns-gap"
  },
  {
    "value": "bi bi-command",
    "label": "command"
  },
  {
    "value": "bi bi-compass",
    "label": "compass"
  },
  {
    "value": "bi bi-compass-fill",
    "label": "compass-fill"
  },
  {
    "value": "bi bi-cone",
    "label": "cone"
  },
  {
    "value": "bi bi-cone-striped",
    "label": "cone-striped"
  },
  {
    "value": "bi bi-controller",
    "label": "controller"
  },
  {
    "value": "bi bi-cookie",
    "label": "cookie"
  },
  {
    "value": "bi bi-copy",
    "label": "copy"
  },
  {
    "value": "bi bi-cpu",
    "label": "cpu"
  },
  {
    "value": "bi bi-cpu-fill",
    "label": "cpu-fill"
  },
  {
    "value": "bi bi-credit-card",
    "label": "credit-card"
  },
  {
    "value": "bi bi-credit-card-2-back",
    "label": "credit-card-2-back"
  },
  {
    "value": "bi bi-credit-card-2-back-fill",
    "label": "credit-card-2-back-fill"
  },
  {
    "value": "bi bi-credit-card-2-front",
    "label": "credit-card-2-front"
  },
  {
    "value": "bi bi-credit-card-2-front-fill",
    "label": "credit-card-2-front-fill"
  },
  {
    "value": "bi bi-credit-card-fill",
    "label": "credit-card-fill"
  },
  {
    "value": "bi bi-crop",
    "label": "crop"
  },
  {
    "value": "bi bi-crosshair",
    "label": "crosshair"
  },
  {
    "value": "bi bi-crosshair2",
    "label": "crosshair2"
  },
  {
    "value": "bi bi-cup",
    "label": "cup"
  },
  {
    "value": "bi bi-cup-fill",
    "label": "cup-fill"
  },
  {
    "value": "bi bi-cup-hot",
    "label": "cup-hot"
  },
  {
    "value": "bi bi-cup-hot-fill",
    "label": "cup-hot-fill"
  },
  {
    "value": "bi bi-cup-straw",
    "label": "cup-straw"
  },
  {
    "value": "bi bi-currency-bitcoin",
    "label": "currency-bitcoin"
  },
  {
    "value": "bi bi-currency-dollar",
    "label": "currency-dollar"
  },
  {
    "value": "bi bi-currency-euro",
    "label": "currency-euro"
  },
  {
    "value": "bi bi-currency-exchange",
    "label": "currency-exchange"
  },
  {
    "value": "bi bi-currency-pound",
    "label": "currency-pound"
  },
  {
    "value": "bi bi-currency-rupee",
    "label": "currency-rupee"
  },
  {
    "value": "bi bi-currency-yen",
    "label": "currency-yen"
  },
  {
    "value": "bi bi-cursor",
    "label": "cursor"
  },
  {
    "value": "bi bi-cursor-fill",
    "label": "cursor-fill"
  },
  {
    "value": "bi bi-cursor-text",
    "label": "cursor-text"
  },
  {
    "value": "bi bi-dash",
    "label": "dash"
  },
  {
    "value": "bi bi-dash-circle",
    "label": "dash-circle"
  },
  {
    "value": "bi bi-dash-circle-dotted",
    "label": "dash-circle-dotted"
  },
  {
    "value": "bi bi-dash-circle-fill",
    "label": "dash-circle-fill"
  },
  {
    "value": "bi bi-dash-lg",
    "label": "dash-lg"
  },
  {
    "value": "bi bi-dash-square",
    "label": "dash-square"
  },
  {
    "value": "bi bi-dash-square-dotted",
    "label": "dash-square-dotted"
  },
  {
    "value": "bi bi-dash-square-fill",
    "label": "dash-square-fill"
  },
  {
    "value": "bi bi-database",
    "label": "database"
  },
  {
    "value": "bi bi-database-add",
    "label": "database-add"
  },
  {
    "value": "bi bi-database-check",
    "label": "database-check"
  },
  {
    "value": "bi bi-database-dash",
    "label": "database-dash"
  },
  {
    "value": "bi bi-database-down",
    "label": "database-down"
  },
  {
    "value": "bi bi-database-exclamation",
    "label": "database-exclamation"
  },
  {
    "value": "bi bi-database-fill",
    "label": "database-fill"
  },
  {
    "value": "bi bi-database-fill-add",
    "label": "database-fill-add"
  },
  {
    "value": "bi bi-database-fill-check",
    "label": "database-fill-check"
  },
  {
    "value": "bi bi-database-fill-dash",
    "label": "database-fill-dash"
  },
  {
    "value": "bi bi-database-fill-down",
    "label": "database-fill-down"
  },
  {
    "value": "bi bi-database-fill-exclamation",
    "label": "database-fill-exclamation"
  },
  {
    "value": "bi bi-database-fill-gear",
    "label": "database-fill-gear"
  },
  {
    "value": "bi bi-database-fill-lock",
    "label": "database-fill-lock"
  },
  {
    "value": "bi bi-database-fill-slash",
    "label": "database-fill-slash"
  },
  {
    "value": "bi bi-database-fill-up",
    "label": "database-fill-up"
  },
  {
    "value": "bi bi-database-fill-x",
    "label": "database-fill-x"
  },
  {
    "value": "bi bi-database-gear",
    "label": "database-gear"
  },
  {
    "value": "bi bi-database-lock",
    "label": "database-lock"
  },
  {
    "value": "bi bi-database-slash",
    "label": "database-slash"
  },
  {
    "value": "bi bi-database-up",
    "label": "database-up"
  },
  {
    "value": "bi bi-database-x",
    "label": "database-x"
  },
  {
    "value": "bi bi-device-hdd",
    "label": "device-hdd"
  },
  {
    "value": "bi bi-device-hdd-fill",
    "label": "device-hdd-fill"
  },
  {
    "value": "bi bi-device-ssd",
    "label": "device-ssd"
  },
  {
    "value": "bi bi-device-ssd-fill",
    "label": "device-ssd-fill"
  },
  {
    "value": "bi bi-diagram-2",
    "label": "diagram-2"
  },
  {
    "value": "bi bi-diagram-2-fill",
    "label": "diagram-2-fill"
  },
  {
    "value": "bi bi-diagram-3",
    "label": "diagram-3"
  },
  {
    "value": "bi bi-diagram-3-fill",
    "label": "diagram-3-fill"
  },
  {
    "value": "bi bi-diamond",
    "label": "diamond"
  },
  {
    "value": "bi bi-diamond-fill",
    "label": "diamond-fill"
  },
  {
    "value": "bi bi-diamond-half",
    "label": "diamond-half"
  },
  {
    "value": "bi bi-dice-1",
    "label": "dice-1"
  },
  {
    "value": "bi bi-dice-1-fill",
    "label": "dice-1-fill"
  },
  {
    "value": "bi bi-dice-2",
    "label": "dice-2"
  },
  {
    "value": "bi bi-dice-2-fill",
    "label": "dice-2-fill"
  },
  {
    "value": "bi bi-dice-3",
    "label": "dice-3"
  },
  {
    "value": "bi bi-dice-3-fill",
    "label": "dice-3-fill"
  },
  {
    "value": "bi bi-dice-4",
    "label": "dice-4"
  },
  {
    "value": "bi bi-dice-4-fill",
    "label": "dice-4-fill"
  },
  {
    "value": "bi bi-dice-5",
    "label": "dice-5"
  },
  {
    "value": "bi bi-dice-5-fill",
    "label": "dice-5-fill"
  },
  {
    "value": "bi bi-dice-6",
    "label": "dice-6"
  },
  {
    "value": "bi bi-dice-6-fill",
    "label": "dice-6-fill"
  },
  {
    "value": "bi bi-disc",
    "label": "disc"
  },
  {
    "value": "bi bi-disc-fill",
    "label": "disc-fill"
  },
  {
    "value": "bi bi-discord",
    "label": "discord"
  },
  {
    "value": "bi bi-display",
    "label": "display"
  },
  {
    "value": "bi bi-display-fill",
    "label": "display-fill"
  },
  {
    "value": "bi bi-displayport",
    "label": "displayport"
  },
  {
    "value": "bi bi-displayport-fill",
    "label": "displayport-fill"
  },
  {
    "value": "bi bi-distribute-horizontal",
    "label": "distribute-horizontal"
  },
  {
    "value": "bi bi-distribute-vertical",
    "label": "distribute-vertical"
  },
  {
    "value": "bi bi-door-closed",
    "label": "door-closed"
  },
  {
    "value": "bi bi-door-closed-fill",
    "label": "door-closed-fill"
  },
  {
    "value": "bi bi-door-open",
    "label": "door-open"
  },
  {
    "value": "bi bi-door-open-fill",
    "label": "door-open-fill"
  },
  {
    "value": "bi bi-dot",
    "label": "dot"
  },
  {
    "value": "bi bi-download",
    "label": "download"
  },
  {
    "value": "bi bi-dpad",
    "label": "dpad"
  },
  {
    "value": "bi bi-dpad-fill",
    "label": "dpad-fill"
  },
  {
    "value": "bi bi-dribbble",
    "label": "dribbble"
  },
  {
    "value": "bi bi-dropbox",
    "label": "dropbox"
  },
  {
    "value": "bi bi-droplet",
    "label": "droplet"
  },
  {
    "value": "bi bi-droplet-fill",
    "label": "droplet-fill"
  },
  {
    "value": "bi bi-droplet-half",
    "label": "droplet-half"
  },
  {
    "value": "bi bi-duffle",
    "label": "duffle"
  },
  {
    "value": "bi bi-duffle-fill",
    "label": "duffle-fill"
  },
  {
    "value": "bi bi-ear",
    "label": "ear"
  },
  {
    "value": "bi bi-ear-fill",
    "label": "ear-fill"
  },
  {
    "value": "bi bi-earbuds",
    "label": "earbuds"
  },
  {
    "value": "bi bi-easel",
    "label": "easel"
  },
  {
    "value": "bi bi-easel-fill",
    "label": "easel-fill"
  },
  {
    "value": "bi bi-easel2",
    "label": "easel2"
  },
  {
    "value": "bi bi-easel2-fill",
    "label": "easel2-fill"
  },
  {
    "value": "bi bi-easel3",
    "label": "easel3"
  },
  {
    "value": "bi bi-easel3-fill",
    "label": "easel3-fill"
  },
  {
    "value": "bi bi-egg",
    "label": "egg"
  },
  {
    "value": "bi bi-egg-fill",
    "label": "egg-fill"
  },
  {
    "value": "bi bi-egg-fried",
    "label": "egg-fried"
  },
  {
    "value": "bi bi-eject",
    "label": "eject"
  },
  {
    "value": "bi bi-eject-fill",
    "label": "eject-fill"
  },
  {
    "value": "bi bi-emoji-angry",
    "label": "emoji-angry"
  },
  {
    "value": "bi bi-emoji-angry-fill",
    "label": "emoji-angry-fill"
  },
  {
    "value": "bi bi-emoji-astonished",
    "label": "emoji-astonished"
  },
  {
    "value": "bi bi-emoji-astonished-fill",
    "label": "emoji-astonished-fill"
  },
  {
    "value": "bi bi-emoji-dizzy",
    "label": "emoji-dizzy"
  },
  {
    "value": "bi bi-emoji-dizzy-fill",
    "label": "emoji-dizzy-fill"
  },
  {
    "value": "bi bi-emoji-expressionless",
    "label": "emoji-expressionless"
  },
  {
    "value": "bi bi-emoji-expressionless-fill",
    "label": "emoji-expressionless-fill"
  },
  {
    "value": "bi bi-emoji-frown",
    "label": "emoji-frown"
  },
  {
    "value": "bi bi-emoji-frown-fill",
    "label": "emoji-frown-fill"
  },
  {
    "value": "bi bi-emoji-grimace",
    "label": "emoji-grimace"
  },
  {
    "value": "bi bi-emoji-grimace-fill",
    "label": "emoji-grimace-fill"
  },
  {
    "value": "bi bi-emoji-grin",
    "label": "emoji-grin"
  },
  {
    "value": "bi bi-emoji-grin-fill",
    "label": "emoji-grin-fill"
  },
  {
    "value": "bi bi-emoji-heart-eyes",
    "label": "emoji-heart-eyes"
  },
  {
    "value": "bi bi-emoji-heart-eyes-fill",
    "label": "emoji-heart-eyes-fill"
  },
  {
    "value": "bi bi-emoji-kiss",
    "label": "emoji-kiss"
  },
  {
    "value": "bi bi-emoji-kiss-fill",
    "label": "emoji-kiss-fill"
  },
  {
    "value": "bi bi-emoji-laughing",
    "label": "emoji-laughing"
  },
  {
    "value": "bi bi-emoji-laughing-fill",
    "label": "emoji-laughing-fill"
  },
  {
    "value": "bi bi-emoji-neutral",
    "label": "emoji-neutral"
  },
  {
    "value": "bi bi-emoji-neutral-fill",
    "label": "emoji-neutral-fill"
  },
  {
    "value": "bi bi-emoji-smile",
    "label": "emoji-smile"
  },
  {
    "value": "bi bi-emoji-smile-fill",
    "label": "emoji-smile-fill"
  },
  {
    "value": "bi bi-emoji-smile-upside-down",
    "label": "emoji-smile-upside-down"
  },
  {
    "value": "bi bi-emoji-smile-upside-down-fill",
    "label": "emoji-smile-upside-down-fill"
  },
  {
    "value": "bi bi-emoji-sunglasses",
    "label": "emoji-sunglasses"
  },
  {
    "value": "bi bi-emoji-sunglasses-fill",
    "label": "emoji-sunglasses-fill"
  },
  {
    "value": "bi bi-emoji-surprise",
    "label": "emoji-surprise"
  },
  {
    "value": "bi bi-emoji-surprise-fill",
    "label": "emoji-surprise-fill"
  },
  {
    "value": "bi bi-emoji-tear",
    "label": "emoji-tear"
  },
  {
    "value": "bi bi-emoji-tear-fill",
    "label": "emoji-tear-fill"
  },
  {
    "value": "bi bi-emoji-wink",
    "label": "emoji-wink"
  },
  {
    "value": "bi bi-emoji-wink-fill",
    "label": "emoji-wink-fill"
  },
  {
    "value": "bi bi-envelope",
    "label": "envelope"
  },
  {
    "value": "bi bi-envelope-arrow-down",
    "label": "envelope-arrow-down"
  },
  {
    "value": "bi bi-envelope-arrow-down-fill",
    "label": "envelope-arrow-down-fill"
  },
  {
    "value": "bi bi-envelope-arrow-up",
    "label": "envelope-arrow-up"
  },
  {
    "value": "bi bi-envelope-arrow-up-fill",
    "label": "envelope-arrow-up-fill"
  },
  {
    "value": "bi bi-envelope-at",
    "label": "envelope-at"
  },
  {
    "value": "bi bi-envelope-at-fill",
    "label": "envelope-at-fill"
  },
  {
    "value": "bi bi-envelope-check",
    "label": "envelope-check"
  },
  {
    "value": "bi bi-envelope-check-fill",
    "label": "envelope-check-fill"
  },
  {
    "value": "bi bi-envelope-dash",
    "label": "envelope-dash"
  },
  {
    "value": "bi bi-envelope-dash-fill",
    "label": "envelope-dash-fill"
  },
  {
    "value": "bi bi-envelope-exclamation",
    "label": "envelope-exclamation"
  },
  {
    "value": "bi bi-envelope-exclamation-fill",
    "label": "envelope-exclamation-fill"
  },
  {
    "value": "bi bi-envelope-fill",
    "label": "envelope-fill"
  },
  {
    "value": "bi bi-envelope-heart",
    "label": "envelope-heart"
  },
  {
    "value": "bi bi-envelope-heart-fill",
    "label": "envelope-heart-fill"
  },
  {
    "value": "bi bi-envelope-open",
    "label": "envelope-open"
  },
  {
    "value": "bi bi-envelope-open-fill",
    "label": "envelope-open-fill"
  },
  {
    "value": "bi bi-envelope-open-heart",
    "label": "envelope-open-heart"
  },
  {
    "value": "bi bi-envelope-open-heart-fill",
    "label": "envelope-open-heart-fill"
  },
  {
    "value": "bi bi-envelope-paper",
    "label": "envelope-paper"
  },
  {
    "value": "bi bi-envelope-paper-fill",
    "label": "envelope-paper-fill"
  },
  {
    "value": "bi bi-envelope-paper-heart",
    "label": "envelope-paper-heart"
  },
  {
    "value": "bi bi-envelope-paper-heart-fill",
    "label": "envelope-paper-heart-fill"
  },
  {
    "value": "bi bi-envelope-plus",
    "label": "envelope-plus"
  },
  {
    "value": "bi bi-envelope-plus-fill",
    "label": "envelope-plus-fill"
  },
  {
    "value": "bi bi-envelope-slash",
    "label": "envelope-slash"
  },
  {
    "value": "bi bi-envelope-slash-fill",
    "label": "envelope-slash-fill"
  },
  {
    "value": "bi bi-envelope-x",
    "label": "envelope-x"
  },
  {
    "value": "bi bi-envelope-x-fill",
    "label": "envelope-x-fill"
  },
  {
    "value": "bi bi-eraser",
    "label": "eraser"
  },
  {
    "value": "bi bi-eraser-fill",
    "label": "eraser-fill"
  },
  {
    "value": "bi bi-escape",
    "label": "escape"
  },
  {
    "value": "bi bi-ethernet",
    "label": "ethernet"
  },
  {
    "value": "bi bi-ev-front",
    "label": "ev-front"
  },
  {
    "value": "bi bi-ev-front-fill",
    "label": "ev-front-fill"
  },
  {
    "value": "bi bi-ev-station",
    "label": "ev-station"
  },
  {
    "value": "bi bi-ev-station-fill",
    "label": "ev-station-fill"
  },
  {
    "value": "bi bi-exclamation",
    "label": "exclamation"
  },
  {
    "value": "bi bi-exclamation-circle",
    "label": "exclamation-circle"
  },
  {
    "value": "bi bi-exclamation-circle-fill",
    "label": "exclamation-circle-fill"
  },
  {
    "value": "bi bi-exclamation-diamond",
    "label": "exclamation-diamond"
  },
  {
    "value": "bi bi-exclamation-diamond-fill",
    "label": "exclamation-diamond-fill"
  },
  {
    "value": "bi bi-exclamation-lg",
    "label": "exclamation-lg"
  },
  {
    "value": "bi bi-exclamation-octagon",
    "label": "exclamation-octagon"
  },
  {
    "value": "bi bi-exclamation-octagon-fill",
    "label": "exclamation-octagon-fill"
  },
  {
    "value": "bi bi-exclamation-square",
    "label": "exclamation-square"
  },
  {
    "value": "bi bi-exclamation-square-fill",
    "label": "exclamation-square-fill"
  },
  {
    "value": "bi bi-exclamation-triangle",
    "label": "exclamation-triangle"
  },
  {
    "value": "bi bi-exclamation-triangle-fill",
    "label": "exclamation-triangle-fill"
  },
  {
    "value": "bi bi-exclude",
    "label": "exclude"
  },
  {
    "value": "bi bi-explicit",
    "label": "explicit"
  },
  {
    "value": "bi bi-explicit-fill",
    "label": "explicit-fill"
  },
  {
    "value": "bi bi-exposure",
    "label": "exposure"
  },
  {
    "value": "bi bi-eye",
    "label": "eye"
  },
  {
    "value": "bi bi-eye-fill",
    "label": "eye-fill"
  },
  {
    "value": "bi bi-eye-slash",
    "label": "eye-slash"
  },
  {
    "value": "bi bi-eye-slash-fill",
    "label": "eye-slash-fill"
  },
  {
    "value": "bi bi-eyedropper",
    "label": "eyedropper"
  },
  {
    "value": "bi bi-eyeglasses",
    "label": "eyeglasses"
  },
  {
    "value": "bi bi-facebook",
    "label": "facebook"
  },
  {
    "value": "bi bi-fan",
    "label": "fan"
  },
  {
    "value": "bi bi-fast-forward",
    "label": "fast-forward"
  },
  {
    "value": "bi bi-fast-forward-btn",
    "label": "fast-forward-btn"
  },
  {
    "value": "bi bi-fast-forward-btn-fill",
    "label": "fast-forward-btn-fill"
  },
  {
    "value": "bi bi-fast-forward-circle",
    "label": "fast-forward-circle"
  },
  {
    "value": "bi bi-fast-forward-circle-fill",
    "label": "fast-forward-circle-fill"
  },
  {
    "value": "bi bi-fast-forward-fill",
    "label": "fast-forward-fill"
  },
  {
    "value": "bi bi-feather",
    "label": "feather"
  },
  {
    "value": "bi bi-feather2",
    "label": "feather2"
  },
  {
    "value": "bi bi-file",
    "label": "file"
  },
  {
    "value": "bi bi-file-arrow-down",
    "label": "file-arrow-down"
  },
  {
    "value": "bi bi-file-arrow-down-fill",
    "label": "file-arrow-down-fill"
  },
  {
    "value": "bi bi-file-arrow-up",
    "label": "file-arrow-up"
  },
  {
    "value": "bi bi-file-arrow-up-fill",
    "label": "file-arrow-up-fill"
  },
  {
    "value": "bi bi-file-bar-graph",
    "label": "file-bar-graph"
  },
  {
    "value": "bi bi-file-bar-graph-fill",
    "label": "file-bar-graph-fill"
  },
  {
    "value": "bi bi-file-binary",
    "label": "file-binary"
  },
  {
    "value": "bi bi-file-binary-fill",
    "label": "file-binary-fill"
  },
  {
    "value": "bi bi-file-break",
    "label": "file-break"
  },
  {
    "value": "bi bi-file-break-fill",
    "label": "file-break-fill"
  },
  {
    "value": "bi bi-file-check",
    "label": "file-check"
  },
  {
    "value": "bi bi-file-check-fill",
    "label": "file-check-fill"
  },
  {
    "value": "bi bi-file-code",
    "label": "file-code"
  },
  {
    "value": "bi bi-file-code-fill",
    "label": "file-code-fill"
  },
  {
    "value": "bi bi-file-diff",
    "label": "file-diff"
  },
  {
    "value": "bi bi-file-diff-fill",
    "label": "file-diff-fill"
  },
  {
    "value": "bi bi-file-earmark",
    "label": "file-earmark"
  },
  {
    "value": "bi bi-file-earmark-arrow-down",
    "label": "file-earmark-arrow-down"
  },
  {
    "value": "bi bi-file-earmark-arrow-down-fill",
    "label": "file-earmark-arrow-down-fill"
  },
  {
    "value": "bi bi-file-earmark-arrow-up",
    "label": "file-earmark-arrow-up"
  },
  {
    "value": "bi bi-file-earmark-arrow-up-fill",
    "label": "file-earmark-arrow-up-fill"
  },
  {
    "value": "bi bi-file-earmark-bar-graph",
    "label": "file-earmark-bar-graph"
  },
  {
    "value": "bi bi-file-earmark-bar-graph-fill",
    "label": "file-earmark-bar-graph-fill"
  },
  {
    "value": "bi bi-file-earmark-binary",
    "label": "file-earmark-binary"
  },
  {
    "value": "bi bi-file-earmark-binary-fill",
    "label": "file-earmark-binary-fill"
  },
  {
    "value": "bi bi-file-earmark-break",
    "label": "file-earmark-break"
  },
  {
    "value": "bi bi-file-earmark-break-fill",
    "label": "file-earmark-break-fill"
  },
  {
    "value": "bi bi-file-earmark-check",
    "label": "file-earmark-check"
  },
  {
    "value": "bi bi-file-earmark-check-fill",
    "label": "file-earmark-check-fill"
  },
  {
    "value": "bi bi-file-earmark-code",
    "label": "file-earmark-code"
  },
  {
    "value": "bi bi-file-earmark-code-fill",
    "label": "file-earmark-code-fill"
  },
  {
    "value": "bi bi-file-earmark-diff",
    "label": "file-earmark-diff"
  },
  {
    "value": "bi bi-file-earmark-diff-fill",
    "label": "file-earmark-diff-fill"
  },
  {
    "value": "bi bi-file-earmark-easel",
    "label": "file-earmark-easel"
  },
  {
    "value": "bi bi-file-earmark-easel-fill",
    "label": "file-earmark-easel-fill"
  },
  {
    "value": "bi bi-file-earmark-excel",
    "label": "file-earmark-excel"
  },
  {
    "value": "bi bi-file-earmark-excel-fill",
    "label": "file-earmark-excel-fill"
  },
  {
    "value": "bi bi-file-earmark-fill",
    "label": "file-earmark-fill"
  },
  {
    "value": "bi bi-file-earmark-font",
    "label": "file-earmark-font"
  },
  {
    "value": "bi bi-file-earmark-font-fill",
    "label": "file-earmark-font-fill"
  },
  {
    "value": "bi bi-file-earmark-image",
    "label": "file-earmark-image"
  },
  {
    "value": "bi bi-file-earmark-image-fill",
    "label": "file-earmark-image-fill"
  },
  {
    "value": "bi bi-file-earmark-lock",
    "label": "file-earmark-lock"
  },
  {
    "value": "bi bi-file-earmark-lock-fill",
    "label": "file-earmark-lock-fill"
  },
  {
    "value": "bi bi-file-earmark-lock2",
    "label": "file-earmark-lock2"
  },
  {
    "value": "bi bi-file-earmark-lock2-fill",
    "label": "file-earmark-lock2-fill"
  },
  {
    "value": "bi bi-file-earmark-medical",
    "label": "file-earmark-medical"
  },
  {
    "value": "bi bi-file-earmark-medical-fill",
    "label": "file-earmark-medical-fill"
  },
  {
    "value": "bi bi-file-earmark-minus",
    "label": "file-earmark-minus"
  },
  {
    "value": "bi bi-file-earmark-minus-fill",
    "label": "file-earmark-minus-fill"
  },
  {
    "value": "bi bi-file-earmark-music",
    "label": "file-earmark-music"
  },
  {
    "value": "bi bi-file-earmark-music-fill",
    "label": "file-earmark-music-fill"
  },
  {
    "value": "bi bi-file-earmark-pdf",
    "label": "file-earmark-pdf"
  },
  {
    "value": "bi bi-file-earmark-pdf-fill",
    "label": "file-earmark-pdf-fill"
  },
  {
    "value": "bi bi-file-earmark-person",
    "label": "file-earmark-person"
  },
  {
    "value": "bi bi-file-earmark-person-fill",
    "label": "file-earmark-person-fill"
  },
  {
    "value": "bi bi-file-earmark-play",
    "label": "file-earmark-play"
  },
  {
    "value": "bi bi-file-earmark-play-fill",
    "label": "file-earmark-play-fill"
  },
  {
    "value": "bi bi-file-earmark-plus",
    "label": "file-earmark-plus"
  },
  {
    "value": "bi bi-file-earmark-plus-fill",
    "label": "file-earmark-plus-fill"
  },
  {
    "value": "bi bi-file-earmark-post",
    "label": "file-earmark-post"
  },
  {
    "value": "bi bi-file-earmark-post-fill",
    "label": "file-earmark-post-fill"
  },
  {
    "value": "bi bi-file-earmark-ppt",
    "label": "file-earmark-ppt"
  },
  {
    "value": "bi bi-file-earmark-ppt-fill",
    "label": "file-earmark-ppt-fill"
  },
  {
    "value": "bi bi-file-earmark-richtext",
    "label": "file-earmark-richtext"
  },
  {
    "value": "bi bi-file-earmark-richtext-fill",
    "label": "file-earmark-richtext-fill"
  },
  {
    "value": "bi bi-file-earmark-ruled",
    "label": "file-earmark-ruled"
  },
  {
    "value": "bi bi-file-earmark-ruled-fill",
    "label": "file-earmark-ruled-fill"
  },
  {
    "value": "bi bi-file-earmark-slides",
    "label": "file-earmark-slides"
  },
  {
    "value": "bi bi-file-earmark-slides-fill",
    "label": "file-earmark-slides-fill"
  },
  {
    "value": "bi bi-file-earmark-spreadsheet",
    "label": "file-earmark-spreadsheet"
  },
  {
    "value": "bi bi-file-earmark-spreadsheet-fill",
    "label": "file-earmark-spreadsheet-fill"
  },
  {
    "value": "bi bi-file-earmark-text",
    "label": "file-earmark-text"
  },
  {
    "value": "bi bi-file-earmark-text-fill",
    "label": "file-earmark-text-fill"
  },
  {
    "value": "bi bi-file-earmark-word",
    "label": "file-earmark-word"
  },
  {
    "value": "bi bi-file-earmark-word-fill",
    "label": "file-earmark-word-fill"
  },
  {
    "value": "bi bi-file-earmark-x",
    "label": "file-earmark-x"
  },
  {
    "value": "bi bi-file-earmark-x-fill",
    "label": "file-earmark-x-fill"
  },
  {
    "value": "bi bi-file-earmark-zip",
    "label": "file-earmark-zip"
  },
  {
    "value": "bi bi-file-earmark-zip-fill",
    "label": "file-earmark-zip-fill"
  },
  {
    "value": "bi bi-file-easel",
    "label": "file-easel"
  },
  {
    "value": "bi bi-file-easel-fill",
    "label": "file-easel-fill"
  },
  {
    "value": "bi bi-file-excel",
    "label": "file-excel"
  },
  {
    "value": "bi bi-file-excel-fill",
    "label": "file-excel-fill"
  },
  {
    "value": "bi bi-file-fill",
    "label": "file-fill"
  },
  {
    "value": "bi bi-file-font",
    "label": "file-font"
  },
  {
    "value": "bi bi-file-font-fill",
    "label": "file-font-fill"
  },
  {
    "value": "bi bi-file-image",
    "label": "file-image"
  },
  {
    "value": "bi bi-file-image-fill",
    "label": "file-image-fill"
  },
  {
    "value": "bi bi-file-lock",
    "label": "file-lock"
  },
  {
    "value": "bi bi-file-lock-fill",
    "label": "file-lock-fill"
  },
  {
    "value": "bi bi-file-lock2",
    "label": "file-lock2"
  },
  {
    "value": "bi bi-file-lock2-fill",
    "label": "file-lock2-fill"
  },
  {
    "value": "bi bi-file-medical",
    "label": "file-medical"
  },
  {
    "value": "bi bi-file-medical-fill",
    "label": "file-medical-fill"
  },
  {
    "value": "bi bi-file-minus",
    "label": "file-minus"
  },
  {
    "value": "bi bi-file-minus-fill",
    "label": "file-minus-fill"
  },
  {
    "value": "bi bi-file-music",
    "label": "file-music"
  },
  {
    "value": "bi bi-file-music-fill",
    "label": "file-music-fill"
  },
  {
    "value": "bi bi-file-pdf",
    "label": "file-pdf"
  },
  {
    "value": "bi bi-file-pdf-fill",
    "label": "file-pdf-fill"
  },
  {
    "value": "bi bi-file-person",
    "label": "file-person"
  },
  {
    "value": "bi bi-file-person-fill",
    "label": "file-person-fill"
  },
  {
    "value": "bi bi-file-play",
    "label": "file-play"
  },
  {
    "value": "bi bi-file-play-fill",
    "label": "file-play-fill"
  },
  {
    "value": "bi bi-file-plus",
    "label": "file-plus"
  },
  {
    "value": "bi bi-file-plus-fill",
    "label": "file-plus-fill"
  },
  {
    "value": "bi bi-file-post",
    "label": "file-post"
  },
  {
    "value": "bi bi-file-post-fill",
    "label": "file-post-fill"
  },
  {
    "value": "bi bi-file-ppt",
    "label": "file-ppt"
  },
  {
    "value": "bi bi-file-ppt-fill",
    "label": "file-ppt-fill"
  },
  {
    "value": "bi bi-file-richtext",
    "label": "file-richtext"
  },
  {
    "value": "bi bi-file-richtext-fill",
    "label": "file-richtext-fill"
  },
  {
    "value": "bi bi-file-ruled",
    "label": "file-ruled"
  },
  {
    "value": "bi bi-file-ruled-fill",
    "label": "file-ruled-fill"
  },
  {
    "value": "bi bi-file-slides",
    "label": "file-slides"
  },
  {
    "value": "bi bi-file-slides-fill",
    "label": "file-slides-fill"
  },
  {
    "value": "bi bi-file-spreadsheet",
    "label": "file-spreadsheet"
  },
  {
    "value": "bi bi-file-spreadsheet-fill",
    "label": "file-spreadsheet-fill"
  },
  {
    "value": "bi bi-file-text",
    "label": "file-text"
  },
  {
    "value": "bi bi-file-text-fill",
    "label": "file-text-fill"
  },
  {
    "value": "bi bi-file-word",
    "label": "file-word"
  },
  {
    "value": "bi bi-file-word-fill",
    "label": "file-word-fill"
  },
  {
    "value": "bi bi-file-x",
    "label": "file-x"
  },
  {
    "value": "bi bi-file-x-fill",
    "label": "file-x-fill"
  },
  {
    "value": "bi bi-file-zip",
    "label": "file-zip"
  },
  {
    "value": "bi bi-file-zip-fill",
    "label": "file-zip-fill"
  },
  {
    "value": "bi bi-files",
    "label": "files"
  },
  {
    "value": "bi bi-files-alt",
    "label": "files-alt"
  },
  {
    "value": "bi bi-filetype-aac",
    "label": "filetype-aac"
  },
  {
    "value": "bi bi-filetype-ai",
    "label": "filetype-ai"
  },
  {
    "value": "bi bi-filetype-bmp",
    "label": "filetype-bmp"
  },
  {
    "value": "bi bi-filetype-cs",
    "label": "filetype-cs"
  },
  {
    "value": "bi bi-filetype-css",
    "label": "filetype-css"
  },
  {
    "value": "bi bi-filetype-csv",
    "label": "filetype-csv"
  },
  {
    "value": "bi bi-filetype-doc",
    "label": "filetype-doc"
  },
  {
    "value": "bi bi-filetype-docx",
    "label": "filetype-docx"
  },
  {
    "value": "bi bi-filetype-exe",
    "label": "filetype-exe"
  },
  {
    "value": "bi bi-filetype-gif",
    "label": "filetype-gif"
  },
  {
    "value": "bi bi-filetype-heic",
    "label": "filetype-heic"
  },
  {
    "value": "bi bi-filetype-html",
    "label": "filetype-html"
  },
  {
    "value": "bi bi-filetype-java",
    "label": "filetype-java"
  },
  {
    "value": "bi bi-filetype-jpg",
    "label": "filetype-jpg"
  },
  {
    "value": "bi bi-filetype-js",
    "label": "filetype-js"
  },
  {
    "value": "bi bi-filetype-json",
    "label": "filetype-json"
  },
  {
    "value": "bi bi-filetype-jsx",
    "label": "filetype-jsx"
  },
  {
    "value": "bi bi-filetype-key",
    "label": "filetype-key"
  },
  {
    "value": "bi bi-filetype-m4p",
    "label": "filetype-m4p"
  },
  {
    "value": "bi bi-filetype-md",
    "label": "filetype-md"
  },
  {
    "value": "bi bi-filetype-mdx",
    "label": "filetype-mdx"
  },
  {
    "value": "bi bi-filetype-mov",
    "label": "filetype-mov"
  },
  {
    "value": "bi bi-filetype-mp3",
    "label": "filetype-mp3"
  },
  {
    "value": "bi bi-filetype-mp4",
    "label": "filetype-mp4"
  },
  {
    "value": "bi bi-filetype-otf",
    "label": "filetype-otf"
  },
  {
    "value": "bi bi-filetype-pdf",
    "label": "filetype-pdf"
  },
  {
    "value": "bi bi-filetype-php",
    "label": "filetype-php"
  },
  {
    "value": "bi bi-filetype-png",
    "label": "filetype-png"
  },
  {
    "value": "bi bi-filetype-ppt",
    "label": "filetype-ppt"
  },
  {
    "value": "bi bi-filetype-pptx",
    "label": "filetype-pptx"
  },
  {
    "value": "bi bi-filetype-psd",
    "label": "filetype-psd"
  },
  {
    "value": "bi bi-filetype-py",
    "label": "filetype-py"
  },
  {
    "value": "bi bi-filetype-raw",
    "label": "filetype-raw"
  },
  {
    "value": "bi bi-filetype-rb",
    "label": "filetype-rb"
  },
  {
    "value": "bi bi-filetype-sass",
    "label": "filetype-sass"
  },
  {
    "value": "bi bi-filetype-scss",
    "label": "filetype-scss"
  },
  {
    "value": "bi bi-filetype-sh",
    "label": "filetype-sh"
  },
  {
    "value": "bi bi-filetype-sql",
    "label": "filetype-sql"
  },
  {
    "value": "bi bi-filetype-svg",
    "label": "filetype-svg"
  },
  {
    "value": "bi bi-filetype-tiff",
    "label": "filetype-tiff"
  },
  {
    "value": "bi bi-filetype-tsx",
    "label": "filetype-tsx"
  },
  {
    "value": "bi bi-filetype-ttf",
    "label": "filetype-ttf"
  },
  {
    "value": "bi bi-filetype-txt",
    "label": "filetype-txt"
  },
  {
    "value": "bi bi-filetype-wav",
    "label": "filetype-wav"
  },
  {
    "value": "bi bi-filetype-woff",
    "label": "filetype-woff"
  },
  {
    "value": "bi bi-filetype-xls",
    "label": "filetype-xls"
  },
  {
    "value": "bi bi-filetype-xlsx",
    "label": "filetype-xlsx"
  },
  {
    "value": "bi bi-filetype-xml",
    "label": "filetype-xml"
  },
  {
    "value": "bi bi-filetype-yml",
    "label": "filetype-yml"
  },
  {
    "value": "bi bi-film",
    "label": "film"
  },
  {
    "value": "bi bi-filter",
    "label": "filter"
  },
  {
    "value": "bi bi-filter-circle",
    "label": "filter-circle"
  },
  {
    "value": "bi bi-filter-circle-fill",
    "label": "filter-circle-fill"
  },
  {
    "value": "bi bi-filter-left",
    "label": "filter-left"
  },
  {
    "value": "bi bi-filter-right",
    "label": "filter-right"
  },
  {
    "value": "bi bi-filter-square",
    "label": "filter-square"
  },
  {
    "value": "bi bi-filter-square-fill",
    "label": "filter-square-fill"
  },
  {
    "value": "bi bi-fingerprint",
    "label": "fingerprint"
  },
  {
    "value": "bi bi-fire",
    "label": "fire"
  },
  {
    "value": "bi bi-flag",
    "label": "flag"
  },
  {
    "value": "bi bi-flag-fill",
    "label": "flag-fill"
  },
  {
    "value": "bi bi-floppy",
    "label": "floppy"
  },
  {
    "value": "bi bi-floppy-fill",
    "label": "floppy-fill"
  },
  {
    "value": "bi bi-floppy2",
    "label": "floppy2"
  },
  {
    "value": "bi bi-floppy2-fill",
    "label": "floppy2-fill"
  },
  {
    "value": "bi bi-flower1",
    "label": "flower1"
  },
  {
    "value": "bi bi-flower2",
    "label": "flower2"
  },
  {
    "value": "bi bi-flower3",
    "label": "flower3"
  },
  {
    "value": "bi bi-folder",
    "label": "folder"
  },
  {
    "value": "bi bi-folder-check",
    "label": "folder-check"
  },
  {
    "value": "bi bi-folder-fill",
    "label": "folder-fill"
  },
  {
    "value": "bi bi-folder-minus",
    "label": "folder-minus"
  },
  {
    "value": "bi bi-folder-plus",
    "label": "folder-plus"
  },
  {
    "value": "bi bi-folder-symlink",
    "label": "folder-symlink"
  },
  {
    "value": "bi bi-folder-symlink-fill",
    "label": "folder-symlink-fill"
  },
  {
    "value": "bi bi-folder-x",
    "label": "folder-x"
  },
  {
    "value": "bi bi-folder2",
    "label": "folder2"
  },
  {
    "value": "bi bi-folder2-open",
    "label": "folder2-open"
  },
  {
    "value": "bi bi-fonts",
    "label": "fonts"
  },
  {
    "value": "bi bi-forward",
    "label": "forward"
  },
  {
    "value": "bi bi-forward-fill",
    "label": "forward-fill"
  },
  {
    "value": "bi bi-front",
    "label": "front"
  },
  {
    "value": "bi bi-fuel-pump",
    "label": "fuel-pump"
  },
  {
    "value": "bi bi-fuel-pump-diesel",
    "label": "fuel-pump-diesel"
  },
  {
    "value": "bi bi-fuel-pump-diesel-fill",
    "label": "fuel-pump-diesel-fill"
  },
  {
    "value": "bi bi-fuel-pump-fill",
    "label": "fuel-pump-fill"
  },
  {
    "value": "bi bi-fullscreen",
    "label": "fullscreen"
  },
  {
    "value": "bi bi-fullscreen-exit",
    "label": "fullscreen-exit"
  },
  {
    "value": "bi bi-funnel",
    "label": "funnel"
  },
  {
    "value": "bi bi-funnel-fill",
    "label": "funnel-fill"
  },
  {
    "value": "bi bi-gear",
    "label": "gear"
  },
  {
    "value": "bi bi-gear-fill",
    "label": "gear-fill"
  },
  {
    "value": "bi bi-gear-wide",
    "label": "gear-wide"
  },
  {
    "value": "bi bi-gear-wide-connected",
    "label": "gear-wide-connected"
  },
  {
    "value": "bi bi-gem",
    "label": "gem"
  },
  {
    "value": "bi bi-gender-ambiguous",
    "label": "gender-ambiguous"
  },
  {
    "value": "bi bi-gender-female",
    "label": "gender-female"
  },
  {
    "value": "bi bi-gender-male",
    "label": "gender-male"
  },
  {
    "value": "bi bi-gender-neuter",
    "label": "gender-neuter"
  },
  {
    "value": "bi bi-gender-trans",
    "label": "gender-trans"
  },
  {
    "value": "bi bi-geo",
    "label": "geo"
  },
  {
    "value": "bi bi-geo-alt",
    "label": "geo-alt"
  },
  {
    "value": "bi bi-geo-alt-fill",
    "label": "geo-alt-fill"
  },
  {
    "value": "bi bi-geo-fill",
    "label": "geo-fill"
  },
  {
    "value": "bi bi-gift",
    "label": "gift"
  },
  {
    "value": "bi bi-gift-fill",
    "label": "gift-fill"
  },
  {
    "value": "bi bi-git",
    "label": "git"
  },
  {
    "value": "bi bi-github",
    "label": "github"
  },
  {
    "value": "bi bi-gitlab",
    "label": "gitlab"
  },
  {
    "value": "bi bi-globe",
    "label": "globe"
  },
  {
    "value": "bi bi-globe-americas",
    "label": "globe-americas"
  },
  {
    "value": "bi bi-globe-asia-australia",
    "label": "globe-asia-australia"
  },
  {
    "value": "bi bi-globe-central-south-asia",
    "label": "globe-central-south-asia"
  },
  {
    "value": "bi bi-globe-europe-africa",
    "label": "globe-europe-africa"
  },
  {
    "value": "bi bi-globe2",
    "label": "globe2"
  },
  {
    "value": "bi bi-google",
    "label": "google"
  },
  {
    "value": "bi bi-google-play",
    "label": "google-play"
  },
  {
    "value": "bi bi-gpu-card",
    "label": "gpu-card"
  },
  {
    "value": "bi bi-graph-down",
    "label": "graph-down"
  },
  {
    "value": "bi bi-graph-down-arrow",
    "label": "graph-down-arrow"
  },
  {
    "value": "bi bi-graph-up",
    "label": "graph-up"
  },
  {
    "value": "bi bi-graph-up-arrow",
    "label": "graph-up-arrow"
  },
  {
    "value": "bi bi-grid",
    "label": "grid"
  },
  {
    "value": "bi bi-grid-1x2",
    "label": "grid-1x2"
  },
  {
    "value": "bi bi-grid-1x2-fill",
    "label": "grid-1x2-fill"
  },
  {
    "value": "bi bi-grid-3x2",
    "label": "grid-3x2"
  },
  {
    "value": "bi bi-grid-3x2-gap",
    "label": "grid-3x2-gap"
  },
  {
    "value": "bi bi-grid-3x2-gap-fill",
    "label": "grid-3x2-gap-fill"
  },
  {
    "value": "bi bi-grid-3x3",
    "label": "grid-3x3"
  },
  {
    "value": "bi bi-grid-3x3-gap",
    "label": "grid-3x3-gap"
  },
  {
    "value": "bi bi-grid-3x3-gap-fill",
    "label": "grid-3x3-gap-fill"
  },
  {
    "value": "bi bi-grid-fill",
    "label": "grid-fill"
  },
  {
    "value": "bi bi-grip-horizontal",
    "label": "grip-horizontal"
  },
  {
    "value": "bi bi-grip-vertical",
    "label": "grip-vertical"
  },
  {
    "value": "bi bi-h-circle",
    "label": "h-circle"
  },
  {
    "value": "bi bi-h-circle-fill",
    "label": "h-circle-fill"
  },
  {
    "value": "bi bi-h-square",
    "label": "h-square"
  },
  {
    "value": "bi bi-h-square-fill",
    "label": "h-square-fill"
  },
  {
    "value": "bi bi-hammer",
    "label": "hammer"
  },
  {
    "value": "bi bi-hand-index",
    "label": "hand-index"
  },
  {
    "value": "bi bi-hand-index-fill",
    "label": "hand-index-fill"
  },
  {
    "value": "bi bi-hand-index-thumb",
    "label": "hand-index-thumb"
  },
  {
    "value": "bi bi-hand-index-thumb-fill",
    "label": "hand-index-thumb-fill"
  },
  {
    "value": "bi bi-hand-thumbs-down",
    "label": "hand-thumbs-down"
  },
  {
    "value": "bi bi-hand-thumbs-down-fill",
    "label": "hand-thumbs-down-fill"
  },
  {
    "value": "bi bi-hand-thumbs-up",
    "label": "hand-thumbs-up"
  },
  {
    "value": "bi bi-hand-thumbs-up-fill",
    "label": "hand-thumbs-up-fill"
  },
  {
    "value": "bi bi-handbag",
    "label": "handbag"
  },
  {
    "value": "bi bi-handbag-fill",
    "label": "handbag-fill"
  },
  {
    "value": "bi bi-hash",
    "label": "hash"
  },
  {
    "value": "bi bi-hdd",
    "label": "hdd"
  },
  {
    "value": "bi bi-hdd-fill",
    "label": "hdd-fill"
  },
  {
    "value": "bi bi-hdd-network",
    "label": "hdd-network"
  },
  {
    "value": "bi bi-hdd-network-fill",
    "label": "hdd-network-fill"
  },
  {
    "value": "bi bi-hdd-rack",
    "label": "hdd-rack"
  },
  {
    "value": "bi bi-hdd-rack-fill",
    "label": "hdd-rack-fill"
  },
  {
    "value": "bi bi-hdd-stack",
    "label": "hdd-stack"
  },
  {
    "value": "bi bi-hdd-stack-fill",
    "label": "hdd-stack-fill"
  },
  {
    "value": "bi bi-hdmi",
    "label": "hdmi"
  },
  {
    "value": "bi bi-hdmi-fill",
    "label": "hdmi-fill"
  },
  {
    "value": "bi bi-headphones",
    "label": "headphones"
  },
  {
    "value": "bi bi-headset",
    "label": "headset"
  },
  {
    "value": "bi bi-headset-vr",
    "label": "headset-vr"
  },
  {
    "value": "bi bi-heart",
    "label": "heart"
  },
  {
    "value": "bi bi-heart-arrow",
    "label": "heart-arrow"
  },
  {
    "value": "bi bi-heart-fill",
    "label": "heart-fill"
  },
  {
    "value": "bi bi-heart-half",
    "label": "heart-half"
  },
  {
    "value": "bi bi-heart-pulse",
    "label": "heart-pulse"
  },
  {
    "value": "bi bi-heart-pulse-fill",
    "label": "heart-pulse-fill"
  },
  {
    "value": "bi bi-heartbreak",
    "label": "heartbreak"
  },
  {
    "value": "bi bi-heartbreak-fill",
    "label": "heartbreak-fill"
  },
  {
    "value": "bi bi-hearts",
    "label": "hearts"
  },
  {
    "value": "bi bi-heptagon",
    "label": "heptagon"
  },
  {
    "value": "bi bi-heptagon-fill",
    "label": "heptagon-fill"
  },
  {
    "value": "bi bi-heptagon-half",
    "label": "heptagon-half"
  },
  {
    "value": "bi bi-hexagon",
    "label": "hexagon"
  },
  {
    "value": "bi bi-hexagon-fill",
    "label": "hexagon-fill"
  },
  {
    "value": "bi bi-hexagon-half",
    "label": "hexagon-half"
  },
  {
    "value": "bi bi-highlighter",
    "label": "highlighter"
  },
  {
    "value": "bi bi-highlights",
    "label": "highlights"
  },
  {
    "value": "bi bi-hospital",
    "label": "hospital"
  },
  {
    "value": "bi bi-hospital-fill",
    "label": "hospital-fill"
  },
  {
    "value": "bi bi-hourglass",
    "label": "hourglass"
  },
  {
    "value": "bi bi-hourglass-bottom",
    "label": "hourglass-bottom"
  },
  {
    "value": "bi bi-hourglass-split",
    "label": "hourglass-split"
  },
  {
    "value": "bi bi-hourglass-top",
    "label": "hourglass-top"
  },
  {
    "value": "bi bi-house",
    "label": "house"
  },
  {
    "value": "bi bi-house-add",
    "label": "house-add"
  },
  {
    "value": "bi bi-house-add-fill",
    "label": "house-add-fill"
  },
  {
    "value": "bi bi-house-check",
    "label": "house-check"
  },
  {
    "value": "bi bi-house-check-fill",
    "label": "house-check-fill"
  },
  {
    "value": "bi bi-house-dash",
    "label": "house-dash"
  },
  {
    "value": "bi bi-house-dash-fill",
    "label": "house-dash-fill"
  },
  {
    "value": "bi bi-house-door",
    "label": "house-door"
  },
  {
    "value": "bi bi-house-door-fill",
    "label": "house-door-fill"
  },
  {
    "value": "bi bi-house-down",
    "label": "house-down"
  },
  {
    "value": "bi bi-house-down-fill",
    "label": "house-down-fill"
  },
  {
    "value": "bi bi-house-exclamation",
    "label": "house-exclamation"
  },
  {
    "value": "bi bi-house-exclamation-fill",
    "label": "house-exclamation-fill"
  },
  {
    "value": "bi bi-house-fill",
    "label": "house-fill"
  },
  {
    "value": "bi bi-house-gear",
    "label": "house-gear"
  },
  {
    "value": "bi bi-house-gear-fill",
    "label": "house-gear-fill"
  },
  {
    "value": "bi bi-house-heart",
    "label": "house-heart"
  },
  {
    "value": "bi bi-house-heart-fill",
    "label": "house-heart-fill"
  },
  {
    "value": "bi bi-house-lock",
    "label": "house-lock"
  },
  {
    "value": "bi bi-house-lock-fill",
    "label": "house-lock-fill"
  },
  {
    "value": "bi bi-house-slash",
    "label": "house-slash"
  },
  {
    "value": "bi bi-house-slash-fill",
    "label": "house-slash-fill"
  },
  {
    "value": "bi bi-house-up",
    "label": "house-up"
  },
  {
    "value": "bi bi-house-up-fill",
    "label": "house-up-fill"
  },
  {
    "value": "bi bi-house-x",
    "label": "house-x"
  },
  {
    "value": "bi bi-house-x-fill",
    "label": "house-x-fill"
  },
  {
    "value": "bi bi-houses",
    "label": "houses"
  },
  {
    "value": "bi bi-houses-fill",
    "label": "houses-fill"
  },
  {
    "value": "bi bi-hr",
    "label": "hr"
  },
  {
    "value": "bi bi-hurricane",
    "label": "hurricane"
  },
  {
    "value": "bi bi-hypnotize",
    "label": "hypnotize"
  },
  {
    "value": "bi bi-image",
    "label": "image"
  },
  {
    "value": "bi bi-image-alt",
    "label": "image-alt"
  },
  {
    "value": "bi bi-image-fill",
    "label": "image-fill"
  },
  {
    "value": "bi bi-images",
    "label": "images"
  },
  {
    "value": "bi bi-inbox",
    "label": "inbox"
  },
  {
    "value": "bi bi-inbox-fill",
    "label": "inbox-fill"
  },
  {
    "value": "bi bi-inboxes-fill",
    "label": "inboxes-fill"
  },
  {
    "value": "bi bi-inboxes",
    "label": "inboxes"
  },
  {
    "value": "bi bi-incognito",
    "label": "incognito"
  },
  {
    "value": "bi bi-indent",
    "label": "indent"
  },
  {
    "value": "bi bi-infinity",
    "label": "infinity"
  },
  {
    "value": "bi bi-info",
    "label": "info"
  },
  {
    "value": "bi bi-info-circle",
    "label": "info-circle"
  },
  {
    "value": "bi bi-info-circle-fill",
    "label": "info-circle-fill"
  },
  {
    "value": "bi bi-info-lg",
    "label": "info-lg"
  },
  {
    "value": "bi bi-info-square",
    "label": "info-square"
  },
  {
    "value": "bi bi-info-square-fill",
    "label": "info-square-fill"
  },
  {
    "value": "bi bi-input-cursor",
    "label": "input-cursor"
  },
  {
    "value": "bi bi-input-cursor-text",
    "label": "input-cursor-text"
  },
  {
    "value": "bi bi-instagram",
    "label": "instagram"
  },
  {
    "value": "bi bi-intersect",
    "label": "intersect"
  },
  {
    "value": "bi bi-journal",
    "label": "journal"
  },
  {
    "value": "bi bi-journal-album",
    "label": "journal-album"
  },
  {
    "value": "bi bi-journal-arrow-down",
    "label": "journal-arrow-down"
  },
  {
    "value": "bi bi-journal-arrow-up",
    "label": "journal-arrow-up"
  },
  {
    "value": "bi bi-journal-bookmark",
    "label": "journal-bookmark"
  },
  {
    "value": "bi bi-journal-bookmark-fill",
    "label": "journal-bookmark-fill"
  },
  {
    "value": "bi bi-journal-check",
    "label": "journal-check"
  },
  {
    "value": "bi bi-journal-code",
    "label": "journal-code"
  },
  {
    "value": "bi bi-journal-medical",
    "label": "journal-medical"
  },
  {
    "value": "bi bi-journal-minus",
    "label": "journal-minus"
  },
  {
    "value": "bi bi-journal-plus",
    "label": "journal-plus"
  },
  {
    "value": "bi bi-journal-richtext",
    "label": "journal-richtext"
  },
  {
    "value": "bi bi-journal-text",
    "label": "journal-text"
  },
  {
    "value": "bi bi-journal-x",
    "label": "journal-x"
  },
  {
    "value": "bi bi-journals",
    "label": "journals"
  },
  {
    "value": "bi bi-joystick",
    "label": "joystick"
  },
  {
    "value": "bi bi-justify",
    "label": "justify"
  },
  {
    "value": "bi bi-justify-left",
    "label": "justify-left"
  },
  {
    "value": "bi bi-justify-right",
    "label": "justify-right"
  },
  {
    "value": "bi bi-kanban",
    "label": "kanban"
  },
  {
    "value": "bi bi-kanban-fill",
    "label": "kanban-fill"
  },
  {
    "value": "bi bi-key",
    "label": "key"
  },
  {
    "value": "bi bi-key-fill",
    "label": "key-fill"
  },
  {
    "value": "bi bi-keyboard",
    "label": "keyboard"
  },
  {
    "value": "bi bi-keyboard-fill",
    "label": "keyboard-fill"
  },
  {
    "value": "bi bi-ladder",
    "label": "ladder"
  },
  {
    "value": "bi bi-lamp",
    "label": "lamp"
  },
  {
    "value": "bi bi-lamp-fill",
    "label": "lamp-fill"
  },
  {
    "value": "bi bi-laptop",
    "label": "laptop"
  },
  {
    "value": "bi bi-laptop-fill",
    "label": "laptop-fill"
  },
  {
    "value": "bi bi-layer-backward",
    "label": "layer-backward"
  },
  {
    "value": "bi bi-layer-forward",
    "label": "layer-forward"
  },
  {
    "value": "bi bi-layers",
    "label": "layers"
  },
  {
    "value": "bi bi-layers-fill",
    "label": "layers-fill"
  },
  {
    "value": "bi bi-layers-half",
    "label": "layers-half"
  },
  {
    "value": "bi bi-layout-sidebar",
    "label": "layout-sidebar"
  },
  {
    "value": "bi bi-layout-sidebar-inset-reverse",
    "label": "layout-sidebar-inset-reverse"
  },
  {
    "value": "bi bi-layout-sidebar-inset",
    "label": "layout-sidebar-inset"
  },
  {
    "value": "bi bi-layout-sidebar-reverse",
    "label": "layout-sidebar-reverse"
  },
  {
    "value": "bi bi-layout-split",
    "label": "layout-split"
  },
  {
    "value": "bi bi-layout-text-sidebar",
    "label": "layout-text-sidebar"
  },
  {
    "value": "bi bi-layout-text-sidebar-reverse",
    "label": "layout-text-sidebar-reverse"
  },
  {
    "value": "bi bi-layout-text-window",
    "label": "layout-text-window"
  },
  {
    "value": "bi bi-layout-text-window-reverse",
    "label": "layout-text-window-reverse"
  },
  {
    "value": "bi bi-layout-three-columns",
    "label": "layout-three-columns"
  },
  {
    "value": "bi bi-layout-wtf",
    "label": "layout-wtf"
  },
  {
    "value": "bi bi-life-preserver",
    "label": "life-preserver"
  },
  {
    "value": "bi bi-lightbulb",
    "label": "lightbulb"
  },
  {
    "value": "bi bi-lightbulb-fill",
    "label": "lightbulb-fill"
  },
  {
    "value": "bi bi-lightbulb-off",
    "label": "lightbulb-off"
  },
  {
    "value": "bi bi-lightbulb-off-fill",
    "label": "lightbulb-off-fill"
  },
  {
    "value": "bi bi-lightning",
    "label": "lightning"
  },
  {
    "value": "bi bi-lightning-charge",
    "label": "lightning-charge"
  },
  {
    "value": "bi bi-lightning-charge-fill",
    "label": "lightning-charge-fill"
  },
  {
    "value": "bi bi-lightning-fill",
    "label": "lightning-fill"
  },
  {
    "value": "bi bi-line",
    "label": "line"
  },
  {
    "value": "bi bi-link",
    "label": "link"
  },
  {
    "value": "bi bi-link-45deg",
    "label": "link-45deg"
  },
  {
    "value": "bi bi-linkedin",
    "label": "linkedin"
  },
  {
    "value": "bi bi-list",
    "label": "list"
  },
  {
    "value": "bi bi-list-check",
    "label": "list-check"
  },
  {
    "value": "bi bi-list-columns",
    "label": "list-columns"
  },
  {
    "value": "bi bi-list-columns-reverse",
    "label": "list-columns-reverse"
  },
  {
    "value": "bi bi-list-nested",
    "label": "list-nested"
  },
  {
    "value": "bi bi-list-ol",
    "label": "list-ol"
  },
  {
    "value": "bi bi-list-stars",
    "label": "list-stars"
  },
  {
    "value": "bi bi-list-task",
    "label": "list-task"
  },
  {
    "value": "bi bi-list-ul",
    "label": "list-ul"
  },
  {
    "value": "bi bi-lock",
    "label": "lock"
  },
  {
    "value": "bi bi-lock-fill",
    "label": "lock-fill"
  },
  {
    "value": "bi bi-luggage",
    "label": "luggage"
  },
  {
    "value": "bi bi-luggage-fill",
    "label": "luggage-fill"
  },
  {
    "value": "bi bi-lungs",
    "label": "lungs"
  },
  {
    "value": "bi bi-lungs-fill",
    "label": "lungs-fill"
  },
  {
    "value": "bi bi-magic",
    "label": "magic"
  },
  {
    "value": "bi bi-magnet",
    "label": "magnet"
  },
  {
    "value": "bi bi-magnet-fill",
    "label": "magnet-fill"
  },
  {
    "value": "bi bi-mailbox",
    "label": "mailbox"
  },
  {
    "value": "bi bi-mailbox-flag",
    "label": "mailbox-flag"
  },
  {
    "value": "bi bi-mailbox2",
    "label": "mailbox2"
  },
  {
    "value": "bi bi-mailbox2-flag",
    "label": "mailbox2-flag"
  },
  {
    "value": "bi bi-map",
    "label": "map"
  },
  {
    "value": "bi bi-map-fill",
    "label": "map-fill"
  },
  {
    "value": "bi bi-markdown",
    "label": "markdown"
  },
  {
    "value": "bi bi-markdown-fill",
    "label": "markdown-fill"
  },
  {
    "value": "bi bi-marker-tip",
    "label": "marker-tip"
  },
  {
    "value": "bi bi-mask",
    "label": "mask"
  },
  {
    "value": "bi bi-mastodon",
    "label": "mastodon"
  },
  {
    "value": "bi bi-medium",
    "label": "medium"
  },
  {
    "value": "bi bi-megaphone",
    "label": "megaphone"
  },
  {
    "value": "bi bi-megaphone-fill",
    "label": "megaphone-fill"
  },
  {
    "value": "bi bi-memory",
    "label": "memory"
  },
  {
    "value": "bi bi-menu-app",
    "label": "menu-app"
  },
  {
    "value": "bi bi-menu-app-fill",
    "label": "menu-app-fill"
  },
  {
    "value": "bi bi-menu-button",
    "label": "menu-button"
  },
  {
    "value": "bi bi-menu-button-fill",
    "label": "menu-button-fill"
  },
  {
    "value": "bi bi-menu-button-wide",
    "label": "menu-button-wide"
  },
  {
    "value": "bi bi-menu-button-wide-fill",
    "label": "menu-button-wide-fill"
  },
  {
    "value": "bi bi-menu-down",
    "label": "menu-down"
  },
  {
    "value": "bi bi-menu-up",
    "label": "menu-up"
  },
  {
    "value": "bi bi-messenger",
    "label": "messenger"
  },
  {
    "value": "bi bi-meta",
    "label": "meta"
  },
  {
    "value": "bi bi-mic",
    "label": "mic"
  },
  {
    "value": "bi bi-mic-fill",
    "label": "mic-fill"
  },
  {
    "value": "bi bi-mic-mute",
    "label": "mic-mute"
  },
  {
    "value": "bi bi-mic-mute-fill",
    "label": "mic-mute-fill"
  },
  {
    "value": "bi bi-microsoft",
    "label": "microsoft"
  },
  {
    "value": "bi bi-microsoft-teams",
    "label": "microsoft-teams"
  },
  {
    "value": "bi bi-minecart",
    "label": "minecart"
  },
  {
    "value": "bi bi-minecart-loaded",
    "label": "minecart-loaded"
  },
  {
    "value": "bi bi-modem",
    "label": "modem"
  },
  {
    "value": "bi bi-modem-fill",
    "label": "modem-fill"
  },
  {
    "value": "bi bi-moisture",
    "label": "moisture"
  },
  {
    "value": "bi bi-moon",
    "label": "moon"
  },
  {
    "value": "bi bi-moon-fill",
    "label": "moon-fill"
  },
  {
    "value": "bi bi-moon-stars",
    "label": "moon-stars"
  },
  {
    "value": "bi bi-moon-stars-fill",
    "label": "moon-stars-fill"
  },
  {
    "value": "bi bi-mortarboard",
    "label": "mortarboard"
  },
  {
    "value": "bi bi-mortarboard-fill",
    "label": "mortarboard-fill"
  },
  {
    "value": "bi bi-motherboard",
    "label": "motherboard"
  },
  {
    "value": "bi bi-motherboard-fill",
    "label": "motherboard-fill"
  },
  {
    "value": "bi bi-mouse",
    "label": "mouse"
  },
  {
    "value": "bi bi-mouse-fill",
    "label": "mouse-fill"
  },
  {
    "value": "bi bi-mouse2",
    "label": "mouse2"
  },
  {
    "value": "bi bi-mouse2-fill",
    "label": "mouse2-fill"
  },
  {
    "value": "bi bi-mouse3",
    "label": "mouse3"
  },
  {
    "value": "bi bi-mouse3-fill",
    "label": "mouse3-fill"
  },
  {
    "value": "bi bi-music-note",
    "label": "music-note"
  },
  {
    "value": "bi bi-music-note-beamed",
    "label": "music-note-beamed"
  },
  {
    "value": "bi bi-music-note-list",
    "label": "music-note-list"
  },
  {
    "value": "bi bi-music-player",
    "label": "music-player"
  },
  {
    "value": "bi bi-music-player-fill",
    "label": "music-player-fill"
  },
  {
    "value": "bi bi-newspaper",
    "label": "newspaper"
  },
  {
    "value": "bi bi-nintendo-switch",
    "label": "nintendo-switch"
  },
  {
    "value": "bi bi-node-minus",
    "label": "node-minus"
  },
  {
    "value": "bi bi-node-minus-fill",
    "label": "node-minus-fill"
  },
  {
    "value": "bi bi-node-plus",
    "label": "node-plus"
  },
  {
    "value": "bi bi-node-plus-fill",
    "label": "node-plus-fill"
  },
  {
    "value": "bi bi-noise-reduction",
    "label": "noise-reduction"
  },
  {
    "value": "bi bi-nut",
    "label": "nut"
  },
  {
    "value": "bi bi-nut-fill",
    "label": "nut-fill"
  },
  {
    "value": "bi bi-nvidia",
    "label": "nvidia"
  },
  {
    "value": "bi bi-nvme",
    "label": "nvme"
  },
  {
    "value": "bi bi-nvme-fill",
    "label": "nvme-fill"
  },
  {
    "value": "bi bi-octagon",
    "label": "octagon"
  },
  {
    "value": "bi bi-octagon-fill",
    "label": "octagon-fill"
  },
  {
    "value": "bi bi-octagon-half",
    "label": "octagon-half"
  },
  {
    "value": "bi bi-opencollective",
    "label": "opencollective"
  },
  {
    "value": "bi bi-optical-audio",
    "label": "optical-audio"
  },
  {
    "value": "bi bi-optical-audio-fill",
    "label": "optical-audio-fill"
  },
  {
    "value": "bi bi-option",
    "label": "option"
  },
  {
    "value": "bi bi-outlet",
    "label": "outlet"
  },
  {
    "value": "bi bi-p-circle",
    "label": "p-circle"
  },
  {
    "value": "bi bi-p-circle-fill",
    "label": "p-circle-fill"
  },
  {
    "value": "bi bi-p-square",
    "label": "p-square"
  },
  {
    "value": "bi bi-p-square-fill",
    "label": "p-square-fill"
  },
  {
    "value": "bi bi-paint-bucket",
    "label": "paint-bucket"
  },
  {
    "value": "bi bi-palette",
    "label": "palette"
  },
  {
    "value": "bi bi-palette-fill",
    "label": "palette-fill"
  },
  {
    "value": "bi bi-palette2",
    "label": "palette2"
  },
  {
    "value": "bi bi-paperclip",
    "label": "paperclip"
  },
  {
    "value": "bi bi-paragraph",
    "label": "paragraph"
  },
  {
    "value": "bi bi-pass",
    "label": "pass"
  },
  {
    "value": "bi bi-pass-fill",
    "label": "pass-fill"
  },
  {
    "value": "bi bi-passport",
    "label": "passport"
  },
  {
    "value": "bi bi-passport-fill",
    "label": "passport-fill"
  },
  {
    "value": "bi bi-patch-check",
    "label": "patch-check"
  },
  {
    "value": "bi bi-patch-check-fill",
    "label": "patch-check-fill"
  },
  {
    "value": "bi bi-patch-exclamation",
    "label": "patch-exclamation"
  },
  {
    "value": "bi bi-patch-exclamation-fill",
    "label": "patch-exclamation-fill"
  },
  {
    "value": "bi bi-patch-minus",
    "label": "patch-minus"
  },
  {
    "value": "bi bi-patch-minus-fill",
    "label": "patch-minus-fill"
  },
  {
    "value": "bi bi-patch-plus",
    "label": "patch-plus"
  },
  {
    "value": "bi bi-patch-plus-fill",
    "label": "patch-plus-fill"
  },
  {
    "value": "bi bi-patch-question",
    "label": "patch-question"
  },
  {
    "value": "bi bi-patch-question-fill",
    "label": "patch-question-fill"
  },
  {
    "value": "bi bi-pause",
    "label": "pause"
  },
  {
    "value": "bi bi-pause-btn",
    "label": "pause-btn"
  },
  {
    "value": "bi bi-pause-btn-fill",
    "label": "pause-btn-fill"
  },
  {
    "value": "bi bi-pause-circle",
    "label": "pause-circle"
  },
  {
    "value": "bi bi-pause-circle-fill",
    "label": "pause-circle-fill"
  },
  {
    "value": "bi bi-pause-fill",
    "label": "pause-fill"
  },
  {
    "value": "bi bi-paypal",
    "label": "paypal"
  },
  {
    "value": "bi bi-pc",
    "label": "pc"
  },
  {
    "value": "bi bi-pc-display",
    "label": "pc-display"
  },
  {
    "value": "bi bi-pc-display-horizontal",
    "label": "pc-display-horizontal"
  },
  {
    "value": "bi bi-pc-horizontal",
    "label": "pc-horizontal"
  },
  {
    "value": "bi bi-pci-card",
    "label": "pci-card"
  },
  {
    "value": "bi bi-pci-card-network",
    "label": "pci-card-network"
  },
  {
    "value": "bi bi-pci-card-sound",
    "label": "pci-card-sound"
  },
  {
    "value": "bi bi-peace",
    "label": "peace"
  },
  {
    "value": "bi bi-peace-fill",
    "label": "peace-fill"
  },
  {
    "value": "bi bi-pen",
    "label": "pen"
  },
  {
    "value": "bi bi-pen-fill",
    "label": "pen-fill"
  },
  {
    "value": "bi bi-pencil",
    "label": "pencil"
  },
  {
    "value": "bi bi-pencil-fill",
    "label": "pencil-fill"
  },
  {
    "value": "bi bi-pencil-square",
    "label": "pencil-square"
  },
  {
    "value": "bi bi-pentagon",
    "label": "pentagon"
  },
  {
    "value": "bi bi-pentagon-fill",
    "label": "pentagon-fill"
  },
  {
    "value": "bi bi-pentagon-half",
    "label": "pentagon-half"
  },
  {
    "value": "bi bi-people",
    "label": "people"
  },
  {
    "value": "bi bi-person-circle",
    "label": "person-circle"
  },
  {
    "value": "bi bi-people-fill",
    "label": "people-fill"
  },
  {
    "value": "bi bi-percent",
    "label": "percent"
  },
  {
    "value": "bi bi-person",
    "label": "person"
  },
  {
    "value": "bi bi-person-add",
    "label": "person-add"
  },
  {
    "value": "bi bi-person-arms-up",
    "label": "person-arms-up"
  },
  {
    "value": "bi bi-person-badge",
    "label": "person-badge"
  },
  {
    "value": "bi bi-person-badge-fill",
    "label": "person-badge-fill"
  },
  {
    "value": "bi bi-person-bounding-box",
    "label": "person-bounding-box"
  },
  {
    "value": "bi bi-person-check",
    "label": "person-check"
  },
  {
    "value": "bi bi-person-check-fill",
    "label": "person-check-fill"
  },
  {
    "value": "bi bi-person-dash",
    "label": "person-dash"
  },
  {
    "value": "bi bi-person-dash-fill",
    "label": "person-dash-fill"
  },
  {
    "value": "bi bi-person-down",
    "label": "person-down"
  },
  {
    "value": "bi bi-person-exclamation",
    "label": "person-exclamation"
  },
  {
    "value": "bi bi-person-fill",
    "label": "person-fill"
  },
  {
    "value": "bi bi-person-fill-add",
    "label": "person-fill-add"
  },
  {
    "value": "bi bi-person-fill-check",
    "label": "person-fill-check"
  },
  {
    "value": "bi bi-person-fill-dash",
    "label": "person-fill-dash"
  },
  {
    "value": "bi bi-person-fill-down",
    "label": "person-fill-down"
  },
  {
    "value": "bi bi-person-fill-exclamation",
    "label": "person-fill-exclamation"
  },
  {
    "value": "bi bi-person-fill-gear",
    "label": "person-fill-gear"
  },
  {
    "value": "bi bi-person-fill-lock",
    "label": "person-fill-lock"
  },
  {
    "value": "bi bi-person-fill-slash",
    "label": "person-fill-slash"
  },
  {
    "value": "bi bi-person-fill-up",
    "label": "person-fill-up"
  },
  {
    "value": "bi bi-person-fill-x",
    "label": "person-fill-x"
  },
  {
    "value": "bi bi-person-gear",
    "label": "person-gear"
  },
  {
    "value": "bi bi-person-heart",
    "label": "person-heart"
  },
  {
    "value": "bi bi-person-hearts",
    "label": "person-hearts"
  },
  {
    "value": "bi bi-person-lines-fill",
    "label": "person-lines-fill"
  },
  {
    "value": "bi bi-person-lock",
    "label": "person-lock"
  },
  {
    "value": "bi bi-person-plus",
    "label": "person-plus"
  },
  {
    "value": "bi bi-person-plus-fill",
    "label": "person-plus-fill"
  },
  {
    "value": "bi bi-person-raised-hand",
    "label": "person-raised-hand"
  },
  {
    "value": "bi bi-person-rolodex",
    "label": "person-rolodex"
  },
  {
    "value": "bi bi-person-slash",
    "label": "person-slash"
  },
  {
    "value": "bi bi-person-square",
    "label": "person-square"
  },
  {
    "value": "bi bi-person-standing",
    "label": "person-standing"
  },
  {
    "value": "bi bi-person-standing-dress",
    "label": "person-standing-dress"
  },
  {
    "value": "bi bi-person-up",
    "label": "person-up"
  },
  {
    "value": "bi bi-person-vcard",
    "label": "person-vcard"
  },
  {
    "value": "bi bi-person-vcard-fill",
    "label": "person-vcard-fill"
  },
  {
    "value": "bi bi-person-video",
    "label": "person-video"
  },
  {
    "value": "bi bi-person-video2",
    "label": "person-video2"
  },
  {
    "value": "bi bi-person-video3",
    "label": "person-video3"
  },
  {
    "value": "bi bi-person-walking",
    "label": "person-walking"
  },
  {
    "value": "bi bi-person-wheelchair",
    "label": "person-wheelchair"
  },
  {
    "value": "bi bi-person-workspace",
    "label": "person-workspace"
  },
  {
    "value": "bi bi-person-x",
    "label": "person-x"
  },
  {
    "value": "bi bi-person-x-fill",
    "label": "person-x-fill"
  },
  {
    "value": "bi bi-phone",
    "label": "phone"
  },
  {
    "value": "bi bi-phone-fill",
    "label": "phone-fill"
  },
  {
    "value": "bi bi-phone-flip",
    "label": "phone-flip"
  },
  {
    "value": "bi bi-phone-landscape",
    "label": "phone-landscape"
  },
  {
    "value": "bi bi-phone-landscape-fill",
    "label": "phone-landscape-fill"
  },
  {
    "value": "bi bi-phone-vibrate",
    "label": "phone-vibrate"
  },
  {
    "value": "bi bi-phone-vibrate-fill",
    "label": "phone-vibrate-fill"
  },
  {
    "value": "bi bi-pie-chart",
    "label": "pie-chart"
  },
  {
    "value": "bi bi-pie-chart-fill",
    "label": "pie-chart-fill"
  },
  {
    "value": "bi bi-piggy-bank",
    "label": "piggy-bank"
  },
  {
    "value": "bi bi-piggy-bank-fill",
    "label": "piggy-bank-fill"
  },
  {
    "value": "bi bi-pin",
    "label": "pin"
  },
  {
    "value": "bi bi-pin-angle",
    "label": "pin-angle"
  },
  {
    "value": "bi bi-pin-angle-fill",
    "label": "pin-angle-fill"
  },
  {
    "value": "bi bi-pin-fill",
    "label": "pin-fill"
  },
  {
    "value": "bi bi-pin-map",
    "label": "pin-map"
  },
  {
    "value": "bi bi-pin-map-fill",
    "label": "pin-map-fill"
  },
  {
    "value": "bi bi-pinterest",
    "label": "pinterest"
  },
  {
    "value": "bi bi-pip",
    "label": "pip"
  },
  {
    "value": "bi bi-pip-fill",
    "label": "pip-fill"
  },
  {
    "value": "bi bi-play",
    "label": "play"
  },
  {
    "value": "bi bi-play-btn",
    "label": "play-btn"
  },
  {
    "value": "bi bi-play-btn-fill",
    "label": "play-btn-fill"
  },
  {
    "value": "bi bi-play-circle",
    "label": "play-circle"
  },
  {
    "value": "bi bi-play-circle-fill",
    "label": "play-circle-fill"
  },
  {
    "value": "bi bi-play-fill",
    "label": "play-fill"
  },
  {
    "value": "bi bi-playstation",
    "label": "playstation"
  },
  {
    "value": "bi bi-plug",
    "label": "plug"
  },
  {
    "value": "bi bi-plug-fill",
    "label": "plug-fill"
  },
  {
    "value": "bi bi-plugin",
    "label": "plugin"
  },
  {
    "value": "bi bi-plus",
    "label": "plus"
  },
  {
    "value": "bi bi-plus-circle",
    "label": "plus-circle"
  },
  {
    "value": "bi bi-plus-circle-dotted",
    "label": "plus-circle-dotted"
  },
  {
    "value": "bi bi-plus-circle-fill",
    "label": "plus-circle-fill"
  },
  {
    "value": "bi bi-plus-lg",
    "label": "plus-lg"
  },
  {
    "value": "bi bi-plus-slash-minus",
    "label": "plus-slash-minus"
  },
  {
    "value": "bi bi-plus-square",
    "label": "plus-square"
  },
  {
    "value": "bi bi-plus-square-dotted",
    "label": "plus-square-dotted"
  },
  {
    "value": "bi bi-plus-square-fill",
    "label": "plus-square-fill"
  },
  {
    "value": "bi bi-postage",
    "label": "postage"
  },
  {
    "value": "bi bi-postage-fill",
    "label": "postage-fill"
  },
  {
    "value": "bi bi-postage-heart",
    "label": "postage-heart"
  },
  {
    "value": "bi bi-postage-heart-fill",
    "label": "postage-heart-fill"
  },
  {
    "value": "bi bi-postcard",
    "label": "postcard"
  },
  {
    "value": "bi bi-postcard-fill",
    "label": "postcard-fill"
  },
  {
    "value": "bi bi-postcard-heart",
    "label": "postcard-heart"
  },
  {
    "value": "bi bi-postcard-heart-fill",
    "label": "postcard-heart-fill"
  },
  {
    "value": "bi bi-power",
    "label": "power"
  },
  {
    "value": "bi bi-prescription",
    "label": "prescription"
  },
  {
    "value": "bi bi-prescription2",
    "label": "prescription2"
  },
  {
    "value": "bi bi-printer",
    "label": "printer"
  },
  {
    "value": "bi bi-printer-fill",
    "label": "printer-fill"
  },
  {
    "value": "bi bi-projector",
    "label": "projector"
  },
  {
    "value": "bi bi-projector-fill",
    "label": "projector-fill"
  },
  {
    "value": "bi bi-puzzle",
    "label": "puzzle"
  },
  {
    "value": "bi bi-puzzle-fill",
    "label": "puzzle-fill"
  },
  {
    "value": "bi bi-qr-code",
    "label": "qr-code"
  },
  {
    "value": "bi bi-qr-code-scan",
    "label": "qr-code-scan"
  },
  {
    "value": "bi bi-question",
    "label": "question"
  },
  {
    "value": "bi bi-question-circle",
    "label": "question-circle"
  },
  {
    "value": "bi bi-question-diamond",
    "label": "question-diamond"
  },
  {
    "value": "bi bi-question-diamond-fill",
    "label": "question-diamond-fill"
  },
  {
    "value": "bi bi-question-circle-fill",
    "label": "question-circle-fill"
  },
  {
    "value": "bi bi-question-lg",
    "label": "question-lg"
  },
  {
    "value": "bi bi-question-octagon",
    "label": "question-octagon"
  },
  {
    "value": "bi bi-question-octagon-fill",
    "label": "question-octagon-fill"
  },
  {
    "value": "bi bi-question-square",
    "label": "question-square"
  },
  {
    "value": "bi bi-question-square-fill",
    "label": "question-square-fill"
  },
  {
    "value": "bi bi-quora",
    "label": "quora"
  },
  {
    "value": "bi bi-quote",
    "label": "quote"
  },
  {
    "value": "bi bi-r-circle",
    "label": "r-circle"
  },
  {
    "value": "bi bi-r-circle-fill",
    "label": "r-circle-fill"
  },
  {
    "value": "bi bi-r-square",
    "label": "r-square"
  },
  {
    "value": "bi bi-r-square-fill",
    "label": "r-square-fill"
  },
  {
    "value": "bi bi-radar",
    "label": "radar"
  },
  {
    "value": "bi bi-radioactive",
    "label": "radioactive"
  },
  {
    "value": "bi bi-rainbow",
    "label": "rainbow"
  },
  {
    "value": "bi bi-receipt",
    "label": "receipt"
  },
  {
    "value": "bi bi-receipt-cutoff",
    "label": "receipt-cutoff"
  },
  {
    "value": "bi bi-reception-0",
    "label": "reception-0"
  },
  {
    "value": "bi bi-reception-1",
    "label": "reception-1"
  },
  {
    "value": "bi bi-reception-2",
    "label": "reception-2"
  },
  {
    "value": "bi bi-reception-3",
    "label": "reception-3"
  },
  {
    "value": "bi bi-reception-4",
    "label": "reception-4"
  },
  {
    "value": "bi bi-record",
    "label": "record"
  },
  {
    "value": "bi bi-record-btn",
    "label": "record-btn"
  },
  {
    "value": "bi bi-record-btn-fill",
    "label": "record-btn-fill"
  },
  {
    "value": "bi bi-record-circle",
    "label": "record-circle"
  },
  {
    "value": "bi bi-record-circle-fill",
    "label": "record-circle-fill"
  },
  {
    "value": "bi bi-record-fill",
    "label": "record-fill"
  },
  {
    "value": "bi bi-record2",
    "label": "record2"
  },
  {
    "value": "bi bi-record2-fill",
    "label": "record2-fill"
  },
  {
    "value": "bi bi-recycle",
    "label": "recycle"
  },
  {
    "value": "bi bi-reddit",
    "label": "reddit"
  },
  {
    "value": "bi bi-regex",
    "label": "regex"
  },
  {
    "value": "bi bi-repeat",
    "label": "repeat"
  },
  {
    "value": "bi bi-repeat-1",
    "label": "repeat-1"
  },
  {
    "value": "bi bi-reply",
    "label": "reply"
  },
  {
    "value": "bi bi-reply-all",
    "label": "reply-all"
  },
  {
    "value": "bi bi-reply-all-fill",
    "label": "reply-all-fill"
  },
  {
    "value": "bi bi-reply-fill",
    "label": "reply-fill"
  },
  {
    "value": "bi bi-rewind",
    "label": "rewind"
  },
  {
    "value": "bi bi-rewind-btn",
    "label": "rewind-btn"
  },
  {
    "value": "bi bi-rewind-btn-fill",
    "label": "rewind-btn-fill"
  },
  {
    "value": "bi bi-rewind-circle",
    "label": "rewind-circle"
  },
  {
    "value": "bi bi-rewind-circle-fill",
    "label": "rewind-circle-fill"
  },
  {
    "value": "bi bi-rewind-fill",
    "label": "rewind-fill"
  },
  {
    "value": "bi bi-robot",
    "label": "robot"
  },
  {
    "value": "bi bi-rocket",
    "label": "rocket"
  },
  {
    "value": "bi bi-rocket-fill",
    "label": "rocket-fill"
  },
  {
    "value": "bi bi-rocket-takeoff",
    "label": "rocket-takeoff"
  },
  {
    "value": "bi bi-rocket-takeoff-fill",
    "label": "rocket-takeoff-fill"
  },
  {
    "value": "bi bi-router",
    "label": "router"
  },
  {
    "value": "bi bi-router-fill",
    "label": "router-fill"
  },
  {
    "value": "bi bi-rss",
    "label": "rss"
  },
  {
    "value": "bi bi-rss-fill",
    "label": "rss-fill"
  },
  {
    "value": "bi bi-rulers",
    "label": "rulers"
  },
  {
    "value": "bi bi-safe",
    "label": "safe"
  },
  {
    "value": "bi bi-safe-fill",
    "label": "safe-fill"
  },
  {
    "value": "bi bi-safe2",
    "label": "safe2"
  },
  {
    "value": "bi bi-safe2-fill",
    "label": "safe2-fill"
  },
  {
    "value": "bi bi-save",
    "label": "save"
  },
  {
    "value": "bi bi-save-fill",
    "label": "save-fill"
  },
  {
    "value": "bi bi-save2",
    "label": "save2"
  },
  {
    "value": "bi bi-save2-fill",
    "label": "save2-fill"
  },
  {
    "value": "bi bi-scissors",
    "label": "scissors"
  },
  {
    "value": "bi bi-scooter",
    "label": "scooter"
  },
  {
    "value": "bi bi-screwdriver",
    "label": "screwdriver"
  },
  {
    "value": "bi bi-sd-card",
    "label": "sd-card"
  },
  {
    "value": "bi bi-sd-card-fill",
    "label": "sd-card-fill"
  },
  {
    "value": "bi bi-search",
    "label": "search"
  },
  {
    "value": "bi bi-search-heart",
    "label": "search-heart"
  },
  {
    "value": "bi bi-search-heart-fill",
    "label": "search-heart-fill"
  },
  {
    "value": "bi bi-segmented-nav",
    "label": "segmented-nav"
  },
  {
    "value": "bi bi-send",
    "label": "send"
  },
  {
    "value": "bi bi-send-arrow-down",
    "label": "send-arrow-down"
  },
  {
    "value": "bi bi-send-arrow-down-fill",
    "label": "send-arrow-down-fill"
  },
  {
    "value": "bi bi-send-arrow-up",
    "label": "send-arrow-up"
  },
  {
    "value": "bi bi-send-arrow-up-fill",
    "label": "send-arrow-up-fill"
  },
  {
    "value": "bi bi-send-check",
    "label": "send-check"
  },
  {
    "value": "bi bi-send-check-fill",
    "label": "send-check-fill"
  },
  {
    "value": "bi bi-send-dash",
    "label": "send-dash"
  },
  {
    "value": "bi bi-send-dash-fill",
    "label": "send-dash-fill"
  },
  {
    "value": "bi bi-send-exclamation",
    "label": "send-exclamation"
  },
  {
    "value": "bi bi-send-exclamation-fill",
    "label": "send-exclamation-fill"
  },
  {
    "value": "bi bi-send-fill",
    "label": "send-fill"
  },
  {
    "value": "bi bi-send-plus",
    "label": "send-plus"
  },
  {
    "value": "bi bi-send-plus-fill",
    "label": "send-plus-fill"
  },
  {
    "value": "bi bi-send-slash",
    "label": "send-slash"
  },
  {
    "value": "bi bi-send-slash-fill",
    "label": "send-slash-fill"
  },
  {
    "value": "bi bi-send-x",
    "label": "send-x"
  },
  {
    "value": "bi bi-send-x-fill",
    "label": "send-x-fill"
  },
  {
    "value": "bi bi-server",
    "label": "server"
  },
  {
    "value": "bi bi-shadows",
    "label": "shadows"
  },
  {
    "value": "bi bi-share",
    "label": "share"
  },
  {
    "value": "bi bi-share-fill",
    "label": "share-fill"
  },
  {
    "value": "bi bi-shield",
    "label": "shield"
  },
  {
    "value": "bi bi-shield-check",
    "label": "shield-check"
  },
  {
    "value": "bi bi-shield-exclamation",
    "label": "shield-exclamation"
  },
  {
    "value": "bi bi-shield-fill",
    "label": "shield-fill"
  },
  {
    "value": "bi bi-shield-fill-check",
    "label": "shield-fill-check"
  },
  {
    "value": "bi bi-shield-fill-exclamation",
    "label": "shield-fill-exclamation"
  },
  {
    "value": "bi bi-shield-fill-minus",
    "label": "shield-fill-minus"
  },
  {
    "value": "bi bi-shield-fill-plus",
    "label": "shield-fill-plus"
  },
  {
    "value": "bi bi-shield-fill-x",
    "label": "shield-fill-x"
  },
  {
    "value": "bi bi-shield-lock",
    "label": "shield-lock"
  },
  {
    "value": "bi bi-shield-lock-fill",
    "label": "shield-lock-fill"
  },
  {
    "value": "bi bi-shield-minus",
    "label": "shield-minus"
  },
  {
    "value": "bi bi-shield-plus",
    "label": "shield-plus"
  },
  {
    "value": "bi bi-shield-shaded",
    "label": "shield-shaded"
  },
  {
    "value": "bi bi-shield-slash",
    "label": "shield-slash"
  },
  {
    "value": "bi bi-shield-slash-fill",
    "label": "shield-slash-fill"
  },
  {
    "value": "bi bi-shield-x",
    "label": "shield-x"
  },
  {
    "value": "bi bi-shift",
    "label": "shift"
  },
  {
    "value": "bi bi-shift-fill",
    "label": "shift-fill"
  },
  {
    "value": "bi bi-shop",
    "label": "shop"
  },
  {
    "value": "bi bi-shop-window",
    "label": "shop-window"
  },
  {
    "value": "bi bi-shuffle",
    "label": "shuffle"
  },
  {
    "value": "bi bi-sign-dead-end",
    "label": "sign-dead-end"
  },
  {
    "value": "bi bi-sign-dead-end-fill",
    "label": "sign-dead-end-fill"
  },
  {
    "value": "bi bi-sign-do-not-enter",
    "label": "sign-do-not-enter"
  },
  {
    "value": "bi bi-sign-do-not-enter-fill",
    "label": "sign-do-not-enter-fill"
  },
  {
    "value": "bi bi-sign-intersection",
    "label": "sign-intersection"
  },
  {
    "value": "bi bi-sign-intersection-fill",
    "label": "sign-intersection-fill"
  },
  {
    "value": "bi bi-sign-intersection-side",
    "label": "sign-intersection-side"
  },
  {
    "value": "bi bi-sign-intersection-side-fill",
    "label": "sign-intersection-side-fill"
  },
  {
    "value": "bi bi-sign-intersection-t",
    "label": "sign-intersection-t"
  },
  {
    "value": "bi bi-sign-intersection-t-fill",
    "label": "sign-intersection-t-fill"
  },
  {
    "value": "bi bi-sign-intersection-y",
    "label": "sign-intersection-y"
  },
  {
    "value": "bi bi-sign-intersection-y-fill",
    "label": "sign-intersection-y-fill"
  },
  {
    "value": "bi bi-sign-merge-left",
    "label": "sign-merge-left"
  },
  {
    "value": "bi bi-sign-merge-left-fill",
    "label": "sign-merge-left-fill"
  },
  {
    "value": "bi bi-sign-merge-right",
    "label": "sign-merge-right"
  },
  {
    "value": "bi bi-sign-merge-right-fill",
    "label": "sign-merge-right-fill"
  },
  {
    "value": "bi bi-sign-no-left-turn",
    "label": "sign-no-left-turn"
  },
  {
    "value": "bi bi-sign-no-left-turn-fill",
    "label": "sign-no-left-turn-fill"
  },
  {
    "value": "bi bi-sign-no-parking",
    "label": "sign-no-parking"
  },
  {
    "value": "bi bi-sign-no-parking-fill",
    "label": "sign-no-parking-fill"
  },
  {
    "value": "bi bi-sign-no-right-turn",
    "label": "sign-no-right-turn"
  },
  {
    "value": "bi bi-sign-no-right-turn-fill",
    "label": "sign-no-right-turn-fill"
  },
  {
    "value": "bi bi-sign-railroad",
    "label": "sign-railroad"
  },
  {
    "value": "bi bi-sign-railroad-fill",
    "label": "sign-railroad-fill"
  },
  {
    "value": "bi bi-sign-stop",
    "label": "sign-stop"
  },
  {
    "value": "bi bi-sign-stop-fill",
    "label": "sign-stop-fill"
  },
  {
    "value": "bi bi-sign-stop-lights",
    "label": "sign-stop-lights"
  },
  {
    "value": "bi bi-sign-stop-lights-fill",
    "label": "sign-stop-lights-fill"
  },
  {
    "value": "bi bi-sign-turn-left",
    "label": "sign-turn-left"
  },
  {
    "value": "bi bi-sign-turn-left-fill",
    "label": "sign-turn-left-fill"
  },
  {
    "value": "bi bi-sign-turn-right",
    "label": "sign-turn-right"
  },
  {
    "value": "bi bi-sign-turn-right-fill",
    "label": "sign-turn-right-fill"
  },
  {
    "value": "bi bi-sign-turn-slight-left",
    "label": "sign-turn-slight-left"
  },
  {
    "value": "bi bi-sign-turn-slight-left-fill",
    "label": "sign-turn-slight-left-fill"
  },
  {
    "value": "bi bi-sign-turn-slight-right",
    "label": "sign-turn-slight-right"
  },
  {
    "value": "bi bi-sign-turn-slight-right-fill",
    "label": "sign-turn-slight-right-fill"
  },
  {
    "value": "bi bi-sign-yield",
    "label": "sign-yield"
  },
  {
    "value": "bi bi-sign-yield-fill",
    "label": "sign-yield-fill"
  },
  {
    "value": "bi bi-signal",
    "label": "signal"
  },
  {
    "value": "bi bi-signpost",
    "label": "signpost"
  },
  {
    "value": "bi bi-signpost-2",
    "label": "signpost-2"
  },
  {
    "value": "bi bi-signpost-2-fill",
    "label": "signpost-2-fill"
  },
  {
    "value": "bi bi-signpost-fill",
    "label": "signpost-fill"
  },
  {
    "value": "bi bi-signpost-split",
    "label": "signpost-split"
  },
  {
    "value": "bi bi-signpost-split-fill",
    "label": "signpost-split-fill"
  },
  {
    "value": "bi bi-sim",
    "label": "sim"
  },
  {
    "value": "bi bi-sim-fill",
    "label": "sim-fill"
  },
  {
    "value": "bi bi-sim-slash",
    "label": "sim-slash"
  },
  {
    "value": "bi bi-sim-slash-fill",
    "label": "sim-slash-fill"
  },
  {
    "value": "bi bi-sina-weibo",
    "label": "sina-weibo"
  },
  {
    "value": "bi bi-skip-backward",
    "label": "skip-backward"
  },
  {
    "value": "bi bi-skip-backward-btn",
    "label": "skip-backward-btn"
  },
  {
    "value": "bi bi-skip-backward-btn-fill",
    "label": "skip-backward-btn-fill"
  },
  {
    "value": "bi bi-skip-backward-circle",
    "label": "skip-backward-circle"
  },
  {
    "value": "bi bi-skip-backward-circle-fill",
    "label": "skip-backward-circle-fill"
  },
  {
    "value": "bi bi-skip-backward-fill",
    "label": "skip-backward-fill"
  },
  {
    "value": "bi bi-skip-end",
    "label": "skip-end"
  },
  {
    "value": "bi bi-skip-end-btn",
    "label": "skip-end-btn"
  },
  {
    "value": "bi bi-skip-end-btn-fill",
    "label": "skip-end-btn-fill"
  },
  {
    "value": "bi bi-skip-end-circle",
    "label": "skip-end-circle"
  },
  {
    "value": "bi bi-skip-end-circle-fill",
    "label": "skip-end-circle-fill"
  },
  {
    "value": "bi bi-skip-end-fill",
    "label": "skip-end-fill"
  },
  {
    "value": "bi bi-skip-forward",
    "label": "skip-forward"
  },
  {
    "value": "bi bi-skip-forward-btn",
    "label": "skip-forward-btn"
  },
  {
    "value": "bi bi-skip-forward-btn-fill",
    "label": "skip-forward-btn-fill"
  },
  {
    "value": "bi bi-skip-forward-circle",
    "label": "skip-forward-circle"
  },
  {
    "value": "bi bi-skip-forward-circle-fill",
    "label": "skip-forward-circle-fill"
  },
  {
    "value": "bi bi-skip-forward-fill",
    "label": "skip-forward-fill"
  },
  {
    "value": "bi bi-skip-start",
    "label": "skip-start"
  },
  {
    "value": "bi bi-skip-start-btn",
    "label": "skip-start-btn"
  },
  {
    "value": "bi bi-skip-start-btn-fill",
    "label": "skip-start-btn-fill"
  },
  {
    "value": "bi bi-skip-start-circle",
    "label": "skip-start-circle"
  },
  {
    "value": "bi bi-skip-start-circle-fill",
    "label": "skip-start-circle-fill"
  },
  {
    "value": "bi bi-skip-start-fill",
    "label": "skip-start-fill"
  },
  {
    "value": "bi bi-skype",
    "label": "skype"
  },
  {
    "value": "bi bi-slack",
    "label": "slack"
  },
  {
    "value": "bi bi-slash",
    "label": "slash"
  },
  {
    "value": "bi bi-slash-circle-fill",
    "label": "slash-circle-fill"
  },
  {
    "value": "bi bi-slash-lg",
    "label": "slash-lg"
  },
  {
    "value": "bi bi-slash-square",
    "label": "slash-square"
  },
  {
    "value": "bi bi-slash-square-fill",
    "label": "slash-square-fill"
  },
  {
    "value": "bi bi-sliders",
    "label": "sliders"
  },
  {
    "value": "bi bi-sliders2",
    "label": "sliders2"
  },
  {
    "value": "bi bi-sliders2-vertical",
    "label": "sliders2-vertical"
  },
  {
    "value": "bi bi-smartwatch",
    "label": "smartwatch"
  },
  {
    "value": "bi bi-snapchat",
    "label": "snapchat"
  },
  {
    "value": "bi bi-snow",
    "label": "snow"
  },
  {
    "value": "bi bi-snow2",
    "label": "snow2"
  },
  {
    "value": "bi bi-snow3",
    "label": "snow3"
  },
  {
    "value": "bi bi-sort-alpha-down",
    "label": "sort-alpha-down"
  },
  {
    "value": "bi bi-sort-alpha-down-alt",
    "label": "sort-alpha-down-alt"
  },
  {
    "value": "bi bi-sort-alpha-up",
    "label": "sort-alpha-up"
  },
  {
    "value": "bi bi-sort-alpha-up-alt",
    "label": "sort-alpha-up-alt"
  },
  {
    "value": "bi bi-sort-down",
    "label": "sort-down"
  },
  {
    "value": "bi bi-sort-down-alt",
    "label": "sort-down-alt"
  },
  {
    "value": "bi bi-sort-numeric-down",
    "label": "sort-numeric-down"
  },
  {
    "value": "bi bi-sort-numeric-down-alt",
    "label": "sort-numeric-down-alt"
  },
  {
    "value": "bi bi-sort-numeric-up",
    "label": "sort-numeric-up"
  },
  {
    "value": "bi bi-sort-numeric-up-alt",
    "label": "sort-numeric-up-alt"
  },
  {
    "value": "bi bi-sort-up",
    "label": "sort-up"
  },
  {
    "value": "bi bi-sort-up-alt",
    "label": "sort-up-alt"
  },
  {
    "value": "bi bi-soundwave",
    "label": "soundwave"
  },
  {
    "value": "bi bi-sourceforge",
    "label": "sourceforge"
  },
  {
    "value": "bi bi-speaker",
    "label": "speaker"
  },
  {
    "value": "bi bi-speaker-fill",
    "label": "speaker-fill"
  },
  {
    "value": "bi bi-speedometer",
    "label": "speedometer"
  },
  {
    "value": "bi bi-speedometer2",
    "label": "speedometer2"
  },
  {
    "value": "bi bi-spellcheck",
    "label": "spellcheck"
  },
  {
    "value": "bi bi-spotify",
    "label": "spotify"
  },
  {
    "value": "bi bi-square",
    "label": "square"
  },
  {
    "value": "bi bi-square-fill",
    "label": "square-fill"
  },
  {
    "value": "bi bi-square-half",
    "label": "square-half"
  },
  {
    "value": "bi bi-stack",
    "label": "stack"
  },
  {
    "value": "bi bi-stack-overflow",
    "label": "stack-overflow"
  },
  {
    "value": "bi bi-star",
    "label": "star"
  },
  {
    "value": "bi bi-star-fill",
    "label": "star-fill"
  },
  {
    "value": "bi bi-star-half",
    "label": "star-half"
  },
  {
    "value": "bi bi-stars",
    "label": "stars"
  },
  {
    "value": "bi bi-steam",
    "label": "steam"
  },
  {
    "value": "bi bi-stickies",
    "label": "stickies"
  },
  {
    "value": "bi bi-stickies-fill",
    "label": "stickies-fill"
  },
  {
    "value": "bi bi-sticky",
    "label": "sticky"
  },
  {
    "value": "bi bi-sticky-fill",
    "label": "sticky-fill"
  },
  {
    "value": "bi bi-stop",
    "label": "stop"
  },
  {
    "value": "bi bi-stop-btn",
    "label": "stop-btn"
  },
  {
    "value": "bi bi-stop-btn-fill",
    "label": "stop-btn-fill"
  },
  {
    "value": "bi bi-stop-circle",
    "label": "stop-circle"
  },
  {
    "value": "bi bi-stop-circle-fill",
    "label": "stop-circle-fill"
  },
  {
    "value": "bi bi-stop-fill",
    "label": "stop-fill"
  },
  {
    "value": "bi bi-stoplights",
    "label": "stoplights"
  },
  {
    "value": "bi bi-stoplights-fill",
    "label": "stoplights-fill"
  },
  {
    "value": "bi bi-stopwatch",
    "label": "stopwatch"
  },
  {
    "value": "bi bi-stopwatch-fill",
    "label": "stopwatch-fill"
  },
  {
    "value": "bi bi-strava",
    "label": "strava"
  },
  {
    "value": "bi bi-stripe",
    "label": "stripe"
  },
  {
    "value": "bi bi-subscript",
    "label": "subscript"
  },
  {
    "value": "bi bi-substack",
    "label": "substack"
  },
  {
    "value": "bi bi-subtract",
    "label": "subtract"
  },
  {
    "value": "bi bi-suit-club",
    "label": "suit-club"
  },
  {
    "value": "bi bi-suit-club-fill",
    "label": "suit-club-fill"
  },
  {
    "value": "bi bi-suit-diamond",
    "label": "suit-diamond"
  },
  {
    "value": "bi bi-suit-diamond-fill",
    "label": "suit-diamond-fill"
  },
  {
    "value": "bi bi-suit-heart",
    "label": "suit-heart"
  },
  {
    "value": "bi bi-suit-heart-fill",
    "label": "suit-heart-fill"
  },
  {
    "value": "bi bi-suit-spade",
    "label": "suit-spade"
  },
  {
    "value": "bi bi-suit-spade-fill",
    "label": "suit-spade-fill"
  },
  {
    "value": "bi bi-suitcase",
    "label": "suitcase"
  },
  {
    "value": "bi bi-suitcase-fill",
    "label": "suitcase-fill"
  },
  {
    "value": "bi bi-suitcase-lg",
    "label": "suitcase-lg"
  },
  {
    "value": "bi bi-suitcase-lg-fill",
    "label": "suitcase-lg-fill"
  },
  {
    "value": "bi bi-suitcase2",
    "label": "suitcase2"
  },
  {
    "value": "bi bi-suitcase2-fill",
    "label": "suitcase2-fill"
  },
  {
    "value": "bi bi-sun",
    "label": "sun"
  },
  {
    "value": "bi bi-sun-fill",
    "label": "sun-fill"
  },
  {
    "value": "bi bi-sunglasses",
    "label": "sunglasses"
  },
  {
    "value": "bi bi-sunrise",
    "label": "sunrise"
  },
  {
    "value": "bi bi-sunrise-fill",
    "label": "sunrise-fill"
  },
  {
    "value": "bi bi-sunset",
    "label": "sunset"
  },
  {
    "value": "bi bi-sunset-fill",
    "label": "sunset-fill"
  },
  {
    "value": "bi bi-superscript",
    "label": "superscript"
  },
  {
    "value": "bi bi-symmetry-horizontal",
    "label": "symmetry-horizontal"
  },
  {
    "value": "bi bi-symmetry-vertical",
    "label": "symmetry-vertical"
  },
  {
    "value": "bi bi-table",
    "label": "table"
  },
  {
    "value": "bi bi-tablet",
    "label": "tablet"
  },
  {
    "value": "bi bi-tablet-fill",
    "label": "tablet-fill"
  },
  {
    "value": "bi bi-tablet-landscape",
    "label": "tablet-landscape"
  },
  {
    "value": "bi bi-tablet-landscape-fill",
    "label": "tablet-landscape-fill"
  },
  {
    "value": "bi bi-tag",
    "label": "tag"
  },
  {
    "value": "bi bi-tag-fill",
    "label": "tag-fill"
  },
  {
    "value": "bi bi-tags",
    "label": "tags"
  },
  {
    "value": "bi bi-tags-fill",
    "label": "tags-fill"
  },
  {
    "value": "bi bi-taxi-front",
    "label": "taxi-front"
  },
  {
    "value": "bi bi-taxi-front-fill",
    "label": "taxi-front-fill"
  },
  {
    "value": "bi bi-telegram",
    "label": "telegram"
  },
  {
    "value": "bi bi-telephone",
    "label": "telephone"
  },
  {
    "value": "bi bi-telephone-fill",
    "label": "telephone-fill"
  },
  {
    "value": "bi bi-telephone-forward",
    "label": "telephone-forward"
  },
  {
    "value": "bi bi-telephone-forward-fill",
    "label": "telephone-forward-fill"
  },
  {
    "value": "bi bi-telephone-inbound",
    "label": "telephone-inbound"
  },
  {
    "value": "bi bi-telephone-inbound-fill",
    "label": "telephone-inbound-fill"
  },
  {
    "value": "bi bi-telephone-minus",
    "label": "telephone-minus"
  },
  {
    "value": "bi bi-telephone-minus-fill",
    "label": "telephone-minus-fill"
  },
  {
    "value": "bi bi-telephone-outbound",
    "label": "telephone-outbound"
  },
  {
    "value": "bi bi-telephone-outbound-fill",
    "label": "telephone-outbound-fill"
  },
  {
    "value": "bi bi-telephone-plus",
    "label": "telephone-plus"
  },
  {
    "value": "bi bi-telephone-plus-fill",
    "label": "telephone-plus-fill"
  },
  {
    "value": "bi bi-telephone-x",
    "label": "telephone-x"
  },
  {
    "value": "bi bi-telephone-x-fill",
    "label": "telephone-x-fill"
  },
  {
    "value": "bi bi-tencent-qq",
    "label": "tencent-qq"
  },
  {
    "value": "bi bi-terminal",
    "label": "terminal"
  },
  {
    "value": "bi bi-terminal-dash",
    "label": "terminal-dash"
  },
  {
    "value": "bi bi-terminal-fill",
    "label": "terminal-fill"
  },
  {
    "value": "bi bi-terminal-plus",
    "label": "terminal-plus"
  },
  {
    "value": "bi bi-terminal-split",
    "label": "terminal-split"
  },
  {
    "value": "bi bi-terminal-x",
    "label": "terminal-x"
  },
  {
    "value": "bi bi-text-center",
    "label": "text-center"
  },
  {
    "value": "bi bi-text-indent-left",
    "label": "text-indent-left"
  },
  {
    "value": "bi bi-text-indent-right",
    "label": "text-indent-right"
  },
  {
    "value": "bi bi-text-left",
    "label": "text-left"
  },
  {
    "value": "bi bi-text-paragraph",
    "label": "text-paragraph"
  },
  {
    "value": "bi bi-text-right",
    "label": "text-right"
  },
  {
    "value": "bi bi-text-wrap",
    "label": "text-wrap"
  },
  {
    "value": "bi bi-textarea",
    "label": "textarea"
  },
  {
    "value": "bi bi-textarea-resize",
    "label": "textarea-resize"
  },
  {
    "value": "bi bi-textarea-t",
    "label": "textarea-t"
  },
  {
    "value": "bi bi-thermometer",
    "label": "thermometer"
  },
  {
    "value": "bi bi-thermometer-half",
    "label": "thermometer-half"
  },
  {
    "value": "bi bi-thermometer-high",
    "label": "thermometer-high"
  },
  {
    "value": "bi bi-thermometer-low",
    "label": "thermometer-low"
  },
  {
    "value": "bi bi-thermometer-snow",
    "label": "thermometer-snow"
  },
  {
    "value": "bi bi-thermometer-sun",
    "label": "thermometer-sun"
  },
  {
    "value": "bi bi-threads",
    "label": "threads"
  },
  {
    "value": "bi bi-threads-fill",
    "label": "threads-fill"
  },
  {
    "value": "bi bi-three-dots",
    "label": "three-dots"
  },
  {
    "value": "bi bi-three-dots-vertical",
    "label": "three-dots-vertical"
  },
  {
    "value": "bi bi-thunderbolt",
    "label": "thunderbolt"
  },
  {
    "value": "bi bi-thunderbolt-fill",
    "label": "thunderbolt-fill"
  },
  {
    "value": "bi bi-ticket",
    "label": "ticket"
  },
  {
    "value": "bi bi-ticket-detailed",
    "label": "ticket-detailed"
  },
  {
    "value": "bi bi-ticket-detailed-fill",
    "label": "ticket-detailed-fill"
  },
  {
    "value": "bi bi-ticket-fill",
    "label": "ticket-fill"
  },
  {
    "value": "bi bi-ticket-perforated",
    "label": "ticket-perforated"
  },
  {
    "value": "bi bi-ticket-perforated-fill",
    "label": "ticket-perforated-fill"
  },
  {
    "value": "bi bi-tiktok",
    "label": "tiktok"
  },
  {
    "value": "bi bi-toggle-off",
    "label": "toggle-off"
  },
  {
    "value": "bi bi-toggle-on",
    "label": "toggle-on"
  },
  {
    "value": "bi bi-toggle2-off",
    "label": "toggle2-off"
  },
  {
    "value": "bi bi-toggle2-on",
    "label": "toggle2-on"
  },
  {
    "value": "bi bi-toggles",
    "label": "toggles"
  },
  {
    "value": "bi bi-toggles2",
    "label": "toggles2"
  },
  {
    "value": "bi bi-tools",
    "label": "tools"
  },
  {
    "value": "bi bi-tornado",
    "label": "tornado"
  },
  {
    "value": "bi bi-train-freight-front",
    "label": "train-freight-front"
  },
  {
    "value": "bi bi-train-freight-front-fill",
    "label": "train-freight-front-fill"
  },
  {
    "value": "bi bi-train-front",
    "label": "train-front"
  },
  {
    "value": "bi bi-train-front-fill",
    "label": "train-front-fill"
  },
  {
    "value": "bi bi-train-lightrail-front",
    "label": "train-lightrail-front"
  },
  {
    "value": "bi bi-train-lightrail-front-fill",
    "label": "train-lightrail-front-fill"
  },
  {
    "value": "bi bi-translate",
    "label": "translate"
  },
  {
    "value": "bi bi-transparency",
    "label": "transparency"
  },
  {
    "value": "bi bi-trash",
    "label": "trash"
  },
  {
    "value": "bi bi-trash-fill",
    "label": "trash-fill"
  },
  {
    "value": "bi bi-trash2",
    "label": "trash2"
  },
  {
    "value": "bi bi-trash2-fill",
    "label": "trash2-fill"
  },
  {
    "value": "bi bi-trash3",
    "label": "trash3"
  },
  {
    "value": "bi bi-trash3-fill",
    "label": "trash3-fill"
  },
  {
    "value": "bi bi-tree",
    "label": "tree"
  },
  {
    "value": "bi bi-tree-fill",
    "label": "tree-fill"
  },
  {
    "value": "bi bi-trello",
    "label": "trello"
  },
  {
    "value": "bi bi-triangle",
    "label": "triangle"
  },
  {
    "value": "bi bi-triangle-fill",
    "label": "triangle-fill"
  },
  {
    "value": "bi bi-triangle-half",
    "label": "triangle-half"
  },
  {
    "value": "bi bi-trophy",
    "label": "trophy"
  },
  {
    "value": "bi bi-trophy-fill",
    "label": "trophy-fill"
  },
  {
    "value": "bi bi-tropical-storm",
    "label": "tropical-storm"
  },
  {
    "value": "bi bi-truck",
    "label": "truck"
  },
  {
    "value": "bi bi-truck-flatbed",
    "label": "truck-flatbed"
  },
  {
    "value": "bi bi-truck-front",
    "label": "truck-front"
  },
  {
    "value": "bi bi-truck-front-fill",
    "label": "truck-front-fill"
  },
  {
    "value": "bi bi-tsunami",
    "label": "tsunami"
  },
  {
    "value": "bi bi-tv",
    "label": "tv"
  },
  {
    "value": "bi bi-tv-fill",
    "label": "tv-fill"
  },
  {
    "value": "bi bi-twitch",
    "label": "twitch"
  },
  {
    "value": "bi bi-twitter",
    "label": "twitter"
  },
  {
    "value": "bi bi-twitter-x",
    "label": "twitter-x"
  },
  {
    "value": "bi bi-type",
    "label": "type"
  },
  {
    "value": "bi bi-type-bold",
    "label": "type-bold"
  },
  {
    "value": "bi bi-type-h1",
    "label": "type-h1"
  },
  {
    "value": "bi bi-type-h2",
    "label": "type-h2"
  },
  {
    "value": "bi bi-type-h3",
    "label": "type-h3"
  },
  {
    "value": "bi bi-type-h4",
    "label": "type-h4"
  },
  {
    "value": "bi bi-type-h5",
    "label": "type-h5"
  },
  {
    "value": "bi bi-type-h6",
    "label": "type-h6"
  },
  {
    "value": "bi bi-type-italic",
    "label": "type-italic"
  },
  {
    "value": "bi bi-type-strikethrough",
    "label": "type-strikethrough"
  },
  {
    "value": "bi bi-type-underline",
    "label": "type-underline"
  },
  {
    "value": "bi bi-ubuntu",
    "label": "ubuntu"
  },
  {
    "value": "bi bi-ui-checks",
    "label": "ui-checks"
  },
  {
    "value": "bi bi-ui-checks-grid",
    "label": "ui-checks-grid"
  },
  {
    "value": "bi bi-ui-radios",
    "label": "ui-radios"
  },
  {
    "value": "bi bi-ui-radios-grid",
    "label": "ui-radios-grid"
  },
  {
    "value": "bi bi-umbrella",
    "label": "umbrella"
  },
  {
    "value": "bi bi-umbrella-fill",
    "label": "umbrella-fill"
  },
  {
    "value": "bi bi-unindent",
    "label": "unindent"
  },
  {
    "value": "bi bi-union",
    "label": "union"
  },
  {
    "value": "bi bi-unity",
    "label": "unity"
  },
  {
    "value": "bi bi-universal-access",
    "label": "universal-access"
  },
  {
    "value": "bi bi-universal-access-circle",
    "label": "universal-access-circle"
  },
  {
    "value": "bi bi-unlock",
    "label": "unlock"
  },
  {
    "value": "bi bi-unlock-fill",
    "label": "unlock-fill"
  },
  {
    "value": "bi bi-upc",
    "label": "upc"
  },
  {
    "value": "bi bi-upc-scan",
    "label": "upc-scan"
  },
  {
    "value": "bi bi-upload",
    "label": "upload"
  },
  {
    "value": "bi bi-usb",
    "label": "usb"
  },
  {
    "value": "bi bi-usb-c",
    "label": "usb-c"
  },
  {
    "value": "bi bi-usb-c-fill",
    "label": "usb-c-fill"
  },
  {
    "value": "bi bi-usb-drive",
    "label": "usb-drive"
  },
  {
    "value": "bi bi-usb-drive-fill",
    "label": "usb-drive-fill"
  },
  {
    "value": "bi bi-usb-fill",
    "label": "usb-fill"
  },
  {
    "value": "bi bi-usb-micro",
    "label": "usb-micro"
  },
  {
    "value": "bi bi-usb-micro-fill",
    "label": "usb-micro-fill"
  },
  {
    "value": "bi bi-usb-mini",
    "label": "usb-mini"
  },
  {
    "value": "bi bi-usb-mini-fill",
    "label": "usb-mini-fill"
  },
  {
    "value": "bi bi-usb-plug",
    "label": "usb-plug"
  },
  {
    "value": "bi bi-usb-plug-fill",
    "label": "usb-plug-fill"
  },
  {
    "value": "bi bi-usb-symbol",
    "label": "usb-symbol"
  },
  {
    "value": "bi bi-valentine",
    "label": "valentine"
  },
  {
    "value": "bi bi-valentine2",
    "label": "valentine2"
  },
  {
    "value": "bi bi-vector-pen",
    "label": "vector-pen"
  },
  {
    "value": "bi bi-view-list",
    "label": "view-list"
  },
  {
    "value": "bi bi-view-stacked",
    "label": "view-stacked"
  },
  {
    "value": "bi bi-vignette",
    "label": "vignette"
  },
  {
    "value": "bi bi-vimeo",
    "label": "vimeo"
  },
  {
    "value": "bi bi-vinyl",
    "label": "vinyl"
  },
  {
    "value": "bi bi-vinyl-fill",
    "label": "vinyl-fill"
  },
  {
    "value": "bi bi-virus",
    "label": "virus"
  },
  {
    "value": "bi bi-virus2",
    "label": "virus2"
  },
  {
    "value": "bi bi-voicemail",
    "label": "voicemail"
  },
  {
    "value": "bi bi-volume-down",
    "label": "volume-down"
  },
  {
    "value": "bi bi-volume-down-fill",
    "label": "volume-down-fill"
  },
  {
    "value": "bi bi-volume-mute",
    "label": "volume-mute"
  },
  {
    "value": "bi bi-volume-mute-fill",
    "label": "volume-mute-fill"
  },
  {
    "value": "bi bi-volume-off",
    "label": "volume-off"
  },
  {
    "value": "bi bi-volume-off-fill",
    "label": "volume-off-fill"
  },
  {
    "value": "bi bi-volume-up",
    "label": "volume-up"
  },
  {
    "value": "bi bi-volume-up-fill",
    "label": "volume-up-fill"
  },
  {
    "value": "bi bi-vr",
    "label": "vr"
  },
  {
    "value": "bi bi-wallet",
    "label": "wallet"
  },
  {
    "value": "bi bi-wallet-fill",
    "label": "wallet-fill"
  },
  {
    "value": "bi bi-wallet2",
    "label": "wallet2"
  },
  {
    "value": "bi bi-watch",
    "label": "watch"
  },
  {
    "value": "bi bi-water",
    "label": "water"
  },
  {
    "value": "bi bi-webcam",
    "label": "webcam"
  },
  {
    "value": "bi bi-webcam-fill",
    "label": "webcam-fill"
  },
  {
    "value": "bi bi-wechat",
    "label": "wechat"
  },
  {
    "value": "bi bi-whatsapp",
    "label": "whatsapp"
  },
  {
    "value": "bi bi-wifi",
    "label": "wifi"
  },
  {
    "value": "bi bi-wifi-1",
    "label": "wifi-1"
  },
  {
    "value": "bi bi-wifi-2",
    "label": "wifi-2"
  },
  {
    "value": "bi bi-wifi-off",
    "label": "wifi-off"
  },
  {
    "value": "bi bi-wikipedia",
    "label": "wikipedia"
  },
  {
    "value": "bi bi-wind",
    "label": "wind"
  },
  {
    "value": "bi bi-window",
    "label": "window"
  },
  {
    "value": "bi bi-window-dash",
    "label": "window-dash"
  },
  {
    "value": "bi bi-window-desktop",
    "label": "window-desktop"
  },
  {
    "value": "bi bi-window-dock",
    "label": "window-dock"
  },
  {
    "value": "bi bi-window-fullscreen",
    "label": "window-fullscreen"
  },
  {
    "value": "bi bi-window-plus",
    "label": "window-plus"
  },
  {
    "value": "bi bi-window-sidebar",
    "label": "window-sidebar"
  },
  {
    "value": "bi bi-window-split",
    "label": "window-split"
  },
  {
    "value": "bi bi-window-stack",
    "label": "window-stack"
  },
  {
    "value": "bi bi-window-x",
    "label": "window-x"
  },
  {
    "value": "bi bi-windows",
    "label": "windows"
  },
  {
    "value": "bi bi-wordpress",
    "label": "wordpress"
  },
  {
    "value": "bi bi-wrench",
    "label": "wrench"
  },
  {
    "value": "bi bi-wrench-adjustable",
    "label": "wrench-adjustable"
  },
  {
    "value": "bi bi-wrench-adjustable-circle",
    "label": "wrench-adjustable-circle"
  },
  {
    "value": "bi bi-wrench-adjustable-circle-fill",
    "label": "wrench-adjustable-circle-fill"
  },
  {
    "value": "bi bi-x",
    "label": "x"
  },
  {
    "value": "bi bi-x-circle",
    "label": "x-circle"
  },
  {
    "value": "bi bi-x-circle-fill",
    "label": "x-circle-fill"
  },
  {
    "value": "bi bi-x-diamond",
    "label": "x-diamond"
  },
  {
    "value": "bi bi-x-diamond-fill",
    "label": "x-diamond-fill"
  },
  {
    "value": "bi bi-x-lg",
    "label": "x-lg"
  },
  {
    "value": "bi bi-x-octagon",
    "label": "x-octagon"
  },
  {
    "value": "bi bi-x-octagon-fill",
    "label": "x-octagon-fill"
  },
  {
    "value": "bi bi-x-square",
    "label": "x-square"
  },
  {
    "value": "bi bi-x-square-fill",
    "label": "x-square-fill"
  },
  {
    "value": "bi bi-xbox",
    "label": "xbox"
  },
  {
    "value": "bi bi-yelp",
    "label": "yelp"
  },
  {
    "value": "bi bi-yin-yang",
    "label": "yin-yang"
  },
  {
    "value": "bi bi-youtube",
    "label": "youtube"
  },
  {
    "value": "bi bi-zoom-in",
    "label": "zoom-in"
  },
  {
    "value": "bi bi-zoom-out",
    "label": "zoom-out"
  }
];

// src/components/Icon/SelectIcon.tsx
import { useState as useState2 } from "react";
import { jsx as jsx13, jsxs as jsxs2 } from "react/jsx-runtime";
var SelectIcon = (props) => {
  console.log("props", props);
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    initialItems: listIcon,
    filter: contains
  });
  const [value, setValue] = useState2([]);
  return /* @__PURE__ */ jsxs2(
    Combobox.Root,
    {
      collection,
      onInputValueChange: (e) => filter(e.inputValue),
      width: "100%",
      placeholder: "",
      openOnClick: true,
      defaultValue: props?.value && props?.value?.split(","),
      value,
      onValueChange: (e) => {
        console.log("e", e);
        if (props?.onChange) {
          props?.onChange(e.value.join(","));
        }
        setValue(e.value);
      },
      children: [
        /* @__PURE__ */ jsx13(Combobox.Label, { children: "Search and select icon" }),
        /* @__PURE__ */ jsxs2(Combobox.Control, { children: [
          /* @__PURE__ */ jsx13(Combobox.Input, {}),
          /* @__PURE__ */ jsx13(Combobox.IndicatorGroup, { children: /* @__PURE__ */ jsx13(Combobox.Trigger, {}) })
        ] }),
        /* @__PURE__ */ jsx13(Portal, { children: /* @__PURE__ */ jsx13(Combobox.Positioner, { children: /* @__PURE__ */ jsxs2(Combobox.Content, { children: [
          /* @__PURE__ */ jsx13(Combobox.Empty, { children: "No items found" }),
          collection.items.map((item) => /* @__PURE__ */ jsxs2(Combobox.Item, { item, children: [
            renderIcon({ iconName: item?.value }),
            /* @__PURE__ */ jsx13(Span, { flex: "1", children: item.label }),
            /* @__PURE__ */ jsx13(Combobox.ItemIndicator, {})
          ] }, item.value))
        ] }) }) })
      ]
    }
  );
};
var SelectIcon_default = SelectIcon;

// src/components/Icon/index.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
var IconField = {
  type: "custom",
  render: ({
    name,
    onChange,
    value,
    label
  }) => {
    console.log("name", name);
    return /* @__PURE__ */ jsx14(FieldLabel3, { label, children: /* @__PURE__ */ jsx14(SelectIcon_default, { value, onChange }) });
  }
};

// src/blocks/Input/index.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var baseInput = {
  fields: {
    variableName: { type: "text", label: "Variable Name (e.g., searchQuery)" },
    placeholder: { type: "text", label: "Placeholder" },
    initialValue: { type: "text", label: "Value" },
    size: {
      label: "Size",
      type: "select",
      labelIcon: /* @__PURE__ */ jsx15(ALargeSmall, { size: 16 }),
      options: [
        { label: "2Xs", value: "2xs" },
        { label: "Xs", value: "xs" },
        { label: "Sm", value: "sm" },
        { label: "Md", value: "md" },
        { label: "Lg", value: "lg" },
        { label: "Xl", value: "xl" },
        { label: "2Xl", value: "2xl" }
      ]
    },
    variant: {
      label: "Variants",
      type: "select",
      options: [
        { label: "Flushed", value: "flushed" },
        { label: "Subtle", value: "subtle" },
        { label: "Outline", value: "outline" }
      ]
    },
    color: {
      label: "Color",
      ...colorField
    },
    backgroundColor: {
      label: "Background Color",
      ...colorField
    },
    iconLeft: {
      label: "Icon Left",
      ...IconField
    },
    textLeft: {
      label: "Text Left",
      type: "text"
    },
    iconRight: {
      label: "Icon Right",
      ...IconField
    },
    textRight: {
      label: "Text Right",
      type: "text"
    }
  },
  defaultProps: {
    variableName: "",
    placeholder: "",
    initialValue: "",
    size: "md",
    variant: "outline",
    color: "",
    backgroundColor: "",
    iconLeft: void 0,
    textLeft: void 0,
    iconRight: void 0,
    textRight: void 0
  },
  render: ({
    variableName,
    placeholder,
    initialValue,
    size,
    variant,
    color,
    backgroundColor,
    iconLeft,
    textLeft,
    iconRight,
    textRight
  }) => {
    const [variables, setVariables] = useRecoilState(VariableState);
    const value = useMemo(() => {
      return get(variables, variableName, initialValue);
    }, [variableName, variables, initialValue]);
    useEffect2(() => {
      if (variableName) {
        setVariables({ ...variables, [variableName]: value });
      }
    }, [value, variableName]);
    const renderElementInput = (icon, text) => {
      if (icon) {
        return renderIcon({
          iconName: icon
        });
      }
      if (text) {
        return text;
      }
      return null;
    };
    const renderStart = useMemo(() => {
      return renderElementInput(iconLeft, textLeft);
    }, [iconLeft, textLeft]);
    const renderEnd = useMemo(() => {
      return renderElementInput(iconRight, textRight);
    }, [iconRight, textRight]);
    return /* @__PURE__ */ jsx15(InputGroup, { startElement: renderStart, endElement: renderEnd, children: /* @__PURE__ */ jsx15(
      ChakraInput,
      {
        size,
        variant,
        placeholder,
        value: value || "",
        style: {
          color,
          backgroundColor
        },
        onChange: (e) => {
          return setVariables((prev) => ({
            ...prev,
            [variableName]: e.target.value
          }));
        }
      }
    ) });
  }
};
var Input = withLayout(baseInput);

// src/blocks/Button/index.tsx
import { Button } from "@chakra-ui/react";
import { ALargeSmall as ALargeSmall2 } from "lucide-react";
import { jsx as jsx16, jsxs as jsxs3 } from "react/jsx-runtime";
var ButtonPlugins = {
  label: "Button",
  fields: {
    label: {
      label: "Label",
      type: "text",
      placeholder: "Lorem ipsum...",
      contentEditable: true
    },
    typeView: {
      label: "Type view",
      type: "select",
      labelIcon: /* @__PURE__ */ jsx16(ALargeSmall2, { size: 16 }),
      options: [
        { label: "Normal", value: "normal" },
        { label: "Button Google play", value: "buttonGgPlay" },
        { label: "Button App Store", value: "buttonAppStore" }
      ]
    },
    size: {
      label: "Size",
      type: "select",
      labelIcon: /* @__PURE__ */ jsx16(ALargeSmall2, { size: 16 }),
      options: [
        { label: "2Xs", value: "2xs" },
        { label: "Xs", value: "xs" },
        { label: "Sm", value: "sm" },
        { label: "Md", value: "md" },
        { label: "Lg", value: "lg" },
        { label: "Xl", value: "xl" },
        { label: "2Xl", value: "2xl" }
      ]
    },
    href: {
      label: "Link",
      type: "text"
    },
    variant: {
      label: "Variants",
      type: "select",
      options: [
        { label: "Solid", value: "solid" },
        { label: "Subtle", value: "subtle" },
        { label: "Surface", value: "surface" },
        { label: "Outline", value: "outline" },
        { label: "Ghost", value: "ghost" },
        { label: "Plain", value: "plain" }
      ]
    },
    color: {
      label: "Color",
      ...colorField
    },
    backgroundColor: {
      label: "Background Color",
      ...colorField
    },
    icon: {
      label: "Icon",
      ...IconField
    },
    positionIcon: {
      label: "Position Icon",
      type: "select",
      options: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" }
      ]
    },
    iconSize: {
      label: "Size",
      type: "text",
      placeholder: "...px"
    },
    iconColor: {
      label: "Icon Color",
      ...colorField
    }
  },
  defaultProps: {
    label: "Button",
    variant: "solid",
    size: "md",
    href: "",
    color: "",
    typeView: "normal",
    icon: "",
    positionIcon: "left",
    iconSize: "14px",
    iconColor: ""
  },
  render: ({
    href,
    variant,
    label,
    size,
    color,
    backgroundColor,
    typeView,
    icon,
    positionIcon,
    iconSize,
    iconColor
    // puck
  }) => {
    console.log("icon", icon);
    return /* @__PURE__ */ jsxs3("div", { children: [
      (!typeView || typeView === "normal") && /* @__PURE__ */ jsxs3(
        Button,
        {
          style: {
            color,
            backgroundColor
          },
          variant,
          size,
          children: [
            positionIcon == "left" && renderIcon({
              iconName: icon,
              mf_color: iconColor,
              mf_font_size: iconSize
            }),
            /* @__PURE__ */ jsx16("a", { href, children: label }),
            positionIcon == "right" && renderIcon({
              iconName: icon,
              mf_color: iconColor,
              mf_font_size: iconSize
            })
          ]
        }
      ),
      typeView === "buttonGgPlay" && /* @__PURE__ */ jsx16("div", { children: "buttonGgPlay" }),
      typeView === "buttonAppStore" && /* @__PURE__ */ jsx16("div", { children: "buttonAppStore" })
    ] });
  }
};

// src/blocks/Products/index.tsx
import { useEffect as useEffect8, useMemo as useMemo6, useState as useState8 } from "react";
import { debounce, get as get3, round as round3 } from "lodash";

// src/client/httpClient.ts
import axios from "axios";
var initHttpClient = () => {
  let URL2 = "";
  if (typeof process !== "undefined") {
    URL2 = process?.env?.NEXT_PUBLIC_CUSTOMER_API_URL;
  } else {
    URL2 = import.meta.env.VITE_CUSTOMER_API_URL;
  }
  const httpClient = axios.create({
    baseURL: URL2
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
var getProducts = async (payload, signal) => {
  const httpClient = initHttpClient();
  const response = await httpClient.get(`/api/v1/products`, {
    params: payload,
    signal
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
  Card as Card3,
  CardBody as CardBody2,
  CardFooter as CardFooter2,
  Image as Image5,
  Pagination,
  SimpleGrid as SimpleGrid2,
  Skeleton,
  Text as Text4,
  Box as Box5,
  Button as Button4,
  Drawer as Drawer2
} from "@chakra-ui/react";
import { useRecoilState as useRecoilState4, useRecoilValue as useRecoilValue2 } from "recoil";

// src/blocks/Products/components/ButtonAddToCart.tsx
import {
  Drawer,
  Button as Button2,
  CloseButton,
  Portal as Portal2,
  Card,
  CardBody,
  Image as Image3,
  Text as Text2
} from "@chakra-ui/react";
import { round } from "lodash";

// src/blocks/Products/components/ListModel.tsx
import {
  HStack as HStack3,
  IconButton,
  RadioCard,
  NumberInput
} from "@chakra-ui/react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useEffect as useEffect3, useState as useState3 } from "react";
import { Fragment as Fragment2, jsx as jsx17, jsxs as jsxs4 } from "react/jsx-runtime";
var ListModel = (props) => {
  const {
    models,
    productId,
    onChangeDataProduct,
    onChangeQuantity,
    onSelectModel
  } = props;
  let styleConfig = {
    "--chakra-spacing-4": "4px"
  };
  const [value, setValue] = useState3("");
  const [quantity, setQuantity] = useState3(1);
  const onChangeModel = (modelId) => {
    setValue(modelId);
    let modelItem = models.find((model) => model.id === modelId);
    if (modelItem && onChangeDataProduct) {
      onChangeDataProduct?.(modelItem);
      onSelectModel?.(modelItem);
    }
  };
  useEffect3(() => {
    setValue(productId);
  }, [productId]);
  return /* @__PURE__ */ jsxs4(Fragment2, { children: [
    /* @__PURE__ */ jsx17(
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
          onChangeModel(e.value);
        },
        children: /* @__PURE__ */ jsx17(HStack3, { align: "stretch", children: models && models.map((item) => /* @__PURE__ */ jsxs4(RadioCard.Item, { value: item.id, children: [
          /* @__PURE__ */ jsx17(RadioCard.ItemHiddenInput, {}),
          /* @__PURE__ */ jsx17(RadioCard.ItemControl, { children: /* @__PURE__ */ jsx17(RadioCard.ItemText, { ms: "-4", children: item.name }) })
        ] }, item.id)) })
      }
    ),
    /* @__PURE__ */ jsxs4("div", { className: "mt-2 flex justify-between items-center", children: [
      /* @__PURE__ */ jsx17("div", { children: "Quantity" }),
      /* @__PURE__ */ jsx17("div", { children: /* @__PURE__ */ jsx17(
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
          children: /* @__PURE__ */ jsxs4(HStack3, { gap: "2", children: [
            /* @__PURE__ */ jsx17(NumberInput.DecrementTrigger, { asChild: true, disabled: quantity === 0, children: /* @__PURE__ */ jsx17(IconButton, { variant: "outline", size: "sm", children: /* @__PURE__ */ jsx17(LuMinus, {}) }) }),
            /* @__PURE__ */ jsx17(
              NumberInput.ValueText,
              {
                textAlign: "center",
                fontSize: "lg",
                minW: "3ch"
              }
            ),
            /* @__PURE__ */ jsx17(NumberInput.IncrementTrigger, { asChild: true, children: /* @__PURE__ */ jsx17(IconButton, { variant: "outline", size: "sm", children: /* @__PURE__ */ jsx17(LuPlus, {}) }) })
          ] })
        }
      ) })
    ] })
  ] });
};
var ListModel_default = ListModel;

// src/blocks/Products/components/ButtonAddToCart.tsx
import { useEffect as useEffect4, useMemo as useMemo2, useState as useState4 } from "react";
import { useRecoilState as useRecoilState2 } from "recoil";

// src/services/common/production.state.ts
import { atom as atom2 } from "recoil";
var ProductionState = atom2({
  key: "ProductionState",
  default: {}
});

// src/blocks/Products/components/ButtonAddToCart.tsx
import { Fragment as Fragment3, jsx as jsx18, jsxs as jsxs5 } from "react/jsx-runtime";
var ButtonAddToCart = (props) => {
  const {
    product: data,
    keyAddToCart,
    openDrawer,
    saveCartToStore,
    onCloseDrawer
  } = props;
  const { data: product } = useGetProductDetailQuery(
    data?.id,
    {
      storeId: data?.storeId,
      isGettingModels: true,
      isGettingDefaultModel: true
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!data?.id
    }
  );
  const [valueProduct, setValueProduct] = useState4(null);
  const [quantity, setQuantity] = useState4(1);
  const [selectedModel, setSelectedModel] = useState4(null);
  const [productionState, setProductionState] = useRecoilState2(ProductionState);
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
  const selectedPrice = useMemo2(() => {
    return selectedModel?.price || product?.defaultModel?.price || 0;
  }, [selectedModel?.price, product?.defaultModel?.price]);
  function addToCart() {
    const cart = JSON.parse(localStorage.getItem(keyAddToCart)) || [];
    const existing = cart.find((item) => item.id === product.id && item?.model?.id === valueProduct?.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        quantity,
        "id": product?.id,
        "name": product?.name,
        "image": product?.image,
        "storeId": product?.storeId,
        "descriptions": product?.descriptions,
        "price": product?.price,
        "onlinePrice": product?.onlinePrice,
        "weight": product?.weight,
        "remainedQuantity": product?.remainedQuantity,
        "hsCodeId": product?.hsCodeId,
        "hsCode": product?.hsCode,
        "model": {
          "id": valueProduct?.id,
          "name": valueProduct?.name,
          "storeId": valueProduct?.storeId,
          "price": valueProduct?.price,
          "onlinePrice": valueProduct?.onlinePrice,
          "weight": valueProduct?.weight,
          "isDefault": valueProduct?.isDefault
        }
      });
    }
    if (saveCartToStore) {
      saveCartToStore(cart);
    }
    localStorage.setItem(keyAddToCart, JSON.stringify(cart));
    try {
      setProductionState((prev) => ({ ...prev, [keyAddToCart]: cart }));
    } catch {
    }
    onCloseDrawer?.();
  }
  useEffect4(() => {
    setValueProduct({
      ...product,
      price: product?.defaultModel?.price ?? product?.price ?? 0
    });
    if (product?.models?.length === 1) {
      setSelectedModel(product?.models?.[0]);
    }
  }, [product]);
  return /* @__PURE__ */ jsx18(Fragment3, { children: /* @__PURE__ */ jsx18(
    Drawer.Root,
    {
      placement: "bottom",
      open: openDrawer,
      onOpenChange: ({ open }) => {
        if (!open) {
          onCloseDrawer?.();
        }
      },
      children: /* @__PURE__ */ jsxs5(Portal2, { children: [
        /* @__PURE__ */ jsx18(Drawer.Backdrop, {}),
        /* @__PURE__ */ jsx18(Drawer.Positioner, { children: /* @__PURE__ */ jsxs5(Drawer.Content, { roundedTop: "l3", roundedBottom: void 0, children: [
          /* @__PURE__ */ jsx18(Drawer.Header, { children: /* @__PURE__ */ jsx18(Drawer.Title, { children: valueProduct?.name }) }),
          /* @__PURE__ */ jsx18(Drawer.Body, { children: valueProduct && /* @__PURE__ */ jsx18(Card.Root, { variant: "outline", children: /* @__PURE__ */ jsxs5(CardBody, { children: [
            /* @__PURE__ */ jsx18(
              Image3,
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
            /* @__PURE__ */ jsx18(Card.Title, { children: valueProduct?.name }),
            /* @__PURE__ */ jsx18("div", { className: "mb-2", children: /* @__PURE__ */ jsxs5(
              Text2,
              {
                textStyle: "2xl",
                fontWeight: "medium",
                letterSpacing: "tight",
                mt: "2",
                children: [
                  "$",
                  `${round(selectedPrice / 100, 0)}`
                ]
              }
            ) }),
            /* @__PURE__ */ jsx18(
              ListModel_default,
              {
                models: valueProduct?.models,
                productId: valueProduct?.defaultModelId,
                onChangeDataProduct,
                onChangeQuantity,
                onSelectModel: (e) => {
                  setSelectedModel(e);
                }
              }
            )
          ] }) }) }),
          /* @__PURE__ */ jsxs5(Drawer.Footer, { children: [
            /* @__PURE__ */ jsx18(Drawer.ActionTrigger, { asChild: true, children: /* @__PURE__ */ jsx18(Button2, { variant: "outline", children: "Cancel" }) }),
            /* @__PURE__ */ jsx18(
              Button2,
              {
                colorPalette: "orange",
                onClick: () => {
                  addToCart();
                },
                children: "Add to cart"
              }
            )
          ] }),
          /* @__PURE__ */ jsx18(Drawer.CloseTrigger, { asChild: true, children: /* @__PURE__ */ jsx18(CloseButton, { size: "sm" }) })
        ] }) })
      ] })
    }
  ) });
};
var ButtonAddToCart_default = ButtonAddToCart;

// src/blocks/Cart/index.tsx
import { useEffect as useEffect5, useRef as useRef2, useState as useState5 } from "react";
import { round as round2 } from "lodash";
import {
  Image as Image4,
  Text as Text3,
  Box as Box4,
  Button as Button3,
  Table,
  NumberInput as NumberInput2,
  Card as Card2,
  DataList,
  Link,
  Badge
} from "@chakra-ui/react";
import { useRecoilState as useRecoilState3 } from "recoil";
import _2 from "lodash";
import { LuExternalLink, LuTrash2 } from "react-icons/lu";

// src/hooks/carts/index.tsx
import { useMutation } from "@tanstack/react-query";

// src/services/sale/cart/cart.api.ts
var createSessionCart = async () => {
  const httpClient = initHttpClient();
  const response = await httpClient.post(
    `/api/v1/carts`,
    {}
  );
  return response.data;
};
var processToCheckout = async (payload) => {
  const httpClient = initHttpClient();
  const response = await httpClient.put(
    `/api/v1/carts/${payload?.id}`,
    payload?.body
  );
  return response?.data;
};

// src/hooks/carts/index.tsx
var useCreateSessionCart = (props) => {
  return useMutation({
    ...props,
    mutationFn: () => createSessionCart()
  });
};
var useProcessToCheckout = (props) => {
  return useMutation({
    ...props,
    mutationFn: processToCheckout
  });
};

// src/blocks/CommonFunction/function.ts
import _ from "lodash";
import moment from "moment/moment";
var matchDataCondition = (source, data) => {
  if (!source) return "";
  let formatData = source;
  formatData?.match(/\${(.*?)(?=})}/g)?.map((str) => {
    const key = str.slice(2, str.length - 1);
    const value = _.get(data, key, "");
    formatData = formatData.replace(str, value);
    return formatData;
  });
  return formatData;
};
var diffTime = (dateTime) => {
  const expiredAt = moment(dateTime, "YYYY-MM-DD HH:mm:ss");
  const now = moment();
  const minutesDiff = expiredAt.diff(now, "minutes");
  if (minutesDiff < 0) {
    return 0;
  } else {
    return minutesDiff;
  }
};

// src/blocks/Cart/index.tsx
import { jsx as jsx19, jsxs as jsxs6 } from "react/jsx-runtime";
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
  const [listProduct, setListProduct] = useState5([]);
  const keyAddToCart = "productCart";
  const keySessionCart = "sessionCart";
  const cartSession = useRef2(
    JSON.parse(localStorage.getItem(keySessionCart)) || {}
  );
  const onCreateSessionCart = useCreateSessionCart({
    onSuccess: (data) => {
      if (data) {
        cartSession.current = data;
        localStorage.setItem(keySessionCart, JSON.stringify(data));
      }
    }
  });
  const getSessionCart = () => {
    if (cartSession.current?.id && cartSession.current?.expiredAt && diffTime(cartSession.current?.expiredAt) > 0) {
    } else {
      onCreateSessionCart.mutate();
    }
  };
  useEffect5(() => {
    getSessionCart();
  }, []);
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
      let newListProducts = _2.cloneDeep(listProduct);
      newListProducts[index].quantity = value;
      saveCartToStore(newListProducts);
    }
  };
  const subTotal = () => {
    let total = 0;
    listProduct.forEach((item) => {
      let subTotalItem = round2(
        Number((item?.model.price ?? 0) / 100) * Number(item.quantity),
        0
      );
      total += subTotalItem;
    });
    return total;
  };
  const removeItem = (indexItem) => {
    let newListProducts = _2.cloneDeep(listProduct);
    newListProducts = newListProducts.filter(
      (_3, index) => index !== indexItem
    );
    saveCartToStore(newListProducts);
  };
  const onProcessToCheckout = useProcessToCheckout({
    onSuccess: (data) => {
      if (data?.url) {
        window.location.href = data?.url;
      }
    }
  });
  const mutateProcessToCheckout = () => {
    let payload = {
      id: cartSession.current?.id,
      body: {
        products: listProduct
      }
    };
    onProcessToCheckout.mutate(payload);
  };
  const handleProcessToCheckout = async () => {
    if (cartSession.current?.expiredAt && diffTime(cartSession.current?.expiredAt) > 0) {
      mutateProcessToCheckout();
    } else {
      await onCreateSessionCart.mutateAsync();
      mutateProcessToCheckout();
    }
  };
  if (!listProduct?.length) {
    return /* @__PURE__ */ jsx19(Box4, { children: /* @__PURE__ */ jsxs6("div", { className: "w-full flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsx19(Text3, { children: noResultsText || "No results found" }),
      urlToProduct && /* @__PURE__ */ jsxs6(
        Link,
        {
          variant: "underline",
          colorPalette: "blue",
          href: `${urlToProduct}`,
          children: [
            "Visit products now",
            /* @__PURE__ */ jsx19(LuExternalLink, {})
          ]
        }
      )
    ] }) });
  }
  return /* @__PURE__ */ jsxs6("div", { children: [
    /* @__PURE__ */ jsxs6(Table.Root, { size: "sm", children: [
      /* @__PURE__ */ jsx19(Table.Header, { children: /* @__PURE__ */ jsxs6(Table.Row, { children: [
        /* @__PURE__ */ jsx19(Table.ColumnHeader, { children: "Product" }),
        /* @__PURE__ */ jsx19(Table.ColumnHeader, { children: "Price" }),
        /* @__PURE__ */ jsx19(Table.ColumnHeader, { children: "Quantity" }),
        /* @__PURE__ */ jsx19(Table.ColumnHeader, { children: "Subtotal" }),
        /* @__PURE__ */ jsx19(Table.ColumnHeader, { textAlign: "end" })
      ] }) }),
      /* @__PURE__ */ jsx19(Table.Body, { children: listProduct.map((item, index) => /* @__PURE__ */ jsxs6(Table.Row, { children: [
        /* @__PURE__ */ jsx19(Table.Cell, { children: /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-1 w-full", children: [
          /* @__PURE__ */ jsx19(
            Image4,
            {
              src: item.image || "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg",
              width: "50px",
              height: "50px",
              alt: item.name,
              borderRadius: "md"
            }
          ),
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx19("div", { children: /* @__PURE__ */ jsx19("span", { children: item?.name }) }),
            /* @__PURE__ */ jsx19("div", { children: /* @__PURE__ */ jsx19(Badge, { colorPalette: "purple", children: item?.model?.name }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs6(Table.Cell, { children: [
          "$",
          `${round2((item?.model?.price ?? 0) / 100, 0)}`
        ] }),
        /* @__PURE__ */ jsx19(Table.Cell, { children: /* @__PURE__ */ jsxs6(
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
              /* @__PURE__ */ jsx19(NumberInput2.Control, {}),
              /* @__PURE__ */ jsx19(NumberInput2.Input, {})
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs6(Table.Cell, { children: [
          "$",
          `${round2(
            Number((item?.model?.price ?? 0) / 100) * Number(item.quantity),
            0
          )}`
        ] }),
        /* @__PURE__ */ jsx19(Table.Cell, { children: /* @__PURE__ */ jsx19(
          LuTrash2,
          {
            className: "cursor-pointer",
            onClick: () => {
              removeItem(index);
            }
          }
        ) })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "flex justify-between mt-10 mb-2 px-2", children: [
      /* @__PURE__ */ jsx19(Button3, { variant: "outline", children: "Return To Shop" }),
      /* @__PURE__ */ jsx19("div", { children: /* @__PURE__ */ jsxs6(Card2.Root, { width: "320px", children: [
        /* @__PURE__ */ jsxs6(Card2.Body, { gap: "2", children: [
          /* @__PURE__ */ jsx19(Card2.Title, { mt: "2", children: "Cart total" }),
          /* @__PURE__ */ jsx19(Card2.Description, { children: /* @__PURE__ */ jsx19(DataList.Root, { orientation: "horizontal", divideY: "1px", maxW: "md", children: /* @__PURE__ */ jsxs6(DataList.Item, { pt: "4", children: [
            /* @__PURE__ */ jsx19(DataList.ItemLabel, { children: "SubTotal" }),
            /* @__PURE__ */ jsxs6(DataList.ItemValue, { className: "justify-end", children: [
              "$",
              subTotal()
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx19(Card2.Footer, { justifyContent: "center", children: /* @__PURE__ */ jsx19(
          Button3,
          {
            onClick: () => {
              handleProcessToCheckout().then();
            },
            colorPalette: "red",
            children: "Process to checkout"
          }
        ) })
      ] }) })
    ] })
  ] });
};
var CartInternal = {
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
    return /* @__PURE__ */ jsx19(
      CheckoutRender,
      {
        categoryId,
        variableName,
        limit,
        noResultsText,
        urlToProduct,
        storeId: puck?.metadata?.storeId
      }
    );
  }
};
var Cart = withLayout(CartInternal);

// src/components/CategorySingleSelect/index.tsx
import { FieldLabel as FieldLabel4 } from "@measured/puck";
import { useEffect as useEffect6, useMemo as useMemo4, useState as useState6 } from "react";

// src/services/sale/category/category.api.ts
var getCategories = async (payload, signal) => {
  const httpClient = initHttpClient();
  const response = await httpClient.get(`/api/v1/categories`, {
    params: payload,
    signal
  });
  return response.data;
};
var getCategoryTree = async (payload, signal) => {
  const httpClient = initHttpClient();
  const response = await httpClient.get(`/api/v1/categories/tree`, {
    params: payload,
    signal
  });
  return response.data;
};

// src/components/CategorySingleSelect/index.tsx
import { jsx as jsx20, jsxs as jsxs7 } from "react/jsx-runtime";
var CategorySingleSelect = ({ name, value, onChange }) => {
  const [items, setItems] = useState6([]);
  const [search, setSearch] = useState6("");
  useEffect6(() => {
    const ctl = new AbortController();
    const storeId = import.meta.env.VITE_ENTITY_ID || "";
    (async () => {
      try {
        const res = await getCategories({ storeId, limit: 200, query: search }, ctl.signal);
        const pickArray = (obj) => {
          if (!obj) return [];
          if (Array.isArray(obj)) return obj;
          const candidates = [obj?.data, obj?.items, obj?.rows, obj?.records, obj?.list, obj?.results];
          for (const c of candidates) if (Array.isArray(c)) return c;
          const nested = [obj?.data?.data, obj?.data?.items, obj?.data?.rows, obj?.data?.records, obj?.data?.list, obj?.data?.results];
          for (const c of nested) if (Array.isArray(c)) return c;
          return [];
        };
        const raw = pickArray(res?.data);
        const normalized = raw.map((c) => {
          const id = c?.id ?? c?.entityId ?? c?.value ?? c?._id ?? c?.code ?? c?.slug ?? c?.uuid ?? c?.uid ?? c?.key ?? c?.categoryId;
          const name2 = c?.name ?? c?.label ?? c?.title ?? c?.slug ?? c?.code ?? c?.displayName ?? c?.text ?? c?.categoryName ?? c?.shortName;
          return {
            id: id != null ? String(id) : "",
            name: name2 != null && String(name2).trim() !== "" ? String(name2) : id != null ? String(id) : ""
          };
        }).filter((c) => c.id !== "");
        const seen = /* @__PURE__ */ new Set();
        const cleaned = normalized.filter((c) => {
          if (seen.has(c.id)) return false;
          seen.add(c.id);
          return true;
        });
        setItems(cleaned);
      } catch (e) {
      }
    })();
    return () => ctl.abort();
  }, [search]);
  const selected = useMemo4(() => items.find((i) => String(i.id) === String(value)), [items, value]);
  return /* @__PURE__ */ jsx20(FieldLabel4, { label: "Parent Category", children: /* @__PURE__ */ jsxs7("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
    /* @__PURE__ */ jsx20(
      "input",
      {
        type: "text",
        placeholder: "Search...",
        value: search,
        onChange: (e) => setSearch(e.target.value),
        style: { padding: 6, border: "1px solid #ddd", borderRadius: 4 },
        name: `${name}__search`
      }
    ),
    /* @__PURE__ */ jsxs7(
      "select",
      {
        name,
        value: value || "",
        onChange: (e) => onChange(e.target.value || void 0),
        style: { padding: 6, border: "1px solid #ddd", borderRadius: 4 },
        children: [
          /* @__PURE__ */ jsx20("option", { value: "", children: "-- None --" }),
          items.map((opt) => /* @__PURE__ */ jsx20("option", { value: opt.id, children: opt.name }, String(opt.id)))
        ]
      }
    ),
    selected ? /* @__PURE__ */ jsxs7("div", { style: { color: "#666", fontSize: 12 }, children: [
      "Selected: ",
      selected.name
    ] }) : null
  ] }) });
};

// src/components/ProductMultiSelect/index.tsx
import { FieldLabel as FieldLabel5 } from "@measured/puck";
import { useEffect as useEffect7, useMemo as useMemo5, useState as useState7 } from "react";
import { jsx as jsx21, jsxs as jsxs8 } from "react/jsx-runtime";
var ProductMultiSelect = ({ name, value, onChange }) => {
  const [items, setItems] = useState7([]);
  const [search, setSearch] = useState7("");
  const [page, setPage] = useState7(1);
  const selected = useMemo5(() => value || [], [value]);
  const storeId = import.meta.env.VITE_ENTITY_ID || "";
  useEffect7(() => {
    const ctl = new AbortController();
    (async () => {
      try {
        const res = await getProducts(
          {
            storeId,
            query: search,
            isGettingModels: true,
            isGettingDefaultModel: true,
            limit: 20,
            page
          },
          ctl.signal
        );
        const data = Array.isArray(res?.data) ? res.data : [];
        const mapped = data.map((p) => ({
          id: String(p.id),
          name: String(p.name || ""),
          image: p.image,
          price: p?.defaultModel?.price ?? p?.price
        }));
        setItems(mapped);
      } catch (e) {
      }
    })();
    return () => ctl.abort();
  }, [search, page, storeId]);
  const isChecked = (id) => selected.some((s) => s.id === id);
  const toggle = (prod) => {
    if (isChecked(prod.id)) {
      onChange(selected.filter((s) => s.id !== prod.id));
    } else {
      onChange([...selected, prod]);
    }
  };
  const clearAll = () => onChange([]);
  return /* @__PURE__ */ jsx21(FieldLabel5, { label: "Choose Products", children: /* @__PURE__ */ jsxs8("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
    /* @__PURE__ */ jsx21(
      "input",
      {
        type: "text",
        placeholder: "Search...",
        value: search,
        onChange: (e) => {
          setSearch(e.target.value);
          setPage(1);
        },
        style: { padding: 6, border: "1px solid #ddd", borderRadius: 4 },
        name: `${name}__search`
      }
    ),
    /* @__PURE__ */ jsxs8(
      "div",
      {
        style: {
          maxHeight: 220,
          overflow: "auto",
          border: "1px solid #eee",
          borderRadius: 4,
          padding: 6
        },
        children: [
          items.map((p) => /* @__PURE__ */ jsxs8("label", { style: { display: "flex", alignItems: "center", gap: 8, padding: 4 }, children: [
            /* @__PURE__ */ jsx21(
              "input",
              {
                type: "checkbox",
                checked: isChecked(p.id),
                onChange: () => toggle(p),
                name: `${name}__${p.id}`
              }
            ),
            /* @__PURE__ */ jsx21("span", { children: p.name })
          ] }, p.id)),
          !items.length && /* @__PURE__ */ jsx21("div", { style: { color: "#999", fontSize: 12 }, children: "No products" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs8("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
      /* @__PURE__ */ jsx21("button", { type: "button", onClick: clearAll, style: { padding: "4px 8px" }, children: "Clear" }),
      /* @__PURE__ */ jsxs8("div", { style: { marginLeft: "auto", display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ jsx21("button", { type: "button", onClick: () => setPage((p) => Math.max(1, p - 1)), children: "Prev" }),
        /* @__PURE__ */ jsx21("button", { type: "button", onClick: () => setPage((p) => p + 1), children: "Next" })
      ] })
    ] }),
    !!selected.length && /* @__PURE__ */ jsxs8("div", { style: { color: "#666", fontSize: 12 }, children: [
      "Selected: ",
      selected.map((s) => s.name).join(", ")
    ] })
  ] }) });
};

// src/utils/analytics.ts
var sendAnalyticsEvent = (name, payload) => {
  try {
    const event = new CustomEvent("analytics:" + name, {
      detail: payload || {}
    });
    window.dispatchEvent(event);
  } catch {
  }
};

// src/utils/url.ts
var parseUrlState = () => {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  const getNum = (k) => {
    const v = p.get(k);
    if (v == null || v === "") return void 0;
    const n = Number(v);
    return Number.isFinite(n) ? n : void 0;
  };
  const getBool = (k) => {
    const v = p.get(k);
    if (v == null) return void 0;
    return v === "1" || v === "true";
  };
  return {
    q: p.get("q") || void 0,
    page: getNum("page") || 1,
    sortBy: p.get("sortBy") || void 0,
    hideOutOfStock: getBool("hideOutOfStock"),
    priceMin: getNum("priceMin"),
    priceMax: getNum("priceMax"),
    categoryId: p.get("categoryId") || void 0
  };
};
var pushUrlState = (state) => {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  const p = url.searchParams;
  Object.entries(state).forEach(([k, v]) => {
    if (v === void 0 || v === null || v === "") {
      p.delete(k);
    } else {
      p.set(k, String(v));
    }
  });
  window.history.replaceState({}, "", url.toString());
};

// src/blocks/Products/index.tsx
import { Fragment as Fragment4, jsx as jsx22, jsxs as jsxs9 } from "react/jsx-runtime";
var ProductsRender = ({
  mobile,
  tablet,
  desktop,
  limit,
  categoryId,
  // searchSize, 
  storeId,
  variableName,
  noResultsText,
  header: HeaderSlot,
  footer: FooterSlot,
  selectionMode = "limit",
  productIds,
  selectedProducts = [],
  sortBy = "featured",
  hideOutOfStock = false,
  bindSortVariableName,
  bindHideOutOfStockVariableName,
  bindCategoryVariableName,
  bindFiltersVariableName,
  enableUrlSync = true,
  openMiniCartAfterAdd = true,
  puck
}) => {
  const variables = useRecoilValue2(VariableState);
  const [productionState, setProductionState] = useRecoilState4(ProductionState);
  const [selectedProduct, setSelectedProduct] = useState8(null);
  const [openMiniCart, setOpenMiniCart] = useState8(false);
  const keyAddToCart = "productCart";
  const valueOfSearchProductsVariable = useMemo6(() => {
    if (!variableName) {
      return null;
    }
    return get3(variables, variableName);
  }, [variableName, variables]);
  const [debouncedValue, setDebouncedValue] = useState8(
    valueOfSearchProductsVariable
  );
  const debouncedSetValue = useMemo6(
    () => debounce((value) => {
      setDebouncedValue(value);
    }, 800),
    []
  );
  const [queries, setQueries] = useState8({
    search: debouncedValue,
    page: 1,
    limit,
    sortBy,
    hideOutOfStock
  });
  const extraFilters = useMemo6(() => {
    const v = bindFiltersVariableName ? variables[bindFiltersVariableName] : void 0;
    return v || {};
  }, [variables, bindFiltersVariableName]);
  const { data: products, isLoading } = useGetProductsQuery(
    {
      // storeSlug: store?.slug, 
      query: queries.search,
      isGettingModels: true,
      isGettingDefaultModel: true,
      limit: queries.limit,
      page: queries?.page,
      categoryId: selectionMode === "category" ? (bindCategoryVariableName ? variables[bindCategoryVariableName] : void 0) || categoryId : void 0,
      sortBy: queries.sortBy,
      hideOutOfStock: queries.hideOutOfStock,
      priceMin: extraFilters?.priceMin,
      priceMax: extraFilters?.priceMax,
      storeId
    },
    { keepPreviousData: true }
  );
  useEffect8(() => {
    debouncedSetValue(valueOfSearchProductsVariable || "");
    return () => debouncedSetValue.cancel();
  }, [valueOfSearchProductsVariable, debouncedSetValue]);
  useEffect8(() => {
    setQueries((prev) => ({
      ...prev,
      search: debouncedValue,
      page: 1
    }));
  }, [debouncedValue]);
  useEffect8(() => {
    setQueries((prev) => ({ ...prev, sortBy, hideOutOfStock }));
  }, [sortBy, hideOutOfStock]);
  useEffect8(() => {
    const vSort = bindSortVariableName ? get3(variables, bindSortVariableName) : void 0;
    const vHide = bindHideOutOfStockVariableName ? get3(variables, bindHideOutOfStockVariableName) : void 0;
    setQueries((prev) => ({
      ...prev,
      sortBy: vSort || prev.sortBy,
      hideOutOfStock: vHide ?? prev.hideOutOfStock
    }));
  }, [variables, bindSortVariableName, bindHideOutOfStockVariableName]);
  useEffect8(() => {
    if (!enableUrlSync || typeof window === "undefined") return;
    try {
      const u = parseUrlState();
      setQueries((prev) => ({
        ...prev,
        search: u.q ?? prev.search,
        page: u.page ?? prev.page,
        sortBy: u.sortBy ?? prev.sortBy,
        hideOutOfStock: u.hideOutOfStock ?? prev.hideOutOfStock
      }));
      if (bindFiltersVariableName) {
        const pm = u.priceMin;
        const px = u.priceMax;
        if (pm != null || px != null) {
        }
      }
      if (bindCategoryVariableName && u.categoryId) {
      }
    } catch {
    }
  }, []);
  const [__, setVars] = useRecoilState4(VariableState);
  useEffect8(() => {
    if (!enableUrlSync || typeof window === "undefined") return;
    const catId = selectionMode === "category" ? (bindCategoryVariableName ? variables[bindCategoryVariableName] : void 0) || categoryId : void 0;
    const pm = extraFilters?.priceMin;
    const px = extraFilters?.priceMax;
    pushUrlState({
      q: queries.search || void 0,
      page: queries.page,
      sortBy: queries.sortBy,
      hideOutOfStock: queries.hideOutOfStock ? 1 : void 0,
      priceMin: pm,
      priceMax: px,
      categoryId: catId
    });
  }, [queries.search, queries.page, queries.sortBy, queries.hideOutOfStock, extraFilters?.priceMin, extraFilters?.priceMax, selectionMode, variables, bindCategoryVariableName, categoryId, enableUrlSync]);
  useEffect8(() => {
    if (typeof window === "undefined") return;
    try {
      const u = parseUrlState();
      if (bindFiltersVariableName && (u.priceMin != null || u.priceMax != null)) {
        setVars((prev) => ({
          ...prev,
          [bindFiltersVariableName]: {
            ...prev[bindFiltersVariableName] || {},
            priceMin: u.priceMin,
            priceMax: u.priceMax
          }
        }));
      }
      if (bindCategoryVariableName && u.categoryId) {
        setVars((prev) => ({
          ...prev,
          [bindCategoryVariableName]: u.categoryId
        }));
      }
    } catch {
    }
  }, []);
  const saveCartToStore = (carts) => {
    setProductionState({ ...productionState, [keyAddToCart]: carts || [] });
    setSelectedProduct(null);
    if (openMiniCartAfterAdd) setOpenMiniCart(true);
  };
  if (!isLoading && !products?.total) {
    return /* @__PURE__ */ jsx22(Box5, { children: /* @__PURE__ */ jsx22(Text4, { children: noResultsText || "No results found" }) });
  }
  let display = products?.data || [];
  if (selectionMode === "ids" && productIds) {
    const ids = productIds.split(",").map((x) => x.trim()).filter(Boolean);
    const mapById = (products?.data || []).reduce((acc, p) => {
      acc[String(p.id)] = p;
      return acc;
    }, {});
    display = ids.map((id) => mapById[id] || { id, name: id });
  } else if (selectionMode === "select" && selectedProducts?.length) {
    display = selectedProducts;
  }
  const isOutOfStock = (p) => {
    const rq = p?.remainedQuantity;
    if (typeof rq === "number") return rq <= 0;
    const models = Array.isArray(p?.models) ? p.models : [];
    if (models.length > 0) {
      const anyActive = models.some((m) => Number(m?.status) === 1);
      return !anyActive;
    }
    if (p?.defaultModel) return Number(p?.defaultModel?.status) !== 1;
    if (typeof p?.statusId === "number") return Number(p.statusId) !== 1;
    return false;
  };
  if (queries.hideOutOfStock) {
    display = (display || []).filter((p) => !isOutOfStock(p));
  }
  const total = selectionMode === "limit" || selectionMode === "category" ? products?.total || display.length : display.length;
  useEffect8(() => {
    if (!display?.length) return;
    try {
      sendAnalyticsEvent("product_impression", {
        ids: display.map((p) => p.id),
        total,
        page: queries.page,
        sortBy: queries.sortBy
      });
    } catch {
    }
  }, [JSON.stringify(display?.map((p) => p.id)), queries.page, queries.sortBy]);
  return /* @__PURE__ */ jsxs9(Box5, { children: [
    HeaderSlot ? /* @__PURE__ */ jsx22(HeaderSlot, { minEmptyHeight: 40 }) : null,
    /* @__PURE__ */ jsxs9(
      SimpleGrid2,
      {
        columns: {
          base: mobile,
          sm: tablet,
          md: tablet,
          lg: desktop
        },
        gap: 4,
        children: [
          isLoading && (selectionMode === "limit" || selectionMode === "category") ? Array.from({ length: limit }).map((_3, index) => /* @__PURE__ */ jsx22(Skeleton, { height: "300px", borderRadius: "md" }, index)) : display?.map((product) => {
            const defaultModel = get3(
              product,
              "defaultModel",
              get3(product, "models.0")
            );
            const baseCents = get3(defaultModel, "price", product.price || 0);
            const saleCents = get3(defaultModel, "onlinePrice", product.onlinePrice ?? baseCents);
            const isOnSale = Number(saleCents) < Number(baseCents);
            const outOfStock = isOutOfStock(product);
            return /* @__PURE__ */ jsxs9(Card3.Root, { variant: "outline", position: "relative", children: [
              isOnSale && /* @__PURE__ */ jsx22(Box5, { position: "absolute", top: "2", left: "2", px: "2", py: "1", bg: "red.500", color: "white", borderRadius: "sm", fontSize: "xs", children: "Sale" }),
              outOfStock && /* @__PURE__ */ jsx22(Box5, { position: "absolute", top: "2", right: "2", px: "2", py: "1", bg: "gray.600", color: "white", borderRadius: "sm", fontSize: "xs", children: "Out of stock" }),
              /* @__PURE__ */ jsxs9(CardBody2, { children: [
                /* @__PURE__ */ jsx22(
                  Image5,
                  {
                    src: product.image || "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg",
                    alt: product.name,
                    borderRadius: "md"
                  }
                ),
                /* @__PURE__ */ jsx22(Card3.Title, { children: product.name }),
                /* @__PURE__ */ jsx22(Box5, { mt: "2", children: isOnSale ? /* @__PURE__ */ jsxs9(Fragment4, { children: [
                  /* @__PURE__ */ jsxs9(Text4, { as: "span", textStyle: "xl", fontWeight: "semibold", color: "red.500", mr: "2", children: [
                    "$",
                    round3((saleCents || 0) / 100, 0)
                  ] }),
                  /* @__PURE__ */ jsxs9(Text4, { as: "span", textStyle: "sm", color: "gray.500", textDecoration: "line-through", children: [
                    "$",
                    round3((baseCents || 0) / 100, 0)
                  ] })
                ] }) : /* @__PURE__ */ jsxs9(Text4, { textStyle: "2xl", fontWeight: "medium", letterSpacing: "tight", children: [
                  "$",
                  round3((baseCents || 0) / 100, 0)
                ] }) })
              ] }),
              /* @__PURE__ */ jsx22(CardFooter2, { gap: "2", children: /* @__PURE__ */ jsx22(
                Button4,
                {
                  colorPalette: "orange",
                  disabled: outOfStock,
                  onClick: () => {
                    setSelectedProduct(product);
                  },
                  children: "Add to cart"
                }
              ) })
            ] }, product.id);
          }),
          /* @__PURE__ */ jsx22(
            ButtonAddToCart_default,
            {
              openDrawer: !!selectedProduct,
              product: selectedProduct,
              keyAddToCart,
              saveCartToStore,
              onCloseDrawer: () => setSelectedProduct(null)
            }
          ),
          /* @__PURE__ */ jsxs9(
            Drawer2.Root,
            {
              placement: "right",
              size: "md",
              open: openMiniCart,
              onOpenChange: (e) => {
                const isOpen = typeof e === "boolean" ? e : e?.open;
                setOpenMiniCart(!!isOpen);
              },
              children: [
                /* @__PURE__ */ jsx22(Drawer2.Backdrop, {}),
                /* @__PURE__ */ jsx22(Drawer2.Positioner, { children: /* @__PURE__ */ jsxs9(Drawer2.Content, { children: [
                  /* @__PURE__ */ jsx22(Drawer2.Header, { children: "Cart" }),
                  /* @__PURE__ */ jsx22(Drawer2.CloseTrigger, {}),
                  /* @__PURE__ */ jsx22(Drawer2.Body, { children: /* @__PURE__ */ jsx22(
                    CheckoutRender,
                    {
                      limit: 10,
                      noResultsText: "No items",
                      urlToProduct: "/",
                      storeId: storeId || puck?.metadata?.storeId
                    }
                  ) })
                ] }) })
              ]
            }
          )
        ]
      }
    ),
    FooterSlot ? /* @__PURE__ */ jsx22(FooterSlot, { minEmptyHeight: 40 }) : null,
    (selectionMode === "limit" || selectionMode === "category") && total > 0 && /* @__PURE__ */ jsxs9(
      Pagination.Root,
      {
        mt: "6",
        count: total,
        pageSize: queries.limit,
        page: queries.page,
        onPageChange: ({ page }) => setQueries((prev) => ({
          ...prev,
          page
        })),
        children: [
          /* @__PURE__ */ jsx22(Pagination.PrevTrigger, {}),
          /* @__PURE__ */ jsx22(Pagination.NextTrigger, {})
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
    header: { type: "slot", label: "Header Slot" },
    footer: { type: "slot", label: "Footer Slot" },
    selectionMode: {
      type: "radio",
      label: "Data Source",
      options: [
        { label: "By Limit (API)", value: "limit" },
        { label: "By Category", value: "category" },
        { label: "Pick Products", value: "select" },
        { label: "Enter IDs", value: "ids" }
      ]
    },
    openMiniCartAfterAdd: { type: "radio", label: "Open Mini Cart After Add", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
    enableUrlSync: { type: "radio", label: "Enable URL Sync", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
    bindCategoryVariableName: { type: "text", label: "Bind Category Var (optional)" },
    bindFiltersVariableName: { type: "text", label: "Bind Filters Var (optional)" },
    selectedProducts: { type: "custom", label: "Choose Products", render: ProductMultiSelect },
    productIds: { type: "text", label: "Product IDs (comma-separated)" },
    categoryId: { type: "custom", label: "Category", render: CategorySingleSelect },
    sortBy: {
      type: "select",
      label: "Sort By",
      options: [
        { label: "Featured", value: "featured" },
        { label: "Newest", value: "newest" },
        { label: "Price: Low to High", value: "priceAsc" },
        { label: "Price: High to Low", value: "priceDesc" }
      ]
    },
    hideOutOfStock: {
      type: "radio",
      label: "Hide Out of Stock",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    },
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
    header: [],
    footer: [],
    selectionMode: "limit",
    productIds: "",
    selectedProducts: [],
    categoryId: void 0,
    bindCategoryVariableName: "products.categoryId",
    bindFiltersVariableName: "products.filters",
    enableUrlSync: true,
    openMiniCartAfterAdd: true,
    sortBy: "featured",
    hideOutOfStock: false,
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
    variableName,
    header,
    footer,
    selectionMode,
    productIds,
    selectedProducts,
    sortBy,
    hideOutOfStock,
    bindFiltersVariableName,
    enableUrlSync,
    bindCategoryVariableName,
    openMiniCartAfterAdd
  }) => {
    return /* @__PURE__ */ jsx22(
      ProductsRender,
      {
        mobile,
        tablet,
        desktop,
        categoryId,
        variableName,
        limit,
        noResultsText,
        storeId: puck?.metadata?.storeId,
        header,
        footer,
        selectionMode,
        productIds,
        selectedProducts,
        sortBy,
        hideOutOfStock,
        bindFiltersVariableName,
        enableUrlSync,
        bindCategoryVariableName,
        openMiniCartAfterAdd,
        puck
      }
    );
  }
};
var Products = withLayout(ProductsInternal);

// src/blocks/CategoryGrid/index.tsx
import { ErrorBoundary } from "react-error-boundary";
import React2, { useRef as useRef3 } from "react";
import {
  Box as Box6,
  Text as Text5,
  Flex as Flex2,
  IconButton as IconButton2,
  Stack as Stack2,
  Button as Button5,
  Icon,
  SimpleGrid as SimpleGrid3,
  Skeleton as Skeleton2,
  Link as Link2,
  useBreakpointValue
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

// src/hooks/category/useGetCategoriesQuery.tsx
import { useQuery as useQuery4 } from "@tanstack/react-query";
var useGetCategoriesQuery = (queries, props) => {
  return useQuery4({
    ...props,
    queryKey: ["categories", queries],
    queryFn: () => getCategories(queries)
  });
};

// src/components/CategoryMultiSelect/index.tsx
import { FieldLabel as FieldLabel6 } from "@measured/puck";
import { useEffect as useEffect9, useMemo as useMemo7, useState as useState9 } from "react";
import { jsx as jsx23, jsxs as jsxs10 } from "react/jsx-runtime";
var CategoryMultiSelect = ({ name, value, onChange }) => {
  const [items, setItems] = useState9([]);
  const [search, setSearch] = useState9("");
  const selected = useMemo7(() => Array.isArray(value) ? value : [], [value]);
  const selectedIds = useMemo7(
    () => new Set(selected.map((s) => String(s.id))),
    [selected]
  );
  const stableSelected = useMemo7(() => selected.map((s) => ({ id: String(s.id), name: String(s.name || s.id) })), [selected]);
  useEffect9(() => {
    const shouldAbort = new AbortController();
    const storeId = import.meta.env.VITE_ENTITY_ID || "";
    (async () => {
      try {
        const res = await getCategories(
          { storeId, limit: 200, query: search },
          shouldAbort.signal
        );
        const pickArray = (obj) => {
          if (!obj) return [];
          if (Array.isArray(obj)) return obj;
          const candidates = [obj?.data, obj?.items, obj?.rows, obj?.records, obj?.list, obj?.results];
          for (const c of candidates) if (Array.isArray(c)) return c;
          const nested = [obj?.data?.data, obj?.data?.items, obj?.data?.rows, obj?.data?.records, obj?.data?.list, obj?.data?.results];
          for (const c of nested) if (Array.isArray(c)) return c;
          return [];
        };
        const raw = pickArray(res?.data);
        const normalized = raw.map((c) => {
          const id = c?.id ?? c?.entityId ?? c?.value ?? c?._id ?? c?.code ?? c?.slug ?? c?.uuid ?? c?.uid ?? c?.key ?? c?.categoryId;
          const name2 = c?.name ?? c?.label ?? c?.title ?? c?.slug ?? c?.code ?? c?.displayName ?? c?.text ?? c?.categoryName ?? c?.shortName;
          return {
            id: id != null ? String(id) : "",
            name: name2 != null && String(name2).trim() !== "" ? String(name2) : id != null ? String(id) : ""
          };
        }).filter((c) => c.id !== "");
        const seen = /* @__PURE__ */ new Set();
        const cleaned = normalized.filter((c) => {
          if (seen.has(c.id)) return false;
          seen.add(c.id);
          return true;
        });
        setItems(cleaned);
      } catch (e) {
      }
    })();
    return () => shouldAbort.abort();
  }, [search]);
  const isChecked = (id, name2) => {
    if (selectedIds.has(String(id))) return true;
    return selected.some((s) => String(s.id) === String(id) && String(s.name) === String(name2 ?? ""));
  };
  const toggle = (cat, nextChecked) => {
    if (nextChecked) {
      const dedup = /* @__PURE__ */ new Map();
      [...selected, cat].forEach((c) => dedup.set(String(c.id), { id: String(c.id), name: c.name }));
      onChange(Array.from(dedup.values()));
    } else {
      onChange(selected.filter((s) => String(s.id) !== String(cat.id)));
    }
  };
  const clearAll = () => onChange([]);
  return /* @__PURE__ */ jsx23(FieldLabel6, { label: "Choose Categories", children: /* @__PURE__ */ jsxs10("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
    /* @__PURE__ */ jsx23(
      "input",
      {
        type: "text",
        placeholder: "Search...",
        value: search,
        onChange: (e) => setSearch(e.target.value),
        style: { padding: 6, border: "1px solid #ddd", borderRadius: 4 }
      }
    ),
    /* @__PURE__ */ jsxs10(
      "div",
      {
        style: {
          maxHeight: 220,
          overflow: "auto",
          border: "1px solid #eee",
          borderRadius: 4,
          padding: 6
        },
        children: [
          items.map((c) => {
            const inputId = `${name}__${c.id}`;
            return /* @__PURE__ */ jsxs10("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: 4 }, children: [
              /* @__PURE__ */ jsx23(
                "input",
                {
                  id: inputId,
                  type: "checkbox",
                  checked: !!isChecked(c.id, c.name),
                  onChange: (e) => toggle(c, e.target.checked)
                }
              ),
              /* @__PURE__ */ jsx23("label", { htmlFor: inputId, style: { cursor: "pointer" }, children: c.name })
            ] }, String(c.id));
          }),
          !items.length && /* @__PURE__ */ jsx23("div", { style: { color: "#999", fontSize: 12 }, children: "No categories" })
        ]
      }
    ),
    /* @__PURE__ */ jsx23("div", { style: { display: "flex", gap: 8 }, children: /* @__PURE__ */ jsx23("button", { type: "button", onClick: clearAll, style: { padding: "4px 8px" }, children: "Clear" }) }),
    !!selected.length && /* @__PURE__ */ jsxs10("div", { style: { color: "#666", fontSize: 12 }, children: [
      "Selected: ",
      stableSelected.map((s) => s.name).join(", ")
    ] })
  ] }) });
};

// src/blocks/CategoryGrid/index.tsx
import { useRecoilState as useRecoilState5 } from "recoil";
import { jsx as jsx24, jsxs as jsxs11 } from "react/jsx-runtime";
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
  limit = 6,
  header: HeaderSlot,
  footer: FooterSlot,
  puck,
  showAll = false,
  selectionMode = "limit",
  selectedCategories = [],
  categoryIds,
  parentCategoryId,
  bindSelectedCategoryVariableName
}) => {
  const [vars, setVars] = useRecoilState5(VariableState);
  const selectedCategory = bindSelectedCategoryVariableName ? vars[bindSelectedCategoryVariableName] : "";
  const scrollRef = useRef3(null);
  const redColor = "red.500";
  const entityId = import.meta.env.VITE_ENTITY_ID || storeId || "";
  const effectiveMode = (selectedCategories?.length || 0) > 0 && selectionMode !== "ids" ? "select" : selectionMode;
  const {
    data: categoriesData,
    isLoading,
    error
  } = useGetCategoriesQuery(
    {
      storeId: entityId,
      limit: showAll || effectiveMode !== "limit" ? void 0 : limit
    },
    {
      enabled: !!entityId,
      // In editor we want to see a call when dropped; avoid cache reuse
      staleTime: 0,
      refetchOnMount: "always",
      refetchOnWindowFocus: false,
      gcTime: 3e5,
      placeholderData: void 0,
      retry: 1
    }
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
  const [tree, setTree] = React2.useState(null);
  React2.useEffect(() => {
    let active = true;
    const ctl = new AbortController();
    if (parentCategoryId) {
      (async () => {
        try {
          const res = await getCategoryTree({ storeId: entityId }, ctl.signal);
          if (active) setTree(res?.data || []);
        } catch (e) {
          if (active) setTree([]);
        }
      })();
    }
    return () => {
      active = false;
      ctl.abort();
    };
  }, [parentCategoryId, entityId]);
  const shouldUseDefault = !!error || apiCategories.length < 4;
  let displayCategories = [];
  if (effectiveMode === "select" && selectedCategories?.length) {
    displayCategories = selectedCategories;
  } else if (effectiveMode === "ids" && categoryIds) {
    const ids = categoryIds.split(",").map((x) => x.trim()).filter(Boolean);
    displayCategories = ids.map((id) => {
      const match = apiCategories.find(
        (c) => String(c.id ?? c.entityId ?? c.value) === String(id)
      );
      return {
        id,
        name: match?.name || id
        // icon: match?.icon
      };
    });
  } else if (parentCategoryId && Array.isArray(tree)) {
    const findNode = (nodes) => {
      for (const n of nodes) {
        if (String(n.id) === String(parentCategoryId)) return n;
        const f = n.children && findNode(n.children);
        if (f) return f;
      }
      return null;
    };
    const node = findNode(tree) || {};
    const children = Array.isArray(node.children) ? node.children : [];
    displayCategories = showAll ? children : children.slice(0, limit);
  } else {
    const normalizedApi = (apiCategories || []).map((c) => {
      const id = c?.id ?? c?.entityId ?? c?.value ?? c?._id ?? c?.code ?? c?.slug;
      const name = c?.name ?? c?.label ?? c?.title ?? c?.slug ?? c?.code ?? c?.displayName ?? c?.text;
      return {
        id: id != null ? String(id) : "",
        name: name ? String(name) : id != null ? String(id) : "",
        icon: c?.icon
      };
    }).filter((c) => c.id !== "");
    displayCategories = shouldUseDefault ? showAll ? defaultCategories : defaultCategories.slice(0, limit) : showAll ? normalizedApi : normalizedApi.slice(0, limit);
  }
  const perPageCols = useBreakpointValue({ base: mobile, md: tablet, lg: desktop }) || desktop;
  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true }) || false;
  const [page, setPage] = React2.useState(0);
  const perPage = Math.max(1, Number(perPageCols || desktop));
  const totalPages = Math.max(
    1,
    Math.ceil((displayCategories?.length || 0) / perPage)
  );
  React2.useEffect(() => {
    setPage((p) => Math.min(Math.max(0, p), Math.max(0, totalPages - 1)));
  }, [perPage, displayCategories?.length, totalPages]);
  const visibleCategories = React2.useMemo(() => {
    if (isDesktop) {
      const start = page * perPage;
      return (displayCategories || []).slice(start, start + perPage);
    }
    return displayCategories;
  }, [isDesktop, page, perPage, displayCategories]);
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
    if (isDesktop) {
      setPage((p) => Math.max(0, p - 1));
      return;
    }
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (isDesktop) {
      setPage((p) => Math.min(totalPages - 1, p + 1));
      return;
    }
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  const onClickCategory = (item) => {
    if (!bindSelectedCategoryVariableName) return;
    setVars((prev) => ({
      ...prev,
      [bindSelectedCategoryVariableName]: item?.id
    }));
    pushUrlState({ categoryId: item?.id, page: 1 });
  };
  return /* @__PURE__ */ jsxs11(Section, { children: [
    HeaderSlot ? /* @__PURE__ */ jsx24(HeaderSlot, { minEmptyHeight: 40 }) : null,
    /* @__PURE__ */ jsxs11(Box6, { py: 8, children: [
      /* @__PURE__ */ jsxs11(Flex2, { justify: "space-between", align: "center", mb: 6, children: [
        /* @__PURE__ */ jsxs11(Stack2, { align: "start", gap: 1, children: [
          /* @__PURE__ */ jsxs11(Flex2, { align: "center", gap: 2, children: [
            /* @__PURE__ */ jsx24(Box6, { w: 2, h: 6, bg: redColor, borderRadius: "sm" }),
            /* @__PURE__ */ jsx24(Text5, { color: redColor, fontSize: "sm", fontWeight: "medium", children: subtitle })
          ] }),
          /* @__PURE__ */ jsxs11(Flex2, { align: "baseline", gap: 3, children: [
            /* @__PURE__ */ jsx24(Text5, { fontSize: "2xl", fontWeight: "bold", color: "gray.800", children: title }),
            isDesktop && totalPages > 1 ? /* @__PURE__ */ jsxs11(Text5, { fontSize: "sm", color: "gray.500", children: [
              "Page ",
              page + 1,
              " / ",
              totalPages
            ] }) : null
          ] })
        ] }),
        /* @__PURE__ */ jsxs11(Stack2, { direction: "row", gap: 2, children: [
          /* @__PURE__ */ jsx24(
            IconButton2,
            {
              "aria-label": "Previous categories",
              variant: "outline",
              size: "sm",
              onClick: scrollLeft,
              colorScheme: "gray",
              disabled: isDesktop && page <= 0,
              children: /* @__PURE__ */ jsx24(Icon, { as: FiChevronLeft })
            }
          ),
          /* @__PURE__ */ jsx24(
            IconButton2,
            {
              "aria-label": "Next categories",
              variant: "outline",
              size: "sm",
              onClick: scrollRight,
              colorScheme: "gray",
              disabled: isDesktop && page >= totalPages - 1,
              children: /* @__PURE__ */ jsx24(Icon, { as: FiChevronRight })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs11(Box6, { children: [
        /* @__PURE__ */ jsx24(
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
            children: /* @__PURE__ */ jsx24(
              Stack2,
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
                  Array.from({
                    length: showAll || selectionMode !== "limit" ? Math.min(visibleCategories.length || 8, 8) : limit
                  }).map((_3, index) => /* @__PURE__ */ jsx24(
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
                  /* @__PURE__ */ jsx24(Text5, { color: "red.500", fontSize: "sm", children: "Failed to load categories" })
                ) : visibleCategories.map((category) => {
                  const categoryName = category.name || "";
                  const categoryId = category.id || "";
                  const iconKey = category.icon || getCategoryIcon(categoryName);
                  const IconComponent = iconMap[iconKey];
                  const isSelected = selectedCategory === categoryId;
                  return /* @__PURE__ */ jsx24(
                    Link2,
                    {
                      href: !puck?.isEditing && urlRedirect ? matchDataCondition(urlRedirect, category) : void 0,
                      onClick: (e) => {
                        if (puck?.isEditing) e.preventDefault();
                      },
                      children: /* @__PURE__ */ jsxs11(
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
                            /* @__PURE__ */ jsx24(
                              Icon,
                              {
                                as: IconComponent,
                                boxSize: responsiveSizing.iconSize,
                                color: isSelected ? "white" : "gray.800"
                              }
                            ),
                            /* @__PURE__ */ jsx24(
                              Text5,
                              {
                                fontSize: responsiveSizing.fontSize,
                                fontWeight: "medium",
                                children: categoryName
                              }
                            )
                          ]
                        }
                      )
                    },
                    String(categoryId)
                  );
                })
              }
            )
          }
        ),
        /* @__PURE__ */ jsx24(
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
              Array.from({
                length: isDesktop ? perPage : showAll || selectionMode !== "limit" ? 12 : limit
              }).map((_3, index) => /* @__PURE__ */ jsx24(
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
              /* @__PURE__ */ jsx24(Text5, { color: "red.500", fontSize: "sm", children: "Failed to load categories" })
            ) : visibleCategories.map((category) => {
              const categoryName = category.name || "";
              const categoryId = category.id || "";
              const iconKey = category.icon || getCategoryIcon(categoryName);
              const IconComponent = iconMap[iconKey];
              const isSelected = selectedCategory === categoryId;
              return /* @__PURE__ */ jsx24(
                Link2,
                {
                  href: !puck?.isEditing && urlRedirect ? matchDataCondition(urlRedirect, category) : void 0,
                  onClick: (e) => {
                    if (puck?.isEditing) e.preventDefault();
                  },
                  children: /* @__PURE__ */ jsxs11(
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
                        /* @__PURE__ */ jsx24(
                          Icon,
                          {
                            as: IconComponent,
                            boxSize: 6,
                            color: isSelected ? "white" : "gray.800"
                          }
                        ),
                        /* @__PURE__ */ jsx24(Text5, { fontSize: "sm", fontWeight: "medium", children: categoryName })
                      ]
                    }
                  )
                },
                String(categoryId)
              );
            })
          }
        )
      ] })
    ] }),
    FooterSlot ? /* @__PURE__ */ jsx24(FooterSlot, { minEmptyHeight: 40 }) : null
  ] });
};
var CategoryGridFields = {
  header: {
    type: "slot",
    label: "Header Slot"
  },
  bindSelectedCategoryVariableName: {
    type: "text",
    label: "Bind Selected Category Var",
    placeholder: "products.categoryId"
  },
  showAll: {
    type: "radio",
    label: "Show All Categories",
    options: [
      { label: "Yes", value: true },
      { label: "No", value: false }
    ]
  },
  selectionMode: {
    type: "radio",
    label: "Selection Mode",
    options: [
      { label: "By Limit", value: "limit" },
      { label: "Pick Categories", value: "select" },
      { label: "Enter IDs", value: "ids" }
    ]
  },
  selectedCategories: {
    type: "custom",
    label: "Choose Categories",
    render: CategoryMultiSelect
  },
  parentCategoryId: {
    type: "custom",
    label: "Parent Category",
    render: CategorySingleSelect
  },
  categoryIds: {
    type: "text",
    label: "Category IDs (comma-separated)",
    placeholder: "id1,id2,id3"
  },
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
  },
  footer: {
    type: "slot",
    label: "Footer Slot"
  }
};
var CategoryGridInternal = {
  label: "Categories",
  fields: CategoryGridFields,
  defaultProps: {
    title: "Browse By Category",
    subtitle: "Categories",
    storeId: import.meta.env.VITE_ENTITY_ID || "",
    urlRedirect: "",
    bindSelectedCategoryVariableName: "products.categoryId",
    mobile: 2,
    tablet: 4,
    desktop: 6,
    limit: 6,
    header: [],
    footer: [],
    showAll: false,
    selectionMode: "limit",
    selectedCategories: [],
    categoryIds: "",
    parentCategoryId: ""
  },
  resolveFields: (data) => {
    const base = CategoryGridFields;
    const fields = {
      header: base.header,
      bindSelectedCategoryVariableName: base.bindSelectedCategoryVariableName,
      showAll: base.showAll,
      title: base.title,
      subtitle: base.subtitle,
      storeId: base.storeId,
      urlRedirect: base.urlRedirect,
      mobile: base.mobile,
      tablet: base.tablet,
      desktop: base.desktop,
      footer: base.footer
    };
    fields.parentCategoryId = base.parentCategoryId;
    if (!data?.props?.showAll) {
      fields.selectionMode = base.selectionMode;
      if (data?.props?.selectionMode === "select") {
        fields.selectedCategories = base.selectedCategories;
      } else if (data?.props?.selectionMode === "ids") {
        fields.categoryIds = base.categoryIds;
      } else {
        fields.limit = base.limit;
      }
    } else {
      fields.limit = base.limit;
    }
    return fields;
  },
  render: (props) => /* @__PURE__ */ jsx24(ErrorBoundary, { fallbackRender: () => /* @__PURE__ */ jsx24("div", { children: "Unable to load categories." }), children: /* @__PURE__ */ jsx24(CategoryGridRender, { ...props, puck: props.puck }) })
};
var CategoryGrid = withLayout(CategoryGridInternal);

// src/blocks/Icon/index.tsx
import { jsx as jsx25 } from "react/jsx-runtime";
var IconPlugins = {
  label: "Icon",
  fields: {
    icon: {
      label: "Icon",
      ...IconField
    },
    size: {
      label: "Size",
      type: "text",
      placeholder: "...px"
    },
    color: {
      label: "Color",
      ...colorField
    },
    href: {
      label: "Link",
      type: "text"
    }
  },
  defaultProps: {
    icon: "bi bi-0-circle",
    size: "14px",
    color: "",
    href: ""
  },
  render: ({
    href,
    size,
    color,
    icon
    // puck
  }) => {
    console.log("icon", icon);
    return /* @__PURE__ */ jsx25("a", { href, children: renderIcon({
      iconName: icon,
      mf_color: color,
      mf_font_size: size
    }) });
  }
};

// src/blocks/Banner/index.tsx
import {
  Box as Box7,
  Button as Button6,
  Flex as Flex3,
  Heading as Heading2,
  Image as Image6,
  Text as Text6,
  IconButton as IconButton3,
  Stack as Stack3
} from "@chakra-ui/react";
import { useEffect as useEffect10, useMemo as useMemo8, useRef as useRef4, useState as useState11 } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Fragment as Fragment5, jsx as jsx26, jsxs as jsxs12 } from "react/jsx-runtime";
var BannerInternal = {
  label: "Banner",
  fields: {
    height: {
      type: "object",
      label: "Height (px)",
      objectFields: {
        base: { type: "number", label: "base", min: 200, max: 900 },
        md: { type: "number", label: "md", min: 200, max: 900 },
        lg: { type: "number", label: "lg", min: 200, max: 900 }
      }
    },
    textSide: {
      type: "radio",
      label: "Text Side",
      options: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" }
      ]
    },
    verticalAlign: {
      type: "radio",
      label: "Vertical Align",
      options: [
        { label: "Top", value: "start" },
        { label: "Center", value: "center" },
        { label: "Bottom", value: "end" }
      ]
    },
    imageFit: {
      type: "select",
      label: "Image Fit",
      options: [
        { label: "Cover", value: "cover" },
        { label: "Contain", value: "contain" }
      ]
    },
    autoplay: {
      type: "radio",
      label: "Autoplay",
      options: [
        { label: "On", value: true },
        { label: "Off", value: false }
      ]
    },
    intervalMs: {
      type: "number",
      label: "Autoplay Interval (ms)",
      min: 1e3,
      max: 3e4
    },
    showDots: {
      type: "radio",
      label: "Show Dots",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    },
    showArrows: {
      type: "radio",
      label: "Show Arrows",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    },
    overlayEnabled: {
      type: "radio",
      label: "Text Overlay",
      options: [
        { label: "On", value: true },
        { label: "Off", value: false }
      ]
    },
    overlayOpacity: {
      type: "number",
      label: "Overlay Opacity (0-1)",
      min: 0,
      max: 1
    },
    overlayWidthPercent: {
      type: "number",
      label: "Overlay Width %",
      min: 10,
      max: 100
    },
    slides: {
      type: "array",
      label: "Slides",
      min: 1,
      arrayFields: {
        imageUrl: { type: "text", label: "Image URL" },
        alt: { type: "text", label: "Alt" },
        textEnabled: {
          type: "radio",
          label: "Show Text",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false }
          ]
        },
        eyebrow: { type: "text", label: "Eyebrow" },
        headline: { type: "text", label: "Headline", contentEditable: true },
        description: { type: "textarea", label: "Description" },
        ctaLabel: { type: "text", label: "CTA Label" },
        ctaHref: { type: "text", label: "CTA Link" }
      },
      defaultItemProps: {
        imageUrl: "https://picsum.photos/1200/600",
        alt: "",
        textEnabled: true,
        eyebrow: "Series",
        headline: "Up to 10% off Voucher",
        description: "",
        ctaLabel: "Shop Now",
        ctaHref: "#"
      }
    }
  },
  defaultProps: {
    height: { base: 360, md: 420, lg: 420 },
    textSide: "left",
    verticalAlign: "center",
    imageFit: "cover",
    autoplay: true,
    intervalMs: 5e3,
    showDots: true,
    showArrows: true,
    overlayEnabled: true,
    overlayOpacity: 0.6,
    overlayWidthPercent: 60,
    slides: [
      {
        imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop",
        alt: "Banner 1",
        textEnabled: true,
        eyebrow: "iPhone 14 Series",
        headline: "Up to 10% off Voucher",
        description: "",
        ctaLabel: "Shop Now",
        ctaHref: "#"
      }
    ]
  },
  render: ({
    height,
    textSide,
    verticalAlign,
    imageFit,
    autoplay,
    intervalMs,
    showDots,
    showArrows,
    overlayEnabled,
    overlayOpacity,
    overlayWidthPercent,
    slides,
    puck
  }) => {
    const [index, setIndex] = useState11(0);
    const timerRef = useRef4(null);
    const safeSlides = useMemo8(
      () => Array.isArray(slides) && slides.length ? slides : [],
      [slides]
    );
    const next = () => setIndex((i) => (i + 1) % (safeSlides.length || 1));
    const prev = () => setIndex(
      (i) => (i - 1 + (safeSlides.length || 1)) % (safeSlides.length || 1)
    );
    useEffect10(() => {
      if (!autoplay || puck?.isEditing || safeSlides.length <= 1) return;
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = window.setInterval(
        next,
        Math.max(1e3, intervalMs || 5e3)
      );
      return () => {
        if (timerRef.current) window.clearInterval(timerRef.current);
      };
    }, [autoplay, intervalMs, puck?.isEditing, safeSlides.length]);
    const current = safeSlides[index];
    const heightObj = typeof height === "number" ? { base: height, md: height, lg: height } : height || {};
    const hBase = heightObj.base ?? 360;
    const hMd = heightObj.md ?? hBase;
    const hLg = heightObj.lg ?? hMd;
    return /* @__PURE__ */ jsxs12(
      Box7,
      {
        position: "relative",
        overflow: "hidden",
        borderRadius: "lg",
        onMouseEnter: () => {
          if (timerRef.current) {
            window.clearInterval(timerRef.current);
            timerRef.current = null;
          }
        },
        onMouseLeave: () => {
          if (autoplay && !puck?.isEditing && safeSlides.length > 1) {
            timerRef.current = window.setInterval(
              next,
              Math.max(1e3, intervalMs || 5e3)
            );
          }
        },
        children: [
          /* @__PURE__ */ jsxs12(
            Flex3,
            {
              direction: { base: "column", md: "row" },
              justify: "stretch",
              align: verticalAlign === "start" ? "flex-start" : verticalAlign === "end" ? "flex-end" : "center",
              gap: 6,
              h: { base: `${hBase}px`, md: `${hMd}px`, lg: `${hLg}px` },
              bg: "black",
              color: "white",
              p: { base: 6, md: 10 },
              children: [
                overlayEnabled && /* @__PURE__ */ jsx26(
                  Box7,
                  {
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    bgGradient: textSide === "left" ? `linear(to-r, rgba(0,0,0,${overlayOpacity ?? 0.6}) ${overlayWidthPercent ?? 60}%, rgba(0,0,0,0) 100%)` : `linear(to-l, rgba(0,0,0,${overlayOpacity ?? 0.6}) ${overlayWidthPercent ?? 60}%, rgba(0,0,0,0) 100%)`
                  }
                ),
                current?.textEnabled !== false && /* @__PURE__ */ jsxs12(
                  Flex3,
                  {
                    order: textSide === "left" ? 0 : 1,
                    direction: "column",
                    justify: verticalAlign === "start" ? "flex-start" : verticalAlign === "end" ? "flex-end" : "center",
                    flex: { base: "0 0 auto", md: "1 1 50%" },
                    minW: { base: "100%", md: "50%" },
                    gap: 3,
                    children: [
                      current?.eyebrow ? /* @__PURE__ */ jsx26(Text6, { color: "gray.300", fontSize: { base: "sm", md: "md" }, children: current.eyebrow }) : null,
                      current?.headline ? /* @__PURE__ */ jsx26(Heading2, { fontSize: { base: "2xl", md: "4xl" }, lineHeight: "1.1", children: current.headline }) : null,
                      current?.description ? /* @__PURE__ */ jsx26(Text6, { color: "gray.200", fontSize: { base: "sm", md: "md" }, children: current.description }) : null,
                      current?.ctaLabel ? /* @__PURE__ */ jsx26(
                        Button6,
                        {
                          as: "a",
                          onClick: (e) => puck?.isEditing && e.preventDefault(),
                          variant: "solid",
                          colorScheme: "gray",
                          mt: 2,
                          alignSelf: "flex-start",
                          children: current.ctaLabel
                        }
                      ) : null
                    ]
                  }
                ),
                /* @__PURE__ */ jsx26(
                  Flex3,
                  {
                    order: textSide === "left" ? 1 : 0,
                    justify: "center",
                    align: "center",
                    flex: {
                      base: "1 1 auto",
                      md: current?.textEnabled !== false ? "1 1 50%" : "1 1 100%"
                    },
                    minW: {
                      base: "100%",
                      md: current?.textEnabled !== false ? "50%" : "100%"
                    },
                    children: current?.imageUrl ? /* @__PURE__ */ jsx26(
                      Image6,
                      {
                        src: current.imageUrl,
                        alt: current.alt || "banner",
                        objectFit: imageFit || "cover",
                        maxH: { base: `${hBase}px`, md: `${hMd}px`, lg: `${hLg}px` }
                      }
                    ) : null
                  }
                )
              ]
            }
          ),
          showArrows && safeSlides.length > 1 && /* @__PURE__ */ jsxs12(Fragment5, { children: [
            /* @__PURE__ */ jsx26(
              IconButton3,
              {
                "aria-label": "Previous",
                onClick: prev,
                position: "absolute",
                top: "50%",
                left: 3,
                transform: "translateY(-50%)",
                variant: "ghost",
                color: "white",
                children: /* @__PURE__ */ jsx26(LuChevronLeft, {})
              }
            ),
            /* @__PURE__ */ jsx26(
              IconButton3,
              {
                "aria-label": "Next",
                onClick: next,
                position: "absolute",
                top: "50%",
                right: 3,
                transform: "translateY(-50%)",
                variant: "ghost",
                color: "white",
                children: /* @__PURE__ */ jsx26(LuChevronRight, {})
              }
            )
          ] }),
          showDots && safeSlides.length > 1 && /* @__PURE__ */ jsx26(
            Stack3,
            {
              direction: "row",
              gap: 2,
              position: "absolute",
              bottom: 4,
              left: "50%",
              transform: "translateX(-50%)",
              children: safeSlides.map((_3, i) => /* @__PURE__ */ jsx26(
                Box7,
                {
                  w: 2,
                  h: 2,
                  borderRadius: "full",
                  bg: i === index ? "red.400" : "gray.500",
                  cursor: "pointer",
                  onClick: () => setIndex(i)
                },
                i
              ))
            }
          )
        ]
      }
    );
  }
};
var Banner = withLayout(BannerInternal);

// src/blocks/HeroTwoColumn/index.tsx
import { Box as Box8, Flex as Flex4 } from "@chakra-ui/react";
import { useMemo as useMemo9 } from "react";
import { jsx as jsx27, jsxs as jsxs13 } from "react/jsx-runtime";
var HeroTwoColumnInternal = {
  label: "Hero Two Column",
  fields: {
    height: { type: "number", label: "Height (px)", min: 200, max: 900 },
    gap: { type: "number", label: "Gap", min: 0, max: 32 },
    leftWidth: {
      type: "object",
      label: "Left Width",
      objectFields: {
        base: { type: "text", label: "base", placeholder: "100%" },
        md: { type: "text", label: "md", placeholder: "30%" },
        lg: { type: "text", label: "lg", placeholder: "25%" }
      }
    },
    rightWidth: {
      type: "object",
      label: "Right Width",
      objectFields: {
        base: { type: "text", label: "base", placeholder: "100%" },
        md: { type: "text", label: "md", placeholder: "70%" },
        lg: { type: "text", label: "lg", placeholder: "75%" }
      }
    },
    leftScrollable: {
      type: "radio",
      label: "Left Scrollable",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    },
    leftSticky: {
      type: "radio",
      label: "Left Sticky",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    },
    stickyOffsetTop: {
      type: "number",
      label: "Sticky Offset Top (px)",
      min: 0,
      max: 200
    },
    left: { type: "slot", label: "Left Slot (Categories)" },
    right: { type: "slot", label: "Right Slot (Banner)" }
  },
  defaultProps: {
    height: 360,
    gap: 4,
    leftWidth: { base: "100%", md: "30%", lg: "25%" },
    rightWidth: { base: "100%", md: "70%", lg: "75%" },
    leftScrollable: false,
    leftSticky: false,
    stickyOffsetTop: 0,
    left: [],
    right: []
  },
  render: ({
    height,
    gap,
    leftWidth,
    rightWidth,
    leftScrollable,
    leftSticky,
    stickyOffsetTop,
    left,
    right,
    puck
  }) => {
    const Left = left;
    const Right = right;
    const isEditing = !!puck?.isEditing;
    const minEmpty = Math.max(60, (height || 360) - 40);
    const leftW = useMemo9(() => leftWidth, [leftWidth]);
    const rightW = useMemo9(() => rightWidth, [rightWidth]);
    return /* @__PURE__ */ jsxs13(
      Flex4,
      {
        direction: { base: "column", md: "row" },
        gap,
        align: "stretch",
        w: "100%",
        minH: `${height}px`,
        children: [
          /* @__PURE__ */ jsx27(
            Box8,
            {
              minW: 0,
              flexBasis: leftW,
              flexGrow: 0,
              flexShrink: 0,
              minH: { base: `${height}px`, md: `${height}px` },
              position: !isEditing && leftSticky ? "sticky" : void 0,
              top: !isEditing && leftSticky ? `${stickyOffsetTop || 0}px` : void 0,
              transition: isEditing ? "none" : "width 120ms ease-out",
              children: /* @__PURE__ */ jsx27(
                Box8,
                {
                  overflowY: !isEditing && leftScrollable ? "auto" : "visible",
                  maxH: !isEditing && leftScrollable ? `${height}px` : void 0,
                  children: /* @__PURE__ */ jsx27(Left, { minEmptyHeight: minEmpty })
                }
              )
            }
          ),
          /* @__PURE__ */ jsx27(
            Box8,
            {
              minW: 0,
              flexBasis: rightW,
              flexGrow: 1,
              flexShrink: 1,
              minH: `${height}px`,
              transition: isEditing ? "none" : "width 120ms ease-out",
              children: /* @__PURE__ */ jsx27(Right, { minEmptyHeight: minEmpty })
            }
          )
        ]
      }
    );
  }
};
var HeroTwoColumn = withLayout(HeroTwoColumnInternal);

// src/blocks/CategoryList/index.tsx
import { Box as Box9, Icon as Icon2, Link as Link3, Stack as Stack4, Text as Text7 } from "@chakra-ui/react";
import { useMemo as useMemo10, useState as useState12 } from "react";
import { FiChevronRight as FiChevronRight2 } from "react-icons/fi";
import { jsx as jsx28, jsxs as jsxs14 } from "react/jsx-runtime";
var CategoryListInternal = {
  label: "Category List",
  fields: {
    title: { type: "text", label: "Title" },
    storeId: { type: "text", label: "Store ID" },
    urlRedirect: { type: "text", label: "Url" },
    showAll: {
      type: "radio",
      label: "Show All",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    },
    selectionMode: {
      type: "radio",
      label: "Selection Mode",
      options: [
        { label: "By Limit", value: "limit" },
        { label: "Pick Categories", value: "select" },
        { label: "Enter IDs", value: "ids" }
      ]
    },
    selectedCategories: {
      type: "custom",
      label: "Choose Categories",
      render: CategoryMultiSelect
    },
    categoryIds: { type: "text", label: "Category IDs (comma)" },
    limit: { type: "number", label: "Limit", min: 1, max: 30 },
    itemHeight: { type: "number", label: "Item Height (px)", min: 32, max: 72 },
    hoverSubmenu: {
      type: "radio",
      label: "Hover Submenu",
      options: [
        { label: "On", value: true },
        { label: "Off", value: false }
      ]
    },
    submenuWidth: {
      type: "number",
      label: "Submenu Width (px)",
      min: 160,
      max: 640
    }
  },
  defaultProps: {
    title: "",
    storeId: import.meta.env.VITE_ENTITY_ID || "",
    urlRedirect: "",
    showAll: false,
    selectionMode: "limit",
    selectedCategories: [],
    categoryIds: "",
    limit: 10,
    itemHeight: 44,
    hoverSubmenu: true,
    submenuWidth: 360
  },
  render: ({
    title,
    storeId,
    urlRedirect,
    showAll,
    selectionMode,
    selectedCategories = [],
    categoryIds,
    limit = 10,
    itemHeight = 44,
    hoverSubmenu,
    submenuWidth = 360,
    puck
  }) => {
    const entityId = import.meta.env.VITE_ENTITY_ID || storeId || "";
    const { data: listData } = useGetCategoriesQuery(
      {
        storeId: entityId,
        limit: showAll || selectionMode !== "limit" ? void 0 : limit
      },
      {
        enabled: !!entityId,
        // Force fetch when component mounts in editor (no cache reuse)
        staleTime: 0,
        refetchOnMount: "always",
        refetchOnWindowFocus: false,
        placeholderData: void 0
      }
    );
    const [hoveredId, setHoveredId] = useState12(null);
    const [tree, setTree] = useState12(null);
    const apiCategories = (listData?.data || []).map((c) => {
      const id = c?.id ?? c?.entityId ?? c?.value ?? c?._id ?? c?.code ?? c?.slug;
      const name = c?.name ?? c?.label ?? c?.title ?? c?.slug ?? c?.code ?? c?.displayName ?? c?.text;
      return {
        id: id != null ? String(id) : "",
        name: name ? String(name) : id != null ? String(id) : "",
        icon: c?.icon
      };
    }).filter((c) => c.id !== "");
    const effectiveMode = (selectedCategories?.length || 0) > 0 && selectionMode !== "ids" ? "select" : selectionMode;
    const displayCategories = useMemo10(() => {
      if (effectiveMode === "select" && selectedCategories?.length) {
        return selectedCategories;
      }
      if (effectiveMode === "ids" && categoryIds) {
        const ids = categoryIds.split(",").map((x) => x.trim()).filter(Boolean);
        return ids.map((id) => {
          const match = apiCategories.find(
            (c) => String(c.id ?? c.entityId ?? c.value) === String(id)
          );
          return { id, name: match?.name || id, icon: match?.icon };
        });
      }
      return showAll ? apiCategories : apiCategories.slice(0, limit);
    }, [
      showAll,
      effectiveMode,
      selectedCategories,
      categoryIds,
      apiCategories,
      limit
    ]);
    const ensureTree = async () => {
      if (tree || !hoverSubmenu) return;
      try {
        const res = await getCategoryTree({ storeId: entityId });
        setTree(res?.data || []);
      } catch (e) {
        setTree([]);
      }
    };
    const subItems = (id) => {
      if (!tree) return [];
      const findNode = (nodes) => {
        for (const n of nodes) {
          if (String(n.id) === String(id)) return n;
          const f = n.children && findNode(n.children);
          if (f) return f;
        }
        return null;
      };
      const node = findNode(tree);
      return (node?.children || []).map((c) => ({
        id: String(c.id),
        name: String(c.name || "")
      }));
    };
    return /* @__PURE__ */ jsxs14(
      Box9,
      {
        position: "relative",
        bg: "white",
        border: "1px solid",
        borderColor: "gray.200",
        borderRadius: "md",
        overflow: "hidden",
        children: [
          title ? /* @__PURE__ */ jsx28(
            Box9,
            {
              px: 3,
              py: 2,
              borderBottom: "1px solid",
              borderColor: "gray.200",
              fontWeight: "semibold",
              children: title
            }
          ) : null,
          /* @__PURE__ */ jsx28(
            Stack4,
            {
              children: displayCategories.map((c) => /* @__PURE__ */ jsxs14(
                Box9,
                {
                  as: Link3,
                  onClick: (e) => puck?.isEditing && e.preventDefault(),
                  _hover: { textDecoration: "none", bg: "gray.50" },
                  px: 3,
                  h: `${itemHeight}px`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  onMouseEnter: async () => {
                    setHoveredId(c.id);
                    await ensureTree();
                  },
                  onMouseLeave: () => setHoveredId((prev) => prev === c.id ? null : prev),
                  children: [
                    /* @__PURE__ */ jsx28(Text7, { color: "gray.800", fontSize: "sm", children: c.name }),
                    /* @__PURE__ */ jsx28(Icon2, { as: FiChevronRight2, color: "gray.400" }),
                    hoverSubmenu && hoveredId === c.id && subItems(c.id).length > 0 && /* @__PURE__ */ jsx28(
                      Box9,
                      {
                        position: "absolute",
                        top: 0,
                        left: "100%",
                        w: `${submenuWidth}px`,
                        bg: "white",
                        border: "1px solid",
                        borderColor: "gray.200",
                        borderRadius: "md",
                        boxShadow: "md",
                        zIndex: 10,
                        children: /* @__PURE__ */ jsx28(
                          Stack4,
                          {
                            py: 2,
                            children: subItems(c.id).map((s) => /* @__PURE__ */ jsx28(
                              Box9,
                              {
                                as: Link3,
                                onClick: (e) => puck?.isEditing && e.preventDefault(),
                                _hover: { textDecoration: "none", bg: "gray.50" },
                                px: 3,
                                h: `${itemHeight - 6}px`,
                                display: "flex",
                                alignItems: "center",
                                children: /* @__PURE__ */ jsx28(Text7, { color: "gray.700", fontSize: "sm", children: s.name })
                              },
                              String(s.id)
                            ))
                          }
                        )
                      }
                    )
                  ]
                },
                String(c.id)
              ))
            }
          )
        ]
      }
    );
  }
};
var CategoryList = withLayout(CategoryListInternal);

// src/blocks/Header/index.tsx
import {
  Box as Box10,
  Flex as Flex6,
  Text as Text8,
  Link as CLink,
  Input as CInput,
  IconButton as IconButton4,
  Image as Image7,
  Badge as Badge2,
  Drawer as Drawer3
} from "@chakra-ui/react";
import { useEffect as useEffect11, useMemo as useMemo11, useRef as useRef5, useState as useState13 } from "react";
import { debounce as debounce2 } from "lodash";
import { LuHeart, LuShoppingCart, LuSearch, LuMenu } from "react-icons/lu";
import { useRecoilState as useRecoilState6, useRecoilValue as useRecoilValue3 } from "recoil";
import { jsx as jsx29, jsxs as jsxs15 } from "react/jsx-runtime";
var HeaderInternal = {
  label: "Header",
  fields: {
    logoType: {
      type: "radio",
      label: "Logo Type",
      options: [
        { label: "Text", value: "text" },
        { label: "Image", value: "image" }
      ]
    },
    logoText: { type: "text", label: "Logo Text" },
    logoImageUrl: { type: "text", label: "Logo Image URL" },
    navLinks: {
      type: "array",
      label: "Navigation Links",
      arrayFields: {
        label: { type: "text", label: "Label", contentEditable: true },
        href: { type: "text", label: "Href" }
      },
      defaultItemProps: { label: "Item", href: "#" }
    },
    showSearch: {
      type: "radio",
      label: "Show Search",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    },
    searchVariableName: { type: "text", label: "Search Variable Name" },
    searchPlaceholder: { type: "text", label: "Search Placeholder" },
    showWishlist: {
      type: "radio",
      label: "Show Wishlist",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    },
    showCart: {
      type: "radio",
      label: "Show Cart",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    },
    sticky: {
      type: "radio",
      label: "Sticky",
      options: [
        { label: "On", value: true },
        { label: "Off", value: false }
      ]
    },
    stickyOffset: {
      type: "number",
      label: "Sticky Offset (px)",
      min: 0,
      max: 120
    },
    actionsSlot: { type: "slot", label: "Actions Slot (right)" }
  },
  defaultProps: {
    logoType: "text",
    logoText: "Exclusive",
    navLinks: [
      { label: "Home", href: "/" },
      { label: "Contact", href: "/contact" },
      { label: "About", href: "/about" },
      { label: "Sign Up", href: "/signup" }
    ],
    showSearch: true,
    searchVariableName: "searchQuery",
    searchPlaceholder: "What are you looking for?",
    showWishlist: true,
    showCart: true,
    sticky: true,
    stickyOffset: 0,
    actionsSlot: []
  },
  render: ({
    logoType,
    logoText,
    logoImageUrl,
    navLinks = [],
    showSearch,
    searchVariableName,
    searchPlaceholder,
    showWishlist,
    showCart,
    sticky,
    stickyOffset,
    puck,
    actionsSlot: ActionsSlot
  }) => {
    const isEditing = !!puck?.isEditing;
    const [variables, setVariables] = useRecoilState6(VariableState);
    const productionState = useRecoilValue3(ProductionState);
    const keyAddToCart = "productCart";
    const count = useMemo11(() => {
      const local = typeof window !== "undefined" ? JSON.parse(localStorage.getItem(keyAddToCart) || "[]") : [];
      const memory = productionState?.[keyAddToCart] || [];
      return memory?.length || local?.length || 0;
    }, [productionState]);
    const [cartOpen, setCartOpen] = useState13(false);
    const [mobileOpen, setMobileOpen] = useState13(false);
    const [elevated, setElevated] = useState13(false);
    const onClickCart = () => {
      if (isEditing) return;
      setCartOpen(true);
    };
    const onClickMobile = () => {
      if (isEditing) return;
      setMobileOpen(true);
    };
    const searchKey = searchVariableName || "searchQuery";
    const [searchLocal, setSearchLocal] = useState13(
      variables?.[searchKey] || ""
    );
    const debouncedUpdateRef = useRef5(
      debounce2((val) => {
        setVariables((prev) => ({ ...prev, [searchKey]: val }));
      }, 300)
    );
    useEffect11(() => {
      setSearchLocal(variables?.[searchKey] || "");
    }, [variables, searchKey]);
    useEffect11(() => {
      if (!sticky || isEditing) return;
      const onScroll = () => {
        const y = window.scrollY || 0;
        setElevated(y > (stickyOffset || 0));
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, [sticky, stickyOffset, isEditing]);
    return /* @__PURE__ */ jsxs15(
      Box10,
      {
        position: sticky && !isEditing ? "sticky" : void 0,
        top: sticky && !isEditing ? `${stickyOffset || 0}px` : void 0,
        bg: "white",
        zIndex: 100,
        borderBottom: "1px solid",
        borderColor: "gray.200",
        boxShadow: elevated ? "sm" : "none",
        children: [
          /* @__PURE__ */ jsxs15(
            Flex6,
            {
              align: "center",
              justify: "space-between",
              px: { base: 3, md: 6 },
              py: 3,
              gap: 4,
              transition: "background-color 120ms ease, box-shadow 120ms ease",
              children: [
                /* @__PURE__ */ jsxs15(Flex6, { minW: { base: "auto", md: "200px" }, align: "center", gap: 2, children: [
                  /* @__PURE__ */ jsx29(
                    IconButton4,
                    {
                      "aria-label": "Menu",
                      variant: "ghost",
                      display: { base: "inline-flex", md: "none" },
                      onClick: onClickMobile,
                      children: /* @__PURE__ */ jsx29(LuMenu, {})
                    }
                  ),
                  logoType === "image" && logoImageUrl ? /* @__PURE__ */ jsx29(Image7, { src: logoImageUrl, alt: logoText || "Logo", h: 6 }) : /* @__PURE__ */ jsx29(Text8, { fontWeight: "bold", fontSize: { base: "lg", md: "xl" }, children: logoText })
                ] }),
                /* @__PURE__ */ jsx29(
                  Flex6,
                  {
                    display: { base: "none", md: "flex" },
                    align: "center",
                    gap: 6,
                    flex: 1,
                    justify: "center",
                    children: navLinks.map((l, idx) => /* @__PURE__ */ jsx29(
                      CLink,
                      {
                        href: !isEditing ? l.href : void 0,
                        onClick: (e) => isEditing && e.preventDefault(),
                        color: "gray.800",
                        _hover: {
                          textDecoration: "none",
                          borderBottom: "1px solid",
                          borderColor: "gray.300"
                        },
                        pb: 1,
                        children: l.label
                      },
                      `${l.label}-${idx}`
                    ))
                  }
                ),
                /* @__PURE__ */ jsxs15(
                  Flex6,
                  {
                    align: "center",
                    gap: 3,
                    minW: { base: "auto", md: "220px" },
                    justify: "flex-end",
                    children: [
                      showSearch ? /* @__PURE__ */ jsxs15(
                        Flex6,
                        {
                          align: "center",
                          bg: "gray.100",
                          px: 2,
                          py: 1,
                          borderRadius: "md",
                          gap: 1,
                          minW: { base: "auto", md: "280px" },
                          children: [
                            /* @__PURE__ */ jsx29(
                              CInput,
                              {
                                size: "sm",
                                placeholder: searchPlaceholder || "Search",
                                value: searchLocal,
                                onChange: (e) => {
                                  const v = e.target.value;
                                  setSearchLocal(v);
                                  debouncedUpdateRef.current(v);
                                }
                              }
                            ),
                            /* @__PURE__ */ jsx29(IconButton4, { size: "sm", "aria-label": "Search", variant: "ghost", children: /* @__PURE__ */ jsx29(LuSearch, {}) })
                          ]
                        }
                      ) : null,
                      ActionsSlot ? /* @__PURE__ */ jsx29(ActionsSlot, { minEmptyHeight: 36 }) : null,
                      showWishlist ? /* @__PURE__ */ jsx29(IconButton4, { "aria-label": "Wishlist", variant: "ghost", children: /* @__PURE__ */ jsx29(LuHeart, {}) }) : null,
                      showCart ? /* @__PURE__ */ jsxs15(Box10, { position: "relative", children: [
                        /* @__PURE__ */ jsx29(
                          IconButton4,
                          {
                            "aria-label": "Cart",
                            variant: "ghost",
                            onClick: onClickCart,
                            children: /* @__PURE__ */ jsx29(LuShoppingCart, {})
                          }
                        ),
                        count > 0 ? /* @__PURE__ */ jsx29(
                          Badge2,
                          {
                            position: "absolute",
                            top: "-2px",
                            right: "-2px",
                            colorPalette: "red",
                            minW: "18px",
                            h: "18px",
                            px: "1",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "full",
                            fontSize: "xs",
                            children: count
                          }
                        ) : null
                      ] }) : null
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs15(
            Drawer3.Root,
            {
              size: "md",
              open: cartOpen,
              onOpenChange: (e) => {
                const open = typeof e === "boolean" ? e : e?.open;
                setCartOpen(!!open);
              },
              children: [
                /* @__PURE__ */ jsx29(Drawer3.Backdrop, {}),
                /* @__PURE__ */ jsx29(Drawer3.Positioner, { children: /* @__PURE__ */ jsxs15(Drawer3.Content, { children: [
                  /* @__PURE__ */ jsx29(Drawer3.Header, { children: "Cart" }),
                  /* @__PURE__ */ jsx29(Drawer3.CloseTrigger, {}),
                  /* @__PURE__ */ jsx29(Drawer3.Body, { children: /* @__PURE__ */ jsx29(
                    CheckoutRender,
                    {
                      limit: 10,
                      noResultsText: "No items",
                      urlToProduct: "/",
                      storeId: puck?.metadata?.storeId
                    }
                  ) })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs15(
            Drawer3.Root,
            {
              size: "xs",
              open: mobileOpen,
              onOpenChange: (e) => setMobileOpen(!!(typeof e === "boolean" ? e : e?.open)),
              children: [
                /* @__PURE__ */ jsx29(Drawer3.Backdrop, {}),
                /* @__PURE__ */ jsx29(Drawer3.Positioner, { children: /* @__PURE__ */ jsxs15(Drawer3.Content, { children: [
                  /* @__PURE__ */ jsx29(Drawer3.Header, { children: "Menu" }),
                  /* @__PURE__ */ jsx29(Drawer3.CloseTrigger, {}),
                  /* @__PURE__ */ jsx29(Drawer3.Body, { children: /* @__PURE__ */ jsxs15(Flex6, { direction: "column", gap: 3, children: [
                    showSearch ? /* @__PURE__ */ jsxs15(
                      Flex6,
                      {
                        align: "center",
                        bg: "gray.100",
                        px: 2,
                        py: 1,
                        borderRadius: "md",
                        gap: 1,
                        children: [
                          /* @__PURE__ */ jsx29(
                            CInput,
                            {
                              size: "sm",
                              placeholder: searchPlaceholder || "Search",
                              value: searchLocal,
                              onChange: (e) => {
                                const v = e.target.value;
                                setSearchLocal(v);
                                debouncedUpdateRef.current(v);
                              }
                            }
                          ),
                          /* @__PURE__ */ jsx29(IconButton4, { size: "sm", "aria-label": "Search", variant: "ghost", children: /* @__PURE__ */ jsx29(LuSearch, {}) })
                        ]
                      }
                    ) : null,
                    navLinks.map((l, idx) => /* @__PURE__ */ jsx29(
                      CLink,
                      {
                        href: !isEditing ? l.href : void 0,
                        onClick: (e) => {
                          if (isEditing) {
                            e.preventDefault();
                            return;
                          }
                          setMobileOpen(false);
                        },
                        color: "gray.800",
                        _hover: { textDecoration: "none" },
                        py: 2,
                        borderBottom: "1px solid",
                        borderColor: "gray.100",
                        children: l.label
                      },
                      `${l.label}-${idx}`
                    ))
                  ] }) })
                ] }) })
              ]
            }
          )
        ]
      }
    );
  }
};
var Header = withLayout(HeaderInternal);

// src/blocks/Footer/index.tsx
import {
  Box as Box11,
  Flex as Flex7,
  Link as Link4,
  Stack as Stack5,
  Text as Text9,
  Input as Input3,
  IconButton as IconButton5
} from "@chakra-ui/react";
import {
  LuFacebook,
  LuInstagram,
  LuTwitter,
  LuYoutube,
  LuLinkedin,
  LuGithub
} from "react-icons/lu";
import { jsx as jsx30, jsxs as jsxs16 } from "react/jsx-runtime";
var FooterInternal = {
  label: "Footer",
  fields: {
    columns: {
      type: "array",
      label: "Columns",
      min: 1,
      arrayFields: {
        title: { type: "text", label: "Title" },
        links: {
          type: "array",
          label: "Links",
          arrayFields: {
            label: { type: "text", label: "Label", contentEditable: true },
            href: { type: "text", label: "Href" }
          },
          defaultItemProps: { label: "Link", href: "#" }
        }
      },
      defaultItemProps: { title: "Column", links: [] }
    },
    showNewsletter: {
      type: "radio",
      label: "Newsletter",
      options: [
        { label: "On", value: true },
        { label: "Off", value: false }
      ]
    },
    newsletterPlaceholder: { type: "text", label: "Newsletter Placeholder" },
    showSocial: {
      type: "radio",
      label: "Social Icons",
      options: [
        { label: "On", value: true },
        { label: "Off", value: false }
      ]
    },
    socialLinks: {
      type: "array",
      label: "Social Links",
      arrayFields: {
        platform: {
          type: "select",
          label: "Platform",
          options: [
            { label: "Facebook", value: "facebook" },
            { label: "Instagram", value: "instagram" },
            { label: "Twitter/X", value: "twitter" },
            { label: "YouTube", value: "youtube" },
            { label: "LinkedIn", value: "linkedin" },
            { label: "GitHub", value: "github" }
          ]
        },
        href: { type: "text", label: "URL" }
      },
      defaultItemProps: { platform: "facebook", href: "https://facebook.com" }
    }
  },
  defaultProps: {
    columns: [
      {
        title: "Shop",
        links: [
          { label: "New Arrivals", href: "/" },
          { label: "Best Sellers", href: "/" }
        ]
      },
      {
        title: "Support",
        links: [
          { label: "Contact", href: "/contact" },
          { label: "FAQ", href: "/faq" }
        ]
      }
    ],
    showNewsletter: true,
    newsletterPlaceholder: "Enter your email",
    showSocial: true,
    socialLinks: [
      { platform: "facebook", href: "https://facebook.com" },
      { platform: "instagram", href: "https://instagram.com" },
      { platform: "twitter", href: "https://twitter.com" }
    ]
  },
  render: ({
    columns,
    showNewsletter,
    newsletterPlaceholder,
    showSocial,
    socialLinks = [],
    puck
  }) => {
    const isEditing = !!puck?.isEditing;
    const iconMap2 = {
      facebook: LuFacebook,
      instagram: LuInstagram,
      twitter: LuTwitter,
      youtube: LuYoutube,
      linkedin: LuLinkedin,
      github: LuGithub
    };
    return /* @__PURE__ */ jsxs16(
      Box11,
      {
        bg: "gray.50",
        borderTop: "1px solid",
        borderColor: "gray.200",
        py: 8,
        px: { base: 4, md: 8 },
        children: [
          /* @__PURE__ */ jsxs16(
            Flex7,
            {
              direction: { base: "column", md: "row" },
              gap: 8,
              justify: "space-between",
              children: [
                /* @__PURE__ */ jsx30(Flex7, { gap: 8, wrap: "wrap", flex: 1, children: columns?.map((col, idx) => /* @__PURE__ */ jsxs16(Stack5, { minW: { base: "40%", md: "200px" }, children: [
                  col.title ? /* @__PURE__ */ jsx30(Text9, { fontWeight: "semibold", children: col.title }) : null,
                  (col.links || []).map((l, i) => /* @__PURE__ */ jsx30(
                    Link4,
                    {
                      href: !isEditing ? l.href : void 0,
                      onClick: (e) => isEditing && e.preventDefault(),
                      color: "gray.700",
                      children: l.label
                    },
                    i
                  ))
                ] }, idx)) }),
                /* @__PURE__ */ jsxs16(Stack5, { minW: { base: "100%", md: "320px" }, children: [
                  showNewsletter ? /* @__PURE__ */ jsxs16(Flex7, { align: "center", gap: 2, children: [
                    /* @__PURE__ */ jsx30(Input3, { placeholder: newsletterPlaceholder || "Email" }),
                    /* @__PURE__ */ jsx30(IconButton5, { "aria-label": "Subscribe", children: "Go" })
                  ] }) : null,
                  showSocial ? /* @__PURE__ */ jsx30(Flex7, { gap: 2, children: socialLinks.filter((s) => !!s?.href && !!s?.platform).map((s, idx) => {
                    const Icon3 = iconMap2[s.platform] || LuTwitter;
                    return /* @__PURE__ */ jsx30(
                      Link4,
                      {
                        href: s.href,
                        target: isEditing ? void 0 : "_blank",
                        children: /* @__PURE__ */ jsx30(
                          IconButton5,
                          {
                            "aria-label": s.platform,
                            as: isEditing ? void 0 : "a",
                            rel: isEditing ? void 0 : "noopener noreferrer",
                            children: /* @__PURE__ */ jsx30(Icon3, {})
                          },
                          `${s.platform}-${idx}`
                        )
                      },
                      `${s.platform}-${idx}`
                    );
                  }) }) : null
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs16(Text9, { mt: 6, color: "gray.500", fontSize: "sm", children: [
            "\xA9 ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " Your Store"
          ] })
        ]
      }
    );
  }
};
var Footer = withLayout(FooterInternal);

// src/blocks/ProductDetail/index.tsx
import {
  Box as Box12,
  Button as Button7,
  Flex as Flex8,
  Image as Image8,
  SimpleGrid as SimpleGrid4,
  Skeleton as Skeleton3,
  Text as Text10,
  Portal as Portal3,
  Select,
  NumberInput as NumberInput3
} from "@chakra-ui/react";
import { useEffect as useEffect13, useMemo as useMemo12, useState as useState15 } from "react";

// src/components/ProductSingleSelect/index.tsx
import { FieldLabel as FieldLabel7 } from "@measured/puck";
import { useEffect as useEffect12, useState as useState14 } from "react";
import { jsx as jsx31, jsxs as jsxs17 } from "react/jsx-runtime";
var ProductSingleSelect = ({ name, value, onChange }) => {
  const [items, setItems] = useState14([]);
  const [search, setSearch] = useState14("");
  useEffect12(() => {
    const ctl = new AbortController();
    const storeId = import.meta.env.VITE_ENTITY_ID || "";
    (async () => {
      try {
        const res = await getProducts({ storeId, query: search, limit: 20, page: 1 }, ctl.signal);
        const data = Array.isArray(res?.data) ? res.data : [];
        setItems(data.map((p) => ({ id: String(p.id), name: String(p.name || "") })));
      } catch (e) {
      }
    })();
    return () => ctl.abort();
  }, [search]);
  return /* @__PURE__ */ jsx31(FieldLabel7, { label: "Product", children: /* @__PURE__ */ jsxs17("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
    /* @__PURE__ */ jsx31(
      "input",
      {
        type: "text",
        placeholder: "Search...",
        value: search,
        onChange: (e) => setSearch(e.target.value),
        style: { padding: 6, border: "1px solid #ddd", borderRadius: 4 },
        name: `${name}__search`
      }
    ),
    /* @__PURE__ */ jsxs17(
      "select",
      {
        name,
        value: value || "",
        onChange: (e) => onChange(e.target.value || void 0),
        style: { padding: 6, border: "1px solid #ddd", borderRadius: 4 },
        children: [
          /* @__PURE__ */ jsx31("option", { value: "", children: "-- Select --" }),
          items.map((opt) => /* @__PURE__ */ jsx31("option", { value: opt.id, children: opt.name }, opt.id))
        ]
      }
    )
  ] }) });
};

// src/blocks/ProductDetail/index.tsx
import { round as round4 } from "lodash";
import { Fragment as Fragment6, jsx as jsx32, jsxs as jsxs18 } from "react/jsx-runtime";
var ProductDetailInternal = {
  label: "Product Detail",
  fields: {
    productId: {
      type: "custom",
      label: "Product",
      render: ProductSingleSelect
    },
    showBreadcrumbs: {
      type: "radio",
      label: "Show Breadcrumbs",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    },
    showCompareAtPrice: {
      type: "radio",
      label: "Show Compare-at Price",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    },
    showStockState: {
      type: "radio",
      label: "Show Stock State",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    },
    lowStockThreshold: {
      type: "number",
      label: "Low Stock Threshold",
      min: 0,
      max: 100
    },
    variantSelectorStyle: {
      type: "select",
      label: "Variant Selector",
      options: [
        { label: "Dropdown", value: "dropdown" },
        { label: "Swatch", value: "swatch" }
      ]
    },
    showQuantity: {
      type: "radio",
      label: "Show Quantity",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    },
    enableStickyATC: {
      type: "radio",
      label: "Sticky Add To Cart",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    },
    enableJsonLd: {
      type: "radio",
      label: "Enable JSON-LD",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    },
    enableThumbnails: {
      type: "radio",
      label: "Show Thumbnails",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    },
    enableZoom: {
      type: "radio",
      label: "Enable Zoom Cursor",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    }
  },
  defaultProps: {
    productId: "",
    showBreadcrumbs: true,
    showCompareAtPrice: true,
    showStockState: true,
    lowStockThreshold: 5,
    variantSelectorStyle: "dropdown",
    showQuantity: true,
    enableStickyATC: true,
    enableJsonLd: true,
    enableThumbnails: true,
    enableZoom: false
  },
  render: ({
    productId,
    showBreadcrumbs,
    showCompareAtPrice,
    showStockState,
    lowStockThreshold,
    variantSelectorStyle,
    showQuantity,
    enableStickyATC,
    enableJsonLd,
    enableThumbnails,
    enableZoom,
    puck
  }) => {
    const id = productId || "";
    const { data, isLoading } = useGetProductDetailQuery(id, {
      isGettingModels: true,
      isGettingDefaultModel: true
    });
    const product = data || {};
    const [selected, setSelected] = useState15(null);
    const [selectedModel, setSelectedModel] = useState15(null);
    const [qty, setQty] = useState15(1);
    const [mainIndex, setMainIndex] = useState15(0);
    if (!id) {
      return /* @__PURE__ */ jsx32(Box12, { children: "Choose a product" });
    }
    if (isLoading) {
      return /* @__PURE__ */ jsx32(Skeleton3, { h: "400px" });
    }
    useEffect13(() => {
      const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
      const vId = params?.get("variant");
      const models = Array.isArray(product?.models) ? product.models : [];
      const byUrl = models.find(
        (m) => String(m?.id ?? m?.entityId) === String(vId)
      );
      const init = byUrl || product?.defaultModel || models?.[0] || null;
      setSelectedModel(init);
    }, [product]);
    const baseCents = useMemo12(
      () => Number(selectedModel?.price ?? product?.price ?? 0),
      [selectedModel, product]
    );
    const saleCents = useMemo12(
      () => Number(selectedModel?.onlinePrice ?? product?.onlinePrice ?? baseCents),
      [selectedModel, product, baseCents]
    );
    const isOnSale = saleCents < baseCents;
    const price = round4(
      (isOnSale ? saleCents : baseCents) / 100,
      0
    );
    const compareAt = round4(baseCents / 100, 0);
    const inferRemain = () => {
      const rq = product?.remainedQuantity ?? selectedModel?.remainedQuantity;
      if (typeof rq === "number") return rq;
      const models = Array.isArray(product?.models) ? product.models : [];
      if (models.length > 0)
        return models.some((m) => Number(m?.status) === 1) ? 999 : 0;
      if (product?.defaultModel)
        return Number(product?.defaultModel?.status) === 1 ? 999 : 0;
      if (typeof product?.statusId === "number")
        return Number(product.statusId) === 1 ? 999 : 0;
      return 999;
    };
    const remainedQty = inferRemain();
    const images = Array.isArray(product?.images) && product.images.length ? product.images.map((i) => i.url) : [product?.image].filter(Boolean);
    const pushVariantToUrl = (m) => {
      if (typeof window === "undefined") return;
      const url = new URL(window.location.href);
      if (m?.id ?? m?.entityId)
        url.searchParams.set("variant", String(m.id ?? m.entityId));
      else url.searchParams.delete("variant");
      window.history.replaceState({}, "", url.toString());
    };
    return /* @__PURE__ */ jsxs18(Fragment6, { children: [
      showBreadcrumbs && /* @__PURE__ */ jsxs18(Box12, { mb: 3, color: "gray.600", fontSize: "sm", children: [
        "Home",
        " / ",
        product?.category?.name || "Category",
        " / ",
        product?.name
      ] }),
      /* @__PURE__ */ jsxs18(Flex8, { direction: { base: "column", md: "row" }, gap: 6, children: [
        /* @__PURE__ */ jsxs18(Box12, { flex: { base: "1 1 auto", md: "1 1 50%" }, children: [
          /* @__PURE__ */ jsx32(
            Image8,
            {
              src: images?.[mainIndex] || "https://via.placeholder.com/800x600",
              alt: product?.name,
              borderRadius: "md",
              loading: "lazy",
              style: enableZoom ? { cursor: "zoom-in" } : void 0
            }
          ),
          enableThumbnails && images.length > 1 && /* @__PURE__ */ jsx32(SimpleGrid4, { columns: { base: 4, md: 6 }, gap: 2, mt: 2, children: images.map((src, i) => /* @__PURE__ */ jsx32(
            Image8,
            {
              src,
              alt: `${product?.name}-${i}`,
              borderRadius: "md",
              opacity: i === mainIndex ? 1 : 0.7,
              onClick: () => setMainIndex(i),
              style: { cursor: "pointer" },
              loading: "lazy"
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ jsxs18(Box12, { flex: { base: "1 1 auto", md: "1 1 50%" }, children: [
          /* @__PURE__ */ jsx32(Text10, { fontSize: "2xl", fontWeight: "semibold", children: product?.name }),
          /* @__PURE__ */ jsxs18(Box12, { mt: 2, display: "flex", alignItems: "baseline", gap: 2, children: [
            /* @__PURE__ */ jsxs18(Text10, { fontSize: "xl", color: isOnSale ? "red.500" : void 0, children: [
              "$",
              price
            ] }),
            showCompareAtPrice && isOnSale && /* @__PURE__ */ jsxs18(
              Text10,
              {
                fontSize: "sm",
                color: "gray.500",
                textDecoration: "line-through",
                children: [
                  "$",
                  compareAt
                ]
              }
            )
          ] }),
          Array.isArray(product?.models) && product.models.length > 0 && /* @__PURE__ */ jsxs18(Box12, { mt: 4, children: [
            /* @__PURE__ */ jsx32(Text10, { fontSize: "sm", color: "gray.600", children: "Variant" }),
            variantSelectorStyle === "swatch" ? /* @__PURE__ */ jsx32(Flex8, { gap: 2, wrap: "wrap", mt: 2, children: product.models.map((m, idx) => {
              const mid = String(m?.id ?? m?.entityId ?? idx);
              const active = String(selectedModel?.id ?? selectedModel?.entityId) === mid;
              return /* @__PURE__ */ jsx32(
                Button7,
                {
                  size: "sm",
                  variant: active ? "solid" : "outline",
                  onClick: () => {
                    setSelectedModel(m);
                    pushVariantToUrl(m);
                  },
                  children: m?.name || m?.title || m?.sku || `#${idx + 1}`
                },
                mid
              );
            }) }) : /* @__PURE__ */ jsxs18(Select.Root, { size: "md", collection: product.models || [], children: [
              /* @__PURE__ */ jsx32(Select.HiddenSelect, {}),
              /* @__PURE__ */ jsxs18(Select.Control, { children: [
                /* @__PURE__ */ jsx32(Select.Trigger, { children: /* @__PURE__ */ jsx32(Select.ValueText, { placeholder: "Select framework" }) }),
                /* @__PURE__ */ jsx32(Select.IndicatorGroup, { children: /* @__PURE__ */ jsx32(Select.Indicator, {}) })
              ] }),
              /* @__PURE__ */ jsx32(Portal3, { children: /* @__PURE__ */ jsx32(Select.Positioner, { children: /* @__PURE__ */ jsx32(Select.Content, { children: product?.models?.map((model) => /* @__PURE__ */ jsxs18(Select.Item, { item: model, children: [
                model.name,
                /* @__PURE__ */ jsx32(Select.ItemIndicator, {})
              ] }, model.id)) }) }) })
            ] })
          ] }),
          showStockState && /* @__PURE__ */ jsx32(
            Box12,
            {
              mt: 3,
              fontSize: "sm",
              color: remainedQty <= 0 ? "red.600" : remainedQty <= (lowStockThreshold ?? 0) ? "orange.600" : "green.600",
              children: remainedQty <= 0 ? "Out of stock" : remainedQty <= (lowStockThreshold ?? 0) ? `Low stock (${remainedQty})` : "In stock"
            }
          ),
          showQuantity && /* @__PURE__ */ jsx32(Box12, { mt: 3, children: /* @__PURE__ */ jsxs18(
            NumberInput3.Root,
            {
              min: 1,
              max: 99,
              onValueChange: (e) => setQty(e?.valueAsNumber || 1),
              width: "120px",
              children: [
                /* @__PURE__ */ jsx32(NumberInput3.Control, {}),
                /* @__PURE__ */ jsx32(NumberInput3.Input, {})
              ]
            }
          ) }),
          /* @__PURE__ */ jsx32(
            Button7,
            {
              mt: 4,
              colorPalette: "orange",
              onClick: () => setSelected({ ...product, selectedModel, quantity: qty }),
              disabled: !!puck?.isEditing || remainedQty <= 0,
              children: "Add to cart"
            }
          ),
          /* @__PURE__ */ jsx32(Box12, { mt: 4, color: "gray.700", children: /* @__PURE__ */ jsx32(
            "div",
            {
              dangerouslySetInnerHTML: {
                __html: product?.descriptions || ""
              }
            }
          ) }),
          /* @__PURE__ */ jsx32(
            ButtonAddToCart_default,
            {
              openDrawer: !!selected,
              product: selected,
              keyAddToCart: "productCart",
              saveCartToStore: () => setSelected(null),
              onCloseDrawer: () => setSelected(null)
            }
          )
        ] })
      ] }),
      enableStickyATC && !puck?.isEditing && /* @__PURE__ */ jsxs18(
        Flex8,
        {
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          bg: "white",
          borderTop: "1px solid",
          borderColor: "gray.200",
          p: 3,
          align: "center",
          justify: "space-between",
          zIndex: 20,
          children: [
            /* @__PURE__ */ jsx32(Text10, { fontWeight: "medium", children: product?.name }),
            /* @__PURE__ */ jsxs18(Flex8, { align: "center", gap: 3, children: [
              /* @__PURE__ */ jsxs18(Text10, { fontSize: "lg", children: [
                "$",
                price
              ] }),
              /* @__PURE__ */ jsx32(
                Button7,
                {
                  size: "sm",
                  colorPalette: "orange",
                  onClick: () => setSelected({ ...product, selectedModel, quantity: qty }),
                  disabled: remainedQty <= 0,
                  children: "Add to cart"
                }
              )
            ] })
          ]
        }
      ),
      enableJsonLd && /* @__PURE__ */ jsx32(
        "script",
        {
          type: "application/ld+json",
          dangerouslySetInnerHTML: {
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: product?.name,
              image: images,
              description: product?.descriptions,
              sku: product?.sku,
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: (isOnSale ? saleCents : baseCents) / 100,
                availability: remainedQty > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
              }
            })
          }
        }
      )
    ] });
  }
};
var ProductDetail = withLayout(ProductDetailInternal);

// src/blocks/FacetControls/index.tsx
import {
  Flex as Flex9,
  Select as Select2,
  Switch,
  Text as Text11,
  Button as Button8,
  Input as ChakraInput2,
  Portal as Portal4
} from "@chakra-ui/react";
import { useRecoilState as useRecoilState7 } from "recoil";
import { jsx as jsx33, jsxs as jsxs19 } from "react/jsx-runtime";
var FacetControlsInternal = {
  label: "Facet Controls",
  fields: {
    bindSortVariableName: { type: "text", label: "Sort Variable Name" },
    bindHideOutOfStockVariableName: {
      type: "text",
      label: "Hide OOS Var Name"
    },
    bindFiltersVariableName: { type: "text", label: "Filters Var Name" }
  },
  defaultProps: {
    bindSortVariableName: "products.sortBy",
    bindHideOutOfStockVariableName: "products.hideOutOfStock",
    bindFiltersVariableName: "products.filters"
  },
  inline: true,
  render: ({
    bindSortVariableName,
    bindHideOutOfStockVariableName,
    bindFiltersVariableName
  }) => {
    const [vars, setVars] = useRecoilState7(VariableState);
    const sort = vars?.[bindSortVariableName || "products.sortBy"] || "featured";
    const hide = !!vars?.[bindHideOutOfStockVariableName || "products.hideOutOfStock"];
    const filters = vars?.[bindFiltersVariableName || "products.filters"] || {};
    const priceMin = filters?.priceMin ?? "";
    const priceMax = filters?.priceMax ?? "";
    return /* @__PURE__ */ jsxs19(Flex9, { align: "center", gap: 4, wrap: "wrap", children: [
      /* @__PURE__ */ jsxs19(Flex9, { align: "center", gap: 2, children: [
        /* @__PURE__ */ jsx33(Text11, { children: "Sort:" }),
        /* @__PURE__ */ jsxs19(Select2.Root, { size: "md", collection: {}, children: [
          /* @__PURE__ */ jsx33(Select2.HiddenSelect, {}),
          /* @__PURE__ */ jsxs19(Select2.Control, { children: [
            /* @__PURE__ */ jsx33(Select2.Trigger, { children: /* @__PURE__ */ jsx33(Select2.ValueText, { placeholder: "Select framework" }) }),
            /* @__PURE__ */ jsx33(Select2.IndicatorGroup, { children: /* @__PURE__ */ jsx33(Select2.Indicator, {}) })
          ] }),
          /* @__PURE__ */ jsx33(Portal4, { children: /* @__PURE__ */ jsx33(Select2.Positioner, { children: /* @__PURE__ */ jsx33(Select2.Content, { children: [
            { name: "Featured", value: "featured" },
            { name: "Newest", value: "newest" },
            { name: "Price: Low to High", value: "priceAsc" },
            { name: "Price: High to Low", value: "priceDesc" }
          ]?.map((model) => /* @__PURE__ */ jsxs19(Select2.Item, { item: model, children: [
            model.name,
            /* @__PURE__ */ jsx33(Select2.ItemIndicator, {})
          ] }, model.value)) }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs19(Flex9, { align: "center", gap: 2, children: [
        /* @__PURE__ */ jsx33(Text11, { children: "Hide OOS" }),
        /* @__PURE__ */ jsxs19(
          Switch.Root,
          {
            checked: hide,
            onCheckedChange: (e) => {
            },
            children: [
              /* @__PURE__ */ jsx33(Switch.HiddenInput, {}),
              /* @__PURE__ */ jsx33(Switch.Control, { children: /* @__PURE__ */ jsx33(Switch.Thumb, {}) }),
              /* @__PURE__ */ jsx33(Switch.Label, {})
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs19(Flex9, { align: "center", gap: 2, children: [
        /* @__PURE__ */ jsx33(Text11, { children: "Price" }),
        /* @__PURE__ */ jsx33(
          ChakraInput2,
          {
            size: "sm",
            type: "number",
            placeholder: "Min",
            value: priceMin,
            onChange: (e) => setVars((prev) => ({
              ...prev,
              [bindFiltersVariableName || "products.filters"]: {
                ...(prev || {})[bindFiltersVariableName || "products.filters"] || {},
                priceMin: e.target.value === "" ? void 0 : Number(e.target.value)
              }
            })),
            width: "90px"
          }
        ),
        /* @__PURE__ */ jsx33(Text11, { children: "-" }),
        /* @__PURE__ */ jsx33(
          ChakraInput2,
          {
            size: "sm",
            type: "number",
            placeholder: "Max",
            value: priceMax,
            onChange: (e) => setVars((prev) => ({
              ...prev,
              [bindFiltersVariableName || "products.filters"]: {
                ...(prev || {})[bindFiltersVariableName || "products.filters"] || {},
                priceMax: e.target.value === "" ? void 0 : Number(e.target.value)
              }
            })),
            width: "90px"
          }
        )
      ] }),
      /* @__PURE__ */ jsx33(
        Button8,
        {
          size: "sm",
          variant: "outline",
          onClick: () => {
          },
          children: "Clear filters"
        }
      )
    ] });
  }
};
var FacetControls = withLayout(FacetControlsInternal);

// src/blocks/QrCode/index.tsx
import { QrCode } from "@chakra-ui/react";
import { ALargeSmall as ALargeSmall3 } from "lucide-react";
import { jsx as jsx34 } from "react/jsx-runtime";
var QrCodePlugins = {
  label: "Qr Code",
  fields: {
    size: {
      label: "Size",
      type: "select",
      labelIcon: /* @__PURE__ */ jsx34(ALargeSmall3, { size: 16 }),
      options: [
        { label: "2Xs", value: "2xs" },
        { label: "Xs", value: "xs" },
        { label: "Sm", value: "sm" },
        { label: "Md", value: "md" },
        { label: "Lg", value: "lg" },
        { label: "Xl", value: "xl" },
        { label: "2Xl", value: "2xl" }
      ]
    },
    color: {
      label: "Color",
      ...colorField
    },
    content: {
      label: "Content",
      type: "text"
    }
  },
  defaultProps: {
    size: "md",
    color: "",
    content: "Default"
  },
  render: ({
    size,
    color,
    content
    // puck
  }) => {
    return /* @__PURE__ */ jsx34("div", { children: /* @__PURE__ */ jsx34(QrCode.Root, { size, value: content, children: /* @__PURE__ */ jsx34(QrCode.Frame, { style: { color }, children: /* @__PURE__ */ jsx34(QrCode.Pattern, {}) }) }) });
  }
};

// src/blocks/MiniCart/index.tsx
import {
  IconButton as IconButton6,
  Badge as Badge3,
  Box as Box14,
  Drawer as Drawer4
} from "@chakra-ui/react";
import { LuShoppingCart as LuShoppingCart2 } from "react-icons/lu";
import { useMemo as useMemo13, useState as useState16 } from "react";
import { useRecoilValue as useRecoilValue4 } from "recoil";
import { jsx as jsx35, jsxs as jsxs20 } from "react/jsx-runtime";
var getPlacementStyle = (placement) => {
  switch (placement) {
    case "fixed-top-right":
      return { position: "fixed", top: 12, right: 12, zIndex: 30 };
    case "fixed-bottom-right":
      return { position: "fixed", bottom: 12, right: 12, zIndex: 30 };
    case "fixed-bottom-left":
      return { position: "fixed", bottom: 12, left: 12, zIndex: 30 };
    case "fixed-top-left":
      return { position: "fixed", top: 12, left: 12, zIndex: 30 };
    default:
      return {};
  }
};
var MiniCartBlockInternal = {
  label: "Mini Cart",
  fields: {
    keyAddToCart: { type: "text", label: "Cart Storage Key" },
    showBadge: {
      type: "radio",
      label: "Show Badge",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]
    },
    placement: {
      type: "select",
      label: "Placement",
      options: [
        { label: "Inline", value: "inline" },
        { label: "Fixed Top Right", value: "fixed-top-right" },
        { label: "Fixed Bottom Right", value: "fixed-bottom-right" },
        { label: "Fixed Bottom Left", value: "fixed-bottom-left" },
        { label: "Fixed Top Left", value: "fixed-top-left" }
      ]
    }
  },
  defaultProps: {
    keyAddToCart: "productCart",
    showBadge: true,
    placement: "fixed-bottom-right"
  },
  render: ({
    keyAddToCart = "productCart",
    showBadge = true,
    placement = "fixed-bottom-right",
    puck
  }) => {
    const production = useRecoilValue4(ProductionState);
    const [open, setOpen] = useState16(false);
    const count = useMemo13(() => {
      try {
        const local = typeof window !== "undefined" ? JSON.parse(localStorage.getItem(keyAddToCart) || "[]") : [];
        const memory = production?.[keyAddToCart] || [];
        return memory?.length || local?.length || 0;
      } catch {
        return 0;
      }
    }, [production, keyAddToCart]);
    const style = getPlacementStyle(placement);
    const onClickCart = () => {
      if (puck?.isEditing) return;
      setOpen(true);
    };
    return /* @__PURE__ */ jsxs20(Box14, { style, children: [
      /* @__PURE__ */ jsxs20(Box14, { position: "relative", display: "inline-block", children: [
        /* @__PURE__ */ jsx35(IconButton6, { "aria-label": "Cart", variant: "ghost", onClick: onClickCart, children: /* @__PURE__ */ jsx35(LuShoppingCart2, {}) }),
        showBadge && count > 0 ? /* @__PURE__ */ jsx35(
          Badge3,
          {
            position: "absolute",
            top: "-2px",
            right: "-2px",
            colorPalette: "red",
            children: count
          }
        ) : null
      ] }),
      /* @__PURE__ */ jsxs20(
        Drawer4.Root,
        {
          placement: "end",
          size: "md",
          open,
          onOpenChange: (e) => {
            const isOpen = typeof e === "boolean" ? e : e?.open;
            setOpen(!!isOpen);
          },
          children: [
            /* @__PURE__ */ jsx35(Drawer4.Backdrop, {}),
            /* @__PURE__ */ jsx35(Drawer4.Positioner, { children: /* @__PURE__ */ jsxs20(Drawer4.Content, { children: [
              /* @__PURE__ */ jsx35(Drawer4.Header, { children: "Cart" }),
              /* @__PURE__ */ jsx35(Drawer4.CloseTrigger, {}),
              /* @__PURE__ */ jsx35(Drawer4.Body, { children: /* @__PURE__ */ jsx35(
                CheckoutRender,
                {
                  limit: 10,
                  noResultsText: "No items",
                  urlToProduct: "/",
                  storeId: puck?.metadata?.storeId
                }
              ) })
            ] }) })
          ]
        }
      )
    ] });
  }
};
var MiniCartBlock = withLayout(MiniCartBlockInternal);

// src/blocks/puck.config.tsx
var PuckConfig = {
  root: root_default,
  categories: {
    layout: {
      components: ["Container", "Grid", "Flex", "HeroTwoColumn"],
      defaultExpanded: true
    },
    navigation: {
      title: "Navigation",
      components: ["Header"],
      defaultExpanded: true
    },
    marketing: {
      title: "Marketing",
      components: ["Banner"],
      defaultExpanded: true
    },
    footer: {
      title: "Footer",
      components: ["Footer"],
      defaultExpanded: true
    },
    typography: {
      components: ["Heading", "Text", "QrCodePlugins"],
      defaultExpanded: true
    },
    interactive: {
      title: "Actions",
      components: ["ButtonPlugins", "Input", "IconPlugins"],
      defaultExpanded: false
    },
    storefront: {
      title: "Product",
      components: [
        "Products",
        "Cart",
        "CategoryGrid",
        "CategoryList",
        "ProductDetail",
        "FacetControls",
        "MiniCartBlock"
      ],
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
    ButtonPlugins,
    IconPlugins,
    QrCodePlugins,
    Products,
    // Product,
    CategoryGrid,
    CategoryList,
    Cart,
    Banner,
    HeroTwoColumn,
    Header,
    Footer,
    ProductDetail,
    FacetControls,
    MiniCartBlock
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
import { jsx as jsx36 } from "react/jsx-runtime";
var queryClient = new QueryClient();
var PuckProvider = ({ children }) => {
  return /* @__PURE__ */ jsx36(RecoilRoot, { children: /* @__PURE__ */ jsx36(ChakraProvider, { value: defaultSystem, children: /* @__PURE__ */ jsx36(QueryClientProvider, { client: queryClient, children }) }) });
};
export {
  PuckConfig,
  PuckProvider
};
//# sourceMappingURL=index.mjs.map