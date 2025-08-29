import {HStack, Image, IconButton, RadioCard, NumberInput} from "@chakra-ui/react"
import {LuMinus, LuPlus} from "react-icons/lu"
import {useEffect, useState} from "react"

interface IProps {
    models: any[],
    productId: string,
    onChangeDataProduct?: (modelItem: any) => void,
    onChangeQuantity?: (quantity: any) => void,
}

const ListModel = (props: IProps) => {
    const {
        models,
        productId,
        onChangeDataProduct,
        onChangeQuantity
    } = props
    let styleConfig: any = {
        "--chakra-spacing-4": "4px"
    }
    const [value, setValue] = useState("")
    const [quantity, setQuantity] = useState<number>(1)
    useEffect(() => {
        setValue(productId)
    }, [productId]);
    const onChangeProduct = (modelId: string) => {
        setValue(modelId)
        let modelItem = models.find((model) => model.id === modelId)
        if (modelItem && onChangeDataProduct) {
            onChangeDataProduct(modelItem)
        }
    }
    return <>
        <RadioCard.Root
            orientation="horizontal"
            align="center"
            justify="center"
            maxW="sm"
            style={styleConfig}
            defaultValue={productId}
            value={value}
            onValueChange={(e: any) => {
                onChangeProduct(e.value)
            }}
        >
            <HStack align="stretch">
                {models && models.map((item: any) => (
                    <RadioCard.Item key={item.id} value={item.id}>
                        <RadioCard.ItemHiddenInput/>
                        <RadioCard.ItemControl
                        >
                            <Image
                                src={
                                    item.image ||
                                    "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg"
                                }
                                alt={item.name}
                                borderRadius="md"
                                h="50px"
                                w="50px"
                                fit="contain"
                            />
                            <RadioCard.ItemText ms="-4">{item.name}</RadioCard.ItemText>
                        </RadioCard.ItemControl>
                    </RadioCard.Item>
                ))}
            </HStack>
        </RadioCard.Root>
        <div className={"mt-2 flex justify-between items-center"}>
            <div>
                Quantity
            </div>
            <div>
                <NumberInput.Root defaultValue="1" unstyled spinOnPress={false}
                                  onValueChange={(e: any) => {
                                      if (e?.valueAsNumber >= 0) {
                                          setQuantity(e?.valueAsNumber)
                                          if (onChangeQuantity) {
                                              onChangeQuantity(e?.valueAsNumber)
                                          }
                                      }
                                  }}>
                    <HStack gap="2">
                        <NumberInput.DecrementTrigger asChild disabled={quantity === 0}>
                            <IconButton variant="outline" size="sm">
                                <LuMinus/>
                            </IconButton>
                        </NumberInput.DecrementTrigger>
                        <NumberInput.ValueText textAlign="center" fontSize="lg" minW="3ch"/>
                        <NumberInput.IncrementTrigger asChild>
                            <IconButton variant="outline" size="sm">
                                <LuPlus/>
                            </IconButton>
                        </NumberInput.IncrementTrigger>
                    </HStack>
                </NumberInput.Root>
            </div>
        </div>

    </>
}

export default ListModel
