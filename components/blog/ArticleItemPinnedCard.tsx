import {
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import React from "react";
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
    <Link href={`/blog/${slug}`}>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="12"
          position="relative"
          alignItems="center"
        >
          <Box
            // width={{ base: "100%", sm: "85%" }}
            width="100%"
            zIndex="2"
            // marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
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
          {/* <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              "radial(orange.600 1px, transparent 1px)",
              "radial(orange.300 1px, transparent 1px)"
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
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
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              {title}
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.200", "gray.700")}
            fontSize="lg"
          >
            {body[0]}
          </Text>
          <ArticleItemAuthor name={author} date={new Date(datePublished)} />
        </Box>
      </Box>
    </Link>
  );
};

export default ArticleItemPinnedCard;
