import { ComponentConfig } from "@measured/puck";
import { withLayout } from "../../components/Layout";
import { Section } from "../../components/Section";
import { ErrorBoundary } from "react-error-boundary";
import React, { useState, useRef } from "react";
import {
  Box,
  Text,
  Flex,
  IconButton,
  Stack,
  Button,
  Icon,
  SimpleGrid,
  Skeleton,
  // SkeletonText,
  Link,
  useBreakpointValue, Image,
} from "@chakra-ui/react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiSmartphone,
  FiMonitor,
  FiWatch,
  FiCamera,
  FiHeadphones,
  FiZap,
  FiPackage,
} from "react-icons/fi";
import { useGetCategoriesQuery } from "../../hooks/category/useGetCategoriesQuery";
import type { ICategory } from "../../services/sale/category/category.type";
import { matchDataCondition } from "@/blocks/CommonFunction/function.ts";
import { CategoryMultiSelect } from "@/components/CategoryMultiSelect";
import { CategorySingleSelect } from "@/components/CategorySingleSelect";
import { getCategoryTree } from "@/services/sale/category/category.api";
import { useRecoilState } from "recoil";
import { VariableState } from "@/services/common/variable.state";
import { pushUrlState } from "@/utils/url";

export type CategoryGridProps = {
  title?: string;
  subtitle?: string;
  storeId?: string;
  urlRedirect?: string;
  mobile?: number;
  tablet?: number;
  desktop?: number;
  limit?: number;
  // Optional slots to allow drag-and-drop content before/after the grid
  header?: any;
  footer?: any;
  // Show all categories or only a limited number
  showAll?: boolean;
  selectionMode?: "limit" | "select" | "ids";
  selectedCategories?: Array<{ id: string; name: string; icon?: string }>;
  categoryIds?: string; // comma-separated ids for manual input mode
  parentCategoryId?: string; // filter by parent category
  bindSelectedCategoryVariableName?: string; // write selected category id to variable state
};

// Icon mapping for categories
const iconMap = {
  FiSmartphone,
  FiMonitor,
  FiWatch,
  FiCamera,
  FiHeadphones,
  FiZap,
  FiPackage,
};

// Function to get icon based on category name
const getCategoryIcon = (categoryName: string) => {
  const name = categoryName.toLowerCase();
  if (name.includes("phone") || name.includes("mobile")) return "FiSmartphone";
  if (
    name.includes("computer") ||
    name.includes("laptop") ||
    name.includes("pc")
  )
    return "FiMonitor";
  if (name.includes("watch") || name.includes("smartwatch")) return "FiWatch";
  if (name.includes("camera") || name.includes("photo")) return "FiCamera";
  if (
    name.includes("headphone") ||
    name.includes("audio") ||
    name.includes("sound")
  )
    return "FiHeadphones";
  if (name.includes("game") || name.includes("gaming")) return "FiZap";
  return "FiPackage"; // default icon
};

