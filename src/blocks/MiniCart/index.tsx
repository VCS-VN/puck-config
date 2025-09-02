import { type ComponentConfig } from "@measured/puck";
import { withLayout } from "@/components/Layout";
import { IconButton, Badge, Box, Flex } from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";
import { useMemo } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ProductionState } from "@/services/common/production.state";
import { CartDrawerOpenState } from "@/state/cartDrawer.state";

export type MiniCartBlockProps = {
  keyAddToCart?: string;
  showBadge?: boolean;
  placement?: "inline" | "fixed-top-right" | "fixed-bottom-right" | "fixed-bottom-left" | "fixed-top-left";
};

const getPlacementStyle = (placement?: MiniCartBlockProps["placement"]) => {
  switch (placement) {
    case "fixed-top-right":
      return { position: "fixed" as const, top: 12, right: 12, zIndex: 30 };
    case "fixed-bottom-right":
      return { position: "fixed" as const, bottom: 12, right: 12, zIndex: 30 };
    case "fixed-bottom-left":
      return { position: "fixed" as const, bottom: 12, left: 12, zIndex: 30 };
    case "fixed-top-left":
      return { position: "fixed" as const, top: 12, left: 12, zIndex: 30 };
    default:
      return {};
  }
};

const MiniCartBlockInternal: ComponentConfig<MiniCartBlockProps> = {
  label: "Mini Cart",
  fields: {
    keyAddToCart: { type: "text", label: "Cart Storage Key" },
    showBadge: { type: "radio", label: "Show Badge", options: [ { label: "Yes", value: true }, { label: "No", value: false } ] },
    placement: {
      type: "select",
      label: "Placement",
      options: [
        { label: "Inline", value: "inline" },
        { label: "Fixed Top Right", value: "fixed-top-right" },
        { label: "Fixed Bottom Right", value: "fixed-bottom-right" },
        { label: "Fixed Bottom Left", value: "fixed-bottom-left" },
        { label: "Fixed Top Left", value: "fixed-top-left" },
      ],
    },
  },
  defaultProps: {
    keyAddToCart: "productCart",
    showBadge: true,
    placement: "fixed-bottom-right",
  },
  render: ({ keyAddToCart = "productCart", showBadge = true, placement = "fixed-bottom-right", puck }) => {
    const production = useRecoilValue(ProductionState);
    const setCartOpen = useSetRecoilState(CartDrawerOpenState);

    const count = useMemo(() => {
      try {
        const local = typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem(keyAddToCart) || "[]")
          : [];
        const memory = (production?.[keyAddToCart] as any[]) || [];
        return (memory?.length || local?.length || 0) as number;
      } catch {
        return 0;
      }
    }, [production, keyAddToCart]);

    const style = getPlacementStyle(placement);

    const onClickCart = () => {
      if (puck?.isEditing) return;
      setCartOpen(true);
    };

    return (
      <Box style={style as any}>
        <Box position="relative" display="inline-block">
          <IconButton aria-label="Cart" variant="ghost" onClick={onClickCart}>
            <LuShoppingCart />
          </IconButton>
          {showBadge && count > 0 ? (
            <Badge position="absolute" top="-2px" right="-2px" colorPalette="red">
              {count}
            </Badge>
          ) : null}
        </Box>

        {/* Header owns the Cart Drawer via CartDrawerOpenState */}
      </Box>
    );
  },
};

export const MiniCartBlock = withLayout(MiniCartBlockInternal);

