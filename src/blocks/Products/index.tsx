import { type ComponentConfig } from "@measured/puck";
import { withLayout } from "../../components/Layout";
import { type FC, useEffect, useMemo, useState } from "react";
import { debounce, get, round } from "lodash";
import { useGetProductsQuery } from "../../hooks/products";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Pagination,
  SimpleGrid,
  Skeleton,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { VariableState } from "@/services/common/variable.state";
import { useRecoilState, useRecoilValue } from "recoil";
import ButtonAddToCart from "./components/ButtonAddToCart";
import { useSetRecoilState } from "recoil";
import { CartDrawerOpenState } from "@/state/cartDrawer.state";
import { ProductionState } from "@/services/common/production.state.ts";
import { CategorySingleSelect } from "@/components/CategorySingleSelect";
import { ProductMultiSelect } from "@/components/ProductMultiSelect";
import { sendAnalyticsEvent } from "@/utils/analytics";
import { parseUrlState, pushUrlState } from "@/utils/url";
// @ts-ignore - CSS modules types handled via ambient declaration for build
import "./style.css";
export type ProductsProps = {
  mobile: number;
  tablet: number;
  desktop: number;
  limit: number;
  categoryId?: string;
  variableName?: string;
  noResultsText?: string;
  // storefront options
  header?: any;
  footer?: any;
  selectionMode?: "limit" | "ids" | "select" | "category";
  productIds?: string; // comma
  selectedProducts?: Array<{
    id: string;
    name: string;
    image?: string;
    price?: number;
  }>;
  sortBy?: "newest" | "priceAsc" | "priceDesc" | "featured" | "selling";
  sortOrder?: "asc" | "desc" | undefined;
  hideOutOfStock?: boolean;
  bindSortVariableName?: string;
  bindHideOutOfStockVariableName?: string;
  bindCategoryVariableName?: string; // read category id from VariableState when selectionMode = 'category'
  bindFiltersVariableName?: string; // read extra filters e.g. priceMin/Max
  enableUrlSync?: boolean; // sync queries to URL
  openMiniCartAfterAdd?: boolean; // open mini cart drawer after adding
};

