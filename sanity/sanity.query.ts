import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getArticle(slug) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == "${slug}"] {
      _id,
      title,
      "body": body[].children[].text,
      "slug": slug.current,
      "datePublished": publishedAt,
      "thumbnailSrc": mainImage.asset->url,
      "tags": categories[]->title,
      "author": author->name
    }
  `
  );
}

export async function getArticles() {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "body": body[].children[].text,
      "slug": slug.current,
      "datePublished": publishedAt,
      "thumbnailSrc": mainImage.asset->url,
      "tags": categories[]->title,
      "author": author->name
    }
  `
  );
}

export async function getLatestArticles() {
  const itemsCount = 3;

  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) [0...${itemsCount}]{
      _id,
      title,
      "body": body[].children[].text,
      "slug": slug.current,
      "datePublished": publishedAt,
      "thumbnailSrc": mainImage.asset->url,
      "tags": categories[]->title,
      "author": author->name
    }
    `
  );
}

export async function getPinnedArticle() {
  return client.fetch(
    groq`*[_type == "post" && isPinned == true][0...1]{
      _id,
      title,
      "body": body[].children[].text,
      "slug": slug.current,
      "datePublished": publishedAt,
      "thumbnailSrc": mainImage.asset->url,
      "tags": categories[]->title,
      "author": author->name
    }
    `
  );
}
