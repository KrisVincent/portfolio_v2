import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const defaultFont = localFont({
  src: "../public/assets/fonts/Avenir-Black.ttf",
});

const theme = extendTheme({
  fonts: {
    heading: defaultFont.style.fontFamily,
    body: defaultFont.style.fontFamily,
  },
  colors: {
    blue: "#00c2cb",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress height={5} />
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}

export default MyApp;
