import { Home as HomeModule } from "@/modules/home";
import { getArticles, getFolderStructure } from "@/utils/articles";
import { constructMetaTags } from "@/utils/construct-metatags";
import { constructOgImageAPI } from "@/utils/og-images/construct-og-image-api";

import type { Route } from "./+types/home";

export function loader({ request }: Route.LoaderArgs) {
  const articles = getArticles();
  const folderStructureArticles = getFolderStructure();
  const metaImage = constructOgImageAPI(request.url);

  return { articles, folderStructureArticles, metaImage };
}

export function meta(args: Route.MetaArgs) {
  return constructMetaTags({
    url: args.location.pathname,
    image: args.loaderData.metaImage,
  });
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <HomeModule
      articles={loaderData.articles}
      treeStructureArticles={loaderData.folderStructureArticles}
    />
  );
}
