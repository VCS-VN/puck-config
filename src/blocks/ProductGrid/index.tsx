import { Row, Col, Card, Image, Pagination, Skeleton } from "antd";
import { ComponentConfig } from "@measured/puck";
import { withLayout } from "../../components/Layout";
import { Section } from "../../components/Section";
import { ErrorBoundary } from "react-error-boundary";
import { FC, useMemo, useState } from "react";
import { get, round } from "lodash";
import { useGetProductsQuery } from "../../hooks/products";

export type ProductGridProps = {
  columns: number;
  limit: number;
  categoryId?: string;
};

const ProductGridRender: FC<ProductGridProps> = ({
  columns,
  limit,
  categoryId,
}) => {
  // const store = useRecoilValue(CurrentStoreState);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetProductsQuery(
    {
      // storeSlug: store?.slug,
      isGettingModels: true,
      isGettingDefaultModel: true,
      limit,
      page,
      categoryId,
    }
    // { enabled: !!store?.slug }
  );

  const products = useMemo(() => data?.data || [], [data?.data]);

  const span = Math.max(1, Math.floor(24 / columns));

  return (
    <Section>
      a
      <Row gutter={16}>
        {isLoading
          ? Array.from({ length: limit }).map((_, i) => (
              <Col
                span={span}
                key={`skeleton-${i}`}
                style={{ marginBottom: 16 }}
              >
                <Card>
                  <Skeleton.Image style={{ width: "100%", height: 200 }} />
                  <Skeleton active paragraph={{ rows: 2 }} />
                </Card>
              </Col>
            ))
          : products.map((p: any) => {
              const defaultModel = get(p, "defaultModel", get(p, "models.0"));

              return (
                <Col span={span} key={p.id} style={{ marginBottom: 16 }}>
                  <Card
                    hoverable
                    cover={
                      <Image
                        src={p.image || "/no-product-image.png"}
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
                </Col>
              );
            })}
      </Row>
      <Pagination
        current={page}
        pageSize={limit}
        total={data?.total}
        onChange={(p) => setPage(p)}
        style={{ marginTop: 16, textAlign: "center" }}
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
    columns: { type: "number", label: "Columns", min: 1, max: 4 },
    limit: { type: "number", label: "Limit", min: 1, max: 20 },
    // categoryId: {
    //   type: "custom",
    //   label: "Category",
    //   render: (props) => <CategoryField {...props} />,
    // },
  },
  defaultProps: {
    columns: 3,
    limit: 6,
    categoryId: undefined,
  },
  render: (props) => <ProductGridRender {...props} />,
};

export const ProductGrid = withLayout(ProductGridInternal);
