import React from "react";
import { Head } from "../../components";
import {
  Container,
  Heading,
  Text,
  Box,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import BlogNav from "../../components/blog/BlogNav";
import ArticleItemTag from "../../components/blog/ArticleItemTag";
import ArticleItemAuthor from "../../components/blog/ArticleItemAuthor";
import { getArticle, getArticles } from "../../sanity/sanity.query";
import type ArticleType from "../../types/articleType";

export const getStaticPaths: GetStaticPaths = async () => {
  const articles: ArticleType[] = await getArticles();

  const paths = articles.map((article) => {
    const articleSlug = article.slug;

    return {
      params: { blogTitle: articleSlug },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const articleArray: ArticleType[] = await getArticle(params.blogTitle);
  const article = articleArray[0];

  return { props: { article }, revalidate: 1 };
};

function Blog({ article }) {
  const {
    _id,
    author,
    body,
    datePublished,
    tags,
    thumbnailSrc,
    title,
  }: ArticleType = article;

  const bodyColor = useColorModeValue("gray.200", "gray.700");

  if (!article) {
    return null;
  }

  return (
    <>
      <Head
        title={`${title} | heremyas`}
        meta={{ content: `${title} heremyas` }}
      />
      <BlogNav />
      <Container maxW="container.md">
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            // marginRight="3"
            position="relative"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              // width={{ base: "100%", sm: "85%" }}
              width="100%"
              zIndex="2"
              // marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  borderRadius="lg"
                  src={thumbnailSrc}
                  alt={title}
                  objectFit="contain"
                />
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            // marginTop={{ base: "3", sm: "0" }}
            marginBottom={10}
          >
            <ArticleItemTag tags={tags} />
            <Heading marginTop="1">
              <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
                {title}
              </Text>
            </Heading>
            <Text as="p" marginTop="2" color={bodyColor} fontSize="lg">
              {body.map((item, index) => {
                if (item === "") {
                  return <br key={index} />;
                }
                return (
                  <span key={index}>
                    {item}
                    <br />
                  </span>
                );
              })}
            </Text>
            <ArticleItemAuthor name={author} date={new Date(datePublished)} />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Blog;
