import { Box, Text, HStack, Link } from "@yamada-ui/react";

export const Footer = () => {
  return (
    <Box
      as="footer"
      w="full"
      p={3}
      textAlign="center"
      borderTop="1px solid"
      borderColor="gray.300"
      _dark={{ borderColor: "gray.600", bg: "gray.900", color: "white" }}
    >
      <HStack justify="center" gap={4}>
        <Link href="https://github.com/mei28/jupyeek" isExternal>
          GitHub
        </Link>
      </HStack>
      <Text fontSize="sm" mt={2}>
        &copy; 2025 Jupyeek. All rights reserved.
      </Text>
    </Box>
  );
};
