import { ComponentConfig } from "@measured/puck";
import { withLayout } from "@/components/Layout";
import { Box, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useGetCategoriesQuery } from "@/hooks/category/useGetCategoriesQuery";
import { getCategoryTree } from "@/services/sale/category/category.api";
import { matchDataCondition } from "@/blocks/CommonFunction/function";
import { CategoryMultiSelect } from "@/components/CategoryMultiSelect";
import {pushUrlState} from "../../utils/url";

type CategoryItem = { id: string; name: string; icon?: string };

export type CategoryListProps = {
  title?: string;
  urlRedirect?: string;
  showAll?: boolean;
  selectionMode?: "limit" | "select" | "ids";
  selectedCategories?: CategoryItem[];
  categoryIds?: string; // comma-separated
  limit?: number;
  itemHeight?: number;
  hoverSubmenu?: boolean;
  submenuWidth?: number;
};

const CategoryListInternal: ComponentConfig<CategoryListProps> = {
  label: "Category List",
  fields: {
    title: { type: "text", label: "Title" },
    urlRedirect: { type: "text", label: "Url" },
    showAll: {
      type: "radio",
      label: "Show All",
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
    categoryIds: { type: "text", label: "Category IDs (comma)" },
    limit: { type: "number", label: "Limit", min: 1, max: 30 },
    itemHeight: { type: "number", label: "Item Height (px)", min: 32, max: 72 },
    hoverSubmenu: {
      type: "radio",
      label: "Hover Submenu",
      options: [
        { label: "On", value: true },
        { label: "Off", value: false },
      ],
    },
    submenuWidth: {
      type: "number",
      label: "Submenu Width (px)",
      min: 160,
      max: 640,
    },
  },
  defaultProps: {
    title: "",
    urlRedirect: "",
    showAll: false,
    selectionMode: "limit",
    selectedCategories: [],
    categoryIds: "",
    limit: 10,
    itemHeight: 44,
    hoverSubmenu: true,
    submenuWidth: 360,
  },
  render: ({
    title,
    urlRedirect,
    showAll,
    selectionMode,
    selectedCategories = [],
    categoryIds,
    limit = 10,
    itemHeight = 44,
    hoverSubmenu,
    submenuWidth = 360,
    puck,
  }) => {
    const entityId =
      ((import.meta as any)?.env?.VITE_ENTITY_ID as string) ||
      puck?.metadata?.entityId ||
      "";

    const { data: listData } = useGetCategoriesQuery(
      {
        storeId: entityId,
        limit: showAll || selectionMode !== "limit" ? undefined : limit,
      },
      {
        enabled: !!entityId,
        // Force fetch when component mounts in editor (no cache reuse)
        staleTime: 0,
        refetchOnMount: "always",
        refetchOnWindowFocus: false,
        placeholderData: undefined,
      }
    );

    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [tree, setTree] = useState<any[] | null>(null);

    const apiCategories = (listData?.data || [])
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
        };
      })
      .filter((c: any) => c.id !== "");
    const effectiveMode =
      (selectedCategories?.length || 0) > 0 && selectionMode !== "ids"
        ? "select"
        : selectionMode;
    const displayCategories: CategoryItem[] = useMemo(() => {
      if (effectiveMode === "select" && selectedCategories?.length) {
        return selectedCategories;
      }
      if (effectiveMode === "ids" && categoryIds) {
        const ids = categoryIds
          .split(",")
          .map((x) => x.trim())
          .filter(Boolean);
        return ids.map((id) => {
          const match = apiCategories.find(
            (c: any) => String(c.id ?? c.entityId ?? c.value) === String(id)
          );
          return { id, name: match?.name || id, icon: match?.icon };
        });
      }
      return showAll ? apiCategories : apiCategories.slice(0, limit);
    }, [
      showAll,
      effectiveMode,
      selectedCategories,
      categoryIds,
      apiCategories,
      limit,
    ]);

    const ensureTree = async () => {
      if (tree || !hoverSubmenu) return;
      try {
        const res = await getCategoryTree({ storeId: entityId });
        setTree(res?.data || []);
      } catch (e) {
        setTree([]);
      }
    };

    const subItems = (id: string): CategoryItem[] => {
      if (!tree) return [];
      const findNode = (nodes: any[]): any => {
        for (const n of nodes) {
          if (String(n.id) === String(id)) return n;
          const f = n.children && findNode(n.children);
          if (f) return f;
        }
        return null;
      };
      const node = findNode(tree);
      return (node?.children || []).map((c: any) => ({
        id: String(c.id),
        name: String(c.name || ""),
      }));
    };

    return (
      <Box
        position="relative"
        bg="white"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="md"
        overflow="hidden"
      >
        {title ? (
          <Box
            px={3}
            py={2}
            borderBottom="1px solid"
            borderColor="gray.200"
            fontWeight="semibold"
          >
            {title}
          </Box>
        ) : null}
        <Stack gap={0}>
          {displayCategories.map((c) => (
            <Box
              key={String(c.id)}
              className={"cursor-pointer"}
              onClick={(e: any) => {
                if (puck?.isEditing) return e.preventDefault();
                if (!urlRedirect) {
                  pushUrlState({ categoryId: c?.id, page: 1 });
                  return
                }
                const href = matchDataCondition(urlRedirect, c);
                if (href) {
                  if (String(href).startsWith("http"))
                    window.open(String(href), "_blank", "noopener,noreferrer");
                  else window.location.assign(String(href));
                }
              }}
              _hover={{ textDecoration: "none", bg: "gray.50" }}
              px={3}
              h={`${itemHeight}px`}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              position="relative"
              onMouseEnter={async () => {
                setHoveredId(c.id);
                await ensureTree();
              }}
              onMouseLeave={() =>
                setHoveredId((prev) => (prev === c.id ? null : prev))
              }
            >
              <Text color="gray.800" fontSize="sm">
                {c.name}
              </Text>
              <Icon as={FiChevronRight} color="gray.400" />

              {hoverSubmenu &&
                hoveredId === c.id &&
                subItems(c.id).length > 0 && (
                  <Box
                    position="absolute"
                    top={0}
                    left="100%"
                    w={`${submenuWidth}px`}
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="md"
                    boxShadow="md"
                    zIndex={10}
                  >
                    <Stack gap={0} py={2}>
                      {subItems(c.id).map((s) => (
                        <Box
                          key={String(s.id)}
                          className={"cursor-pointer"}
                          onClick={(e: any) => {
                            if (puck?.isEditing) return e.preventDefault();
                            if (!urlRedirect) {
                              pushUrlState({ categoryId: s?.id, page: 1 });
                              return
                            }
                            const href = matchDataCondition(urlRedirect, s);
                            if (href) {
                              if (String(href).startsWith("http"))
                                window.open(
                                  String(href),
                                  "_blank",
                                  "noopener,noreferrer"
                                );
                              else window.location.assign(String(href));
                            }
                          }}
                          _hover={{ textDecoration: "none", bg: "gray.50" }}
                          px={3}
                          h={`${itemHeight - 6}px`}
                          display="flex"
                          alignItems="center"
                        >
                          <Text color="gray.700" fontSize="sm">
                            {s.name}
                          </Text>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                )}
            </Box>
          ))}
        </Stack>
      </Box>
    );
  },
};

export const CategoryList = withLayout(CategoryListInternal);
