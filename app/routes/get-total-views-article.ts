import { insertAndUpdateTotalViewsArticle } from "@/utils/db/insert-and-update-total-views-article";
import type { Route } from "./+types/get-total-views-article";
import { selectTotalViewsArticle } from "@/utils/db/select-total-views-article";

export async function loader({ request }: Route.LoaderArgs) {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const slug = searchParams.get("slug") || "";

    if (import.meta.env.PROD) {
      await insertAndUpdateTotalViewsArticle({ slug });
    }

    const totalViews = await selectTotalViewsArticle({ slug });

    return { total: totalViews };
  } catch (err) {
    console.error(err);
    return Response.json({ status: err }, { status: 500 });
  }
}
