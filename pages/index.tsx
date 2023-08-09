import Head from "next/head";
import Navbar from "../components/Navbar";
import MyPic from "../components/MyPic";
import s from "../styles/Home.module.css";
import MyPicMini from "../components/MyPicMini";
import { NAVBAR_ITEMS } from "../enums";
import TypeWriterEffect from "../components/TypewriterEffect";

export default function Home() {
  return (
    <div className={s.Home}>
      <Head>
        <title>Portfolio | Jeremiah Valencia</title>
        <meta name="description" content="Portfolio Jeremiah Valencia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={NAVBAR_ITEMS.Home} />
      <MyPicMini />
      <div className={s.txt_container}>
        <TypeWriterEffect>
          <h5 style={{ marginLeft: "16px" }}>Hello, I am</h5>
          <h1>Jeremiah Valencia</h1>
          <br></br>
          <br></br>
          <h3>Full Stack Developer</h3>
        </TypeWriterEffect>
      </div>
      <MyPic />
    </div>
  );
}
