import { Card, Image, Select, Skeleton } from "antd";
import { ComponentConfig } from "@measured/puck";
import { withLayout } from "../../components/Layout";
import { Section } from "../../components/Section";
import { ErrorBoundary } from "react-error-boundary";
import { FC, useState } from "react";
import { useGetProductDetailQuery } from "../../hooks/products";

export type ProductCardProps = {
  productId?: string;
  showVariantSelector?: boolean;
};

const ProductCardRender: FC<ProductCardProps> = ({
  productId,
  showVariantSelector,
}) => {
  // const store = useRecoilValue(CurrentStoreState);
  const { data: product, isLoading } = useGetProductDetailQuery(
    productId || "",
    {
      // storeSlug: store?.slug,
      isGettingModels: true,
      isGettingDefaultModel: true,
    },
    {
      enabled: !!productId,
    }
  );

  if (isLoading || !product) {
    return (
      <Card style={{ width: 240 }}>
        <Skeleton.Image style={{ width: "100%", height: 200 }} />
        <Skeleton active paragraph={{ rows: 2 }} />
      </Card>
    );
  }

  const defaultModel = (product as any)?.models?.find((m: any) => m.isDefault);
  const [model, setModel] = useState<any>(defaultModel);
  const price = model?.price ?? product.price ?? 0;

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <Image
          src={product.image || "/no-product-image.png"}
          alt={product.name}
          preview={false}
        />
      }
    >
      {showVariantSelector && (product as any)?.models?.length > 1 && (
        <Select
          value={model?.id}
          onChange={(id) => {
            const m = (product as any)?.models?.find((mm: any) => mm.id === id);
            setModel(m);
          }}
          style={{ width: "100%", marginBottom: 8 }}
        >
          {(product as any)?.models?.map((m: any) => (
            <Select.Option value={m.id} key={m.id}>
              {m.name}
            </Select.Option>
          ))}
        </Select>
      )}
      <Card.Meta title={product.name} description={`${price} ₫`} />
    </Card>
  );
};

const ProductCardInternal: ComponentConfig<ProductCardProps> = {
  fields: {
    productId: { type: "text", label: "Product ID" },
    showVariantSelector: {
      type: "radio",
      label: "Show Variant Selector",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
  },
  defaultProps: {
    productId: "",
    showVariantSelector: false,
  },
  render: (props) => (
    <Section>
      <ErrorBoundary fallbackRender={() => <div>Unable to load product.</div>}>
        <ProductCardRender {...props} />
      </ErrorBoundary>
    </Section>
  ),
};

export const ProductCard = withLayout(ProductCardInternal);
