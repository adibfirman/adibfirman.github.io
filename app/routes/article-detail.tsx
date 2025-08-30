import { useLoaderData } from "react-router";
import type { Route } from "./+types/article";

import { getArticles } from "@/utils/articles";
import { ArticleDetail as ArticleDetailModule } from "@/modules/article-detail";

export async function loader({ params }: Route.LoaderArgs) {
  const articles = getArticles();
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    throw new Response("Article not found", { status: 404 });
  }

  return { article };
}

export default function ArticleDetail() {
  const { article } = useLoaderData<typeof loader>();

  return <ArticleDetailModule article={article} />;
}
