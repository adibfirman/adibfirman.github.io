import type { PropsWithChildren } from "react";
import { EnvelopeSimple, LinkedinLogo, GithubLogo } from "phosphor-react";
import { SubHeader } from "@/components";

const TALKS = [
  {
    title: "Introduction to Frontend Framework",
    date: "October 30, 2021",
    event: "Google Developer Student Club (GDSC ) ITB University",
    slideLink:
      "https://docs.google.com/presentation/d/1zMsTw_iO-zrbRwQVw5IGhQyLLjA8U7ly9hEhAWfp0GU/edit?usp=sharing",
  },
  {
    title: "Deep Dive with useCallback and useMemo",
    date: "January 31, 2020",
    event: "ReactJS Meetup - Facebook Lab Innovation Indonesia",
    slideLink:
      "https://github.com/adibfirman/deep-dive-with-usecallback-usememo",
  },
  {
    title: "Avoid these when using hooks",
    date: "September 25, 2019",
    event: "ReactJS Meetup - Shopee Indonesia",
    slideLink: "https://avoid-these-when-using-hooks.netlify.app/",
  },
];

const SOCIAL_CONNECT = [
  {
    Icon: EnvelopeSimple,
    name: "Mail",
    href: "mainto:dib.firman@gmail.com",
  },
  {
    Icon: LinkedinLogo,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adibfirman",
  },
  {
    Icon: GithubLogo,
    name: "GitHub",
    href: "https://github.com/adibfirman",
  },
  {
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="#ded4f3"
        viewBox="0 0 256 256"
      >
        <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
      </svg>
    ),
    name: "X (formerly Twitter)",
    href: "https://x.com/adibfirman_",
  },
];

const YOE_COUNT = (() => {
  const start = new Date("2017-05-01");
  const now = new Date();

  const diffInMs = now.getTime() - start.getTime();
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

  return Math.floor(diffInYears);
})();

function Card({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <article
      className={`rounded-2xl bg-gradient-to-br from-mystic-bg via-mystic-dark to-mystic-dark/90 shadow-lg p-6 font-body h-max ${className}`}
    >
      {children}
    </article>
  );
}

export function About() {
  return (
    <>
      <SubHeader className="min-h-[70svh] sm:min-h-[70svh]">
        <div className="absolute inset-0 flex lg:items-center items-end z-15 max-w-2xl mx-auto">
          <div className="px-4 lg:px-0">
            <h1 className="text-2xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Hi there! <span className="underline">I'm Adib.</span>
            </h1>
            <p className="text-base lg:text-lg text-left text-gray-300 leading-relaxed font-body text-shadow-gray-300">
              Starting my career as Full Stack Engineer in 2017. Now with over{" "}
              <br />
              <span className="font-mono">`5 years of experience`</span> in the
              industry, I've worked with various technologies and frameworks.
              <br />
              <br />
              <span>
                My journey started with a simple "Hello World" and has evolved
                into building complex, scalable applications.
              </span>
            </p>
          </div>
        </div>

        <img
          className="absolute -right-20 lg:right-0 bottom-12 lg:bottom-0 mr-0 lg:mr-40 mt-5 z-10 lg:w-96"
          src="./about-profile.png"
          style={{ transform: "scale(-1, 1)" }}
        />
      </SubHeader>

      <main className="min-h-screen max-w-3xl mx-auto px-6 py-8">
        <section className="grid grid-cols-16 gap-4">
          <Card className="col-start-1 col-end-16 lg:col-start-1 lg:col-end-11">
            <p className="font-mono text-center text-2xl">Let's Connect</p>
            <div className="flex flex-row gap-4 mt-2 justify-center">
              {SOCIAL_CONNECT.map(({ Icon, ...social }) => (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={social.name}
                  className="w-max flex flex-col items-center hover:underline"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </Card>

          <Card className="col-start-1 col-end-16 lg:col-start-11 lg:col-end-16">
            <p className="font-mono text-center text-xl text-mystic-purple-soft">
              `Adib Firman`
            </p>
            <p className="text-white/80 text-center text-sm mt-2 font-body font-semibold">
              You can call me with my prenounce is{" "}
              <span className="font-mono font-bold text-mystic-purple-surface italic">
                "ah-deep"
              </span>
            </p>
          </Card>

          <Card className="col-start-1 col-end-16 lg:col-start-2 lg:col-end-15">
            <p className="font-mono text-center text-2xl">Talks</p>
            <p className="text-white/80 text-left text-sm mt-2 font-body font-semibold">
              During my career I've also give several talks on the local tech
              event here (Indonesia). Most of the talks I gave is related with
              the ReactJS, hopefully I can do share on various topics besides
              it.
            </p>
            <ul className="list-disc pl-4 mt-2">
              {TALKS.map((talk) => (
                <li key={talk.slideLink} className="mt-2">
                  <a
                    href={talk.slideLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline hover:no-underline text-mystic-accent"
                  >
                    <div className="flex justify-between">
                      <p className="font-body text-sm font-bold">
                        {talk.title}
                      </p>
                      <p className="font-body text-sm font-semibold italic">
                        {talk.date}
                      </p>
                    </div>
                    <p className="font-body text-xs font-semibold">
                      {talk.event}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="col-start-1 col-end-16 lg:col-start-1 lg:col-end-10">
            <img className="w-40 mx-auto" src="./neovim-logo.png" />
            <p className="text-white/80 text-center text-sm mt-2 font-body font-semibold">
              As my daily-driver editor{" "}
              <span className="italic font-mono">"I use Neovim btw"</span>.{" "}
              <br />
              Check my{" "}
              <a
                href="https://github.com/adibfirman/dotfiles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mystic-accent font-semibold underline hover:no-underline"
              >
                dotfiles config here
              </a>
            </p>
          </Card>

          <Card className="col-start-1 col-end-16 lg:col-start-10 lg:col-end-16">
            <p className="font-mono text-center text-md text-white/80">
              Years of Experience
            </p>
            <p className="font-mono text-center mt-3 text-2xl">{YOE_COUNT}</p>
          </Card>
        </section>
      </main>
    </>
  );
}
