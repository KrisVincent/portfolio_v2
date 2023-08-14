import {
  Image,
  Box,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Link,
} from "@chakra-ui/react";
import React from "react";
import ArticleItemTag from "./ArticleItemTag";
import ArticleItemAuthor from "./ArticleItemAuthor";
import ArticleType from "../../types/articleType";

const ArticleItemCard = ({
  _id,
  title,
  thumbnailSrc,
  body,
  tags,
  datePublished,
  author,
  slug,
}: ArticleType) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Box w="100%">
        <Box borderRadius="lg" overflow="hidden">
          <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
            <Image
              transform="scale(1.0)"
              src={thumbnailSrc}
              alt="some text"
              objectFit="contain"
              width="100%"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
            />
          </Box>
        </Box>
        <Box marginTop={3}>
          <ArticleItemTag tags={tags} />
        </Box>
        <Heading fontSize="xl" marginTop="2">
          <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
            {title}
          </Text>
        </Heading>
        <Text as="p" fontSize="md" marginTop="2">
          {body[0]}
        </Text>

        <ArticleItemAuthor name={author} date={new Date(datePublished)} />
      </Box>
    </Link>
  );
};

export default ArticleItemCard;
