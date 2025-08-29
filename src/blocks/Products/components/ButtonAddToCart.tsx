import {
  Drawer,
  Button,
  CloseButton,
  Portal,
  Card,
  CardBody,
  Image,
  Text,
  CardFooter,
} from "@chakra-ui/react";
import { get, round } from "lodash";
import ListModel from "@/blocks/Products/components/ListModel.tsx";
import { useEffect, useMemo, useState } from "react";
import { useGetProductDetailQuery } from "../../../hooks/products";
// import {toaster} from "@/components/ui/toaster"

interface IProps {
  product: any;
  keyAddToCart: string;
  openDrawer?: boolean;
  onCloseDrawer?: () => void;
  saveCartToStore?: (carts: any[]) => void;
}

const ButtonAddToCart = (props: IProps) => {
  const {
    product: data,
    keyAddToCart,
    openDrawer,
    saveCartToStore,
    onCloseDrawer,
  } = props;

  const { data: product } = useGetProductDetailQuery(
    data?.id,
    {
      storeId: data?.storeId,
      isGettingModels: true,
      isGettingDefaultModel: true,
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!data?.id,
    }
  );

  const [valueProduct, setValueProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedModel, setSelectedModel] = useState<any>(null);

  const onChangeDataProduct = (value: any) => {
    setValueProduct((prev: any) => {
      return {
        ...prev,
        ...value,
      };
    });
  };

  const onChangeQuantity = (value: any) => {
    setQuantity(value);
  };

  const selectedPrice = useMemo(() => {
    return selectedModel?.price || product?.defaultModel?.price || 0;
  }, [selectedModel?.price, product?.defaultModel?.price]);

  function addToCart() {
    const cart = JSON.parse(localStorage.getItem(keyAddToCart)) || [];

    const existing = cart.find((item: any) => item.id === valueProduct.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        ...valueProduct,
        quantity,
        // an bot 1 so truong
        defaultModel: null,
        defaultModelId: null,
        models: null,
      });
    }
    // console.log("cart", cart)
    if (saveCartToStore) {
      saveCartToStore(cart);
    }
    localStorage.setItem(keyAddToCart, JSON.stringify(cart));
    onCloseDrawer?.();
    // toaster.create({
    //     title: `Add to cart success`,
    //     type: "success",
    //     overlap: true,
    // })
  }

  // useEffect(()=>{
  //   if()
  // },[])

  useEffect(() => {
    setValueProduct({
      ...product,
      price: product?.defaultModel?.price ?? product?.price ?? 0,
    });
    if (product?.models?.length === 1) {
      setSelectedModel(product?.models?.[0]);
    }
  }, [props?.product]);

  return (
    <>
      <Drawer.Root
        placement={"bottom"}
        open={openDrawer}
        onOpenChange={({ open }) => {
          if (!open) {
            onCloseDrawer?.();
          }
        }}
        // onExitComplete={() => {
        //   setOpenDrawer(false);
        // }}
      >
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content roundedTop={"l3"} roundedBottom={undefined}>
              <Drawer.Header>
                <Drawer.Title>{valueProduct?.name}</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                {valueProduct && (
                  <Card.Root variant="outline">
                    <CardBody>
                      <Image
                        border="1px solid red"
                        src={
                          valueProduct?.image ||
                          "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg"
                        }
                        alt={valueProduct?.name}
                        borderRadius="md"
                        h="100px"
                        w="100px"
                        fit="contain"
                      />
                      <Card.Title>{valueProduct?.name}</Card.Title>
                      <div className="mb-2">
                        <Text
                          textStyle="2xl"
                          fontWeight="medium"
                          letterSpacing="tight"
                          mt="2"
                        >
                          ${`${round(selectedPrice / 100, 0)}`}
                        </Text>
                      </div>

                      <ListModel
                        models={valueProduct?.models}
                        productId={valueProduct?.defaultModelId}
                        onChangeDataProduct={onChangeDataProduct}
                        onChangeQuantity={onChangeQuantity}
                        onSelectModel={(e) => {
                          setSelectedModel(e);
                        }}
                      />
                    </CardBody>
                  </Card.Root>
                )}
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Drawer.ActionTrigger>
                <Button
                  colorPalette={"orange"}
                  onClick={() => {
                    addToCart();
                  }}
                >
                  Add to cart
                </Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
};

export default ButtonAddToCart;
