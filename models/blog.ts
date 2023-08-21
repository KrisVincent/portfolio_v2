import Category from "./category";

interface Blog {
  articles?: Blog;
  id: string;
  userId?: string;
  title: string;
  thumbnailSrc: string;
  tags: Category[];
  author: string;
  isPinned: boolean;
  body: string;
}

export default Blog;