const ProductsRender: FC<ProductsProps & { puck?: any }> = ({
  mobile,
  tablet,
  desktop,
  limit,
  categoryId,
  variableName,
  noResultsText,
  header: HeaderSlot,
  footer: FooterSlot,
  selectionMode = "limit",
  productIds,
  selectedProducts = [],
  sortBy = "featured",
  sortOrder = undefined,
  hideOutOfStock = false,
  bindSortVariableName,
  bindHideOutOfStockVariableName,
  bindCategoryVariableName,
  bindFiltersVariableName,
  enableUrlSync = true,
  openMiniCartAfterAdd = true,
  puck,
}) => {
  const variables = useRecoilValue(VariableState);
  const [productionState, setProductionState] = useRecoilState(ProductionState);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const setCartOpen = useSetRecoilState(CartDrawerOpenState);

  // Because we can't call setVars before we have it here, create a setter
  const [__, setVars] = useRecoilState(VariableState);

  const keyAddToCart: string = "productCart";
  const valueOfSearchProductsVariable = useMemo(() => {
    if (!variableName) {
      return null;
    }

    return get(variables, variableName);
  }, [variableName, variables]);

  const [debouncedValue, setDebouncedValue] = useState(
    valueOfSearchProductsVariable
  );

  const debouncedSetValue = useMemo(
    () =>
      debounce((value: string) => {
        // console.log("value",value)
        setDebouncedValue(value);
      }, 800),
    []
  );

  const [queries, setQueries] = useState({
    search: debouncedValue,
    page: 1,
    limit: limit,
    sortBy,
    sortOrder,
    hideOutOfStock,
    storeId: puck?.metadata?.entityId || puck?.metadata?.storeId,
  });

  const extraFilters = useMemo(() => {
    const v = bindFiltersVariableName
      ? (variables as any)[bindFiltersVariableName]
      : undefined;
    return v || {};
  }, [variables, bindFiltersVariableName]);

  const { data: products, isLoading } = useGetProductsQuery(
    {
      ...queries,
      storeId: puck?.metadata?.entityId,
      query: queries.search,
      isGettingModels: true,
      isGettingDefaultModel: true,
      limit: queries.limit,
      page: queries?.page,
      categoryId:
        selectionMode === "category"
          ? (bindCategoryVariableName
              ? (variables as any)[bindCategoryVariableName]
              : undefined) || categoryId
          : undefined,
      sortBy: queries.sortBy,
      sortOrder: queries.sortOrder,
      hideOutOfStock: queries.hideOutOfStock,
      priceMin: extraFilters?.priceMin,
      priceMax: extraFilters?.priceMax,
    },
    { keepPreviousData: true }
  );

  const saveCartToStore = (carts: any[]) => {
    setProductionState({ ...productionState, [keyAddToCart]: carts || [] });
    setSelectedProduct(null);
    if (openMiniCartAfterAdd) setCartOpen(true);
  };

  // Decide display list
  let display = products?.data || [];
  if (selectionMode === "ids" && productIds) {
    const ids = productIds
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);
    // if API page has items, map by ids when possible, else build minimal items
    const mapById: Record<string, any> = (products?.data || []).reduce(
      (acc: any, p: any) => {
        acc[String(p.id)] = p;
        return acc;
      },
      {}
    );
    display = ids.map((id) => mapById[id] || { id, name: id });
  } else if (selectionMode === "select" && selectedProducts?.length) {
    display = selectedProducts as any[];
  }

  // Helper: infer out-of-stock from API shape
  const isOutOfStock = (p: any): boolean => {
    const rq = p?.remainedQuantity;
    if (typeof rq === "number") return rq <= 0;
    const models: any[] = Array.isArray(p?.models) ? p.models : [];
    if (models.length > 0) {
      // assume status === 1 means sellable; others are not
      const anyActive = models.some((m) => Number(m?.status) === 1);
      return !anyActive;
    }
    if (p?.defaultModel) return Number(p?.defaultModel?.status) !== 1;
    // fallback to product statusId if available
    if (typeof p?.statusId === "number") return Number(p.statusId) !== 1;
    return false; // unknown -> treat as in stock
  };

  // Optionally filter out-of-stock locally if backend param not supported
  if (queries.hideOutOfStock) {
    display = (display || []).filter((p: any) => !isOutOfStock(p));
  }

  const total =
    selectionMode === "limit" || selectionMode === "category"
      ? products?.total || display.length
      : display.length;

  // watch + mounted

  useEffect(() => {
    // có dom
    // giá trị biến thay đổi
    debouncedSetValue(valueOfSearchProductsVariable || "");

    return () => debouncedSetValue.cancel();
  }, [valueOfSearchProductsVariable, debouncedSetValue]);

  useEffect(() => {
    setQueries((prev) => ({
      ...prev,
      search: debouncedValue,
      page: 1,
    }));
  }, [debouncedValue]);

  useEffect(() => {
    setQueries((prev) => ({ ...prev, sortBy, sortOrder, hideOutOfStock }));
  }, [sortBy, hideOutOfStock, sortOrder]);

  // Bind from variable state if variable names provided (for FacetControls)
  useEffect(() => {
    const vSort = bindSortVariableName
      ? get(variables, bindSortVariableName)
      : undefined;
    const vHide = bindHideOutOfStockVariableName
      ? get(variables, bindHideOutOfStockVariableName)
      : undefined;
    setQueries((prev) => ({
      ...prev,
      sortBy: (vSort as any) || prev.sortBy,
      hideOutOfStock: (vHide as any) ?? prev.hideOutOfStock,
    }));
  }, [variables, bindSortVariableName, bindHideOutOfStockVariableName]);

  // URL sync: read on mount
  useEffect(() => {
    if (!enableUrlSync || typeof window === "undefined") return;
    try {
      const u = parseUrlState();
      setQueries((prev) => ({
        ...prev,
        search: (u.q as any) ?? prev.search,
        page: (u.page as any) ?? prev.page,
        sortBy: (u.sortBy as any) ?? prev.sortBy,
        sortOrder: (u.sortOrder as any) ?? prev.sortOrder,
        hideOutOfStock: (u.hideOutOfStock as any) ?? prev.hideOutOfStock,
      }));
      // write filters variables
      if (bindFiltersVariableName) {
        const pm = u.priceMin;
        const px = u.priceMax;
        if (pm != null || px != null) {
          // handled in next effect that writes into VariableState
        }
      }
      // update category variable from URL if provided
      if (bindCategoryVariableName && u.categoryId) {
        // set via VariableState
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!enableUrlSync || typeof window === "undefined") return;
    const catId =
      selectionMode === "category"
        ? (bindCategoryVariableName
            ? (variables as any)[bindCategoryVariableName]
            : undefined) || categoryId
        : undefined;
    const pm = extraFilters?.priceMin;
    const px = extraFilters?.priceMax;
    pushUrlState({
      q: queries.search || undefined,
      page: queries.page,
      sortBy: queries.sortBy,
      sortOrder: queries.sortOrder,
      hideOutOfStock: queries.hideOutOfStock ? 1 : undefined,
      priceMin: pm,
      priceMax: px,
      categoryId: catId,
    });
  }, [
    queries.search,
    queries.page,
    queries.sortBy,
    queries.sortOrder,
    queries.hideOutOfStock,
    extraFilters?.priceMin,
    extraFilters?.priceMax,
    selectionMode,
    variables,
    bindCategoryVariableName,
    categoryId,
    enableUrlSync,
  ]);

  // If URL had priceMin/Max or category on first mount, set VariableState
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const u = parseUrlState();
      if (
        bindFiltersVariableName &&
        (u.priceMin != null || u.priceMax != null)
      ) {
        setVars((prev) => ({
          ...prev,
          [bindFiltersVariableName]: {
            ...((prev as any)[bindFiltersVariableName] || {}),
            priceMin: u.priceMin,
            priceMax: u.priceMax,
          },
        }));
      }
      if (bindCategoryVariableName && u.categoryId) {
        setVars((prev) => ({
          ...prev,
          [bindCategoryVariableName]: u.categoryId,
        }));
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Analytics: impressions
  useEffect(() => {
    if (!display?.length) return;
    try {
      sendAnalyticsEvent("product_impression", {
        ids: display.map((p: any) => p.id),
        total,
        page: queries.page,
        sortBy: queries.sortBy,
        sortOrder: queries.sortOrder,
      });
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    display?.map((p: any) => p.id),
    queries.page,
    queries.sortBy,
    queries.sortOrder,
  ]);

  if (!isLoading && !products?.total) {
    return (
      <Box>
        <Text>{noResultsText || "No results found"}</Text>
      </Box>
    );
  }

  return (
    <Box>
      {HeaderSlot ? <HeaderSlot minEmptyHeight={40} /> : null}
      <SimpleGrid
        columns={{
          base: mobile,
          sm: tablet,
          md: tablet,
          lg: desktop,
        }}
        gap={4}
      >
        {isLoading &&
        (selectionMode === "limit" || selectionMode === "category")
          ? Array.from({ length: limit }).map((_, index) => (
              <Skeleton key={index} height="300px" borderRadius="md" />
            ))
          : display?.map((product: any) => {
              const defaultModel = get(
                product,
                "defaultModel",
                get(product, "models.0")
              );

              const baseCents = get(defaultModel, "price", product.price || 0);
              const saleCents = get(
                defaultModel,
                "onlinePrice",
                product.onlinePrice ?? baseCents
              );
              const isOnSale = Number(saleCents) < Number(baseCents);
              const outOfStock = isOutOfStock(product);

              return (
                <Card.Root
                  key={product.id}
                  variant="outline"
                  position="relative"
                >
                  {isOnSale && (
                    <Box
                      position="absolute"
                      top="2"
                      left="2"
                      px="2"
                      py="1"
                      bg="red.500"
                      color="white"
                      borderRadius="sm"
                      fontSize="xs"
                    >
                      Sale
                    </Box>
                  )}
                  {outOfStock && (
                    <Box
                      position="absolute"
                      top="2"
                      right="2"
                      px="2"
                      py="1"
                      bg="gray.600"
                      color="white"
                      borderRadius="sm"
                      fontSize="xs"
                    >
                      Out of stock
                    </Box>
                  )}
                  <CardBody>
                    <div className={"product-card-image relative"}>
                      <Image
                        src={
                          product.image ||
                          "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg"
                        }
                        alt={product.name}
                        borderRadius="md"
                        width={"100%"}
                        height={'200px'}
                      />
                      <div className={"product-card-image-button-add absolute"}>
                        <Button
                          className={"w-full"}
                          colorPalette={"orange"}
                          disabled={outOfStock}
                          onClick={() => {
                            setSelectedProduct(product);
                          }}
                        >
                          Add to cart
                        </Button>
                      </div>
                    </div>

                    <Card.Title>{product.name}</Card.Title>
                    <Box mt="2">
                      {isOnSale ? (
                        <>
                          <Text
                            as="span"
                            textStyle="xl"
                            fontWeight="semibold"
                            color="red.500"
                            mr="2"
                          >
                            ${round((saleCents || 0) / 100, 0)}
                          </Text>
                          <Text
                            as="span"
                            textStyle="sm"
                            color="gray.500"
                            textDecoration="line-through"
                          >
                            ${round((baseCents || 0) / 100, 0)}
                          </Text>
                        </>
                      ) : (
                        <Text
                          textStyle="2xl"
                          fontWeight="medium"
                          letterSpacing="tight"
                        >
                          ${round((baseCents || 0) / 100, 0)}
                        </Text>
                      )}
                    </Box>
                  </CardBody>
                  {/*<CardFooter gap="2">*/}
                  {/*  */}
                  {/*  /!* <ButtonAddToCart*/}

                  {/*  /> *!/*/}
                  {/*</CardFooter>*/}
                </Card.Root>
              );
            })}

        <ButtonAddToCart
          openDrawer={!!selectedProduct}
          product={selectedProduct}
          keyAddToCart={keyAddToCart}
          saveCartToStore={saveCartToStore}
          onCloseDrawer={() => setSelectedProduct(null)}
        />
        {/* Header owns Cart Drawer; trigger via CartDrawerOpenState */}
      </SimpleGrid>
      {FooterSlot ? <FooterSlot minEmptyHeight={40} /> : null}

      {(selectionMode === "limit" || selectionMode === "category") &&
        total > 0 && (
          <Pagination.Root
            mt="6"
            count={total}
            pageSize={queries.limit}
            page={queries.page}
            onPageChange={({ page }) =>
              setQueries((prev) => ({
                ...prev,
                page,
              }))
            }
          >
            <Pagination.PrevTrigger />
            {/* <Pagination.Items /> */}
            <Pagination.NextTrigger />
          </Pagination.Root>
        )}
    </Box>
  );
};

const ProductsInternal: ComponentConfig = {
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
        { label: "Enter IDs", value: "ids" },
      ],
    },
    openMiniCartAfterAdd: {
      type: "radio",
      label: "Open Mini Cart After Add",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    enableUrlSync: {
      type: "radio",
      label: "Enable URL Sync",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    bindCategoryVariableName: {
      type: "text",
      label: "Bind Category Var (optional)",
    },
    bindFiltersVariableName: {
      type: "text",
      label: "Bind Filters Var (optional)",
    },
    selectedProducts: {
      type: "custom",
      label: "Choose Products",
      render: ProductMultiSelect,
    },
    productIds: { type: "text", label: "Product IDs (comma-separated)" },
    categoryId: {
      type: "custom",
      label: "Category",
      render: CategorySingleSelect,
    },
    sortBy: {
      type: "select",
      label: "Sort By",
      options: [
        { label: "Featured", value: "featured" },
        { label: "Newest", value: "newest" },
        { label: "Price: Low to High", value: "priceAsc" },
        { label: "Price: High to Low", value: "priceDesc" },
        { label: "Selling", value: "selling" },
      ],
    },
    sortOrder: {
      type: "select",
      label: "Sort Order",
      options: [
        { label: "Asc", value: "asc" },
        { label: "Desc", value: "desc" },
      ],
    },
    hideOutOfStock: {
      type: "radio",
      label: "Hide Out of Stock",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    variableName: {
      type: "text",
      label: "Variable Name to Use",
    },
    noResultsText: { type: "text", label: "No Results Message" },
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
    categoryId: undefined,
    bindCategoryVariableName: "products.categoryId",
    bindFiltersVariableName: "products.filters",
    enableUrlSync: true,
    openMiniCartAfterAdd: true,
    sortBy: "featured",
    sortOrder: "asc",
    hideOutOfStock: false,
    noResultsText: "No Results",
    variableName: undefined,
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
    sortOrder,
    hideOutOfStock,
    bindFiltersVariableName,
    enableUrlSync,
    bindCategoryVariableName,
    openMiniCartAfterAdd,
  }) => {
    return (
      <ProductsRender
        mobile={mobile}
        tablet={tablet}
        desktop={desktop}
        categoryId={categoryId}
        variableName={variableName}
        limit={limit}
        noResultsText={noResultsText}
        header={header}
        footer={footer}
        selectionMode={selectionMode}
        productIds={productIds}
        selectedProducts={selectedProducts as any}
        sortBy={sortBy}
        sortOrder={sortOrder}
        hideOutOfStock={hideOutOfStock}
        bindFiltersVariableName={bindFiltersVariableName}
        enableUrlSync={enableUrlSync}
        bindCategoryVariableName={bindCategoryVariableName}
        openMiniCartAfterAdd={openMiniCartAfterAdd}
        puck={puck as any}
      />
    );
  },
};

export const Products = withLayout(ProductsInternal);
