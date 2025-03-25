import "../App.css";
import displayPicture from "../assets/dp.png";
// @ts-ignore
import GithubLogo from "../assets/github.svg?react";
// @ts-ignore
import EmailLogo from "../assets/email.svg?react";
// @ts-ignore
import LinkedinLogo from "../assets/linkedin.svg?react";
import Layout from "../layout";

function HomePage() {
  return (
    <Layout>
      <div className="relative flex items-center justify-center flex-1 h-screen">
        <div className="">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-[10px] opacity-50">
              <div className="absolute rounded-full w-96 h-96 mix-blend-multiply dark:mix-blend-overlay filter blur-xl animate-blob top-1/4 left-1/4 bg-primary/20"></div>
              <div className="absolute w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl animate-blob top-1/3 right-1/4 bg-violet-500/20 delay-[2000ms]"></div>
              <div className="absolute w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl animate-blob bottom-1/4 left-1/3 bg-blue-500/20 delay-[4000ms]"></div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex w-full overflow-hidden border shadow-2xl backdrop-blur-sm bg-background/50 dark:bg-background/20 rounded-2xl border-border">
              <div className="w-[20%]">
                <img src={displayPicture} alt="" className="" />

                <div className="px-4 pt-5">
                  <div className="flex items-center justify-around">
                    <a href="https://github.com/nathanmerry" className="">
                      <GithubLogo className="w-[30px] h-[30px]" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nathan-merry-289b6b16a/"
                      className=""
                    >
                      <LinkedinLogo className="w-[30px] h-[30px]" />
                    </a>
                    <a href="/contact" className="">
                      <EmailLogo className="w-[30px] h-[30px]" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-1 px-10 py-10 space-y-8 text-center md:text-left">
                <div className="text-3xl font-noto-sans-hatran-regular">
                  Hello World, I am
                </div>
                <h1 className="text-6xl font-black font-orbitron font-edu-nsw">
                  <span className="text-transparent bg-gradient-to-r from-black to-violet-500 bg-clip-text">
                    Nathan Merry
                  </span>
                </h1>
                <div className="text-2xl text-gray-500">
                  I am a results-driven full-stack developer with expertise in
                  web development, API integrations, and data automation.
                  Passionate about optimizing workflows and reducing costs, I
                  enjoy building efficient solutions that enhance productivity.
                  In my free time, I work on personal projects and explore new
                  technologies to stay ahead in the industry.
                </div>
                <div className="text-xl flex text-[#71717a] items-center gap-2 justify-center md:justify-start text-muted-foreground">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                  Available for new projects
                </div>
                <div className="flex items-center gap-x-5">
                  <button
                    style={{
                      // @ts-ignore
                      "--spread": "90deg",
                      "--shimmer-color": "#ffffff",
                      "--radius": "100px",
                      "--speed": "3s",
                      "--cut": "0.05em",
                      "--bg": "rgba(0, 0, 0, 1)",
                    }}
                    className="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px min-w-[100px]"
                  >
                    <div className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
                      <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                        <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>
                      </div>
                    </div>
                    <a
                      download=""
                      className="px-8 text-xl text-white"
                      href="/assets/pdf/abass-cv-fr.pdf"
                    >
                      Download Resume
                    </a>
                    <div className="insert-0 absolute size-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transform-gpu transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"></div>
                    <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
                  </button>
                  <a
                    className="text-black whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [_svg]:pointer-events-none [_svg]:size-4 [_svg]:shrink-0 border border-input shadow-sm hover:text-accent-foreground h-9 px-4 py-2 group relative overflow-hidden min-w-[100px] bg-background/80 hover:bg-background flex items-center justify-center gap-2"
                    href="/my-story/"
                  >
                    More About Me
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="transition-transform group-hover:translate-x-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
