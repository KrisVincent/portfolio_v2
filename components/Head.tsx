import React from "react";
import NextHead from "next/head";

type Props = {
  title: string;
  meta: {
    content: string;
  };
};

function Head({ title, meta }: Props) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={meta.content} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}

export default Head;
