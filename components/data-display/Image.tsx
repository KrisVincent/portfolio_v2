import React from "react";
import {
  Image as ChakraImage,
  ChakraProps,
  ImageProps,
} from "@chakra-ui/react";

const Image = (params: ImageProps) => {
  const { ...other } = params;

  return <ChakraImage objectFit={"contain"} {...other} />;
};

export default Image;
