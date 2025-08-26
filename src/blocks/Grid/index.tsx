// src/components/Grid.tsx
import { ComponentConfig } from "@measured/puck";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { withLayout } from "@/components/Layout";

const baseGrid: ComponentConfig = {
  fields: {
    items: {
      type: "array",
      label: "Grid Columns",
      arrayFields: {
        label: {
          type: "text",
          label: "Column Label (for editor reference)",
        },
        content: {
          type: "slot",
        },
      },
      min: 1, // At least 1 column
    },
    mobile: {
      label: "Mobile Settings",
      type: "object",
      objectFields: {
        columns: {
          label: "Number of Columns ",
          type: "number",
          min: 1,
          max: 12,
        },
        gap: { label: "Gap (px)", type: "text" },
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
    items: [{ label: "Column 1", content: [] }],
    mobile: {
      columns: 1,
      gap: "4",
    },
    tablet: {
      columns: 1,
      gap: "4",
    },
    desktop: {
      columns: 1,
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
  render: ({ items, mobile, tablet, desktop, bgImage }) => {
    const content = items.map((col: any, index: number) => (
      <Box key={index}>
        <col.content minEmptyHeight={100} />
      </Box>
    ));

    return (
      <SimpleGrid
        backgroundImage={bgImage}
        columns={{
          base: mobile.columns,
          sm: tablet.columns,
          md: tablet.columns,
          lg: desktop.columns,
        }}
        gap={{
          base: mobile.gap,
          sm: tablet.gap,
          md: tablet.gap,
          lg: desktop.gap,
        }}
      >
        {content}
      </SimpleGrid>
    );
  },
};

export const Grid = withLayout(baseGrid);
