import { SubHeader } from "@/components";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "React Component Library",
      description: "A modern React component library built with TypeScript and Tailwind CSS",
      tech: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
      github: "https://github.com/adibfirman/component-library",
      demo: "https://components.adibfirman.id",
      status: "Active"
    },
    {
      id: 2,
      title: "Web Performance Monitor",
      description: "A tool to monitor and analyze web performance metrics",
      tech: ["Next.js", "Node.js", "MongoDB", "Chart.js"],
      github: "https://github.com/adibfirman/perf-monitor",
      demo: "https://perf.adibfirman.id",
      status: "Completed"
    },
    {
      id: 3,
      title: "Developer Portfolio Template",
      description: "A customizable portfolio template for developers",
      tech: ["React", "Remix", "Tailwind CSS"],
      github: "https://github.com/adibfirman/dev-portfolio",
      demo: "https://portfolio-template.adibfirman.id",
      status: "Active"
    }
  ];

  return (
    <>
      <SubHeader />
      <main className="bg-gray-900 text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4 font-body">Projects</h1>
            <p className="text-gray-300 text-lg font-body">
              Here are some of my featured projects and work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold font-body">
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs rounded font-body ${
                      project.status === "Active"
                        ? "bg-green-600 text-green-200"
                        : "bg-blue-600 text-blue-200"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 font-body">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded font-body"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1 font-body"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.demo}
                    className="text-green-400 hover:text-green-300 text-sm font-medium inline-flex items-center gap-1 font-body"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}