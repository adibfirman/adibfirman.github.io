import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("articles/:slug", "routes/article-detail.tsx"),
  route("articles", "routes/articles.tsx"),
  route("api/open-graph-image", "routes/open-graph-image.ts"),
] satisfies RouteConfig;
