import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("projects", "routes/projects.tsx"),
  route("talks", "routes/talks.tsx"),
  route("about", "routes/about.tsx"),
  route("articles/:slug", "routes/article-detail.tsx"),
  route("articles", "routes/articles.tsx"),
  route("api/meta-tags-images", "routes/meta-tags-images.tsx"),
] satisfies RouteConfig;
