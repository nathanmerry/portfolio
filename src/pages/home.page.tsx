import "../App.css";
import {
  displayPicture,
  GithubLogo,
  EmailLogo,
  LinkedinLogo,
  ArrowRight,
} from "../svg";
import Layout from "../layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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
                  <p className="mb-1">
                    I'm a full-stack developer who helps startups launch and
                    maintain websites that just work - fast, clean, and easy to
                    manage. I specialise in WordPress theme/plugin
                    customisation, CMS setup, and lightweight custom tools that
                    keep your business running smoothly.{" "}
                  </p>{" "}
                  <p>
                    Whether you're setting up your first site or scaling fast, I
                    bring five years of experience building reliable, efficient
                    solutions that save time and reduce overhead. I love working
                    closely with teams to solve real problems - not just write
                    code.
                  </p>
                </div>
                <div className="text-xl flex text-[#71717a] items-center gap-2 justify-center md:justify-start text-muted-foreground">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                  Available for new projects
                </div>
                <div className="flex items-center gap-x-5">
                  <Button asChild>
                    <a
                      href="/nathan-merry-cv.pdf"
                      download
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </a>
                  </Button>

                  <Link
                    to={"/my-story"} // use 'to' instead of 'href' for internal routes
                    style={{
                      transitionProperty: "background-color, color",
                      transitionDuration: "200ms, 50ms", // bg color 300ms, text color 100ms
                      transitionTimingFunction: "ease-in-out",
                    }}
                    className="text-black whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [_svg]:pointer-events-none [_svg]:size-4 [_svg]:shrink-0 border border-input shadow-sm hover:text-accent-foreground h-9 px-4 py-2 group relative overflow-hidden min-w-[100px] bg-background/80 hover:bg-background flex items-center justify-center gap-2"
                  >
                    More About Me <ArrowRight />
                  </Link>
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
