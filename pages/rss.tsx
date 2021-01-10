import type { NextPage, GetServerSideProps } from "next";
// import { listBlogs } from "@utils/blogs";
// import { URL as URLApp, title, description } from "next-seo.config";

const RSS: NextPage = () => null;

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   const { res } = ctx;

//   res.setHeader("Content-Type", "text/xml");
//   res.write(`<?xml version="1.0" encoding="UTF-8" ?>
//     <rss version="2.0">
//     <channel>
//       <title>${title} @adibfirman</title>
//       <link>${URLApp}</link>
//       <description>${description}</description>
//       <language>en</language>
//       <language>id</language>
//       ${listBlogs.map(
//         blog => `
//         <item>
//           <title>${blog.data.title}</title>
//           <link>${URLApp}/blog/${blog.pathname}</link>
//           <description>${blog.data.spoiler}</description>
//         </item>
//       `
//       )}
//     </channel>
//     </rss>
//   `);

//   res.end();

//   return { props: {} };
// };

export default RSS;
