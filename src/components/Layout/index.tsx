// src/components/layout.tsx
import { forwardRef, ReactNode } from "react";
import { CSSProperties } from "react";
import type {
  ComponentConfig,
  DefaultComponentProps,
  ObjectField,
} from "@measured/puck";
import { Box } from "@chakra-ui/react";
import { colorField } from "../ColorField";

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

export type WithLayout<Props extends DefaultComponentProps> = Props & {
  layout?: LayoutFieldProps;
};

type LayoutProps = WithLayout<{
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}>;
const spacingOptions = [
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
]?.map(({ value }, key) => ({ label: value, value, key }));

export const layoutField: ObjectField<LayoutFieldProps> = {
  type: "object",
  objectFields: {
    spanCol: {
      label: "Grid Column Span",
      type: "number",
      min: 1,
      max: 12,
    },
    startCol: {
      label: "Grid Column Start",
      type: "number",
      min: 1,
      max: 12,
    },
    spanRow: {
      label: "Grid Row Span",
      type: "number",
      min: 1,
      max: 12,
    },
    startRow: {
      label: "Grid Row Start",
      type: "number",
      min: 1,
      max: 12,
    },
    justifySelf: {
      label: "Justify Self (Grid)",
      type: "select",
      options: [
        { label: "Auto", value: "auto" },
        { label: "Start", value: "start" },
        { label: "End", value: "end" },
        { label: "Center", value: "center" },
        { label: "Stretch", value: "stretch" },
      ],
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
        { label: "Baseline", value: "baseline" },
      ],
    },
    grow: {
      label: "Flex Grow",
      type: "radio",
      options: [
        { label: "true", value: true },
        { label: "false", value: false },
      ],
    },
    shrink: {
      label: "Flex Shrink",
      type: "radio",
      options: [
        { label: "true", value: true },
        { label: "false", value: false },
      ],
    },
    basis: {
      label: "Flex Basis",
      type: "text",
    },
    paddingTop: {
      type: "select",
      label: "Padding Top",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions],
    },
    paddingRight: {
      type: "select",
      label: "Padding Right",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions],
    },
    paddingBottom: {
      type: "select",
      label: "Padding Bottom",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions],
    },
    paddingLeft: {
      type: "select",
      label: "Padding Left",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions],
    },
    marginTop: {
      type: "select",
      label: "Margin Top",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions],
    },
    marginRight: {
      type: "select",
      label: "Margin Right",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions],
    },
    marginBottom: {
      type: "select",
      label: "Margin Bottom",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions],
    },
    marginLeft: {
      type: "select",
      label: "Margin Left",
      options: [{ label: "0px", value: "0px" }, ...spacingOptions],
    },
    bgColor: {
      label: "Background Color",
      ...colorField,
    },
    bgImage: {
      label: "Background Image",
      type: "text",
    },
    border: {
      label: "Border",
      type: "text",
    },
    borderRadius: {
      label: "Border Radius",
      type: "text",
    },
  },
};

const Layout = forwardRef<any, LayoutProps>(
  ({ children, className, layout, style }, ref) => {
    const clamp = (val: number, min: number, max: number) =>
      Math.max(min, Math.min(max, val));
    return (
      <Box
        ref={ref}
        className={className}
        gridColumn={
          layout?.spanCol
            ? `${layout.startCol || "auto"} / span ${clamp(
                layout.spanCol,
                1,
                12
              )}`
            : undefined
        }
        gridRow={
          layout?.spanRow
            ? `${layout.startRow || "auto"} / span ${clamp(
                layout.spanRow,
                1,
                12
              )}`
            : undefined
        }
        justifySelf={layout?.justifySelf}
        alignSelf={layout?.alignSelf}
        flexGrow={layout?.grow ? 1 : undefined}
        flexShrink={layout?.shrink ? 1 : undefined}
        flexBasis={layout?.basis}
        pt={layout?.paddingTop}
        pr={layout?.paddingRight}
        pb={layout?.paddingBottom}
        pl={layout?.paddingLeft}
        mt={layout?.marginTop}
        mr={layout?.marginRight}
        mb={layout?.marginBottom}
        ml={layout?.marginLeft}
        bg={layout?.bgColor}
        bgImage={layout?.bgImage}
        border={layout?.border}
        borderRadius={layout?.borderRadius}
        style={style}
      >
        {children}
      </Box>
    );
  }
);

Layout.displayName = "Layout";

export { Layout };

export function withLayout<
  ThisComponentConfig extends ComponentConfig<any> = ComponentConfig
>(componentConfig: ThisComponentConfig): ThisComponentConfig {
  const baseFields: any = {
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
    borderRadius: layoutField.objectFields.borderRadius,
  };

  return {
    ...componentConfig,
    fields: {
      ...componentConfig.fields,
      layout: layoutField,
    },
    defaultProps: {
      ...componentConfig.defaultProps,
      layout: {
        spanCol: 1,
        startCol: undefined,
        spanRow: 1,
        startRow: undefined,
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
        ...componentConfig.defaultProps?.layout,
      },
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
          alignSelf: layoutField.objectFields.alignSelf,
        };
      } else if (parentType === "Flex") {
        adjustedObjectFields = {
          ...baseFields,
          grow: layoutField.objectFields.grow,
          shrink: layoutField.objectFields.shrink,
          basis: layoutField.objectFields.basis,
          alignSelf: layoutField.objectFields.alignSelf,
        };
      }

      const adjustedLayout = {
        ...layoutField,
        objectFields: adjustedObjectFields,
      };

      return {
        ...componentConfig.fields,
        layout: adjustedLayout,
      };
    },
    inline: true,
    render: (props) => (
      <Layout
        className={props.className}
        layout={props.layout as LayoutFieldProps}
        ref={props.puck?.dragRef}
        style={props.style}
      >
        {componentConfig.render(props)}
      </Layout>
    ),
  };
}
