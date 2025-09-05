import {
  useLoaderData,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "react-router";

import { getArticles } from "@/utils/articles";
import { ArticleDetail as ArticleDetailModule } from "@/modules/article-detail";

export async function loader({ params }: LoaderFunctionArgs) {
  const articles = getArticles();
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    throw new Response("Article not found", { status: 404 });
  }

  return { article };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `${data?.article.title} - Adib Firman` },
    { name: "description", content: data?.article.excerpt },
  ];
};

export default function ArticleDetail() {
  const { article } = useLoaderData<typeof loader>();

  return <ArticleDetailModule article={article} />;
}
