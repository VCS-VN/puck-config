import { type ComponentConfig } from "@measured/puck";
import { withLayout } from "../../components/Layout";
import { type FC, useEffect, useMemo, useRef, useState } from "react";
import { round } from "lodash";
import {
  Image,
  Text,
  Box,
  Button,
  Table,
  NumberInput,
  Card,
  DataList,
  Input,
  Link,
  Badge,
} from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ProductionState } from "@/services/common/production.state.ts";
import _ from "lodash";
import { LuExternalLink, LuTrash2 } from "react-icons/lu";
import { useCreateSessionCart, useProcessToCheckout } from "../../hooks/carts";
import { ISessionCart } from "../../services/sale/cart/cart.type";
import { diffTime } from "../CommonFunction/function";

export type CheckoutProps = {
  limit: number;
  categoryId?: string;
  // searchSize: SizeType;
  storeId?: string;
  variableName?: string;
  noResultsText?: string;
  urlToProduct?: string;
};

export const CheckoutRender: FC<CheckoutProps> = ({
  limit,
  categoryId,
  // searchSize,
  storeId,
  variableName,
  noResultsText,
  urlToProduct,
}) => {
  // const store = useRecoilValue(CurrentStoreState);
  // const variables = useRecoilValue(VariableState);
  const [productionState, setProductionState] = useRecoilState(ProductionState);
  const [listProduct, setListProduct] = useState<any>([]);
  const keyAddToCart: string = "productCart";
  const keySessionCart: string = "sessionCart";
  const cartSession = useRef<ISessionCart>(
    JSON.parse(localStorage.getItem(keySessionCart)) || {}
  );

  const onCreateSessionCart = useCreateSessionCart({
    onSuccess: (data: any) => {
      if (data) {
        cartSession.current = data;
        localStorage.setItem(keySessionCart, JSON.stringify(data));
      }
    },
  });
  const getSessionCart = () => {
    if (
      cartSession.current?.id &&
      cartSession.current?.expiredAt &&
      diffTime(cartSession.current?.expiredAt) > 0
    ) {
    } else {
      onCreateSessionCart.mutate();
    }
  };
  useEffect(() => {
    getSessionCart();
  }, []);

  const getProductionCart = () => {
    if (productionState && productionState?.[keyAddToCart]) {
      setListProduct(productionState?.[keyAddToCart] || []);
      return;
    }
    if (!productionState?.[keyAddToCart]) {
      try {
        const cart = JSON.parse(localStorage.getItem(keyAddToCart)) || [];
        if (cart?.length > 0) {
          saveCartToStore(cart);
        }
      } catch (e) {
        // console.log("e", e)
      }
    }
  };
  useEffect(() => {
    getProductionCart();
  }, [productionState]);

  const saveCartToStore = (carts: any[]) => {
    localStorage.setItem(keyAddToCart, JSON.stringify(carts || []));
    setProductionState({ ...productionState, [keyAddToCart]: carts || [] });
  };

  const onChangeQuantity = (value: any, index: number) => {
    if (value >= 0) {
      let newListProducts = _.cloneDeep(listProduct);
      newListProducts[index].quantity = value;
      saveCartToStore(newListProducts);
    }
  };

  const subTotal = () => {
    let total = 0;
    listProduct.forEach((item: any) => {
      let subTotalItem = round(
        Number((item?.model?.price ?? 0) / 100) * Number(item.quantity),
        0
      );
      total += subTotalItem;
    });
    return total;
  };
  const removeItem = (indexItem: any) => {
    let newListProducts = _.cloneDeep(listProduct);
    newListProducts = newListProducts.filter(
      (_: any, index: number) => index !== indexItem
    );
    saveCartToStore(newListProducts);
  };
  const onProcessToCheckout = useProcessToCheckout({
    onSuccess: (data: any) => {
      if (data?.url) {
        window.location.href = data?.url;
      }
    },
  });

  const mutateProcessToCheckout = () => {
    let payload: any = {
      id: cartSession.current?.id,
      body: {
        products: listProduct,
      },
    };
    onProcessToCheckout.mutate(payload);
  };
  const handleProcessToCheckout = async () => {
    if (
      cartSession.current?.expiredAt &&
      diffTime(cartSession.current?.expiredAt) > 0
    ) {
      mutateProcessToCheckout();
    } else {
      await onCreateSessionCart.mutateAsync();
      mutateProcessToCheckout();
    }
  };

  if (!listProduct?.length) {
    return (
      <Box>
        <div className={"w-full flex flex-col justify-center items-center"}>
          <Text>{noResultsText || "No results found"}</Text>
          {urlToProduct && (
            <Link
              variant="underline"
              colorPalette={"blue"}
              href={`${urlToProduct}`}
            >
              Visit products now
              <LuExternalLink />
            </Link>
          )}
        </div>
      </Box>
    );
  }

  return (
    <div>
      <Table.Root size="sm">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Product</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
            <Table.ColumnHeader>Quantity</Table.ColumnHeader>
            <Table.ColumnHeader>Subtotal</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end"></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {listProduct.map((item: any, index: number) => (
            <Table.Row key={index}>
              <Table.Cell>
                <div className={"flex items-center gap-1 w-full"}>
                  <Image
                    src={
                      item.image ||
                      "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg"
                    }
                    width={"50px"}
                    height={"50px"}
                    alt={item.name}
                    borderRadius="md"
                  />
                  <div>
                    <div>
                      <span>{item?.name}</span>
                    </div>
                    <div>
                      <Badge colorPalette="purple">{item?.model?.name}</Badge>
                    </div>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                ${`${round((item?.model?.price ?? 0) / 100, 0)}`}
              </Table.Cell>
              <Table.Cell>
                <NumberInput.Root
                  style={{
                    width: "72px",
                  }}
                  value={item.quantity}
                  onValueChange={(e: any) => {
                    onChangeQuantity(e?.valueAsNumber, index);
                  }}
                >
                  <NumberInput.Control />
                  <NumberInput.Input />
                </NumberInput.Root>
              </Table.Cell>
              <Table.Cell>
                $
                {`${round(
                  Number((item?.model?.price ?? 0) / 100) *
                    Number(item.quantity),
                  0
                )}`}
              </Table.Cell>
              <Table.Cell>
                <LuTrash2
                  className={"cursor-pointer"}
                  onClick={() => {
                    removeItem(index);
                  }}
                ></LuTrash2>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <div className={"flex justify-center mt-10 mb-2 px-2"}>
        {/*<Button variant="outline">Return To Shop</Button>*/}

        <div>
          <Card.Root width="320px">
            <Card.Body gap="2">
              <Card.Title mt="2">Cart total</Card.Title>
              <Card.Description>
                <DataList.Root orientation="horizontal" divideY="1px" maxW="md">
                  <DataList.Item pt="4">
                    <DataList.ItemLabel>SubTotal</DataList.ItemLabel>
                    <DataList.ItemValue className={"justify-end"}>
                      ${subTotal()}
                    </DataList.ItemValue>
                  </DataList.Item>
                </DataList.Root>
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="center">
              <Button
                onClick={() => {
                  handleProcessToCheckout().then();
                }}
                colorPalette={"red"}
              >
                Process to checkout
              </Button>
            </Card.Footer>
          </Card.Root>
        </div>
      </div>
    </div>
  );
};

const CartInternal: ComponentConfig = {
  label: "Cart",
  fields: {
    // mobile: {type: "number", label: "Mobile (base)", min: 1, max: 2},
    // tablet: {type: "number", label: "Tablet", min: 1, max: 4},
    // desktop: {type: "number", label: "Desktop", min: 1, max: 6},
    // limit: {type: "number", label: "Limit", min: 1, max: 20},
    variableName: {
      type: "text",
      label: "Variable Name to Use",
    },
    noResultsText: { type: "text", label: "No Results Message" },
    urlToProduct: { type: "text", label: "Url to product" },
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
    // mobile: 2,
    // tablet: 4,
    // desktop: 4,
    // limit: 10,
    categoryId: undefined,
    noResultsText: "No Results",
    variableName: undefined,
    urlToProduct: undefined,
  },
  render: ({
    puck,
    limit,
    noResultsText,
    urlToProduct,
    categoryId,
    variableName,
  }) => {
    return (
      <CheckoutRender
        categoryId={categoryId}
        variableName={variableName}
        limit={limit}
        noResultsText={noResultsText}
        urlToProduct={urlToProduct}
        storeId={puck?.metadata?.storeId}
      />
    );
  },
};

export const Cart = withLayout(CartInternal);
