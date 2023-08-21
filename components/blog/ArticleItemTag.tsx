import { HStack, ResponsiveValue, Tag } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { Category } from "../../models";

interface Props {
  tags: Category[];
}

const ArticleItemTag = (props: Props) => {
  const { tags } = props;

  return (
    <HStack spacing={2} marginTop={{ base: 3, sm: 5 }}>
      {tags.map((tag) => {
        return (
          <Link key={tag.slug} href={`/blog/category/${tag.slug}`}>
            <Tag
              size={"md"}
              backgroundColor={"transparent"}
              color="teal"
              _hover={{ backgroundColor: "teal", color: "white" }}
            >
              {tag.title}
            </Tag>
          </Link>
        );
      })}
    </HStack>
  );
};

export default ArticleItemTag;
