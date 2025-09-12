"use client"

import {
  Combobox,
  HStack,
  Image,
  Portal,
  Span,
  Stack,
  useComboboxContext,
  useFilter,
  useListCollection,
} from "@chakra-ui/react"
import {listIcon,renderIcon} from "./IconConstant";
import {useState} from "react";

function ComboboxValue() {
  const combobox = useComboboxContext()
  console.log("combobox",combobox)
  const selectedItems = combobox.selectedItems as (typeof listIcon)[number][]
  return (
    <Stack mt="2">
      {selectedItems.map((item) => (
        <HStack key={item.value} textStyle="sm" p="1" borderWidth="1px">
          {renderIcon({iconName: item?.value})}
          <span>{item.label}</span>
        </HStack>
      ))}
    </Stack>
  )
}

interface IProps {
  value?:any,
  onChange?:any
}

const SelectIcon = (props: IProps) => {
  console.log("props",props)
  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: listIcon,
    filter: contains,
  })
  const [value, setValue] = useState<string[]>([])
  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      width="100%"
      placeholder=""
      openOnClick
      defaultValue={props?.value && props?.value?.split(",")}
      value={value}
      onValueChange={(e) => {
        console.log("e",e)
        if (props?.onChange) {
          props?.onChange(e.value.join(","))
        }
        setValue(e.value)
      }}
    >
      <Combobox.Label>Search and select icon</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input />

        <Combobox.IndicatorGroup>
          <Combobox.Trigger />
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No items found</Combobox.Empty>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {renderIcon({iconName: item?.value})}
                <Span flex="1">{item.label}</Span>
                <Combobox.ItemIndicator />
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}

export default SelectIcon;
