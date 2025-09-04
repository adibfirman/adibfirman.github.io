import { SubHeader } from "@/components";
import type { PropsWithChildren } from "react";

function Card({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <article
      className={`rounded-2xl bg-gradient-to-br from-mystic-bg via-mystic-dark to-mystic-dark/90 shadow-lg p-6 font-body w-max ${className}`}
    >
      {children}
    </article>
  );
}

export function About() {
  return (
    <>
      <SubHeader>
        <div className="absolute inset-0 flex items-end z-15 max-w-2xl mx-auto">
          <div className="text-left xs:mt-20 lg:pr-12 lg:max-w-4xl">
            <h1 className="lg:text-6xl font-bold text-white mb-6 font-heading">
              Hi there! <span className="underline">I'm Adib.</span>
            </h1>
            <p className="text-base lg:text-lg mt-20 lg:mt-0 text-center lg:text-left text-gray-300 leading-relaxed font-body">
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
          className="absolute right-0 mr-40 mt-5 z-15"
          src="./about-profile.png"
          style={{ transform: "scale(-1, 1)" }}
        />
      </SubHeader>

      <main className="min-h-screen max-w-3xl mx-auto px-6 py-8">
        {/* <section className="flex gap-4"> */}
        {/*   <Card> */}
        {/*     <img className="w-40 mx-auto" src="./neovim-logo.png" /> */}
        {/*     <p className="text-white/80 text-center text-sm mt-2"> */}
        {/*       As my daily-driver editor{" "} */}
        {/*       <span className="italic font-mono">"I use Neovim btw"</span>. You */}
        {/*       can check my{" "} */}
        {/*       <a */}
        {/*         href="https://github.com/adibfirman/dotfiles" */}
        {/*         target="_blank" */}
        {/*         rel="noopener noreferrer" */}
        {/*         className="text-blue-300 italic font-semibold" */}
        {/*       > */}
        {/*         dotfiles config here */}
        {/*       </a> */}
        {/*     </p> */}
        {/*   </Card> */}
        {/**/}
        {/*   <Card> */}
        {/*     <p className="font-mono text-center text-2xl">`Adib Firman`</p> */}
        {/*     <p className="text-white/80 text-center text-sm mt-2"> */}
        {/*       You can call me with my prenounce is{" "} */}
        {/*       <span className="font-mono font-bold text-mystic-purple-surface italic"> */}
        {/*         "ey-deep" */}
        {/*       </span> */}
        {/*     </p> */}
        {/*   </Card> */}
        {/* </section> */}
      </main>
    </>
  );
}
