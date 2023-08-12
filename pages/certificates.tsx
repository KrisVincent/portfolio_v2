import Head from "next/head";
import React from "react";
import CertificateContainer from "../components/CertificateContainer";
import MyPic from "../components/MyPic";
import Navbar from "../components/Navbar";
import ScrollDown from "../components/ScrollDown";
import s from "../styles/Certificates.module.css";
import { NAVBAR_ITEMS } from "../enums";
import { Container } from "@chakra-ui/react";
import HeadlineCard from "../components/data_display/HeadlineCard";

function certificates() {
  return (
    <div className={s.Certificates}>
      <Head>
        <title>Certificates | Jeremiah Valencia</title>
        <meta name="description" content="Certificates Jeremiah Valencia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={NAVBAR_ITEMS.Certificates} />

      <Container maxW="container.xl" height="100vh" position="relative">
        <HeadlineCard>
          <h1>
            My <span>Certificates</span>
          </h1>
          <br />
          <h3>
            <span style={{ color: "#00c2cb", fontSize: "1.5em" }}>11 </span>
            Seminars/ Webinars Attended
          </h3>
        </HeadlineCard>
        <MyPic />
        <ScrollDown />
      </Container>

      <CertificateContainer
        organizer="maxim integrated"
        title="Boost Converters"
        date="September 23, 2020"
        imgSrc="/assets/images/certificates/0001.jpg"
        bgColor="#00304a"
      />

      <CertificateContainer
        organizer="DHVSU"
        title="Going Online and Beyond: An Introduction to Cloud Computing"
        date="November 5, 2021"
        imgSrc="/assets/images/certificates/0002.jpg"
        bgColor="#012436"
      />

      <CertificateContainer
        organizer="ICpEP"
        title="LEAP: Rising Together in This Pandemic"
        date="January 22, 2021"
        imgSrc="/assets/images/certificates/0003.jpg"
        bgColor="#0C1921"
      />

      <CertificateContainer
        organizer="DHVSU"
        title="An Overview of Digital Threats and Best Practices: Nothing Beats the Power of Cybersecurity"
        date="November 2, 2021"
        imgSrc="/assets/images/certificates/0004.jpg"
        bgColor="#070f14"
      />

      <CertificateContainer
        organizer="PUP"
        title="Emerging Trends in Information Technology: Data Mining"
        date="June 23, 2021"
        imgSrc="/assets/images/certificates/0005.jpg"
        bgColor="#3b1817"
      />

      <CertificateContainer
        organizer="Erovoutika"
        title="Fundamentals of Computer Networking and Security"
        date="October 4, 2020"
        imgSrc="/assets/images/certificates/0006.jpg"
        bgColor=""
      />

      <CertificateContainer
        organizer="JPCS Mapua University Chapter"
        title="Envisioning the Future: Application of OpenCV in Image Processing"
        date="October 16, 2021"
        imgSrc="/assets/images/certificates/0007.jpg"
        bgColor="#2b0c0b"
      />

      <CertificateContainer
        organizer="DHVSU"
        title="Boost Your Career and Thrive in the New Normal: Application of Machine Learning and Artificial Intelligence Amidst the Pandemic"
        date="November 3, 2021"
        imgSrc="/assets/images/certificates/0008.jpg"
        bgColor="#0b1121"
      />

      <CertificateContainer
        organizer="Erovoutika"
        title="Robotics Technology"
        date="March 7, 2020"
        imgSrc="/assets/images/certificates/0009.jpg"
        bgColor="#0C1921"
      />

      <CertificateContainer
        organizer="Erovoutika"
        title="Machine Learning"
        date="March 7, 2020"
        imgSrc="/assets/images/certificates/0010.jpg"
        bgColor="#090e1c"
      />

      <CertificateContainer
        organizer="ICpEP"
        title="ēvolvere: Transforming the World through the Evolution of Technological Innovations"
        date="January 27, 2020"
        imgSrc="/assets/images/certificates/0011.jpg"
        bgColor="#293940"
      />
    </div>
  );
}

export default certificates;
