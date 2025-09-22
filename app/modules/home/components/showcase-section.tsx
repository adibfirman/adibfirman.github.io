import { GithubLogo, GlobeSimple } from "phosphor-react";

const PROJECTS = [
  {
    title: "react-lazy-viewport",
    description: "⚛️ Load your react component based on viewport browser",
    tech: ["React", "TypeScript", "microbundle", "prettier"],
    github: "https://github.com/adibfirman/react-lazy-viewport",
    demo: "",
    type: "package",
  },
  {
    title: "reducer-logger",
    description: "⚛️ Hooks for debug your awesome useReducer React API",
    tech: ["React", "TypeScript", "microbundle", "prettier"],
    github: "https://github.com/adibfirman/reducer-logger",
    demo: "",
    type: "package",
  },
  {
    title: "react-datepicker",
    description: "⚛️ A React Datepicker Component",
    tech: ["React", "TypeScript", "tsdx", "storybook", "framer-motion"],
    github: "https://github.com/adibfirman/react-datepicker",
    demo: "https://codesandbox.io/s/still-bash-siocy?file=/src/App.js",
    type: "package",
  },
  {
    title: "reactjs-id/website",
    description: "An Official ReactJS Indonesia",
    github: "https://github.com/reactjs-id/website",
    tech: ["React", "TypeScript"],
    type: "project",
    demo: "https://reactjs.id/",
  },
  {
    title: "simple-rsc",
    description: "⚛️ A Simple clone of React Server Component",
    github: "https://github.com/adibfirman/simple-rsc",
    tech: ["React", "TypeScript"],
    type: "project",
    demo: "",
  },
  {
    title: "snake-game",
    description: "A classic game snake inspired by Nokia",
    github: "https://github.com/adibfirman/snake-game",
    tech: ["JavaScript", "Canvas"],
    type: "project",
    demo: "",
  },
  {
    title: "weather-geo-location",
    description:
      "A simple app that uses Geolocation to get the weather forecast for a user's location.",
    github: "https://github.com/adibfirman/weather-geo-location",
    tech: ["React Native"],
    type: "project",
    demo: "",
  },
  {
    title: "gravity-ball",
    description: "Drop a ball from top to bottom using canvas",
    github: "https://github.com/adibfirman/gravity-ball",
    tech: ["Canvas", "JavaScript"],
    type: "project",
    demo: "",
  },
  {
    title: "funny-bubble",
    description: "Funny bubble using canvas",
    github: "https://github.com/adibfirman/funny-bubble",
    tech: ["Canvas", "JavaScript"],
    type: "project",
    demo: "",
  },
];

export function ShowcaseSection() {
  return (
    <>
      <hr className="my-11 mx-auto border-mystic-mid" />

      <div className="mt-8">
        <h1 className="text-base font-semibold mb-6 flex items-center gap-2 font-heading uppercase text-mystic-accent">
          What I’ve Been Working On With ♥️
        </h1>

        <div className="grid lg:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.github} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold font-mono">{project.title}</h3>
                <span className="px-2 py-1 text-xs rounded font-body bg-blue-600/60 text-blue-200 font-semibold">
                  {project.type}
                </span>
              </div>

              <p className="text-gray-300 mb-4 font-body text-base">
                {project.description}
              </p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded font-body font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="text-blue-400 hover:text-blue-300 text-sm font-semibold inline-flex items-center gap-1 font-body"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogo size={18} /> GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="text-green-400 hover:text-green-300 text-sm font-semibold inline-flex items-center gap-1 font-body"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GlobeSimple size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
