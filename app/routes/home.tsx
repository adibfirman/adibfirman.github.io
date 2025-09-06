import type { Route } from "./+types/home";
import { Home as HomeModule } from "@/modules/home";
import { getArticles, getFolderStructure } from "@/utils/articles";
import { constructMetaTags } from "@/utils/construct-metatags";

export function loader() {
  const articles = getArticles();
  const folderStructureArticles = getFolderStructure();

  return { articles, folderStructureArticles };
}

export function meta(args: Route.MetaArgs) {
  return constructMetaTags({ url: args.location.pathname });
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <HomeModule
      articles={loaderData.articles}
      treeStructureArticles={loaderData.folderStructureArticles}
    />
  );
}
