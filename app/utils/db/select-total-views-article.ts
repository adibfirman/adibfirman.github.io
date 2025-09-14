import type { Article } from "@/utils/articles";
import { initArticlesViewsDB } from "./constructor";

export async function selectTotalViewsArticle({ slug }: Pick<Article, "slug">) {
  let total = 0;

  try {
    const { data } = await initArticlesViewsDB()
      .select("*")
      .eq("slug_page", slug);

    const currTotalView = Number(
      data?.find((article) => article.slug_page === slug)?.total_view || 0,
    );

    total = currTotalView;
  } catch (err) {
    console.error(err);
  }

  return total;
}
