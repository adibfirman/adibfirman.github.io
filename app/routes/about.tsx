import { constructMetaTags } from "@/utils/construct-metatags";
import { constructUrlToview } from "@/utils/og-images/construct-url-to-view";
import { About as AboutModule } from "@/modules/about";

import type { Route } from "./+types/about";

export function loader({ request }: Route.LoaderArgs) {
  const metaImage = constructUrlToview(request.url);
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
