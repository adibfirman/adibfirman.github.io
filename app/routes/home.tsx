import type { Route } from "./+types/home";
import { Home as HomeModule } from "@/modules/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <HomeModule />;
}
