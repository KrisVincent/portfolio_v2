import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import MyPic from '../components/MyPic'
import s from "../styles/Home.module.css";
import AnimatedText from 'react-animated-text-content';

export default function Home() {
  return (
    <div className={s.Home}>
      <Head>
        <title>Portfolio | Jeremiah Valencia</title>
        <meta name="description" content="Home Jeremiah Valencia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar currentPage={1} />

      <div className={s.txt_container}>
        <h5>&nbsp;&nbsp;Hello, I am</h5>
        <h1>Jeremiah Valencia</h1>
        <br></br>
        <br></br>
        <h3>
          Computer Engineer 
        </h3>
      </div>

      <MyPic />
    </div>
  );
}
