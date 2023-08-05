import React, { CSSProperties } from "react";

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
        <img
          style={{ height: "100%" }}
          src={"assets/gif/scroll_down.gif"}
        ></img>
      </div>
    </div>
  );
}

export default ScrollDown;
