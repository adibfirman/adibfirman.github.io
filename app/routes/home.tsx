import type { Route } from "./+types/home";
import { Home as HomeModule } from "@/modules/home";
import { getArticles, getFolderStructure } from "@/utils/articles";

export function loader() {
  const articles = getArticles();
  const folderStructureArticles = getFolderStructure();

  return { articles, folderStructureArticles };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <HomeModule
      articles={loaderData.articles}
      treeStructureArticles={loaderData.folderStructureArticles}
    />
  );
}
