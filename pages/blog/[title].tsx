import React from "react";
import { Head } from "../../components";
import { ChakraProvider } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";

type Blog = {
  id: string;
  title: string;
  body: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: "1",
          title: "test",
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  };
};

export const getStaticProps: GetStaticProps<{
  blog: Blog;
}> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const blog = await res.json();
  return { props: { blog } };
};

function Blog(blog: Blog) {
  return (
    <ChakraProvider>
      <Head title="{title} | heremyas" meta={{ content: "{title} heremyas" }} />
    </ChakraProvider>
  );
}

export default Blog;
