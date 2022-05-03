import * as React from "react";
import { InferGetStaticPropsType } from "next";
import { format as formatDate } from "date-fns";

import { listBlogs } from "@utils/blogs";
import BlogModule from "@modules/Blog";

import { MapListBlogsPerYears } from "@modules/Blog/types";

const BlogPage = (props: InferGetStaticPropsType<typeof getServerSideProps>) => {
  return <BlogModule {...props} />;
};

export async function getServerSideProps() {
  const mapListBlogsPerYears: MapListBlogsPerYears = {};
  const getListBlog = listBlogs;

  for (let i = 0; i < getListBlog.length; i++) {
    const blog = getListBlog[i];
    if (blog) {
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
  }

  return { props: { mapListBlogsPerYears } };
}

export default BlogPage;
