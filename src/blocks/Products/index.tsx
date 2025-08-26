// import { Card, Image, List, Input, Divider } from "antd";
import { ComponentConfig, Render } from "@measured/puck";
import { withLayout } from "../../components/Layout";
import { Section } from "../../components/Section";
import { FC, useState } from "react";
import { get, round } from "lodash";
import { useGetProductsQuery } from "../../hooks/products";
// import { SizeType } from "antd/es/config-provider/SizeContext";

export type ProductsProps = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  limit: number;
  categoryId?: string;
  // searchSize: SizeType;
  storeId?: string;
};

const ProductsRender: FC<ProductsProps> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  limit,
  categoryId,
  // searchSize,
  storeId,
}) => {
  // const store = useRecoilValue(CurrentStoreState);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { data: products, isLoading } = useGetProductsQuery(
    {
      // storeSlug: store?.slug,
      query: search,
      isGettingModels: true,
      isGettingDefaultModel: true,
      limit,
      page,
      categoryId,
      storeId: storeId,
    }
    // { enabled: !!store?.slug }
  );

  return (
    <Section>
      <></>
      {/* <Input.Search
        placeholder="Search..."
        onSearch={(e) => {
          setSearch(e);
          setPage(1);
        }}
        loading={isLoading}
        size={searchSize}
      />
      <Divider />
      <List
        grid={{
          gutter: 16,
          xs,
          sm,
          md,
          lg,
          xl,
          xxl,
        }}
        dataSource={products?.data || []}
        loading={isLoading}
        pagination={{
          total: products?.total,
          onChange: (p) => setPage(p),
          pageSize: limit,
          current: page,
        }}
        renderItem={(p) => {
          const defaultModel = get(p, "defaultModel", get(p, "models.0"));

          return (
            <List.Item>
              <Card
                hoverable
                cover={
                  <Image
                    className="object-cover min-h-[150px]"
                    src={
                      p.image ||
                      "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg"
                    }
                    alt={p.name}
                    preview={false}
                  />
                }
              >
                <Card.Meta
                  title={p.name}
                  description={`${round(
                    (defaultModel?.price ?? p.price ?? 0) / 100,
                    0
                  )} ₫`}
                />
              </Card>
            </List.Item>
          );
        }}
      /> */}
    </Section>
  );
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

const ProductsInternal: ComponentConfig<ProductsProps> = {
  fields: {
    xs: { type: "number", label: "Xs Columns", min: 1, max: 2 },
    sm: { type: "number", label: "Sm Columns", min: 1, max: 4 },
    md: { type: "number", label: "Md Columns", min: 1, max: 4 },
    lg: { type: "number", label: "Lg Columns", min: 1, max: 6 },
    xl: { type: "number", label: "Xl Columns", min: 1, max: 8 },
    xxl: { type: "number", label: "Xxl Columns", min: 1, max: 12 },
    limit: { type: "number", label: "Limit", min: 1, max: 20 },
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
    xs: 2,
    sm: 2,
    md: 4,
    lg: 4,
    xl: 5,
    xxl: 6,
    limit: 10,
    // searchSize: "middle",
    categoryId: undefined,
  },
  render: (props) => {
    return (
      <ProductsRender {...props} storeId={props?.puck?.metadata?.storeId} />
    );
  },
};

export const Products = withLayout(ProductsInternal);
