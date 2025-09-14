import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("articles/:slug", "routes/article-detail.tsx"),
  route("articles", "routes/articles.tsx"),
  route("api/open-graph-image", "routes/open-graph-image.ts"),
  route("api/get-image-article", "routes/get-image-article.ts"),
  route("api/get-total-views-article", "routes/get-total-views-article.ts"),
] satisfies RouteConfig;
