import type { Route } from "./+types/about";
import { About as AboutModule } from "@/modules/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | Adib Firman" },
    { name: "description", content: "Learn more about me and my journey" },
  ];
}

export default function About() {
  return <AboutModule />;
}