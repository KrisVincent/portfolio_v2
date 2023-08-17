import React, { CSSProperties } from "react";
import Image from "./data-display/Image";

const scrollDownContainerStyle: CSSProperties = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  bottom: "3vh",
  left: 0,
  right: 0,
};

function ScrollDown() {
  return (
    <div style={scrollDownContainerStyle}>
      <div style={{ height: "50px" }}>
        <Image
          style={{ height: "100%" }}
          src={"assets/gif/scroll_down.gif"}
        ></Image>
      </div>
    </div>
  );
}

export default ScrollDown;
