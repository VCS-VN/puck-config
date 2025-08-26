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
} from "@chakra-ui/react";
import { VariableState } from "@/services/common/variable.state";
import { useRecoilValue } from "recoil";

export type ProductsProps = {
  mobile: number;
  tablet: number;
  desktop: number;
  limit: number;
  categoryId?: string;
  // searchSize: SizeType;
  storeId?: string;
  variableName?: string;
  noResults?: string;
};

const ProductsRender: FC<ProductsProps> = ({
  mobile,
  tablet,
  desktop,
  limit,
  categoryId,
  // searchSize,
  storeId,
  variableName,
  noResultsText,
}) => {
  // const store = useRecoilValue(CurrentStoreState);
  const variables = useRecoilValue(VariableState);
  console.log("🚀 ~ ProductsRender ~ variables:", variables);
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
    () => debounce((value: string) => setDebouncedValue(value), 800),
    []
  );

  const [queries, setQueries] = useState({
    search: debouncedValue,
    page: 1,
    limit: limit,
  });

  const { data: products, isLoading } = useGetProductsQuery(
    {
      // storeSlug: store?.slug,
      query: queries.search,
      isGettingModels: true,
      isGettingDefaultModel: true,
      limit: queries.limit,
      page: queries?.page,
      categoryId,
      storeId: storeId,
    }
    // { enabled: !!store?.slug }
  );

  useEffect(() => {
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

  if (!isLoading && !products?.total) {
    return (
      <Box>
        <Text>{noResultsText || "No results found"}</Text>
      </Box>
    );
  }

  return (
    <Box>
      <SimpleGrid
        columns={{
          base: mobile,
          sm: tablet,
          md: tablet,
          lg: desktop,
        }}
        gap={4}
      >
        {isLoading
          ? Array.from({ length: limit }).map((_, index) => (
              <Skeleton key={index} height="300px" borderRadius="md" />
            ))
          : products?.data?.map((product) => {
              const defaultModel = get(
                product,
                "defaultModel",
                get(product, "models.0")
              );

              return (
                <Card.Root key={product.id} variant="outline">
                  <CardBody>
                    <Image
                      src={
                        product.image ||
                        "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg"
                      }
                      alt={product.name}
                      borderRadius="md"
                    />
                    <Text mt="2" fontWeight="bold">
                      {product.name}
                    </Text>

                    {/* <Prose>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: product.descriptions,
                        }}
                      />
                    </Prose> */}
                  </CardBody>
                  <CardFooter>
                    <Text fontWeight="bold">
                      $
                      {`${round(
                        (defaultModel?.price ?? product.price ?? 0) / 100,
                        0
                      )}`}
                    </Text>
                  </CardFooter>
                </Card.Root>
              );
            })}
      </SimpleGrid>

      {get(products, "total", 0) > 0 && (
        <Pagination.Root
          mt="6"
          count={get(products, "total", 0)}
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
  //   // <Section>
  //   //   <Input.Search
  //   //     placeholder="Search..."
  //   //     onSearch={(e) => {
  //   //       setSearch(e);
  //   //       setPage(1);
  //   //     }}
  //   //     loading={isLoading}
  //   //     size={searchSize}
  //   //   />
  //   //   <Divider />

  //   // </Section>
  // );
};

// const buildTreeData = (nodes: any[] = []): any[] =>
//   nodes.map((n) => ({
//     title: n.name,
//     value: n.id,
//     children: buildTreeData(n.children || []),
//   }));

// const CategoryField: FC<{ value?: string; onChange: (v?: string) => void }> = ({
//   value,
//   onChange,
// }) => {
//   const store = useRecoilValue(CurrentStoreState);
//   const { data } = useGetCategoryTreeQuery(
//     { storeSlug: store?.slug },
//     { enabled: !!store?.slug }
//   );

//   return (
//     <TreeSelect
//       value={value}
//       onChange={onChange}
//       allowClear
//       treeData={buildTreeData(data?.data)}
//       showSearch
//       treeNodeFilterProp="title"
//       style={{ width: "100%" }}
//       placeholder="Select category"
//     />
//   );
// };

const ProductsInternal: ComponentConfig = {
  fields: {
    mobile: { type: "number", label: "Mobile (base)", min: 1, max: 2 },
    tablet: { type: "number", label: "Tablet", min: 1, max: 4 },
    desktop: { type: "number", label: "Desktop", min: 1, max: 6 },
    limit: { type: "number", label: "Limit", min: 1, max: 20 },
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
    categoryId: undefined,
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
  }) => {
    return (
      <ProductsRender
        mobile={mobile}
        tablet={tablet}
        desktop={desktop}
        categoryId={categoryId}
        variableName={variableName}
        limit={limit}
        noResults={noResultsText}
        storeId={puck?.metadata?.storeId}
      />
    );
  },
};

export const Products = withLayout(ProductsInternal);
