"use client"

import {
  Combobox,
  HStack, Image,
  Portal,
  Span,
  Spinner,
  useListCollection,
} from "@chakra-ui/react"
import {useEffect, useMemo, useState} from "react"
import {useGetProductsQuery} from "../../../hooks/products";
import {LuSearch} from "react-icons/lu";
import {debounce} from "lodash";

const SearchInput = ({
                       puck,
                       placeholder,
                       setSelectedProduct
                     }) => {
  const [inputValue, setInputValue] = useState("")

  const { collection, set } = useListCollection<any>({
    initialItems: [],
    itemToString: (item) => item.name,
    itemToValue: (item) => item.id,
  })
  const { data: products, isLoading } = useGetProductsQuery(
    {
      storeId: puck?.metadata?.entityId,
      query: inputValue,
      limit: 10,
      page: 1,
      isGettingModels: true,
      isGettingDefaultModel: true,
    },
    { keepPreviousData: true }
  );

  useEffect(() => {
    console.log("products",products)
    set(products?.data || [])
  }, [products]);

  const debouncedSetValue = useMemo(
    () =>
      debounce((value: string) => {
        // console.log("value",value)
        setInputValue(value);
      }, 800),
    []
  );
  return (
    <Combobox.Root
      width="320px"
      collection={collection}
      placeholder="Example: C-3PO"
      onInputValueChange={(e) => debouncedSetValue(e.inputValue)}
      positioning={{ sameWidth: false, placement: "bottom-start" }}
      border={"none"}
    >
      {/*<Combobox.Label>Search Star Wars Characters</Combobox.Label>*/}

      <Combobox.Control style={{
        border: "none",
      }}>
        <Combobox.Input  style={{
          border: "none",
          "--focus-ring-style": "none"
        }} placeholder={placeholder || "Search"} />
        <Combobox.IndicatorGroup>
          <Combobox.ClearTrigger />
          <Combobox.Trigger>
            <LuSearch/>
          </Combobox.Trigger>
        </Combobox.IndicatorGroup>
      </Combobox.Control>

      <Portal>
        <Combobox.Positioner>
          <Combobox.Content minW="sm">
            {isLoading ? (
              <HStack p="2">
                <Spinner size="xs" borderWidth="1px" />
                <Span>Loading...</Span>
              </HStack>
            ) : (
              collection.items?.map((item) => (
                <Combobox.Item
                  key={item.id}
                  item={item}
                  onClick={(e) => {
                    if (setSelectedProduct) {
                      setSelectedProduct(item)
                    }
                  }}
                >
                  <HStack justify="space-between" textStyle="sm">
                    <Image
                      src={
                        item.image ||
                        "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg"
                      }
                      alt={item.name}
                      borderRadius="md"
                      width={"20px"}
                      height={'20px'}
                    />
                    <Span fontWeight="medium" truncate>
                      {item.name}
                    </Span>
                  </HStack>
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              ))
            )}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}


export default SearchInput
