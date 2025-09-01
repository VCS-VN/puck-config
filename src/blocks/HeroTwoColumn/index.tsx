import { ComponentConfig } from "@measured/puck";
import { withLayout } from "@/components/Layout";
import { Box, Flex } from "@chakra-ui/react";
import { useMemo } from "react";

type WidthByBreakpoint = {
  base?: string;
  md?: string;
  lg?: string;
};

export type HeroTwoColumnProps = {
  height?: number;
  gap?: number;
  leftWidth?: WidthByBreakpoint;
  rightWidth?: WidthByBreakpoint;
  leftScrollable?: boolean;
  leftSticky?: boolean;
  stickyOffsetTop?: number;
  left: any; // slot
  right: any; // slot
};

const HeroTwoColumnInternal: ComponentConfig<HeroTwoColumnProps> = {
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
        lg: { type: "text", label: "lg", placeholder: "25%" },
      },
    },
    rightWidth: {
      type: "object",
      label: "Right Width",
      objectFields: {
        base: { type: "text", label: "base", placeholder: "100%" },
        md: { type: "text", label: "md", placeholder: "70%" },
        lg: { type: "text", label: "lg", placeholder: "75%" },
      },
    },
    leftScrollable: {
      type: "radio",
      label: "Left Scrollable",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    leftSticky: {
      type: "radio",
      label: "Left Sticky",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    stickyOffsetTop: {
      type: "number",
      label: "Sticky Offset Top (px)",
      min: 0,
      max: 200,
    },
    left: { type: "slot", label: "Left Slot (Categories)" },
    right: { type: "slot", label: "Right Slot (Banner)" },
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
    right: [],
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
    puck,
  }) => {
    const Left = left;
    const Right = right;
    const isEditing = !!(puck as any)?.isEditing;
    const minEmpty = Math.max(60, (height || 360) - 40);
    const leftW = useMemo(() => leftWidth, [leftWidth]);
    const rightW = useMemo(() => rightWidth, [rightWidth]);
    return (
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={gap}
        align="stretch"
        w="100%"
        minH={`${height}px`}
        // sx={{ contain: "layout paint style" }}
      >
        <Box
          minW={0}
          flexBasis={leftW as any}
          flexGrow={0}
          flexShrink={0}
          minH={{ base: `${height}px`, md: `${height}px` }}
          position={!isEditing && leftSticky ? "sticky" : undefined}
          top={
            !isEditing && leftSticky ? `${stickyOffsetTop || 0}px` : undefined
          }
          transition={isEditing ? "none" : "width 120ms ease-out"}
          // sx={{
          //   contain: "layout paint style",
          //   willChange: isEditing ? undefined : "width",
          // }}
        >
          <Box
            overflowY={!isEditing && leftScrollable ? "auto" : "visible"}
            maxH={!isEditing && leftScrollable ? `${height}px` : undefined}
          >
            <Left minEmptyHeight={minEmpty} />
          </Box>
        </Box>
        <Box
          minW={0}
          flexBasis={rightW as any}
          flexGrow={1}
          flexShrink={1}
          minH={`${height}px`}
          transition={isEditing ? "none" : "width 120ms ease-out"}
          // sx={{
          //   contain: "layout paint style",
          //   willChange: isEditing ? undefined : "width",
          // }}
        >
          <Right minEmptyHeight={minEmpty} />
        </Box>
      </Flex>
    );
  },
};

export const HeroTwoColumn = withLayout(HeroTwoColumnInternal);
