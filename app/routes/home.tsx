import type { Route } from "./+types/home";
import { Home as HomeModule } from "@/modules/home";
import { getArticles, getFolderStructure } from "@/utils/articles";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Adib Firman | Software Engineer Web Platform" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

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
