import React from "react";
import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";

type Props = {};

function MyPicMini({}: Props) {
  return (
    <Box
      height="250px"
      width="100vw"
      justifyContent="center"
      padding="20px"
      alignItems="center"
      display={{ base: "flex", lg: "none" }}
    >
      <Box
        overflow="hidden"
        width="200px"
        border="1px solid black"
        backgroundColor="white"
        borderRadius="20%"
      >
        <Image
          style={{ transform: "translateY(40px) scale(1.3)" }}
          width={200}
          height={200}
          src="/assets/images/heremyas.png"
          alt="Alternative picture "
        />
      </Box>
      <Box>
        <UnorderedList>
          <ListItem>
            <Text>
              Age: <span style={{ color: "#00c2cb" }}>23 Years Old</span>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Civil Status: <span style={{ color: "#00c2cb" }}>Single</span>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Blood Type: <span style={{ color: "#00c2cb" }}>C++</span>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Spaces or Tabs? <span style={{ color: "#00c2cb" }}>Tabs</span>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Vim or Emacs? <span style={{ color: "#00c2cb" }}>Vim</span>
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}

export default MyPicMini;
