"use client";

import {
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import ArticleItemTag from "./ArticleItemTag";
import ArticleItemAuthor from "./ArticleItemAuthor";
import ArticleType from "../../types/articleType";

const ArticleItemPinnedCard = ({
  title,
  thumbnailSrc,
  author,
  tags,
  body,
  slug,
  datePublished,
  _id,
}: Omit<ArticleType, "isPinned">) => {
  return (
    <Box
      marginTop={{ base: "1", sm: "5" }}
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flex="1"
        marginRight={{ base: "0", lg: "12" }}
        position="relative"
        alignItems="center"
      >
        <Link as={NextLink} href={`/blog/${slug}`}>
          <Box
            // width={{ base: "100%", sm: "85%" }}
            width="100%"
            zIndex="2"
            // marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
            display={"flex"}
            justifyContent={"center"}
          >
            <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={thumbnailSrc}
                alt={title}
                objectFit="contain"
              />
            </Box>
          </Box>
        </Link>
        {/* <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "linear(teal 3px, transparent 1px)",
                "linear(teal 3px, transparent 1px)"
              )}
              backgroundSize="10px 20px"
              opacity=".2"
              height="100%"
            />
          </Box> */}
      </Box>

      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: "3", sm: "0" }}
      >
        <ArticleItemTag tags={tags} />
        <Link as={NextLink} href={`/blog/${slug}`}>
          <Box>
            <Heading marginTop="1">
              {/* <Text textDecoration="none" _hover={{ textDecoration: "none" }}> */}
              {title}
              {/* </Text> */}
            </Heading>
          </Box>
          <Box>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.200", "gray.700")}
              fontSize="lg"
            >
              {body[0]}
            </Text>
          </Box>
        </Link>
        <ArticleItemAuthor name={author} date={new Date(datePublished)} />
      </Box>
    </Box>
    // </Link>
  );
};

export default ArticleItemPinnedCard;
