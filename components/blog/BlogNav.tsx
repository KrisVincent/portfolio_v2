"use client";

import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

export default function BlogNav() {
  return (
    <>
      <Box bg={useColorModeValue("gray.900", "gray.100")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"center"}>
          <Box>heremyas blog</Box>
        </Flex>
      </Box>
    </>
  );
}
