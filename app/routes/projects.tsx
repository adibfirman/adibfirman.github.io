import type { Route } from "./+types/projects";
import { Projects as ProjectsModule } from "@/modules/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects | Adib Firman" },
    { name: "description", content: "A collection of my projects and work" },
  ];
}

export default function Projects() {
  return <ProjectsModule />;
}