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
import { matchDataCondition } from "@/blocks/CommonFunction/function";

export type CategoryGridProps = {
  title?: string;
  subtitle?: string;
  storeId?: string;
  urlRedirect?: string;
  mobile?: number;
  tablet?: number;
  desktop?: number;
  limit?: number;
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

const CategoryGridRender: React.FC<CategoryGridProps> = ({
  title = "Browse By Category",
  subtitle = "Categories",
  urlRedirect,
  storeId = import.meta.env.VITE_ENTITY_ID || "",
  mobile = 2,
  tablet = 4,
  desktop = 6,
  limit = 6,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const redColor = "red.500";

  // Get storeId from environment variable
  const entityId = import.meta.env.VITE_ENTITY_ID || storeId || "";

  // Fetch categories from API
  const {
    data: categoriesData,
    isLoading,
    error,
  } = useGetCategoriesQuery(
    { storeId: entityId },
    { enabled: true } // Always enable the query
  );

  // Default categories data
  const defaultCategories = [
    { id: "1", name: "Phones", icon: "FiSmartphone" },
    { id: "2", name: "Computers", icon: "FiMonitor" },
    { id: "3", name: "SmartWatch", icon: "FiWatch" },
    { id: "4", name: "Camera", icon: "FiCamera" },
    { id: "5", name: "HeadPhones", icon: "FiHeadphones" },
    { id: "6", name: "Gaming", icon: "FiZap" },
  ];

  // Transform API data to display format
  // If API returns less than 4 items, use defaultCategories
  const apiCategories = categoriesData?.data || [];
  // const shouldUseDefault = apiCategories.length < 4;
  const shouldUseDefault = false;

  const displayCategories = shouldUseDefault
    ? defaultCategories.slice(0, limit)
    : apiCategories.slice(0, limit);

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

  // Calculate visible categories based on responsive props
  const getVisibleCategories = () => {
    // For now, we'll show all categories but use responsive sizing
    // In a real implementation, you might want to show different numbers
    // based on screen size using useBreakpointValue or similar
    return displayCategories;
  };

  const visibleCategories = getVisibleCategories();

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
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const onClickCategory = (item: any) => {
    // setSelectedCategory(item?.id)
  };
  // const render

  return (
    <Section>
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
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">
              {title}
            </Text>
          </Stack>

          {/* Navigation Buttons */}
          <Stack direction="row" gap={2}>
            <IconButton
              aria-label="Previous categories"
              variant="outline"
              size="sm"
              onClick={scrollLeft}
              colorScheme="gray"
            >
              <Icon as={FiChevronLeft} />
            </IconButton>
            <IconButton
              aria-label="Next categories"
              variant="outline"
              size="sm"
              onClick={scrollRight}
              colorScheme="gray"
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
                Array.from({ length: limit }).map((_, index) => (
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
                    <Link href={matchDataCondition(urlRedirect, category)}>
                      <Button
                        key={categoryId}
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
                        <Icon
                          as={IconComponent}
                          boxSize={responsiveSizing.iconSize}
                          color={isSelected ? "white" : "gray.800"}
                        />
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

          {/* Desktop: Grid Layout */}
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
              Array.from({ length: limit }).map((_, index) => (
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
                  <Link href={matchDataCondition(urlRedirect, category)}>
                    <Button
                      key={categoryId}
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
                      <Icon
                        as={IconComponent}
                        boxSize={6}
                        color={isSelected ? "white" : "gray.800"}
                      />
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
    </Section>
  );
};

const CategoryGridInternal: ComponentConfig<CategoryGridProps> = {
  label: "Categories",
  fields: {
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
      label: "Url",
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
  },
  defaultProps: {
    title: "Browse By Category",
    subtitle: "Categories",
    storeId: import.meta.env.VITE_ENTITY_ID || "",
    urlRedirect: "",
    mobile: 2,
    tablet: 4,
    desktop: 6,
    limit: 6,
  },
  render: (props) => (
    <ErrorBoundary fallbackRender={() => <div>Unable to load categories.</div>}>
      <CategoryGridRender {...props} />
    </ErrorBoundary>
  ),
};

export const CategoryGrid = withLayout(CategoryGridInternal);
