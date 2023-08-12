import Head from "next/head";
import MyPic from "../components/MyPic";
import Navbar from "../components/Navbar";
import ScrollDown from "../components/ScrollDown";
import s from "../styles/Resume.module.css";
import { NAVBAR_ITEMS } from "../enums";
import { Container } from "@chakra-ui/react";
import HeadlineCard from "../components/data_display/HeadlineCard";

export default function HomePage() {
  return (
    <div className={s.Resume}>
      <Head>
        <title>Resume | Jeremiah Valencia</title>
        <meta name="description" content="Resume Jeremiah Valencia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={NAVBAR_ITEMS.Contact} />
      <Container maxW="container.xl">
        <HeadlineCard>
          <h4 style={{ fontSize: "1.7em", color: "#00c2cb" }}>Contact</h4>
          <span>Me</span>
        </HeadlineCard>
        <MyPic />
        <ScrollDown />
      </Container>
    </div>
  );
}
