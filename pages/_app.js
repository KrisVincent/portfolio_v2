import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import "../styles/globals.css";
// import ProgressBar from 'react-animated-progress-bar';
import NextNProgress from "nextjs-progressbar";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";

const defaultFont = localFont({
  src: "../public/assets/fonts/Avenir-Black.ttf",
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // typeof document !== undefined
    //   ? require("bootstrap/dist/js/bootstrap")
    //   : null;
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);
  return (
    <>
      <NextNProgress height={5} />
      <main className={defaultFont.className}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  );
}

export default MyApp;
