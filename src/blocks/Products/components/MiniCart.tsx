import { useEffect, useState } from "react";
import { Drawer, Button, Portal, Card, CardBody, Image, Text, CardFooter, Flex, Box } from "@chakra-ui/react";
import { round } from "lodash";

type Props = {
  open: boolean;
  onClose: () => void;
  keyAddToCart: string;
};

const MiniCart = ({ open, onClose, keyAddToCart }: Props) => {
  const [items, setItems] = useState<any[]>([]);

  const load = () => {
    try {
      const cart = JSON.parse(localStorage.getItem(keyAddToCart) || "[]");
      setItems(Array.isArray(cart) ? cart : []);
    } catch {
      setItems([]);
    }
  };

  useEffect(() => {
    if (open) load();
  }, [open]);

  const subTotal = () => {
    return items.reduce((acc, it) => {
      const cents = Number(it?.model?.price ?? it?.price ?? 0);
      const qty = Number(it?.quantity ?? 1);
      return acc + cents * qty;
    }, 0);
  };

  return (
    <Drawer.Root placement="right" open={open} onOpenChange={({ open }) => { if (!open) onClose(); }}>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content w={{ base: "100%", md: "420px" }}>
            <Drawer.Header>
              <Drawer.Title>Cart</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Flex direction="column" gap={3}>
                {items.length === 0 ? (
                  <Text color="gray.600">Your cart is empty.</Text>
                ) : (
                  items.map((it, idx) => (
                    <Card.Root key={idx} variant="subtle">
                      <CardBody>
                        <Flex gap={3} align="center">
                          <Image src={it?.image || "https://image-cdn.episcloud.com/01K3FWBPKYKTP161HMFH6DX420.jpeg"} alt={it?.name} h="60px" w="60px" borderRadius="md" />
                          <Box>
                            <Text fontWeight="medium">{it?.name}</Text>
                            {it?.model?.name ? (<Text fontSize="sm" color="gray.600">{it.model.name}</Text>) : null}
                            <Text fontSize="sm" color="gray.600">Qty: {it?.quantity}</Text>
                          </Box>
                          <Box marginLeft="auto">
                            <Text fontWeight="semibold">${round(((it?.model?.price ?? it?.price ?? 0) as number)/100, 0)}</Text>
                          </Box>
                        </Flex>
                      </CardBody>
                    </Card.Root>
                  ))
                )}
              </Flex>
            </Drawer.Body>
            <Drawer.Footer>
              <Flex direction="column" w="100%" gap={3}>
                <Flex justify="space-between">
                  <Text color="gray.600">Subtotal</Text>
                  <Text fontWeight="semibold">${round(subTotal()/100, 0)}</Text>
                </Flex>
                <Flex gap={2}>
                  <Button variant="outline" onClick={onClose} flex={1}>Continue shopping</Button>
                  <Button colorPalette="orange" onClick={onClose} flex={1}>Checkout</Button>
                </Flex>
              </Flex>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default MiniCart;

