import Head from "next/head";
import React from "react";
import InternshipContainer from "../components/InternshipContainer";
import MyPic from "../components/MyPic";
import Navbar from "../components/Navbar";
import ScrollDown from "../components/ScrollDown";
import { NAVBAR_ITEMS } from "../enums";
import { Container } from "@chakra-ui/react";
import HeadlineCard from "../components/data-display/HeadlineCard";

const experiences = [];

function certificates() {
  return (
    <>
      <Head>
        <title>Experience | Jeremiah Valencia</title>
        <meta name="description" content="Internship Jeremiah Valencia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={NAVBAR_ITEMS.Experience} />
      <Container maxW="container.xl" height="100vh" position="relative">
        <HeadlineCard lineHeight="1.4em">
          <h3>
            I have
            {/* prettier-ignore */}
            <span style={{fontSize: '2em'}}> 12 Months </span>
            Experience at
          </h3>
          <br />
          <h3>
            <span style={{ fontSize: "2em" }}> Elgada BPO Solutions </span> as a
          </h3>
          <br />
          <h1 style={{ color: "#00C2CB" }}>Full Stack Developer</h1>
        </HeadlineCard>
        <MyPic />
        <ScrollDown />
      </Container>

      <InternshipContainer
        title="Junior Full Stack Developer"
        sidetitle="Elgada BPO Solutions Inc."
        subtitle="September 2022 - September 2023"
        description={`This is my first real corporate world experience`}
        imgSrc="/assets/images/internship/elgada.png"
        bgColor="#001e40"
      />
      <InternshipContainer
        title="Certificate Of Completion"
        sidetitle="ROC.PH"
        subtitle="April 2022 - May 2022"
        description={`On the 13th day of May 2022, I completed my 240 hours of on-the-job Training. I really learned a lot specially in enhancing my soft skills.\n\n Working in a company is not all about being expert at technical stuffs. Sometimes, knowledge can only be executed properly and efficiently using the right attitude and mindset.`}
        imgSrc="/assets/images/internship/coc.jpg"
        bgColor="#001e29"
      />
      <InternshipContainer
        title="Certificate Of Achievement"
        sidetitle="ROC.PH"
        subtitle=""
        description="Being an Assistant Team Leader taught me how difficult it is for a Leader to lead a team by himself/herself. I learned that as an assistant, you should be always on the side of the leader to help him/her."
        imgSrc="/assets/images/internship/coa.jpg"
        bgColor="#001017"
      />

      <InternshipContainer
        title="HRIS Full Stack Developer"
        sidetitle="ROC.PH"
        subtitle=""
        description={`I voluntered to be part of the special project they are building even though I don't have any knowledge about Laravel, But I did some PHP in the past so I grabbed the opportunity to learn new technology.\n\nThis is my first time working in a collaboration with a team and I had so much fun and learned mostly in using version control system or git`}
        imgSrc="/assets/images/internship/hris.jpg"
        bgColor="#01102b"
      />
    </>
  );
}

export default certificates;
