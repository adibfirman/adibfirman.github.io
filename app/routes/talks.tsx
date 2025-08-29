import type { Route } from "./+types/talks";
import { Talks as TalksModule } from "@/modules/talks";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Talks | Adib Firman" },
    { name: "description", content: "My speaking engagements and presentations" },
  ];
}

export default function Talks() {
  return <TalksModule />;
}