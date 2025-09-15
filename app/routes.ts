import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/pages/home.tsx"),
  route("about", "routes/pages/about.tsx"),
  ...prefix("articles", [
    index("routes/pages/articles.tsx"),
    route(":slug", "routes/pages/article-detail.tsx"),
  ]),
  ...prefix("api", [
    route("open-graph-image", "routes/api/open-graph-image.ts"),
    route("get-image-article", "routes/api/get-image-article.ts"),
    route("get-total-views-article", "routes/api/get-total-views-article.ts"),
  ]),
] satisfies RouteConfig;
