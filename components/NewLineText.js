import React from "react";

function NewLineText({ text }) {
  const newText = text.split("\n").map((str) => <p>{str}</p>);
  return newText;
}

export default NewLineText;
