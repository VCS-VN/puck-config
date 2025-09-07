import {type ComponentConfig} from "@measured/puck";
import {withLayout} from "@/components/Layout";
import {IconButton, Badge, Box, Flex, Drawer, Portal, Text, Card, CardBody, Image, Button} from "@chakra-ui/react";
import {LuShoppingCart} from "react-icons/lu";
import React, {useMemo, useState} from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {ProductionState} from "@/services/common/production.state";
import {CartDrawerOpenState} from "@/state/cartDrawer.state";
import {CheckoutRender} from "./Cart";
import {round} from "lodash";

export type MiniCartBlockProps = {
  keyAddToCart?: string;
  showBadge?: boolean;
  placement?:
    | "inline"
    | "fixed-top-right"
    | "fixed-bottom-right"
    | "fixed-bottom-left"
    | "fixed-top-left";
  noResultsText?: string;
  urlToProduct?: string;
  puck?: any;
};

const getPlacementStyle = (placement?: MiniCartBlockProps["placement"]) => {
  switch (placement) {
    case "fixed-top-right":
      return {position: "fixed" as const, top: 12, right: 12, zIndex: 30};
    case "fixed-bottom-right":
      return {position: "fixed" as const, bottom: 12, right: 12, zIndex: 30};
    case "fixed-bottom-left":
      return {position: "fixed" as const, bottom: 12, left: 12, zIndex: 30};
    case "fixed-top-left":
      return {position: "fixed" as const, top: 12, left: 12, zIndex: 30};
    default:
      return {};
  }
};


export const MiniCart: React.FC<MiniCartBlockProps> = ({
                                                         keyAddToCart = "productCart",
                                                         showBadge = true,
                                                         placement = "fixed-bottom-right",
                                                         puck,
                                                         noResultsText,
                                                         urlToProduct,
                                                       }) => {

  const production = useRecoilValue(ProductionState);
  // const setCartOpen = useSetRecoilState(CartDrawerOpenState);
  const [cartOpen,setCartOpen] = useState(false)
  const total = useMemo(() => {
    try {
      const local =
        typeof window !== "undefined"
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
    if (puck?.isEditing) {
      return;
    }
    setCartOpen(true);
  };

  const onClose = ()=> {
    setCartOpen(false);
  }
  return <Box style={style as any}>
    <Box position="relative" display="inline-block">
      <IconButton aria-label="Cart" onClick={onClickCart}>
        <LuShoppingCart/>
      </IconButton>
      {showBadge && total > 0 ? (
        <Badge
          position="absolute"
          top="-2px"
          right="-2px"
          colorPalette="red"
        >
          {total}
        </Badge>
      ) : null}
    </Box>
    <Drawer.Root
      placement="bottom"
      open={cartOpen}
      onOpenChange={({ open }) => { if (!open) onClose(); }}>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Cart</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <CheckoutRender
                keyAddToCart={keyAddToCart}
                urlToProduct={urlToProduct}
                noResultsText={noResultsText}
                onClose={onClose}
              ></CheckoutRender>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  </Box>

}

const MiniCartBlockInternal: ComponentConfig<MiniCartBlockProps> = {
  label: "Mini Cart",
  fields: {

    keyAddToCart: {type: "text", label: "Cart Storage Key"},
    showBadge: {
      type: "radio",
      label: "Show Badge",
      options: [
        {label: "Yes", value: true},
        {label: "No", value: false},
      ],
    },
    placement: {
      type: "select",
      label: "Placement",
      options: [
        {label: "Inline", value: "inline"},
        {label: "Fixed Top Right", value: "fixed-top-right"},
        {label: "Fixed Bottom Right", value: "fixed-bottom-right"},
        {label: "Fixed Bottom Left", value: "fixed-bottom-left"},
        {label: "Fixed Top Left", value: "fixed-top-left"},
      ],
    },
    noResultsText: {type: "text", label: "No Results Message"},
    urlToProduct: {type: "text", label: "Url to product"},
  },
  defaultProps: {
    keyAddToCart: "productCart",
    showBadge: true,
    placement: "fixed-bottom-right",
    noResultsText: "No results found",
    urlToProduct: ""
  },
  render: ({
             keyAddToCart = "productCart",
             showBadge = true,
             placement = "fixed-bottom-right",
             puck,
             noResultsText,
             urlToProduct,
           }) => {


    return (
      <MiniCart
        keyAddToCart={keyAddToCart}
        showBadge={showBadge}
        placement={placement}
        noResultsText={noResultsText}
        urlToProduct={urlToProduct}
        puck={puck}
      ></MiniCart>
    );
  },
};

export const MiniCartBlock = withLayout(MiniCartBlockInternal);
