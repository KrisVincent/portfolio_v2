import { HStack, ResponsiveValue, Tag } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

interface Props {
  tags: any[];
}

const ArticleItemTag = (props: Props) => {
  const { tags } = props;

  return (
    <HStack spacing={2} marginTop={{ base: 3, sm: 5 }}>
      {tags.map((tag) => {
        return (
          <Link href={"#"}>
            <Tag
              size={"md"}
              backgroundColor={"transparent"}
              color="teal"
              key={tag}
              _hover={{ backgroundColor: "teal", color: "white" }}
            >
              {tag}
            </Tag>
          </Link>
        );
      })}
    </HStack>
  );
};

export default ArticleItemTag;
