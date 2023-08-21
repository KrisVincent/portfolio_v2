"use client";

import { HStack, Image, Text, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

interface ArticleItemAuthorProps {
  date: Date;
  name: string;
}

const ArticleItemAuthor = (props: ArticleItemAuthorProps) => {
  return (
    <Link
      as={NextLink}
      href={"/blog/heremyas"}
      cursor={"pointer"}
      legacyBehavior
    >
      <HStack
        marginTop="5"
        spacing="2"
        display="flex"
        alignItems="center"
        padding="5px"
        _hover={{
          backgroundColor: "rgb(0,128,128, 0.1)",
          borderRadius: "25px",
          padding: "5px",
          paddingRight: "8px",
        }}
        w={"fit-content"}
      >
        <Image
          borderRadius="full"
          boxSize="40px"
          src="https://yt3.googleusercontent.com/ytc/AOPolaQsyQX3MhZS9GYaRt1aMbcDMgSZdJNWY9NKTJckeA=s176-c-k-c0x00ffffff-no-rj"
          alt={`Avatar of ${props.name}`}
        />
        <Text fontWeight="medium">{props.name}</Text>
        <Text>•</Text>
        <Text>{props.date.toLocaleDateString()}</Text>
      </HStack>
    </Link>
  );
};

export default ArticleItemAuthor;