const CategoryGridRender: React.FC<CategoryGridProps & { puck?: any }> = ({
  title = "Browse By Category",
  subtitle = "Categories",
  urlRedirect,
  storeId = ((import.meta as any)?.env?.VITE_ENTITY_ID as string) || "",
  mobile = 2,
  tablet = 4,
  desktop = 6,
  limit = 6,
  header: HeaderSlot,
  footer: FooterSlot,
  puck,
  showAll = false,
  selectionMode = "limit",
  selectedCategories = [],
  categoryIds,
  parentCategoryId,
  bindSelectedCategoryVariableName,
}) => {
  const [vars, setVars] = useRecoilState(VariableState);
  const selectedCategory = bindSelectedCategoryVariableName
    ? (vars as any)[bindSelectedCategoryVariableName]
    : "";
  const scrollRef = useRef<HTMLDivElement>(null);

  const redColor = "red.500";

  // Get storeId from environment variable
  const entityId =
    ((import.meta as any)?.env?.VITE_ENTITY_ID as string) ||
    storeId ||
    puck.metadata?.entityId ||
    "";

  // Determine effective mode: if user already picked categories, honor that for rendering
  const effectiveMode =
    (selectedCategories?.length || 0) > 0 && selectionMode !== "ids"
      ? "select"
      : selectionMode;

  // Fetch categories from API
  const {
    data: categoriesData,
    isLoading,
    error,
  } = useGetCategoriesQuery(
    {
      storeId: entityId,
      limit: showAll || effectiveMode !== "limit" ? undefined : limit,
    },
    {
      enabled: !!entityId,
      // In editor we want to see a call when dropped; avoid cache reuse
      staleTime: 0,
      refetchOnMount: "always",
      refetchOnWindowFocus: false,
      gcTime: 300_000,
      placeholderData: undefined,
      retry: 1,
    }
  );

  console.log("categoriesData",categoriesData)


  const apiCategories = categoriesData?.data || [];
  const [tree, setTree] = React.useState<any[] | null>(null);
  React.useEffect(() => {
    let active = true;
    const ctl = new AbortController();
    if (parentCategoryId) {
      (async () => {
        try {
          const res = await getCategoryTree({ storeId: entityId }, ctl.signal);
          if (active) setTree(res?.data || []);
        } catch (e) {
          if (active) setTree([]);
        }
      })();
    }
    return () => {
      active = false;
      ctl.abort();
    };
  }, [parentCategoryId, entityId]);
  const shouldUseDefault = !!error || apiCategories.length < 4;

  let displayCategories: any[] = [];
  if (effectiveMode === "select" && selectedCategories?.length) {
    displayCategories = selectedCategories;
  } else if (effectiveMode === "ids" && categoryIds) {
    const ids = categoryIds
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);
    displayCategories = ids.map((id) => {
      const match = apiCategories.find(
        (c: any) => String(c.id ?? c.entityId ?? c.value) === String(id)
      );
      return { id, name: match?.name || id, icon: match?.icon };
    });
  } else if (parentCategoryId && Array.isArray(tree)) {
    const findNode = (nodes: any[]): any => {
      for (const n of nodes) {
        if (String(n.id) === String(parentCategoryId)) return n;
        const f = n.children && findNode(n.children);
        if (f) return f;
      }
      return null;
    };
    const node = findNode(tree) || {};
    const children = Array.isArray(node.children) ? node.children : [];
    displayCategories = showAll ? children : children.slice(0, limit);
  } else {
    const normalizedApi = (apiCategories || [])
      .map((c: any) => {
        const id =
          c?.id ?? c?.entityId ?? c?.value ?? c?._id ?? c?.code ?? c?.slug;
        const name =
          c?.name ??
          c?.label ??
          c?.title ??
          c?.slug ??
          c?.code ??
          c?.displayName ??
          c?.text;
        return {
          id: id != null ? String(id) : "",
          name: name ? String(name) : id != null ? String(id) : "",
          icon: c?.icon,
          image: c?.image,
        };
      })
      .filter((c: any) => c.id !== "");
    displayCategories = showAll
      ? normalizedApi
      : normalizedApi.slice(0, limit);
  }

  // console.log('CategoryGrid API Call:', {
  //   entityId,
  //   storeId,
  //   isLoading,
  //   error,
  //   data: categoriesData,
  //   apiCategoriesCount: apiCategories.length,
  //   shouldUseDefault,
  //   finalCategoriesCount: displayCategories.length
  // });

  // Pagination for desktop grid; horizontal scroll for mobile/tablet
  const perPageCols =
    useBreakpointValue({ base: mobile, md: tablet, lg: desktop }) || desktop;
  const isDesktop =
    useBreakpointValue({ base: false, md: false, lg: true }) || false;
  const [page, setPage] = React.useState(0);
  const perPage = Math.max(1, Number(perPageCols || desktop));
  const totalPages = Math.max(
    1,
    Math.ceil((displayCategories?.length || 0) / perPage)
  );

  React.useEffect(() => {
    // Clamp current page when data or layout changes
    setPage((p) => Math.min(Math.max(0, p), Math.max(0, totalPages - 1)));
  }, [perPage, displayCategories?.length, totalPages]);

  const visibleCategories = React.useMemo(() => {
    if (isDesktop) {
      const start = page * perPage;
      return (displayCategories || []).slice(start, start + perPage);
    }
    return displayCategories;
  }, [isDesktop, page, perPage, displayCategories]);

  // Responsive sizing based on props
  const getResponsiveSizing = () => {
    return {
      cardSize: {
        base: `${100 / mobile}%`, // Mobile: divide by mobile columns
        md: `${100 / tablet}%`, // Tablet: divide by tablet columns
        lg: `${100 / desktop}%`, // Desktop: divide by desktop columns
      },
      gap: {
        base: 2,
        md: 3,
        lg: 4,
      },
      fontSize: {
        base: "xs",
        md: "sm",
        lg: "sm",
      },
      iconSize: {
        base: 5,
        md: 5,
        lg: 6,
      },
    };
  };

  const responsiveSizing = getResponsiveSizing();

  const scrollLeft = () => {
    if (isDesktop) {
      setPage((p) => Math.max(0, p - 1));
      return;
    }
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (isDesktop) {
      setPage((p) => Math.min(totalPages - 1, p + 1));
      return;
    }
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const onClickCategory = (item: any) => {
    if (!bindSelectedCategoryVariableName) return;
    setVars((prev) => ({
      ...prev,
      [bindSelectedCategoryVariableName]: item?.id,
    }));
    pushUrlState({ categoryId: item?.id, page: 1 });
  };
  // const render

  return (
    <Section>
      {HeaderSlot ? <HeaderSlot minEmptyHeight={40} /> : null}
      <Box py={8}>
        {/* Header Section */}
        <Flex justify="space-between" align="center" mb={6}>
          <Stack align="start" gap={1}>
            <Flex align="center" gap={2}>
              <Box w={2} h={6} bg={redColor} borderRadius="sm" />
              <Text color={redColor} fontSize="sm" fontWeight="medium">
                {subtitle}
              </Text>
            </Flex>
            <Flex align="baseline" gap={3}>
              <Text fontSize="2xl" fontWeight="bold" color="gray.800">
                {title}
              </Text>
              {isDesktop && totalPages > 1 ? (
                <Text fontSize="sm" color="gray.500">
                  Page {page + 1} / {totalPages}
                </Text>
              ) : null}
            </Flex>
          </Stack>

          {/* Navigation Buttons */}
          <Stack direction="row" gap={2}>
            <IconButton
              aria-label="Previous categories"
              variant="outline"
              size="sm"
              onClick={scrollLeft}
              colorScheme="gray"
              disabled={isDesktop && page <= 0}
            >
              <Icon as={FiChevronLeft} />
            </IconButton>
            <IconButton
              aria-label="Next categories"
              variant="outline"
              size="sm"
              onClick={scrollRight}
              colorScheme="gray"
              disabled={isDesktop && page >= totalPages - 1}
            >
              <Icon as={FiChevronRight} />
            </IconButton>
          </Stack>
        </Flex>

        {/* Categories Grid/Slider */}
        <Box>
          {/* Mobile/Tablet: Horizontal Scroll */}
          <Box
            ref={scrollRef}
            overflowX="auto"
            overflowY="hidden"
            css={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            display={{ base: "block", md: "block", lg: "none" }}
          >
            <Stack
              direction="row"
              gap={responsiveSizing.gap}
              minW="max-content"
              pb={2}
              display="flex"
              flexWrap="nowrap"
              overflowX="auto"
              css={{
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {isLoading ? (
                // Loading skeleton
                Array.from({
                  length:
                    showAll || selectionMode !== "limit"
                      ? Math.min(visibleCategories.length || 8, 8)
                      : limit,
                }).map((_, index) => (
                  <Skeleton
                    key={`skeleton-${index}`}
                    h={{ base: "100px", md: "110px" }}
                    w={{ base: "100px", md: "110px" }}
                    borderRadius="md"
                  />
                ))
              ) : error ? (
                // Error state
                <Text color="red.500" fontSize="sm">
                  Failed to load categories
                </Text>
              ) : (
                visibleCategories.map((category: any) => {
                  // Handle both API data (ICategory) and mock data
                  const categoryName = category.name || "";
                  const categoryId = category.id || "";
                  const iconKey =
                    category.icon || getCategoryIcon(categoryName);
                  const IconComponent =
                    iconMap[iconKey as keyof typeof iconMap];
                  const isSelected = selectedCategory === categoryId;

                  return (
                    <Link
                      key={String(categoryId)}
                      href={
                        !puck?.isEditing && urlRedirect
                          ? matchDataCondition(urlRedirect, category)
                          : undefined
                      }
                      onClick={(e) => {
                        if (puck?.isEditing) e.preventDefault();
                      }}
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        h={{ base: "100px", md: "110px" }}
                        w={{ base: "100px", md: "110px" }}
                        minW={{ base: "100px", md: "110px" }}
                        flexDirection="column"
                        gap={{ base: 2, md: 2 }}
                        bg={isSelected ? redColor : "white"}
                        borderColor={isSelected ? redColor : "gray.200"}
                        color={isSelected ? "white" : "gray.800"}
                        _hover={{
                          bg: isSelected ? redColor : "gray.50",
                          borderColor: isSelected ? redColor : "gray.300",
                        }}
                        onClick={() => onClickCategory(category)}
                        transition="all 0.2s"
                        flexShrink={0}
                      >
                        {category?.image ? <div>
                            <Image
                              src={
                                category.image ||
                                "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg"
                              }
                              alt={category.name}
                              borderRadius="md"
                            />
                          </div> :

                          <Icon
                            as={IconComponent}
                            boxSize={responsiveSizing.iconSize}
                            color={isSelected ? "white" : "gray.800"}
                          />
                        }

                        <Text
                          fontSize={responsiveSizing.fontSize}
                          fontWeight="medium"
                        >
                          {categoryName}
                        </Text>
                      </Button>
                    </Link>
                  );
                })
              )}
            </Stack>
          </Box>

          {/* Desktop: Grid Layout (paged by arrows) */}
          <SimpleGrid
            columns={{
              base: mobile,
              md: tablet,
              lg: desktop,
            }}
            gap={responsiveSizing.gap}
            display={{
              base: "none",
              md: "none",
              lg: "grid",
            }}
          >
            {isLoading ? (
              // Loading skeleton for desktop
              Array.from({
                length: isDesktop
                  ? perPage
                  : showAll || selectionMode !== "limit"
                  ? 12
                  : limit,
              }).map((_, index) => (
                <Skeleton
                  key={`skeleton-desktop-${index}`}
                  h="120px"
                  w="100%"
                  borderRadius="md"
                />
              ))
            ) : error ? (
              // Error state
              <Text color="red.500" fontSize="sm">
                Failed to load categories
              </Text>
            ) : (
              visibleCategories.map((category: any) => {
                // Handle both API data (ICategory) and mock data
                const categoryName = category.name || "";
                const categoryId = category.id || "";
                const iconKey = category.icon || getCategoryIcon(categoryName);
                const IconComponent = iconMap[iconKey as keyof typeof iconMap];
                const isSelected = selectedCategory === categoryId;

                return (
                  <Link
                    key={String(categoryId)}
                    href={
                      !puck?.isEditing && urlRedirect
                        ? matchDataCondition(urlRedirect, category)
                        : undefined
                    }
                    onClick={(e) => {
                      if (puck?.isEditing) e.preventDefault();
                    }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      h="120px"
                      w="100%"
                      flexDirection="column"
                      gap={3}
                      bg={isSelected ? redColor : "white"}
                      borderColor={isSelected ? redColor : "gray.200"}
                      color={isSelected ? "white" : "gray.800"}
                      _hover={{
                        bg: isSelected ? redColor : "gray.50",
                        borderColor: isSelected ? redColor : "gray.300",
                      }}
                      onClick={() => onClickCategory(category)}
                      transition="all 0.2s"
                    >
                      {category?.image ? <div>
                          <Image
                            src={
                              category.image ||
                              "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg"
                            }
                            alt={category.name}
                            borderRadius="md"
                            width={"24px"}
                            height={"24px"}
                          />
                        </div> :
                        <Icon
                          as={IconComponent}
                          boxSize={6}
                          color={isSelected ? "white" : "gray.800"}
                        />
                      }

                      <Text fontSize="sm" fontWeight="medium">
                        {categoryName}
                      </Text>
                    </Button>
                  </Link>
                );
              })
            )}
          </SimpleGrid>
        </Box>
      </Box>
      {FooterSlot ? <FooterSlot minEmptyHeight={40} /> : null}
    </Section>
  );
};

const CategoryGridFields = {
  header: {
    type: "slot",
    label: "Header Slot",
  },
  bindSelectedCategoryVariableName: {
    type: "text",
    label: "Bind Selected Category Var",
    placeholder: "products.categoryId",
  },
  showAll: {
    type: "radio",
    label: "Show All Categories",
    options: [
      { label: "Yes", value: true },
      { label: "No", value: false },
    ],
  },
  selectionMode: {
    type: "radio",
    label: "Selection Mode",
    options: [
      { label: "By Limit", value: "limit" },
      { label: "Pick Categories", value: "select" },
      { label: "Enter IDs", value: "ids" },
    ],
  },
  selectedCategories: {
    type: "custom",
    label: "Choose Categories",
    render: CategoryMultiSelect,
  },
  parentCategoryId: {
    type: "custom",
    label: "Parent Category",
    render: CategorySingleSelect,
  },
  categoryIds: {
    type: "text",
    label: "Category IDs (comma-separated)",
    placeholder: "id1,id2,id3",
  },
  title: {
    type: "text",
    label: "Title",
  },
  subtitle: {
    type: "text",
    label: "Subtitle",
  },
  storeId: {
    type: "text",
    label: "Store ID",
  },
  urlRedirect: {
    type: "text",
    label: "Url click on category",
  },
  mobile: {
    type: "number",
    label: "Mobile Columns",
    min: 1,
    max: 4,
  },
  tablet: {
    type: "number",
    label: "Tablet Columns",
    min: 2,
    max: 6,
  },
  desktop: {
    type: "number",
    label: "Desktop Columns",
    min: 3,
    max: 8,
  },
  limit: {
    type: "number",
    label: "Total Categories Limit",
    min: 1,
    max: 20,
  },
  footer: {
    type: "slot",
    label: "Footer Slot",
  },
} as const;

const CategoryGridInternal: ComponentConfig<CategoryGridProps> = {
  label: "Categories",
  fields: CategoryGridFields as any,
  defaultProps: {
    title: "Browse By Category",
    subtitle: "Categories",
    storeId: ((import.meta as any)?.env?.VITE_ENTITY_ID as string) || "",
    urlRedirect: "",
    bindSelectedCategoryVariableName: "products.categoryId",
    mobile: 2,
    tablet: 4,
    desktop: 6,
    limit: 6,
    header: [],
    footer: [],
    showAll: false,
    selectionMode: "limit",
    selectedCategories: [],
    categoryIds: "",
    parentCategoryId: "",
  },
  resolveFields: (data) => {
    const base = CategoryGridFields as any;
    const fields: any = {
      header: base.header,
      bindSelectedCategoryVariableName: base.bindSelectedCategoryVariableName,
      showAll: base.showAll,
      title: base.title,
      subtitle: base.subtitle,
      storeId: base.storeId,
      urlRedirect: base.urlRedirect,
      mobile: base.mobile,
      tablet: base.tablet,
      desktop: base.desktop,
      footer: base.footer,
    };

    // Always show parentCategoryId selector if set or not showing all
    fields.parentCategoryId = base.parentCategoryId;

    if (!data?.props?.showAll) {
      fields.selectionMode = base.selectionMode;
      if (data?.props?.selectionMode === "select") {
        fields.selectedCategories = base.selectedCategories;
      } else if (data?.props?.selectionMode === "ids") {
        fields.categoryIds = base.categoryIds;
      } else {
        fields.limit = base.limit;
      }
    } else {
      fields.limit = base.limit; // optional to tune skeleton/desktop grid columns
    }

    return fields;
  },
  render: (props) => (
    <ErrorBoundary fallbackRender={() => <div>Unable to load categories.</div>}>
      <CategoryGridRender {...props} puck={(props as any).puck} />
    </ErrorBoundary>
  ),
};

export const CategoryGrid = withLayout(CategoryGridInternal);
