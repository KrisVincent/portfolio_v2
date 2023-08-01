import Head from "next/head";
import React from "react";
import MyPic from "../components/MyPic";
import Navbar from "../components/Navbar";
import s from "../styles/About.module.css";

function about() {
  return (
    <div className={s.About}>
      <Head>
        <title>About | Jeremiah Valencia</title>
        <meta name="description" content="About Jeremiah Valencia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentPage={2} />

      <div className={s.txt_container}>
        <h4>
          I am a<span style={{ fontSize: "1.7em" }}> Computer Engineer</span>
          <span>
            {" "}
            who fell inlove with
            <span style={{ color: "#00C2CB", fontSize: "1.4em" }}>
              {" "}
              Software
            </span>
            . I like discovering new technologies and building projects from
            scratch.{" "}
          </span>
          <span style={{ color: "#00C2CB" }}>
            {`When it's my free time, I code, when it's not, I still code.`}
          </span>
          <br></br>
          <br></br>Apart from coding, I shred my guitar during breaktimes.
        </h4>
      </div>

      <MyPic />
    </div>
  );
}

export default about;
