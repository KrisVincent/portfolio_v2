"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Collapse,
  Tag,
  Image,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { COLORS, NAVBAR_ITEMS } from "../enums";
import getKeyByValue from "../utils/getKeyByValue";

interface Props {
  children: String;
}

const Links = Object.keys(NAVBAR_ITEMS);

const NavLink = ({ active, value }) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        color: COLORS.Blue,
      }}
      color={NAVBAR_ITEMS[value] === active && COLORS.Blue}
      href={`/${NAVBAR_ITEMS[value].toLowerCase()}`}
    >
      {value}
    </Box>
  );
};

export default function Navbar({ active }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4}>
      <Flex h={"100px"} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          backgroundColor="transparent"
          color="white"
          _hover={{ color: COLORS.Blue }}
          _active={{ color: COLORS.Blue }}
        />
        <HStack spacing={8} alignItems={"center"}>
          {/* <Box>heremyas.com</Box> */}
          <Box pos={"relative"}>
            <Box
              display={"flex"}
              flexDir={"column"}
              pos={"absolute"}
              zIndex={1}
              top={"-20px"}
              right={"-8px"}
              height={"35px"}
              justifyContent={"end"}
              overflow={"hidden"}
              borderBottomWidth={"3px"}
              borderLeftWidth={"3px"}
              borderRightWidth={"3px"}
              borderColor={"#121212"}
              borderRadius={"xl"}
              borderStyle={"solid"}
            >
              <Box
                width={"45px"}
                pos={"absolute"}
                left={-1}
                // bottom={"20px"}
                top={-1}
                zIndex={-1}
              >
                <Image
                  src="https://media.tenor.com/X1ywH8zY6B0AAAAi/fire-lit.gif"
                  width={"47px"}
                  height={"20px"}
                />
              </Box>
              <Tag
                width="fit-content"
                size={"sm"}
                variant="solid"
                backgroundColor="#E53301"
                fontSize={"xx-small"}
                borderTopRadius={"none"}
              >
                NEW
              </Tag>
            </Box>
            <Link href="https://blog.heremyas.com">
              <Button
                border={"solid"}
                colorScheme="teal"
                backgroundColor={"transparent"}
              >
                Visit My Blog
              </Button>
            </Link>
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link} active={active} value={link} />
            ))}
          </HStack>
        </HStack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link} active={active} value={link} />
            ))}
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
}
