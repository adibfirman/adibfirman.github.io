import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import * as React from "react";

import { getPostByPath } from "@utils/blogs";
import ModuleDetailBlog from "@modules/Blog/Detail";

function BlogPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <ModuleDetailBlog {...props} />;
}

export async function getServerSideProps({ params, query }: GetServerSidePropsContext) {
  const content = (query.content || "en") as string;
  const pathname = (params?.pathBlog ?? "") as string;
  const { availableTranslations, ...detailBlog } = getPostByPath(pathname, content);

  return {
    props: {
      source: detailBlog?.content ?? "",
      frontMatter: detailBlog,
      pathname,
      availableTranslations
    }
  };
}

export default BlogPage;
