import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

interface ArticleItemAuthorProps {
  date: Date;
  name: string;
}

const ArticleItemAuthor = (props: ArticleItemAuthorProps) => {
  return (
    <HStack marginTop="5" spacing="2" display="flex" alignItems="center">
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
  );
};

export default ArticleItemAuthor;
