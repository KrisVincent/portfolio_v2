import Head from "next/head";
// import { useEffect, useRef } from "react";
import MyPic from "../components/MyPic";
import Navbar from "../components/Navbar";
import ScrollDown from "../components/ScrollDown";
import s from "../styles/Resume.module.css";
import { NAVBAR_ITEMS } from "../enums";

export default function HomePage() {
  // const viewer = useRef(null);
  // useEffect(() => {
  //   import("@pdftron/webviewer").then(() => {
  //     WebViewer(
  //       {
  //         path: "/lib",
  //         initialDoc: "/assets/pdf/resume.pdf",
  //       },
  //       viewer.current
  //     ).then((instance) => {
  //       // const { docViewer } = instance;
  //       const { annotationManager } = instance.Core;

  //       instance.UI.setTheme("dark");
  //       annotationManager.setReadOnly(true);
  //     });
  //   });
  // }, []);

  return (
    <div className={s.Resume}>
      <Head>
        <title>Resume | Jeremiah Valencia</title>
        <meta name="description" content="Resume Jeremiah Valencia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={NAVBAR_ITEMS.Contact} />
      <div className={s.texts_container}>
        <div className={s.txt_container}>
          <h4>
            <span style={{ fontSize: "1.7em", color: "#00c2cb" }}>
              Contact Me
            </span>
            <br></br>
            <br></br>
          </h4>
        </div>
        <MyPic />
        <ScrollDown />
      </div>
      {/* <div className="MyComponent">
        <div
          className="webviewer"
          ref={viewer}
          style={{ height: "100vh" }}
        ></div>
      </div> */}
    </div>
  );
}
