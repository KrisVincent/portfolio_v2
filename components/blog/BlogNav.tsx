"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { isEmpty } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";

import { FiArrowLeft } from "react-icons/fi";

export default function BlogNav() {
  const router = useRouter();
  const isInBlogPage = isEmpty(router.query) && router.route === "/blog";

  return (
    <>
      <Box bg={useColorModeValue("gray.900", "gray.100")} px={4}>
        <Container
          maxW={"container.md"}
          paddingLeft={{ base: "0", lg: "16px" }}
          paddingRight={{ base: "0", lg: "16px" }}
        >
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={!isInBlogPage ? "space-between" : "center"}
          >
            {!isInBlogPage && (
              <Link href="/blog">
                <Button
                  bg="teal"
                  color={"white"}
                  onClick={() => {}}
                  fontSize={"sm"}
                >
                  <FiArrowLeft />
                  &nbsp;Back To The Stories
                </Button>
              </Link>
            )}
            <Box>heremyas blog</Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
