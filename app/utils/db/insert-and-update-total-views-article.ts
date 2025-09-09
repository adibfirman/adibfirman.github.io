import type { Article } from "@/utils/articles";
import { initArticlesViewsDB } from "./constructor";

type Params = Article;

export async function insertAndUpdateTotalViewsArticle(params: Params) {
  try {
    const { data } = await initArticlesViewsDB()
      .select("*")
      .eq("slug_page", params.slug);

    const isDataExisted = (data || []).length > 0;
    const currTotalView = Number(
      data?.find((article) => article.slug_page === params.slug)?.total_view ||
        0,
    );

    if (isDataExisted) {
      await initArticlesViewsDB()
        .update({ total_view: currTotalView + 1 })
        .eq("slug_page", params.slug);
    } else {
      await initArticlesViewsDB().insert({
        total_view: 1,
        slug_page: params.slug,
      });
    }
  } catch (err) {
    console.error(err);
  }
}
