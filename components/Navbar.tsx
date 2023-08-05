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
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
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
          <Box>heremyas.com</Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link} active={active} value={link} />
            ))}
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link} active={active} value={link} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
