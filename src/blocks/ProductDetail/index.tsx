import { ComponentConfig } from "@measured/puck";
import { withLayout } from "@/components/Layout";
import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
  Portal,
  Select,
  NumberInput,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useGetProductDetailQuery } from "@/hooks/products";
import { ProductSingleSelect } from "@/components/ProductSingleSelect";
import ButtonAddToCart from "@/blocks/Products/components/ButtonAddToCart";
import { round } from "lodash";

export type ProductDetailProps = {
  productId?: string;
  showBreadcrumbs?: boolean;
  showCompareAtPrice?: boolean;
  showStockState?: boolean;
  lowStockThreshold?: number;
  variantSelectorStyle?: "dropdown" | "swatch";
  showQuantity?: boolean;
  enableStickyATC?: boolean;
  enableJsonLd?: boolean;
  enableThumbnails?: boolean;
  enableZoom?: boolean;
};

const ProductDetailInternal: ComponentConfig<ProductDetailProps> = {
  label: "Product Detail",
  fields: {
    productId: {
      type: "custom",
      label: "Product",
      render: ProductSingleSelect,
    },
    showBreadcrumbs: {
      type: "radio",
      label: "Show Breadcrumbs",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    showCompareAtPrice: {
      type: "radio",
      label: "Show Compare-at Price",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    showStockState: {
      type: "radio",
      label: "Show Stock State",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    lowStockThreshold: {
      type: "number",
      label: "Low Stock Threshold",
      min: 0,
      max: 100,
    },
    variantSelectorStyle: {
      type: "select",
      label: "Variant Selector",
      options: [
        { label: "Dropdown", value: "dropdown" },
        { label: "Swatch", value: "swatch" },
      ],
    },
    showQuantity: {
      type: "radio",
      label: "Show Quantity",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    enableStickyATC: {
      type: "radio",
      label: "Sticky Add To Cart",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    enableJsonLd: {
      type: "radio",
      label: "Enable JSON-LD",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    enableThumbnails: {
      type: "radio",
      label: "Show Thumbnails",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    enableZoom: {
      type: "radio",
      label: "Enable Zoom Cursor",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
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
    enableZoom: false,
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
    puck,
  }) => {
    const id = productId || "";
    const { data, isLoading } = useGetProductDetailQuery(id, {
      isGettingModels: true,
      isGettingDefaultModel: true,
    });
    const product: any = data || {};
    const [selected, setSelected] = useState<any>(null);
    const [selectedModel, setSelectedModel] = useState<any>(null);
    const [qty, setQty] = useState<number>(1);
    const [mainIndex, setMainIndex] = useState<number>(0);

    if (!id) {
      return <Box>Choose a product</Box>;
    }

    if (isLoading) {
      return <Skeleton h="400px" />;
    }

    // initialize selected model (URL param `variant` takes precedence)
    useEffect(() => {
      const params =
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search)
          : null;
      const vId = params?.get("variant");
      const models: any[] = Array.isArray(product?.models)
        ? product.models
        : [];
      const byUrl = models.find(
        (m: any) => String(m?.id ?? m?.entityId) === String(vId)
      );
      const init = byUrl || product?.defaultModel || models?.[0] || null;
      setSelectedModel(init);
    }, [product]);

    const baseCents = useMemo(
      () => Number(selectedModel?.price ?? product?.price ?? 0),
      [selectedModel, product]
    );
    const saleCents = useMemo(
      () =>
        Number(selectedModel?.onlinePrice ?? product?.onlinePrice ?? baseCents),
      [selectedModel, product, baseCents]
    );
    const isOnSale = saleCents < baseCents;
    const price = round(
      ((isOnSale ? saleCents : baseCents) as number) / 100,
      0
    );
    const compareAt = round((baseCents as number) / 100, 0);
    const inferRemain = () => {
      const rq = product?.remainedQuantity ?? selectedModel?.remainedQuantity;
      if (typeof rq === "number") return rq;
      // infer by status: 1 -> in stock else 0
      const models: any[] = Array.isArray(product?.models)
        ? product.models
        : [];
      if (models.length > 0)
        return models.some((m: any) => Number(m?.status) === 1) ? 999 : 0;
      if (product?.defaultModel)
        return Number(product?.defaultModel?.status) === 1 ? 999 : 0;
      if (typeof product?.statusId === "number")
        return Number(product.statusId) === 1 ? 999 : 0;
      return 999;
    };
    const remainedQty = inferRemain();

    const images: string[] = (
      Array.isArray(product?.images) && product.images.length
        ? product.images.map((i: any) => i.url)
        : [product?.image].filter(Boolean)
    ) as string[];

    const pushVariantToUrl = (m: any) => {
      if (typeof window === "undefined") return;
      const url = new URL(window.location.href);
      if (m?.id ?? m?.entityId)
        url.searchParams.set("variant", String(m.id ?? m.entityId));
      else url.searchParams.delete("variant");
      window.history.replaceState({}, "", url.toString());
    };

    return (
      <>
        {showBreadcrumbs && (
          <Box mb={3} color="gray.600" fontSize="sm">
            {"Home"} / {product?.category?.name || "Category"} / {product?.name}
          </Box>
        )}
        <Flex direction={{ base: "column", md: "row" }} gap={6}>
          <Box flex={{ base: "1 1 auto", md: "1 1 50%" }}>
            <Image
              src={images?.[mainIndex] || "https://via.placeholder.com/800x600"}
              alt={product?.name}
              borderRadius="md"
              loading="lazy"
              style={enableZoom ? { cursor: "zoom-in" } : undefined}
            />
            {enableThumbnails && images.length > 1 && (
              <SimpleGrid columns={{ base: 4, md: 6 }} gap={2} mt={2}>
                {images.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`${product?.name}-${i}`}
                    borderRadius="md"
                    opacity={i === mainIndex ? 1 : 0.7}
                    onClick={() => setMainIndex(i)}
                    style={{ cursor: "pointer" }}
                    loading="lazy"
                  />
                ))}
              </SimpleGrid>
            )}
          </Box>
          <Box flex={{ base: "1 1 auto", md: "1 1 50%" }}>
            <Text fontSize="2xl" fontWeight="semibold">
              {product?.name}
            </Text>
            <Box mt={2} display="flex" alignItems="baseline" gap={2}>
              <Text fontSize="xl" color={isOnSale ? "red.500" : undefined}>
                ${price}
              </Text>
              {showCompareAtPrice && isOnSale && (
                <Text
                  fontSize="sm"
                  color="gray.500"
                  textDecoration="line-through"
                >
                  ${compareAt}
                </Text>
              )}
            </Box>

            {/* Variant selector */}
            {Array.isArray(product?.models) && product.models.length > 0 && (
              <Box mt={4}>
                <Text fontSize="sm" color="gray.600">
                  Variant
                </Text>
                {variantSelectorStyle === "swatch" ? (
                  <Flex gap={2} wrap="wrap" mt={2}>
                    {product.models.map((m: any, idx: number) => {
                      const mid = String(m?.id ?? m?.entityId ?? idx);
                      const active =
                        String(selectedModel?.id ?? selectedModel?.entityId) ===
                        mid;
                      return (
                        <Button
                          key={mid}
                          size="sm"
                          variant={active ? "solid" : "outline"}
                          onClick={() => {
                            setSelectedModel(m);
                            pushVariantToUrl(m);
                          }}
                        >
                          {m?.name || m?.title || m?.sku || `#${idx + 1}`}
                        </Button>
                      );
                    })}
                  </Flex>
                ) : (
                  <Select.Root size={"md"} collection={product.models || []}>
                    <Select.HiddenSelect />
                    <Select.Control>
                      <Select.Trigger>
                        <Select.ValueText placeholder="Select framework" />
                      </Select.Trigger>
                      <Select.IndicatorGroup>
                        <Select.Indicator />
                      </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                      <Select.Positioner>
                        <Select.Content>
                          {product?.models?.map((model: any) => (
                            <Select.Item item={model} key={model.id}>
                              {model.name}
                              <Select.ItemIndicator />
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Positioner>
                    </Portal>
                  </Select.Root>

                  // <Select
                  //   mt={2}
                  //   value={String(
                  //     selectedModel?.id ?? selectedModel?.entityId ?? ""
                  //   )}
                  //   onChange={(e) => {
                  //     const v = e.target.value;
                  //     const m = (product.models || []).find(
                  //       (mm: any) => String(mm?.id ?? mm?.entityId) === v
                  //     );
                  //     setSelectedModel(m);
                  //     pushVariantToUrl(m);
                  //   }}
                  // >
                  //   {(product.models || []).map((m: any, idx: number) => (
                  //     <option
                  //       key={String(m?.id ?? m?.entityId ?? idx)}
                  //       value={String(m?.id ?? m?.entityId ?? "")}
                  //     >
                  //       {m?.name || m?.title || m?.sku || `Variant #${idx + 1}`}
                  //     </option>
                  //   ))}
                  // </Select>
                )}
              </Box>
            )}

            {/* Stock + Quantity */}
            {showStockState && (
              <Box
                mt={3}
                fontSize="sm"
                color={
                  remainedQty <= 0
                    ? "red.600"
                    : remainedQty <= (lowStockThreshold ?? 0)
                    ? "orange.600"
                    : "green.600"
                }
              >
                {remainedQty <= 0
                  ? "Out of stock"
                  : remainedQty <= (lowStockThreshold ?? 0)
                  ? `Low stock (${remainedQty})`
                  : "In stock"}
              </Box>
            )}
            {showQuantity && (
              <Box mt={3}>
                <NumberInput.Root
                  min={1}
                  max={99}
                  // value={qty}
                  onValueChange={(e: any) => setQty(e?.valueAsNumber || 1)}
                  width="120px"
                >
                  <NumberInput.Control />
                  <NumberInput.Input />
                </NumberInput.Root>
              </Box>
            )}

            <Button
              mt={4}
              colorPalette="orange"
              onClick={() =>
                setSelected({ ...product, selectedModel, quantity: qty })
              }
              disabled={!!puck?.isEditing || remainedQty <= 0}
            >
              Add to cart
            </Button>

            <Box mt={4} color="gray.700">
              <div
                dangerouslySetInnerHTML={{
                  __html: product?.descriptions || "",
                }}
              />
            </Box>

            <ButtonAddToCart
              openDrawer={!!selected}
              product={selected}
              keyAddToCart="productCart"
              saveCartToStore={() => setSelected(null)}
              onCloseDrawer={() => setSelected(null)}
            />
          </Box>
        </Flex>

        {/* Sticky ATC */}
        {enableStickyATC && !puck?.isEditing && (
          <Flex
            position="fixed"
            bottom={0}
            left={0}
            right={0}
            bg="white"
            borderTop="1px solid"
            borderColor="gray.200"
            p={3}
            align="center"
            justify="space-between"
            zIndex={20}
          >
            <Text fontWeight="medium">{product?.name}</Text>
            <Flex align="center" gap={3}>
              <Text fontSize="lg">${price}</Text>
              <Button
                size="sm"
                colorPalette="orange"
                onClick={() =>
                  setSelected({ ...product, selectedModel, quantity: qty })
                }
                disabled={remainedQty <= 0}
              >
                Add to cart
              </Button>
            </Flex>
          </Flex>
        )}

        {/* JSON-LD */}
        {enableJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
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
                  availability:
                    remainedQty > 0
                      ? "https://schema.org/InStock"
                      : "https://schema.org/OutOfStock",
                },
              }),
            }}
          />
        )}
      </>
    );
  },
};

export const ProductDetail = withLayout(ProductDetailInternal);
