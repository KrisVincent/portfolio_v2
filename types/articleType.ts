import { Category } from "../models";

type ArticleType = {
  _id: string;
  title: string;
  slug: string;
  body: string[];
  author: string;
  datePublished: string;
  tags: Category[];
  thumbnailSrc: string;
};

export default ArticleType;
