import { GetStaticPaths } from "next";
import React from "react";
import { Category } from "../../../models";
import {
  getArticlesByCategorySlug,
  getCategories,
  getCategory,
} from "../../../sanity/sanity.query";
import BlogNav from "../../../components/blog/BlogNav";
import { Center, Container, GridItem, Heading } from "@chakra-ui/react";
import BlogGrid from "../../../components/blog/BlogGrid";
import ArticleType from "../../../types/articleType";
import ArticleItemCard from "../../../components/blog/ArticleItemCard";

type Props = { category: Category; articles: ArticleType[] };

export const getStaticPaths: GetStaticPaths = async () => {
  const categories: Category[] = await getCategories();

  console.log(categories);

  const paths = categories.map((category) => {
    const categorySlug = category.slug;

    return {
      params: { categorySlug },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const category: Category = await getCategory(params.categorySlug);
  const articles: ArticleType[] = await getArticlesByCategorySlug(
    params.categorySlug
  );

  return { props: { category, articles }, revalidate: 1 };
};

const Category = ({ category, articles }: Props) => {
  console.log(articles);

  return (
    <>
      <BlogNav />
      <Container maxW={"container.lg"}>
        <Center>
          <Heading as={"h1"} margin={10}>
            {category.title}
          </Heading>
        </Center>
        <BlogGrid>
          <>
            {articles.map((article: ArticleType) => (
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
          </>
        </BlogGrid>
      </Container>
    </>
  );
};

export default Category;
