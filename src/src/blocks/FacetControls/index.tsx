import { ComponentConfig } from "@measured/puck";
import { withLayout } from "@/components/Layout";
import { Box, Flex, Text, Button, Input as ChakraInput, chakra } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { VariableState } from "@/services/common/variable.state";

export type FacetControlsProps = {
  bindSortVariableName?: string;
  bindHideOutOfStockVariableName?: string;
  bindFiltersVariableName?: string; // e.g. products.filters
};

const FacetControlsInternal: ComponentConfig<FacetControlsProps> = {
  label: "Facet Controls",
  fields: {
    bindSortVariableName: { type: "text", label: "Sort Variable Name" },
    bindHideOutOfStockVariableName: { type: "text", label: "Hide OOS Var Name" },
    bindFiltersVariableName: { type: "text", label: "Filters Var Name" },
  },
  defaultProps: {
    bindSortVariableName: "products.sortBy",
    bindHideOutOfStockVariableName: "products.hideOutOfStock",
    bindFiltersVariableName: "products.filters",
  },
  inline: true,
  render: ({ bindSortVariableName, bindHideOutOfStockVariableName, bindFiltersVariableName }) => {
    const NativeSelect = chakra('select');
    const NativeCheckbox = chakra('input');
    const [vars, setVars] = useRecoilState(VariableState);
    const sort = (vars as any)?.[bindSortVariableName || "products.sortBy"] || "featured";
    const hide = !!(vars as any)?.[bindHideOutOfStockVariableName || "products.hideOutOfStock"];
    const filters = ((vars as any)?.[bindFiltersVariableName || "products.filters"]) || {};
    const priceMin = filters?.priceMin ?? "";
    const priceMax = filters?.priceMax ?? "";
    return (
      <Flex align="center" gap={4} wrap="wrap">
        <Flex align="center" gap={2}>
          <Text>Sort:</Text>
          <NativeSelect
            padding="6px"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            value={sort as any}
            onChange={(e: any) =>
              setVars((prev) => ({ ...prev, [bindSortVariableName || "products.sortBy"]: e.target.value }))
            }
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </NativeSelect>
        </Flex>
        <Flex align="center" gap={2}>
          <Text>Hide OOS</Text>
          <NativeCheckbox
            type="checkbox"
            checked={hide}
            onChange={(e: any) =>
              setVars((prev) => ({ ...prev, [bindHideOutOfStockVariableName || "products.hideOutOfStock"]: !!e.target.checked }))
            }
          />
        </Flex>
        <Flex align="center" gap={2}>
          <Text>Price</Text>
          <ChakraInput
            size="sm"
            type="number"
            placeholder="Min"
            value={priceMin}
            onChange={(e) =>
              setVars((prev) => ({
                ...prev,
                [bindFiltersVariableName || "products.filters"]: {
                  ...(((prev as any) || {})[bindFiltersVariableName || "products.filters"] || {}),
                  priceMin: e.target.value === "" ? undefined : Number(e.target.value),
                },
              }))
            }
            width="90px"
          />
          <Text>-</Text>
          <ChakraInput
            size="sm"
            type="number"
            placeholder="Max"
            value={priceMax}
            onChange={(e) =>
              setVars((prev) => ({
                ...prev,
                [bindFiltersVariableName || "products.filters"]: {
                  ...(((prev as any) || {})[bindFiltersVariableName || "products.filters"] || {}),
                  priceMax: e.target.value === "" ? undefined : Number(e.target.value),
                },
              }))
            }
            width="90px"
          />
        </Flex>
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            setVars((prev) => ({
              ...prev,
              [bindFiltersVariableName || "products.filters"]: {},
            }))
          }
        >
          Clear filters
        </Button>
      </Flex>
    );
  },
};

export const FacetControls = withLayout(FacetControlsInternal);
