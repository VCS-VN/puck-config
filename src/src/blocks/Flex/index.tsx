// src/components/Grid.tsx
import { ComponentConfig } from "@measured/puck";
import { Box, Flex as ChakraFlex } from "@chakra-ui/react";
import { withLayout } from "@/components/Layout";
import { Content } from "@measured/puck";
const baseFlex: ComponentConfig = {
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
                    { label: "Quarter (25%)", value: "25%" },
                  ],
                },
                md: {
                  type: "select",
                  label: "Tablet",
                  options: [
                    { label: "Auto", value: "auto" },
                    { label: "Full (100%)", value: "100%" },
                    { label: "Half (50%)", value: "50%" },
                    { label: "Third (33.33%)", value: "33.33%" },
                    { label: "Quarter (25%)", value: "25%" },
                  ],
                },
                lg: {
                  type: "select",
                  label: "Desktop",
                  options: [
                    { label: "Auto", value: "auto" },
                    { label: "Full (100%)", value: "100%" },
                    { label: "Half (50%)", value: "50%" },
                    { label: "Third (33.33%)", value: "33.33%" },
                    { label: "Quarter (25%)", value: "25%" },
                  ],
                },
              },
            },
          },
        },
        content: {
          type: "slot",
        },
      },
      min: 1,
      max: 6,
      defaultItemProps: {
        label: "Item ",
        flexProps: {
          width: { base: "100%" }, // Full on mobile, half on medium+
          flex: { base: 1 }, // Optional: Grow to fill space
        },
        content: [],
      },
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
                { label: "Column", value: "column" },
              ],
            },
            md: {
              type: "radio",
              label: "Tablet",
              options: [
                { label: "Row", value: "row" },
                { label: "Column", value: "column" },
              ],
            },
            lg: {
              type: "radio",
              label: "Desktop",
              options: [
                { label: "Row", value: "row" },
                { label: "Column", value: "column" },
              ],
            },
          },
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
            { label: "Space Evenly", value: "space-evenly" },
          ],
        },
        align: {
          type: "select",
          label: "Align Items",
          options: [
            { label: "Stretch", value: "stretch" },
            { label: "Flex Start", value: "flex-start" },
            { label: "Flex End", value: "flex-end" },
            { label: "Center", value: "center" },
            { label: "Baseline", value: "baseline" },
          ],
        },
        gap: { type: "number", label: "Gap (px)", min: 0, max: 20 },
      },
    },
  },
  defaultProps: {
    flexItems: [
      {
        label: "Item 1",
        flexProps: {
          width: { base: "100%" }, // Full on mobile, half on medium+
          flex: { base: 1 }, // Optional: Grow to fill space
        },
        content: [],
      },
      {
        label: "Item 2",
        flexProps: {
          width: { base: "100%" },
          flex: { base: 1 },
        },
        content: [],
      },
    ],
    flexOptions: {
      direction: { base: "column", md: "row", lg: "row" },
      justify: { base: "flex-start" },
      align: { base: "stretch" },
      wrap: true,
      gap: 4,
    },
  },
  render: ({ flexItems, flexOptions, }) => {
    return (
      <ChakraFlex
        direction={flexOptions.direction}
        justify={flexOptions.justify}
        align={flexOptions.align}
        wrap={flexOptions.wrap ? "wrap" : "nowrap"}
        gap={flexOptions.gap}
      >
        {flexItems.map((item:any, index:number) =>  {
          const {content: Content} = item
          return <Box
              key={index}
              flex={item.flexProps?.flex}
              width={item.flexProps?.width}
              minHeight="100px"
              {...item.layoutProps} // Spread the layout props directly
              // If bg is set in layoutProps, it overrides the default bg="gray.100" below
              bg={item.layoutProps?.bgColor} // Fallback for visibility
              p={item.layoutProps?.p || 2}
          >
            <Content minEmptyHeight={100}></Content>
          </Box>
        })}
      </ChakraFlex>
    );
  },
};

export const Flex = withLayout(baseFlex);
