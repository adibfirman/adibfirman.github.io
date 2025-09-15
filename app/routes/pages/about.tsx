import { constructMetaTags } from "@/utils/construct-metatags";
import { constructOgImageAPI } from "@/utils/og-images/construct-og-image-api";
import { About as AboutModule } from "@/modules/about";

import type { Route } from "./+types/about";

export function loader({ request }: Route.LoaderArgs) {
  const metaImage = constructOgImageAPI(request.url);
  return { metaImage };
}

export function meta({ loaderData }: Route.MetaArgs) {
  return constructMetaTags({
    description: "Learn more about me and my journey",
    image: loaderData.metaImage,
  });
}

export default function About() {
  return <AboutModule />;
}
