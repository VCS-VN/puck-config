import { ComponentConfig } from "@measured/puck";
import { withLayout } from "@/components/Layout";
import {
  Box,
  Flex,
  Select,
  Switch,
  Text,
  Button,
  Input as ChakraInput,
  Portal,
} from "@chakra-ui/react";
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
    bindHideOutOfStockVariableName: {
      type: "text",
      label: "Hide OOS Var Name",
    },
    bindFiltersVariableName: { type: "text", label: "Filters Var Name" },
  },
  defaultProps: {
    bindSortVariableName: "products.sortBy",
    bindHideOutOfStockVariableName: "products.hideOutOfStock",
    bindFiltersVariableName: "products.filters",
  },
  inline: true,
  render: ({
    bindSortVariableName,
    bindHideOutOfStockVariableName,
    bindFiltersVariableName,
  }) => {
    const [vars, setVars] = useRecoilState(VariableState);
    const sort =
      (vars as any)?.[bindSortVariableName || "products.sortBy"] || "featured";
    const hide = !!(vars as any)?.[
      bindHideOutOfStockVariableName || "products.hideOutOfStock"
    ];
    const filters =
      (vars as any)?.[bindFiltersVariableName || "products.filters"] || {};
    const priceMin = filters?.priceMin ?? "";
    const priceMax = filters?.priceMax ?? "";
    return (
      <Flex align="center" gap={4} wrap="wrap">
        <Flex align="center" gap={2}>
          <Text>Sort:</Text>

          <Select.Root size={"md"} collection={{} as any}>
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
                  {[
                    { name: "Featured", value: "featured" },
                    { name: "Newest", value: "newest" },

                    { name: "Price: Low to High", value: "priceAsc" },
                    { name: "Price: High to Low", value: "priceDesc" },
                  ]?.map((model) => (
                    <Select.Item item={model} key={model.value}>
                      {model.name}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Flex>
        <Flex align="center" gap={2}>
          <Text>Hide OOS</Text>
          <Switch.Root
            checked={hide}
            onCheckedChange={(e: any) => {
              // setVars((prev) => ({
              //   ...prev,
              //   [bindHideOutOfStockVariableName || "products.hideOutOfStock"]:
              //     !!(e?.checked ?? e?.target?.checked),
              // }));
            }}
          >
            <Switch.HiddenInput />
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.Label />
          </Switch.Root>

          {/* <Switch
            checked={hide}
            onCheckedChange={(e: any) =>
              setVars((prev) => ({
                ...prev,
                [bindHideOutOfStockVariableName || "products.hideOutOfStock"]:
                  !!(e?.checked ?? e?.target?.checked),
              }))
            }
          /> */}
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
                  ...(((prev as any) || {})[
                    bindFiltersVariableName || "products.filters"
                  ] || {}),
                  priceMin:
                    e.target.value === "" ? undefined : Number(e.target.value),
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
                  ...(((prev as any) || {})[
                    bindFiltersVariableName || "products.filters"
                  ] || {}),
                  priceMax:
                    e.target.value === "" ? undefined : Number(e.target.value),
                },
              }))
            }
            width="90px"
          />
        </Flex>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            // setVars((prev) => ({
            //   ...prev,
            //   [bindFiltersVariableName || "products.filters"]: {},
            // }));
          }}
        >
          Clear filters
        </Button>
      </Flex>
    );
  },
};

export const FacetControls = withLayout(FacetControlsInternal);
