import type { Route } from "./+types/home";
import { Home as HomeModule } from "@/modules/home";
import { getArticles, getFolderStructure } from "@/utils/articles";
import { constructMetaTags } from "@/utils/construct-metatags";

export function loader() {
  const articles = getArticles();
  const folderStructureArticles = getFolderStructure();

  return { articles, folderStructureArticles };
}

export function meta() {
  return constructMetaTags({});
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <HomeModule
      articles={loaderData.articles}
      treeStructureArticles={loaderData.folderStructureArticles}
    />
  );
}
