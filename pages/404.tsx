import { Center, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {};

function Custom404({}: Props) {
  return (
    <Center h="100vh">
      <Heading as="h2" textTransform="uppercase">
        404 Page Not Found
      </Heading>
    </Center>
  );
}

export default Custom404;
