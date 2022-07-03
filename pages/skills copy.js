import Head from "next/head";
import React, { useEffect, useState } from "react";
import s from "../styles/Skills.module.css";
import Navbar from "../components/Navbar";
import MyPic from "../components/MyPic";
import ScrollDown from "../components/ScrollDown";
import SkillContainer from "../components/SkillContainer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import SkillBar from "../components/SkillBar";

function skills() {
  const [RAPB, setRAPB] = useState(null);
  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  useEffect(() => {
    const rapb = require("../components/SkillBar").default;
    // setRAPB(rapb)

    // Usage!
    sleep(1500).then(() => {
      setRAPB(rapb);
    });
  }, []);

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

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

      {/* <SkillBar /> */}

      <SkillContainer
        title="HTML"
        percentage={RAPB ? RAPB : <>null</>}
        projectLink="https://www.heremyas.me/"
        imgSrc={`${tech_logos}/html.png`}
        bgColor="#090d1f"
      />
      <motion.div animate={{ scale: [0, 1] }} transition={{ duration: 0.5 }}>
        <div>hi</div>
      </motion.div>

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

      <motion.div
        ref={titleRef}
        animate={{ scale: titleInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {RAPB ? RAPB : <>null</>}
      </motion.div>

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
