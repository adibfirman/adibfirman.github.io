import type { GetServerSidePropsContext, InferGetStaticPropsType } from "next";

import * as React from "react";

import { getPostByPath } from "@utils/blogs";
import ModuleDetailBlog from "@modules/Blog/Detail";

function BlogPage(props: InferGetStaticPropsType<typeof getServerSideProps>) {
  return <ModuleDetailBlog {...props} />;
}

export async function getServerSideProps({ params, query }: GetServerSidePropsContext) {
  const content = (query.content || "id") as string;
  const pathname = (params?.pathBlog ?? "") as string;
  const detailBlog = getPostByPath(pathname, content);

  return {
    props: {
      source: detailBlog?.content ?? "",
      frontMatter: detailBlog,
      pathname
    }
  };
}

export default BlogPage;
