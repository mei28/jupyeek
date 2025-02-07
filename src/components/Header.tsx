import { HStack, Heading, Spacer, Button, useColorMode } from "@yamada-ui/react";
import { Sun, Moon } from "@yamada-ui/lucide";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      as="header"
      w="full"
      p={4}
      borderBottom="1px solid"
      borderColor="gray.300"
      _dark={{ borderColor: "gray.600", bg: "gray.900", color: "white" }}
    >
      <Heading size="lg">Jupyeek</Heading>
      <Spacer />
      <Button onClick={toggleColorMode} variant="ghost">
        {colorMode === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </Button>
    </HStack>
  );
};
