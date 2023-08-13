import { HStack, ResponsiveValue, Tag } from "@chakra-ui/react";
import React from "react";

interface Props {
  tags: any[];
}

const ArticleItemTag = (props: Props) => {
  const { tags } = props;

  return (
    <HStack spacing={2}>
      {tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="teal" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export default ArticleItemTag;
