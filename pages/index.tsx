import Head from "next/head";
import Navbar from "../components/Navbar";
import MyPic from "../components/MyPic";
import MyPicMini from "../components/MyPicMini";
import { NAVBAR_ITEMS } from "../enums";
import HeadlineCard from "../components/data_display/HeadlineCard";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Jeremiah Valencia</title>
        <meta name="description" content="Portfolio Jeremiah Valencia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={NAVBAR_ITEMS.Home} />
      <Container maxW="container.xl">
        {/* fix myPicMini next */}
        <MyPicMini />
        <HeadlineCard>
          <h3>&nbsp;Hello, I am</h3>
          <h1
            style={{
              fontSize: "1.7em",
              lineHeight: ".5em",
            }}
          >
            Jeremiah Valencia
          </h1>
          <br></br>
          <h1>Full Stack Developer</h1>
        </HeadlineCard>
        <MyPic />
      </Container>
    </>
  );
}
