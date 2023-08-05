import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SkillSet from "../../models/skill";

function SkillCard({ title, bgColor, imgSrc, skillBar }: SkillSet) {
  return (
    <Card
      direction="row"
      variant="outline"
      backgroundColor="transparent"
      overflow="hidden"
      border="none"
      justifyContent="space-between"
    >
      <Stack width="70%">
        <CardHeader>
          <Heading size="md" color="white">
            {title}
          </Heading>
        </CardHeader>
        <CardBody>{skillBar}</CardBody>
      </Stack>
      <Image
        objectFit="contain"
        src={imgSrc}
        maxW={{ base: "80px", sm: "120px" }}
        alt={title}
      />
    </Card>
  );
}

export default SkillCard;
