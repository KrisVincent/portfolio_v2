import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider, Colors, Theme, ThemeOverride } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

type ThemeConfig = {
  fonts: {
    heading: string;
    body: string;
  };
  colors: {
    blue: string;
  };
};

const themeConfig: ThemeConfig = {
  fonts: {
    heading: `"Avenir Next", "Helvetica"`,
    body: `"Avenir Next", "Helvetica"`,
  },
  colors: {
    blue: "#00c2cb",
  },
};

const theme = extendTheme(themeConfig);

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
