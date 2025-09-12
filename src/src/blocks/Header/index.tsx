import {ComponentConfig} from "@measured/puck";
import {withLayout} from "@/components/Layout";
import {
  Box,
  Flex,
  Text,
  Link as CLink,
  Input as CInput,
  IconButton,
  Image,
  Badge,
  Drawer,
} from "@chakra-ui/react";
import {useEffect, useMemo, useRef, useState} from "react";
import {debounce} from "lodash";
import {LuHeart, LuShoppingCart, LuSearch, LuMenu} from "react-icons/lu";
import {VariableState} from "@/services/common/variable.state";
import {useRecoilState, useRecoilValue} from "recoil";
import {ProductionState} from "@/services/common/production.state";
import {CheckoutRender} from "../Cart";
import {CartDrawerOpenState} from "@/state/cartDrawer.state";
import SearchInput from "./components/SearchInput";
import ButtonAddToCart from "../Products/components/ButtonAddToCart";
import {InputRichText} from "../../components/InputRichText";

export type HeaderProps = {
  logoType?: "text" | "image";
  logoText?: string;
  logoImageUrl?: string;
  logoImageWidth?: string;
  logoImageHeight?: string;
  navLinks?: { label: string; href: string }[];
  showSearch?: boolean;
  searchVariableName?: string;
  searchPlaceholder?: string;
  showWishlist?: boolean;
  showCart?: boolean;
  sticky?: boolean;
  stickyOffset?: number;
  actionsSlot?: any; // drop zone for mini cart / search etc.
};

