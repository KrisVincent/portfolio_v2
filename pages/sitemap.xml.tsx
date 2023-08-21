import { NAVBAR_ITEMS } from "../enums";
import { getArticles } from "../sanity/sanity.query";
import ArticleType from "../types/articleType";

const url = "https://heremyas.com";

function generateSiteMap(articles: ArticleType[]) {
  const navLinks = Object.keys(NAVBAR_ITEMS);

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${url}</loc>
     </url>
     <url>
       <loc>${url}/blog</loc>
     </url>
     <url>
       <loc>${url}/blog/heremyas</loc>
     </url>
     ${navLinks
       .map((link) => {
         return `
        <url>
            <loc>${`${url}/${link.toLowerCase()}`}</loc>
        </url>
        `;
       })
       .join("")}

     ${articles
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${url}/blog/${slug}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const articles: ArticleType[] = await getArticles();

  const sitemap = generateSiteMap(articles);

  res.setHeader("Content-Type", "text/xml");

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
