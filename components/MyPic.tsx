import React from "react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

function MyPic() {
  return (
    <Box overflow={"hidden"} pos={"relative"} h={"92vh"} zIndex={"-1"}>
      <Image
        alt="heremyas | Jeremiah Valencia"
        src="/assets/images/heremyas.png"
        objectFit={"contain"}
        pos={"absolute"}
        h={"100%"}
        right={0}
        display={{ base: "none", lg: "block" }}
      />
    </Box>
  );
}

export default MyPic;
