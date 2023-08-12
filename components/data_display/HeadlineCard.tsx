import React, { CSSProperties, ReactElement } from "react";
import { TypewriterEffect } from "../TypeWriterEffect";
import { Card, CardBody, CardProps as BaseCardProps } from "@chakra-ui/react";

interface CardProps extends BaseCardProps {
  children: JSX.Element[];
  animationSpeed?: number;
}

function HeadlineCard({ animationSpeed, children, ...style }: CardProps) {
  return (
    <Card
      {...style}
      w={{ lg: "50%" }}
      position="absolute"
      top="30%"
      textAlign="left"
      textTransform="uppercase"
      backgroundColor="none"
      color="white"
    >
      <CardBody>
        <TypewriterEffect animationSpeed={animationSpeed}>
          {children}
        </TypewriterEffect>
      </CardBody>
    </Card>
  );
}

export default HeadlineCard;