const HeaderInternal: ComponentConfig<HeaderProps> = {
  label: "Header",
  fields: {
    logoType: {
      type: "radio",
      label: "Logo Type",
      options: [
        {label: "Text", value: "text"},
        {label: "Image", value: "image"},
      ],
    },
    logoText: {
      label: "Logo Text",
      ...InputRichText
    },
    logoImageUrl: {type: "text", label: "Logo Image URL"},
    logoImageWidth: {
      label: 'Logo Image Width',
      type: "text",
      placeholder: "...px",
    },
    logoImageHeight: {
      label: 'Logo Image Height',
      type: "text",
      placeholder: "...px",
    },
    navLinks: {
      type: "array",
      label: "Navigation Links",
      arrayFields: {
        label: {type: "text", label: "Label", contentEditable: true},
        href: {type: "text", label: "Href"},
      },
      defaultItemProps: {label: "Item", href: "#"},
    },
    showSearch: {
      type: "radio",
      label: "Show Search",
      options: [
        {label: "Yes", value: true},
        {label: "No", value: false},
      ],
    },
    searchVariableName: {type: "text", label: "Search Variable Name"},
    searchPlaceholder: {type: "text", label: "Search Placeholder"},
    showWishlist: {
      type: "radio",
      label: "Show Wishlist",
      options: [
        {label: "Yes", value: true},
        {label: "No", value: false},
      ],
    },
    showCart: {
      type: "radio",
      label: "Show Cart",
      options: [
        {label: "Yes", value: true},
        {label: "No", value: false},
      ],
    },
    sticky: {
      type: "radio",
      label: "Sticky",
      options: [
        {label: "On", value: true},
        {label: "Off", value: false},
      ],
    },
    stickyOffset: {
      type: "number",
      label: "Sticky Offset (px)",
      min: 0,
      max: 120,
    },
    actionsSlot: {type: "slot", label: "Actions Slot (right)"},
  },
  defaultProps: {
    logoType: "text",
    logoText: "Exclusive",
    navLinks: [
      {label: "Home", href: "/"},
      {label: "Contact", href: "/contact"},
      {label: "About", href: "/about"},
      {label: "Sign Up", href: "/signup"},
    ],
    showSearch: true,
    searchVariableName: "searchQuery",
    searchPlaceholder: "What are you looking for?",
    showWishlist: true,
    showCart: true,
    sticky: true,
    stickyOffset: 0,
    actionsSlot: [],
  },
  render: ({
             logoType,
             logoText,
             logoImageUrl,
             logoImageWidth,
             logoImageHeight,
             navLinks = [],
             showSearch,
             searchVariableName,
             searchPlaceholder,
             showWishlist,
             showCart,
             sticky,
             stickyOffset,
             puck,
             actionsSlot: ActionsSlot,
           }) => {
    const isEditing = !!puck?.isEditing;
    const [variables, setVariables] = useRecoilState(VariableState);
    const [productionState, setProductionState] = useRecoilState(ProductionState);

    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    const keyAddToCart = "productCart";

    const saveCartToStore = (carts: any[]) => {
      setProductionState({ ...productionState, [keyAddToCart]: carts || [] });
      setSelectedProduct(null);
      setCartOpen(true);
    };
    const count = useMemo(() => {
      const local =
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem(keyAddToCart) || "[]")
          : [];
      const memory = productionState?.[keyAddToCart] || [];
      return (memory?.length || local?.length || 0) as number;
    }, [productionState]);

    const [cartOpen, setCartOpen] = useRecoilState(CartDrawerOpenState);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [elevated, setElevated] = useState(false);

    const onClickCart = () => {
      if (isEditing) return; // don't open drawer in edit when drag
      setCartOpen(true);
    };
    const onClickMobile = () => {
      if (isEditing) return;
      setMobileOpen(true);
    };

    // Debounced search input to reduce re-render while typing
    const searchKey = (searchVariableName || "searchQuery") as string;
    const [searchLocal, setSearchLocal] = useState<string>(
      (variables?.[searchKey] as any) || ""
    );
    const debouncedUpdateRef = useRef(
      debounce((val: string) => {
        setVariables((prev) => ({...prev, [searchKey]: val}));
      }, 300)
    );
    useEffect(() => {
      setSearchLocal((variables?.[searchKey] as any) || "");
    }, [variables, searchKey]);

    // Elevation when sticky and page scrolled
    useEffect(() => {
      if (!sticky || isEditing) return;
      const onScroll = () => {
        const y = window.scrollY || 0;
        setElevated(y > (stickyOffset || 0));
      };
      onScroll();
      window.addEventListener("scroll", onScroll, {passive: true});
      return () => window.removeEventListener("scroll", onScroll as any);
    }, [sticky, stickyOffset, isEditing]);

    return (
      <>
        <Box
          position={sticky && !isEditing ? "sticky" : undefined}
          top={sticky && !isEditing ? `${stickyOffset || 0}px` : undefined}
          bg="white"
          zIndex={100}
          borderBottom="1px solid"
          borderColor="gray.200"
          boxShadow={elevated ? "sm" : "none"}
          style={{
            contain: "layout paint style",
            backdropFilter: elevated ? "blur(6px)" : undefined,
          }}
        >
          <Flex
            align="center"
            justify="space-between"
            px={{base: 3, md: 6}}
            py={3}
            gap={4}
            transition="background-color 120ms ease, box-shadow 120ms ease"
          >
            {/* Logo */}
            <Flex minW={{base: "auto", md: "200px"}} align="center" gap={2}>
              <IconButton
                aria-label="Menu"
                variant="ghost"
                display={{base: "inline-flex", md: "none"}}
                onClick={onClickMobile}
              >
                <LuMenu/>
              </IconButton>
              {logoType === "image" && logoImageUrl ? (
                <Image
                  src={logoImageUrl}
                  alt={"Logo"}
                  h={6}
                  height={logoImageHeight || "50px"}
                  width={logoImageWidth || "50px"}
                />
              ) : (
                <Text fontSize={{base: "lg", md: "xl"}}>
                  <article className="prose max-w-none">
                    <div dangerouslySetInnerHTML={{__html: logoText}}/>
                  </article>
                </Text>
              )}
            </Flex>

            {/* Nav */}
            <Flex
              display={{base: "none", md: "flex"}}
              align="center"
              gap={6}
              flex={1}
              justify="center"
            >
              {navLinks.map((l, idx) => (
                <CLink
                  key={`${l.label}-${idx}`}
                  href={!isEditing ? l.href : undefined}
                  onClick={(e) => isEditing && e.preventDefault()}
                  color="gray.800"
                  _hover={{
                    textDecoration: "none",
                    borderBottom: "1px solid",
                    borderColor: "gray.300",
                  }}
                  pb={1}
                >
                  {l.label}
                </CLink>
              ))}
            </Flex>

            {/* Actions */}
            <Flex
              align="center"
              gap={3}
              minW={{base: "auto", md: "220px"}}
              justify="flex-end"
            >
              {showSearch ? (
                <Flex
                  align="center"
                  bg="gray.100"
                  px={2}
                  py={1}
                  borderRadius="md"
                  gap={1}
                  minW={{base: "auto", md: "280px"}}
                  style={{transition: "width 120ms ease", willChange: "width"}}
                >
                  <SearchInput
                    puck={puck}
                    placeholder={searchPlaceholder || "Search"}
                    setSelectedProduct={setSelectedProduct}
                  ></SearchInput>
                  {/*<CInput*/}
                  {/*  size="sm"*/}
                  {/*  variant="subtle"*/}
                  {/*  placeholder={searchPlaceholder || "Search"}*/}
                  {/*  value={searchLocal}*/}
                  {/*  onChange={(e) => {*/}
                  {/*    const v = e.target.value;*/}
                  {/*    setSearchLocal(v);*/}
                  {/*    debouncedUpdateRef.current(v);*/}
                  {/*  }}*/}
                  {/*/>*/}
                  {/*<IconButton size="sm" aria-label="Search" variant="ghost">*/}
                  {/*  <LuSearch/>*/}
                  {/*</IconButton>*/}
                </Flex>
              ) : null}

              {ActionsSlot ? <ActionsSlot minEmptyHeight={36}/> : null}

              {showWishlist ? (
                <IconButton aria-label="Wishlist" variant="ghost">
                  <LuHeart/>
                </IconButton>
              ) : null}

              {showCart ? (
                <Box position="relative">
                  <IconButton
                    aria-label="Cart"
                    variant="ghost"
                    onClick={onClickCart}
                  >
                    <LuShoppingCart/>
                  </IconButton>
                  {count > 0 ? (
                    <Badge
                      position="absolute"
                      top="-2px"
                      right="-2px"
                      colorPalette="red"
                      minW="18px"
                      h="18px"
                      px="1"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="full"
                      fontSize="xs"
                    >
                      {count}
                    </Badge>
                  ) : null}
                </Box>
              ) : null}
            </Flex>
          </Flex>

          {/* Cart Drawer (Chakra v3) */}



        </Box>
        <Drawer.Root
          placement="bottom"
          size="md"
          open={cartOpen}
          onOpenChange={(e: any) => {
            const open = typeof e === "boolean" ? e : e?.open;
            setCartOpen(!!open);
          }}
        >
          <Drawer.Backdrop/>
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>Cart</Drawer.Header>
              <Drawer.CloseTrigger/>
              <Drawer.Body>
                <CheckoutRender
                  limit={10}
                  noResultsText="No items"
                  urlToProduct="/"
                  storeId={puck?.metadata?.storeId}
                />
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Root>
        {/* Mobile Nav Drawer */}

        <Drawer.Root
          placement="start"
          size="xs"
          open={mobileOpen}
          onOpenChange={(e: any) =>
            setMobileOpen(!!(typeof e === "boolean" ? e : e?.open))
          }
        >
          <Drawer.Backdrop/>
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>Menu</Drawer.Header>
              <Drawer.CloseTrigger/>
              <Drawer.Body>
                <Flex direction="column" gap={3}>
                  {showSearch ? (
                    <Flex
                      align="center"
                      bg="gray.100"
                      px={2}
                      py={1}
                      borderRadius="md"
                      gap={1}
                    >
                      <SearchInput
                        puck={puck}
                        placeholder={searchPlaceholder || "Search"}
                        setSelectedProduct={setSelectedProduct}
                      ></SearchInput>
                      {/*<CInput*/}
                      {/*  size="sm"*/}
                      {/*  variant="subtle"*/}
                      {/*  placeholder={searchPlaceholder || "Search"}*/}
                      {/*  value={searchLocal}*/}
                      {/*  onChange={(e) => {*/}
                      {/*    const v = e.target.value;*/}
                      {/*    setSearchLocal(v);*/}
                      {/*    debouncedUpdateRef.current(v);*/}
                      {/*  }}*/}
                      {/*/>*/}
                      {/*<IconButton size="sm" aria-label="Search" variant="ghost">*/}
                      {/*  <LuSearch/>*/}
                      {/*</IconButton>*/}
                    </Flex>
                  ) : null}

                  {navLinks.map((l, idx) => (
                    <CLink
                      key={`${l.label}-${idx}`}
                      href={!isEditing ? l.href : undefined}
                      onClick={(e) => {
                        if (isEditing) {
                          e.preventDefault();
                          return;
                        }
                        setMobileOpen(false);
                      }}
                      color="gray.800"
                      _hover={{textDecoration: "none"}}
                      py={2}
                      borderBottom="1px solid"
                      borderColor="gray.100"
                    >
                      {l.label}
                    </CLink>
                  ))}
                </Flex>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Root>
        <ButtonAddToCart
          openDrawer={!!selectedProduct}
          product={selectedProduct}
          keyAddToCart={keyAddToCart}
          saveCartToStore={saveCartToStore}
          onCloseDrawer={() => setSelectedProduct(null)}
        />
      </>
    );
  },
};

export const Header = withLayout(HeaderInternal);
