interface Blog {
  articles?: Blog;
  id: string;
  userId?: string;
  title: string;
  thumbnailSrc: string;
  tags: Array<string>;
  author: string;
  isPinned: boolean;
  body: string;
}

export default Blog;
