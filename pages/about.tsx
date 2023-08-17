import React from "react";
import MyPic from "../components/MyPic";
import Navbar from "../components/Navbar";
import { NAVBAR_ITEMS } from "../enums";
import { Head } from "../components";
import capitalize from "../utils/capitalize";
import HeadlineCard from "../components/data-display/HeadlineCard";
import { Container } from "@chakra-ui/react";

function about() {
  return (
    <>
      <Head
        title={`${capitalize(NAVBAR_ITEMS.About)} | heremyas`}
        meta={{ content: `${capitalize(NAVBAR_ITEMS.About)} heremyas` }}
      />
      <Navbar active={NAVBAR_ITEMS.About} />
      <Container maxW="container.xl" height="100vh" position="relative">
        <HeadlineCard animationSpeed={0.02} lineHeight="1.2em">
          <h3>
            I am a <span style={{ fontSize: "1.7em" }}>Computer Engineer </span>
          </h3>
          <h3>
            who fell inlove with {/* prettier-ignore */}
            <span style={{ color: "#00C2CB", fontSize: "1.4em" }}>Software </span>
            I like discovering new technologies and building projects from
            scratch.
          </h3>
          {/* prettier-ignore  */}
          <h3 style={{ color: "#00C2CB", fontSize: '1.7em', lineHeight: '1.1em'}}>{` When it's my free time, I code, when it's not, I still code.`}</h3>
          <br></br>
          <br></br>
          <h3>Apart from coding, I shred my guitar during breaktimes.</h3>
        </HeadlineCard>
        <MyPic />
      </Container>
    </>
  );
}

export default about;
