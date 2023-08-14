"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";

import { FiArrowLeft } from "react-icons/fi";

export default function BlogNav() {
  const router = useRouter();
  const isInBlogPage = isEmpty(router.query) && router.route === "/blog";

  return (
    <>
      <Box bg={useColorModeValue("gray.900", "gray.100")} px={4}>
        <Container maxW={"container.md"}>
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={!isInBlogPage ? "space-between" : "center"}
          >
            {!isInBlogPage && (
              <Button
                bg="teal"
                color={"white"}
                onClick={() => router.push("/blog")}
              >
                <FiArrowLeft />
                &nbsp;Back To The Stories
              </Button>
            )}
            <Box>heremyas blog</Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
