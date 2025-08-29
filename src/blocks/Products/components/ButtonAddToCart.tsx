import {
    Drawer,
    Button,
    CloseButton,
    Portal, Card, CardBody, Image, Text, CardFooter
} from "@chakra-ui/react";
import {get, round} from "lodash";
import ListModel from "@/blocks/Products/components/ListModel.tsx";
import {useEffect, useState} from "react";
// import {toaster} from "@/components/ui/toaster"

interface IProps {
    product: any,
    keyAddToCart: string,
    saveCartToStore?: (carts:any[]) => void
}

const ButtonAddToCart = (props: IProps) => {
    const {product,keyAddToCart,saveCartToStore} = props

    const [valueProduct, setValueProduct] = useState<any>(null)
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)
    const [quantity, setQuantity] = useState<number>(1)

    useEffect(() => {
        setValueProduct({
            ...product,
            price: product?.defaultModel?.price ?? product.price ?? 0
        })
    }, [props?.product]);
    const onChangeDataProduct = (value: any) => {
        setValueProduct((prev: any) => {
            return {
                ...prev,
                ...value,
            }
        })
    }
    const onChangeQuantity = (value: any) => {
        setQuantity(value)
    }
    const defaultModel = (value: any) => {
        return get(
            value,
            "defaultModel",
            get(value, "models.0")
        )
    }

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
        console.log("cart", cart)
        if (saveCartToStore) {
            saveCartToStore(cart)
        }
        localStorage.setItem( keyAddToCart, JSON.stringify(cart));
        setOpenDrawer(false)
        // toaster.create({
        //     title: `Add to cart success`,
        //     type: "success",
        //     overlap: true,
        // })
    }

    return <>
        <Drawer.Root
            placement={'bottom'}
            open={openDrawer}
            onOpenChange={() => {
                setOpenDrawer(!openDrawer)
            }}
        >
            <Drawer.Trigger asChild>
                <Button colorPalette={'orange'}>Add to cart</Button>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop/>
                <Drawer.Positioner>
                    <Drawer.Content
                        roundedTop={"l3"}
                        roundedBottom={undefined}
                    >
                        <Drawer.Header>
                            <Drawer.Title>{valueProduct?.name}</Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                            {valueProduct &&
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
                                  <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                    $
                                      {`${round(
                                          (defaultModel(valueProduct)?.price ?? valueProduct?.price ?? 0) / 100,
                                          0
                                      )}`}
                                  </Text>

                                  <ListModel
                                    models={valueProduct?.models}
                                    productId={valueProduct?.defaultModelId}
                                    onChangeDataProduct={onChangeDataProduct}
                                    onChangeQuantity={onChangeQuantity}
                                  ></ListModel>
                                </CardBody>
                              </Card.Root>
                            }

                        </Drawer.Body>
                        <Drawer.Footer>
                            <Drawer.ActionTrigger asChild>
                                <Button variant="outline">Cancel</Button>
                            </Drawer.ActionTrigger>
                            <Button colorPalette={'orange'} onClick={() => {
                                addToCart()
                            }}>Add to cart</Button>


                        </Drawer.Footer>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm"/>
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    </>
}

export default ButtonAddToCart;
