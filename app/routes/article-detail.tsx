import { useLoaderData } from "react-router";

import { getSingleArticles } from "@/utils/articles";
import { ArticleDetail as ArticleDetailModule } from "@/modules/article-detail";
import { constructMetaTags } from "@/utils/construct-metatags";
import { constructOgImageAPI } from "@/utils/og-images/construct-og-image-api";

import type { Route } from "./+types/article-detail";

export async function loader({ params, request }: Route.LoaderArgs) {
  const article = getSingleArticles({ slug: params.slug });

  if (!article) {
    throw new Response("Article not found", { status: 404 });
  }

  const coverIMG = `${article.articlePath}/cover.jpg`;
  const metaImage = constructOgImageAPI(request.url, {
    customCoverPath: coverIMG,
    title: article.title,
    excerpt: article.excerpt,
    createdAt: article.createdAt,
    isRegionalContent: article.isRegional ? "1" : "",
  });

  return { article, metaImage, coverIMG };
}

export function meta({ loaderData, location }: Route.MetaArgs) {
  const metaTags = constructMetaTags({
    title: `${loaderData.article.title} - Adib Firman`,
    description: loaderData.article.excerpt,
    locale: loaderData.article.isRegional ? "id_ID" : "en",
    url: location.pathname,
    image: loaderData.metaImage,
  });

  return metaTags;
}

export default function ArticleDetail() {
  const { article, coverIMG } = useLoaderData<typeof loader>();

  return <ArticleDetailModule coverIMG={coverIMG} article={article} />;
}
