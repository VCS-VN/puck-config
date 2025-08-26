// src/components/Grid.tsx
import { ComponentConfig } from "@measured/puck";
import { Box, Grid as ChakraGrid, Stack, Text } from "@chakra-ui/react";
import { withLayout } from "@/components/Layout";

const baseGrid: ComponentConfig = {
  fields: {
    mobile: {
      label: "Mobile Settings",
      type: "object",
      objectFields: {
        columns: {
          label: "Number of Columns (Mobile)",
          type: "number",
          min: 1,
          max: 12,
        },
        gap: { label: "Gap (Mobile)", type: "text" },
      },
    },
    tablet: {
      label: "Tablet Settings",
      type: "object",
      objectFields: {
        columns: {
          label: "Number of Columns (Tablet)",
          type: "number",
          min: 1,
          max: 12,
        },
        gap: { label: "Gap (Tablet)", type: "text" },
      },
    },
    desktop: {
      label: "Desktop Settings",
      type: "object",
      objectFields: {
        columns: {
          label: "Number of Columns (Desktop)",
          type: "number",
          min: 1,
          max: 12,
        },
        gap: { label: "Gap (Desktop)", type: "text" },
      },
    },
  },
  defaultProps: {
    mobile: {
      columns: 1,
      gap: "4",
    },
    tablet: {
      columns: 2,
      gap: "4",
    },
    desktop: {
      columns: 3,
      gap: "4",
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
      borderRadius: "0",
    },
  },
  render: (
    props: {
      puck: any;
      previewBreakpoint: any;
      mobile: any;
      tablet: any;
      desktop: any;
    },
    a,
    b
  ) => {
    console.log("🚀 ~ props:", props, a, b);
    const { puck, previewBreakpoint, mobile, tablet, desktop } = props;
    console.log("🚀 ~ previewBreakpoint:", previewBreakpoint);
    const isEditing = puck.isEditing;

    const content = <Box>{puck.renderDropZone({ zone: "content" })}</Box>;

    if (isEditing) {
      let selectedGrid;
      switch (previewBreakpoint) {
        case "mobile":
          selectedGrid = (
            <ChakraGrid
              templateColumns={`repeat(${mobile.columns}, 1fr)`}
              gap={mobile.gap}
            >
              {content}
            </ChakraGrid>
          );
          break;
        case "tablet":
          selectedGrid = (
            <ChakraGrid
              templateColumns={`repeat(${tablet.columns}, 1fr)`}
              gap={tablet.gap}
            >
              {content}
            </ChakraGrid>
          );
          break;
        case "desktop":
        default:
          selectedGrid = (
            <ChakraGrid
              templateColumns={`repeat(${desktop.columns}, 1fr)`}
              gap={desktop.gap}
            >
              {content}
            </ChakraGrid>
          );
          break;
      }
      return selectedGrid;
    }

    return (
      <>
        <ChakraGrid
          templateColumns={`repeat(${mobile.columns}, 1fr)`}
          gap={mobile.gap}
          display={{ base: "grid", md: "none" }}
        >
          {content}
        </ChakraGrid>
        <ChakraGrid
          templateColumns={`repeat(${tablet.columns}, 1fr)`}
          gap={tablet.gap}
          display={{ base: "none", md: "grid", lg: "none" }}
        >
          {content}
        </ChakraGrid>
        <ChakraGrid
          templateColumns={`repeat(${desktop.columns}, 1fr)`}
          gap={desktop.gap}
          display={{ base: "none", lg: "grid" }}
        >
          {content}
        </ChakraGrid>
      </>
    );
  },
};

export const Grid = withLayout(baseGrid);
