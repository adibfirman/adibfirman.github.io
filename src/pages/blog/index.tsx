import * as React from "react";
import { InferGetStaticPropsType } from "next";

import { getListFromMedium } from "@utils/blogs";
import BlogModule from "@modules/Blog";

const BlogPage = (props: InferGetStaticPropsType<typeof getServerSideProps>) => {
  return <BlogModule {...props} />;
};

export async function getServerSideProps() {
  const getBlogs = await getListFromMedium();

  return { props: { blogs: getBlogs } };
}

export default BlogPage;
