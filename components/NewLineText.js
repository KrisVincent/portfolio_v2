import React from "react";

function NewLineText({ text }) {
  const newText = text.split("\n").map((str, index) => <p key={index}>{str}</p>);
  return newText;
}

export default NewLineText;
