import React from "react";
import BlogNav from "../../components/blog/BlogNav";
import { Head } from "../../components";
import {
  Box,
  Image,
  Heading as ChakraHeading,
  Center,
  Container,
  Button,
  Link,
  Text,
  VStack,
  Divider,
} from "@chakra-ui/react";

type Props = {};

const More = () => {
  return (
    <Container id="more">
      <Center>
        <VStack>
          <Text>
            Jeremiah Valencia believes that anything is possible as long as you
            put the hardest work and you show up everyday into something. Life
            is VERY difficult for him so he chose to 10x his effort, delay all
            the gratifications, refuse the bad habits to get everything he wants
            and needs in life.
          </Text>
          <br />
          <Text as={"cite"}>
            {
              "`Life is unfair. But we have plenty of time to change everything we don't like, to chase anything we desire, and to turn every dreams into reality.`"
            }
          </Text>
          <br />
          <Text as={"cite"}>
            {
              "`The more na mahirap ang isang bagay the more effort and work it requires. I didn't just made it, it's the reality. Kaya WORK HARDER.`"
            }
          </Text>
          <br />
          <Text as={"cite"}>
            {"`Ang bagay na madali, naging mahirap sa umpisa.`"}
          </Text>
          <br />
          <Text as={"cite"}>{"`SA UNA LANG MAHIRAP`"}</Text>
        </VStack>
      </Center>
    </Container>
  );
};

const Body = () => {
  return (
    <Container maxW={"container.lg"}>
      <Box
        display={"flex"}
        flexDirection={{ base: "column-reverse", lg: "row" }}
      >
        <Center flex={1} marginTop={{ base: 0, sm: 5 }}>
          <Container>
            <ChakraHeading
              as={"h5"}
              fontWeight={"bold"}
              mt={{ base: "3rem", lg: "0" }}
            >
              Jeremiah Valencia or heremyas is a Computer Engineer, Full Stack
              Developer and a Youtuber based in the philippines{" "}
              <Link href="#more">
                <Button colorScheme="teal">read more...</Button>
              </Link>
            </ChakraHeading>
          </Container>
        </Center>
        <Center flex={1}>
          <Container>
            <Image
              src="/assets/images/header.jpg"
              h={"100%"}
              objectFit={"cover"}
              borderRadius={"xl"}
            />
          </Container>
        </Center>
      </Box>
    </Container>
  );
};

const Heading = () => {
  return (
    <Center h={"30vh"} w={"100%"}>
      <ChakraHeading as={"h1"} size={"3xl"}>
        Who is heremyas?
      </ChakraHeading>
    </Center>
  );
};

const Heremyas = (props: Props) => {
  return (
    <>
      <Head
        meta={{ content: "Who is heremyas?" }}
        title="Who is heremyas? Jeremiah Valencia"
      />
      <Box minH={"100vh"} mb={{ base: "5rem", lg: "0" }}>
        <BlogNav />
        <Heading />
        <Body />
      </Box>
      <Divider mb={"5rem"} />
      <More />
      <Box h={"30vh"}></Box>
    </>
  );
};

export default Heremyas;
