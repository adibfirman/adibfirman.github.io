import { SubHeader } from "@/components";

export function Talks() {
  const talks = [
    {
      id: 1,
      title: "Modern React Patterns and Best Practices",
      event: "React Conference Indonesia 2024",
      date: "2024-03-15",
      location: "Jakarta, Indonesia",
      type: "Conference",
      description: "Deep dive into modern React patterns, hooks, and performance optimization techniques.",
      slides: "https://slides.com/adibfirman/modern-react-patterns",
      video: "https://youtube.com/watch?v=example",
      tags: ["React", "Performance", "Hooks"]
    },
    {
      id: 2,
      title: "Building Scalable Web Applications",
      event: "Tech Talk Friday",
      date: "2024-01-20",
      location: "Online",
      type: "Webinar",
      description: "Architecture principles and strategies for building scalable web applications.",
      slides: "https://slides.com/adibfirman/scalable-web-apps",
      video: null,
      tags: ["Architecture", "Scalability", "Web Development"]
    },
    {
      id: 3,
      title: "The Future of Frontend Development",
      event: "Developer Meetup",
      date: "2023-11-10",
      location: "Bandung, Indonesia",
      type: "Meetup",
      description: "Exploring emerging trends and technologies in frontend development.",
      slides: "https://slides.com/adibfirman/future-frontend",
      video: "https://youtube.com/watch?v=example2",
      tags: ["Frontend", "Trends", "Technology"]
    }
  ];

  return (
    <>
      <SubHeader />
      <main className="bg-gray-900 text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4 font-body">Talks & Presentations</h1>
            <p className="text-gray-300 text-lg font-body">
              I enjoy sharing knowledge and speaking at conferences, meetups, and webinars.
            </p>
          </div>

          <div className="space-y-6">
            {talks.map((talk, index) => (
              <article key={talk.id} className="relative">
                {/* Vertical line connector */}
                {index < talks.length - 1 && (
                  <div className="absolute left-0 top-0 h-full w-px bg-gray-700 ml-2"></div>
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-1 h-1 bg-gray-500 rounded-full"></div>

                {/* Talk content */}
                <div className="pl-8 pb-6">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-xl font-semibold mb-2 font-body">
                          {talk.title}
                        </h2>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-2 font-body">
                          <span className="bg-purple-600 text-purple-200 px-2 py-1 rounded text-xs">
                            {talk.type}
                          </span>
                          <time>
                            {new Date(talk.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </time>
                          <span>📍 {talk.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 font-body">
                      <strong className="text-blue-400">{talk.event}</strong>
                    </p>

                    <p className="text-gray-300 mb-4 leading-relaxed font-body">
                      {talk.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {talk.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded font-body"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={talk.slides}
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1 font-body"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        📊 Slides →
                      </a>
                      {talk.video && (
                        <a
                          href={talk.video}
                          className="text-red-400 hover:text-red-300 text-sm font-medium inline-flex items-center gap-1 font-body"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          🎥 Video →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {talks.length === 0 && (
            <p className="text-gray-400 text-center">No talks found.</p>
          )}
        </div>
      </main>
    </>
  );
}