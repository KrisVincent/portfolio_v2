import React from "react";
import { Head } from "../../components";
import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import BlogNav from "../../components/blog/BlogNav";
import ArticleItemPinnedCard from "../../components/blog/ArticleItemPinnedCard";
import ArticleItemCard from "../../components/blog/ArticleItemCard";
import {
  getArticles,
  getLatestArticles,
  getPinnedArticle,
} from "../../sanity/sanity.query";
import ArticleType from "../../types/articleType";

export const getStaticProps = async () => {
  const latestArticles = await getLatestArticles();
  const pinnedArticleArray = await getPinnedArticle();
  const pinnedArticle = pinnedArticleArray[0];
  const articles = await getArticles();

  return { props: { latestArticles, pinnedArticle, articles }, revalidate: 1 };
};

function Blogs({ latestArticles, pinnedArticle, articles }) {
  if (!latestArticles || !pinnedArticle || !articles) {
    return null;
  }

  return (
    <>
      <Head title="Blogs | heremyas" meta={{ content: "Blogs heremyas" }} />
      <BlogNav />
      <Container maxW="container.lg" paddingTop="50px">
        <Heading as="h1">📌 Pinned Article</Heading>
        <ArticleItemPinnedCard
          datePublished={pinnedArticle.datePublished}
          _id={pinnedArticle._id}
          title={pinnedArticle.title}
          thumbnailSrc={pinnedArticle.thumbnailSrc}
          author={pinnedArticle.author}
          tags={pinnedArticle.tags}
          body={pinnedArticle.body}
          slug={pinnedArticle.slug}
        />
        <Heading as="h2" marginTop="10" marginBottom="10">
          Latest Articles
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={10}
        >
          {latestArticles.map((article: ArticleType) => (
            <GridItem key={article._id}>
              <ArticleItemCard
                _id={article._id}
                author={article.author}
                body={article.body}
                tags={article.tags}
                title={article.title}
                thumbnailSrc={article.thumbnailSrc}
                datePublished={article.datePublished}
                slug={article.slug}
              />
            </GridItem>
          ))}
        </Grid>
        <Heading as="h2" marginTop="10" marginBottom="10">
          Articles
        </Heading>
        {articles.map((article: ArticleType) => (
          <ArticleItemPinnedCard
            key={article._id}
            _id={article._id}
            author={article.author}
            body={article.body}
            tags={article.tags}
            title={article.title}
            thumbnailSrc={article.thumbnailSrc}
            datePublished={article.datePublished}
            slug={article.slug}
          />
        ))}
      </Container>
    </>
  );
}

export default Blogs;
