import { Card, Image, List, Input, Divider } from "antd";
import { ComponentConfig, Render } from "@measured/puck";
import { withLayout } from "../../components/Layout";
import { Section } from "../../components/Section";
import { FC, useState } from "react";
import { get, round } from "lodash";
import { useGetProductsQuery } from "../../hooks/products";

export type ProductGridProps = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  limit: number;
  categoryId?: string;
};

const ProductGridRender: FC<ProductGridProps> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  limit,
  categoryId,
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
    }
    // { enabled: !!store?.slug }
  );

  console.log({ xs, sm, md, lg, xl, xxl });

  return (
    <Section>
      <Input.Search
        placeholder="Search..."
        onSearch={setSearch}
        loading={isLoading}
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
        }}
        renderItem={(p) => {
          const defaultModel = get(p, "defaultModel", get(p, "models.0"));

          return (
            <List.Item>
              <Card
                hoverable
                cover={
                  <Image
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
      />
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

const ProductGridInternal: ComponentConfig<ProductGridProps> = {
  fields: {
    xs: { type: "number", label: "Xs Columns", min: 1, max: 2 },
    sm: { type: "number", label: "Sm Columns", min: 1, max: 4 },
    md: { type: "number", label: "Md Columns", min: 1, max: 4 },
    lg: { type: "number", label: "Lg Columns", min: 1, max: 6 },
    xl: { type: "number", label: "Xl Columns", min: 1, max: 8 },
    xxl: { type: "number", label: "Xxl Columns", min: 1, max: 12 },
    limit: { type: "number", label: "Limit", min: 1, max: 20 },
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
    categoryId: undefined,
  },
  render: (props) => <ProductGridRender {...props} />,
};

export const ProductGrid = withLayout(ProductGridInternal);
