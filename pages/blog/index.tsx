import * as React from "react";
import { InferGetStaticPropsType } from "next";
import { format as formatDate } from "date-fns";

import { listBlogs } from "@utils/blogs";
import BlogModule from "@modules/Blog";

import { MapListBlogsPerYears } from "@modules/Blog/types";

const BlogPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <BlogModule {...props} />;
};

export async function getStaticProps() {
  const mapListBlogsPerYears: MapListBlogsPerYears = {};

  for (let i = 0; i < listBlogs.length; i++) {
    const blog = listBlogs[i];
    const date = new Date(blog.data.date);
    const year = formatDate(date, "yyyy");

    const detail = {
      ...blog,
      monthCreated: formatDate(date, "MMM"),
      dayCreated: formatDate(date, "dd")
    };

    if (!mapListBlogsPerYears[year]) mapListBlogsPerYears[year] = [];
    mapListBlogsPerYears[year].push(detail);
  }

  return { props: { mapListBlogsPerYears } };
}

export default BlogPage;
