import React, { useEffect, useState } from "react";
import { cn } from "../utils"; // Assuming a utility for conditional class names
import {
  ProjectsLogo,
  StorySvg,
  GithubLogo,
  LinkedinLogo,
  EmailLogo,
} from "../svg";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const menuItems = [
    {
      name: "Projects",
      href: "/projects/",
      icon: <ProjectsLogo />,
    },
    {
      name: "My Story",
      href: "/my-story/",
      icon: <StorySvg />,
    },
    {
      name: "GitHub",
      href: "https://github.com/nathanmerry",
      icon: <GithubLogo className="w-[23px] h-[23px]" />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nathan-merry-289b6b16a/",
      icon: <LinkedinLogo className="w-[23px] h-[23px]" />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "Contact",
      href: "mailto:nathanmerry9713@gmail.com",
      icon: <EmailLogo className="w-[23px] h-[23px]" />,
    },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "b") {
        event.preventDefault();
        setSidebarOpen((prev) => !prev);
        console.log("Sidebar toggled!");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav
      className="fixed z-50 flex min-h-screen gap-6"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={cn(
          "fixed inset-0 px-4 transition-[width] duration-300 bg-transparent bg-opacity-50 backdrop-blur",
          sidebarOpen ? "w-72" : "w-12"
        )}
      >
        <div className="flex items-center justify-between min-w-full py-3">
          <div className="relative flex items-center flex-1 w-full h-full my-auto">
            <a
              className={cn(
                "absolute flex items-center gap-2",
                sidebarOpen
                  ? "opacity-100 visible duration-200 delay-200"
                  : "opacity-0 invisible"
              )}
              href="/"
            >
              <div className="px-2 font-black text-transparent bg-gradient-to-r font-orbitron font-edu-nsw from-black to-violet-500 bg-clip-text">
                NM Dev
              </div>
            </a>
          </div>
          <div className="flex-1"></div>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-md p-3 h-9 w-9"
            aria-label="Toggle menu"
            aria-expanded={sidebarOpen}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              height="50"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="relative flex flex-col gap-2 mt-4">
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.href} // use 'to' instead of 'href' for internal routes
              style={{
                transitionProperty: "background-color, color",
                transitionDuration: "200ms, 50ms", // bg color 300ms, text color 100ms
                transitionTimingFunction: "ease-in-out",
              }}
              {...(item.href
                ? {
                    component: "a",
                    href: item.href,
                    target: item.target,
                    rel: item.rel,
                  }
                : {})} // handle external links if needed
              className={cn(
                "group flex items-center text-sm gap-3.5 font-medium p-2 lg:p-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                item.extraClasses || "",
                sidebarOpen
                  ? "hover:bg-gray-800 hover:text-gray-100 transition-all duration-200"
                  : ""
              )}
            >
              <div
                aria-hidden="true"
                className={cn(
                  "duration-200 rounded p-2",
                  sidebarOpen ? "" : "hover:bg-gray-800 hover:text-gray-100"
                )}
              >
                {item.icon}
              </div>
              <span
                className={cn(
                  "whitespace-pre transition-transform overflow-hidden duration-200",
                  !sidebarOpen && "translate-x-28"
                )}
                style={{ transitionDelay: `${70 + index * 10}ms` }}
              >
                {item.name}
              </span>

              <span className="absolute hidden w-0 px-0 py-0 overflow-hidden font-semibold text-gray-900 whitespace-pre bg-white rounded-md left-48 drop-shadow-lg group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit">
                {item.name}
              </span>
            </Link>
          ))}
          <div className="mt-5">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9"
              aria-label="Switch to dark mode"
            >
              <svg
                className="w-4 h-4 dark:hidden"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  className="fill-current"
                  d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                ></path>
                <path
                  className="fill-current"
                  d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
                ></path>
              </svg>
              <svg
                className="hidden w-4 h-4 dark:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  className="fill-current"
                  d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
                ></path>
                <path
                  className="fill-current"
                  d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
