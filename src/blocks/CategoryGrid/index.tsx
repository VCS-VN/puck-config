import { ComponentConfig } from "@measured/puck";
import { withLayout } from "../../components/Layout";
import { Section } from "../../components/Section";
import { ErrorBoundary } from "react-error-boundary";
import { FC } from "react";

export type CategoryGridProps = {
  limit: number;
  depth: number;
};

const flattenCategories = (
  nodes: any[] = [],
  depth: number,
  current = 1
): any[] => {
  if (current > depth) return [];
  return nodes.flatMap((n: any) => [
    n,
    ...flattenCategories(n.children || [], depth, current + 1),
  ]);
};

const CategoryGridRender: FC<CategoryGridProps> = ({ limit, depth }) => {
  // const store = useRecoilValue(CurrentStoreState);
  // const { data, isLoading } = useGetCategoryTreeQuery(
  //   { storeSlug: store?.slug },
  //   { enabled: !!store?.slug }
  // );

  // const categories = flattenCategories(data?.data || [], depth).slice(0, limit);
  // const span = 8; // three columns

  return (
    <Section>
      <></>
      {/* <Row gutter={16}>
        {isLoading
          ? Array.from({ length: limit }).map((_, i) => (
              <Col
                span={span}
                key={`cat-skeleton-${i}`}
                style={{ marginBottom: 16 }}
              >
                <Card>
                  <Skeleton active title={true} paragraph={false} />
                </Card>
              </Col>
            ))
          : categories.map((c: any) => (
              <Col span={span} key={c.id} style={{ marginBottom: 16 }}>
                <Card hoverable>{c.name}</Card>
              </Col>
            ))}
      </Row> */}
    </Section>
  );
};

const CategoryGridInternal: ComponentConfig<CategoryGridProps> = {
  fields: {
    limit: { type: "number", label: "Limit", min: 1, max: 20 },
    depth: { type: "number", label: "Depth", min: 1, max: 5 },
  },
  defaultProps: {
    limit: 6,
    depth: 1,
  },
  render: (props) => (
    <ErrorBoundary fallbackRender={() => <div>Unable to load categories.</div>}>
      <CategoryGridRender {...props} />
    </ErrorBoundary>
  ),
};

export const CategoryGrid = withLayout(CategoryGridInternal);
