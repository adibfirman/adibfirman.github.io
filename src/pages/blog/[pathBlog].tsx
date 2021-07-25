import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";

import * as React from "react";

import { listBlogs, getPostByPath } from "@utils/blogs";
import ModuleDetailBlog from "@modules/Blog/Detail";

function BlogPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <ModuleDetailBlog {...props} />;
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const pathname = (params?.pathBlog ?? "") as string;
  const detailBlog = getPostByPath(pathname);

  return {
    props: {
      source: detailBlog?.content ?? "",
      frontMatter: detailBlog,
      pathname
    }
  };
}

export const getStaticPaths = async () => {
  const paths = listBlogs.map(blog => ({ params: { pathBlog: blog.pathname } }));

  return { paths, fallback: false };
};

export default BlogPage;
