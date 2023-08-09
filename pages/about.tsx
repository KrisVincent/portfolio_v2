import Head from "next/head";
import React from "react";
import MyPic from "../components/MyPic";
import Navbar from "../components/Navbar";
import s from "../styles/About.module.css";
import { NAVBAR_ITEMS } from "../enums";
import TypewriterEffect from "../components/typewriterEffect";

function about() {
  return (
    <div className={s.About}>
      <Head>
        <title>About | Jeremiah Valencia</title>
        <meta name="description" content="About Jeremiah Valencia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={NAVBAR_ITEMS.About} />
      <div className={s.txt_container}>
        <TypewriterEffect>
          <h5>I am a Computer Engineer</h5>
          <h3>
            who fell inlove with Software I like discovering new technologies
            and building projects from scratch.
          </h3>
          <h3 style={{ color: "#00C2CB" }}>
            When it's my free time, I code, when it's not, I still code.
          </h3>
          <br></br>
          <br></br>
          <h5>Apart from coding, I shred my guitar during breaktimes.</h5>
        </TypewriterEffect>
      </div>
      <MyPic />
    </div>
  );
}

export default about;
