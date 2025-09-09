import { useLoaderData } from "react-router";

import type { Route } from "./+types/article-detail";
import { getArticles } from "@/utils/articles";
import { ArticleDetail as ArticleDetailModule } from "@/modules/article-detail";
import { constructMetaTags } from "@/utils/construct-metatags";

export async function loader({ params }: Route.LoaderArgs) {
  const articles = getArticles();
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    throw new Response("Article not found", { status: 404 });
  }

  return { article };
}

export function meta({ loaderData, location }: Route.MetaArgs) {
  const metaTags = constructMetaTags({
    title: `${loaderData.article.title} - Adib Firman`,
    description: loaderData.article.excerpt,
    locale: loaderData.article.isRegional ? "id_ID" : "en",
    url: location.pathname,
  });

  return metaTags;
}

export default function ArticleDetail() {
  const { article } = useLoaderData<typeof loader>();

  return <ArticleDetailModule totalViews={0} article={article} />;
}
