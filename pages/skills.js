import Head from "next/head";
import React, { useEffect, useState } from "react";
import s from "../styles/Skills.module.css";
import Navbar from "../components/Navbar";
import MyPic from "../components/MyPic";
import ScrollDown from "../components/ScrollDown";
import SkillContainer from "../components/SkillContainer";
// import ProgressBar from 'react-animated-progress-bar';

function skills() {

  const tech_logos = "/assets/images/tech_logos";
  return (
    <div className={s.Skills}>
      <Head>
        <title>Skills | Jeremiah Valencia</title>
        <meta name="description" content="Skills Jeremiah Valencia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentPage={6} />
      <div className={s.texts_container}>
        <div className={s.txt_container}>
          <h4>
            Skills I{" "}
            <span style={{ fontSize: "1.7em", color: "#00c2cb" }}>
              Gained and learned
            </span>
            <span style={{ fontSize: "1.7em" }}> in my course</span> and
            <span style={{ fontSize: "1.7em" }}> self study</span>{" "}
          </h4>
        </div>
        <MyPic />
        <ScrollDown />
      </div>
      <h3>SOFTWARE</h3>

      {/* {RAPB ? console.log("hi"): <RAPB />} */}
      {/* <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      /> */}

      <SkillContainer
        title="HTML"
        description="-------------"
        projectLink="https://www.heremyas.me/"
        imgSrc={`${tech_logos}/html.png`}
        bgColor="#090d1f"
      />

      <SkillContainer
        title="CSS"
        description="-------------"
        projectLink="https://www.heremyas.me/"
        imgSrc={`${tech_logos}/css.png`}
        bgColor="#090d1f"
      />

      <SkillContainer
        title="JavaScript"
        description="-------------"
        imgSrc={`${tech_logos}/javascript.png`}
        bgColor="#090d1f"
      />

      <SkillContainer
        title="React"
        description="-------------"
        imgSrc={`${tech_logos}/react.png`}
        bgColor="#090d1f"
      />
    </div>
  );
}

export default skills;
