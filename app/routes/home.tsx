import { Home as HomeModule } from "@/modules/home/view";
import { getArticles, getFolderStructure } from "@/utils/articles";
import { constructMetaTags } from "@/utils/construct-metatags";
import { constructOgImageAPI } from "@/utils/og-images/construct-og-image-api";

import type { Route } from "./+types/home";

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const selectedCategories = searchParams.getAll("categories");

  const articles = getArticles(selectedCategories as string[]);
  const folderStructureArticles = getFolderStructure();
  const metaImage = constructOgImageAPI(request.url);

  return {
    articles: articles.slice(0, 5),
    restOfArticles: articles.slice(5, articles.length),
    folderStructureArticles,
    metaImage,
    totalArticle: articles.length,
  };
}

export function meta(args: Route.MetaArgs) {
  return constructMetaTags({
    url: args.location.pathname,
    image: args.loaderData.metaImage,
  });
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <HomeModule
      totalArticle={loaderData.totalArticle}
      articles={loaderData.articles}
      restOfArticles={loaderData.restOfArticles}
      treeStructureArticles={loaderData.folderStructureArticles}
    />
  );
}
