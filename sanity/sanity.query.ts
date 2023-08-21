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
      "tags": categories[]->{
        title,
        "slug": slug.current,
      },
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
      "tags": categories[]->{
        title,
        "slug": slug.current,
      },
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
      "tags": categories[]->{
        title,
        "slug": slug.current,
      },
      "author": author->name
    }
    `
  );
}

export async function getPinnedArticle() {
  return client.fetch(
    groq`*[_type == "post" && isPinned == true][0]{
      _id,
      title,
      "body": body[].children[].text,
      "slug": slug.current,
      "datePublished": publishedAt,
      "thumbnailSrc": mainImage.asset->url,
      "tags": categories[]->{
        title,
        "slug": slug.current,
      },
      "author": author->name
    }
    `
  );
}

export async function getArticlesByCategorySlug(categorySlug: string) {
  return client.fetch(
    groq`*[_type == "post" && "${categorySlug}" in categories[]->slug.current]{
      _id,
      title,
      "body": body[].children[].text,
      "slug": slug.current,
      "datePublished": publishedAt,
      "thumbnailSrc": mainImage.asset->url,
      "tags": categories[]->{
        title,
        "slug": slug.current,
      },
      "author": author->name
    }
    `
  );
}

export async function getCategories() {
  return client.fetch(
    groq`*[_type == "category"]{
      _id,
      title,
      "slug": slug.current,
      description
    }
    `
  );
}

export async function getCategory(slug: string) {
  return client.fetch(
    groq`*[_type == "category" && slug.current == "${slug}"][0]{
      _id,
      title,
      "slug": slug.current,
      description
    }
    `
  );
}
