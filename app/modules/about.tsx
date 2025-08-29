import { SubHeader } from "@/components";

export function About() {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"] },
    { category: "DevOps", items: ["Docker", "AWS", "Vercel", "GitHub Actions", "Nginx"] },
    { category: "Tools", items: ["Git", "VS Code", "Figma", "Postman", "Jest"] }
  ];

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Leading frontend development initiatives and mentoring junior developers."
    },
    {
      title: "Frontend Developer",
      company: "Startup Inc",
      period: "2020 - 2022",
      description: "Built responsive web applications and improved user experience."
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Started my career developing websites and learning modern web technologies."
    }
  ];

  return (
    <>
      <SubHeader />
      <main className="bg-gray-900 text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-6 font-body">About Me</h1>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 font-body">
                    Hi! I'm Adib Firman, a passionate software engineer specializing in web platform development. 
                    I love creating beautiful, functional, and accessible web applications that make a difference.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 font-body">
                    With over 5 years of experience in the industry, I've worked with various technologies 
                    and frameworks, always staying curious and eager to learn new things. My journey started 
                    with a simple "Hello World" and has evolved into building complex, scalable applications.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 font-body">
                    When I'm not coding, you can find me sharing knowledge through writing and speaking, 
                    contributing to open source projects, or exploring new technologies. I believe in 
                    continuous learning and giving back to the developer community.
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-6 font-body">Experience</h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative">
                      {/* Vertical line */}
                      {index < experience.length - 1 && (
                        <div className="absolute left-0 top-0 h-full w-px bg-gray-700 ml-2"></div>
                      )}
                      
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-6 w-1 h-1 bg-gray-500 rounded-full"></div>
                      
                      {/* Content */}
                      <div className="pl-8">
                        <div className="bg-gray-800 rounded-lg p-6">
                          <h3 className="text-xl font-semibold mb-2 font-body">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-blue-400 font-medium font-body">
                              {exp.company}
                            </span>
                            <span className="text-gray-400 text-sm font-body">
                              • {exp.period}
                            </span>
                          </div>
                          <p className="text-gray-300 font-body">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-1">
              {/* Profile Image Placeholder */}
              <div className="mb-8">
                <div className="w-48 h-48 bg-gray-800 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 font-body">Skills</h3>
                <div className="space-y-4">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <h4 className="text-sm font-medium text-gray-400 mb-2 font-body">
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded font-body"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xl font-semibold mb-4 font-body">Let's Connect</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@adibfirman.id"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors font-body"
                  >
                    📧 hello@adibfirman.id
                  </a>
                  <a
                    href="https://twitter.com/adibfirman"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors font-body"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🐦 Twitter
                  </a>
                  <a
                    href="https://linkedin.com/in/adibfirman"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors font-body"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💼 LinkedIn
                  </a>
                  <a
                    href="https://github.com/adibfirman"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors font-body"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}