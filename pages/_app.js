import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import "../styles/globals.css";
// import ProgressBar from 'react-animated-progress-bar';
import NextNProgress from "nextjs-progressbar";
import { Analytics } from "@vercel/analytics/react";

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
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
