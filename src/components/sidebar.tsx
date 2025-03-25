import { useEffect, useState } from "react";
import "../App.css";
import ProjectsLogo from "../assets/projects.svg?react";

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState<Boolean>(false);

  const menuItems = [
    {
      name: "Projects",
      href: "/projects/",
      icon: <ProjectsLogo />,
    },
    {
      name: "Web apps",
      href: "https://apps.abassdev.com",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"></path>
        </svg>
      ),
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "My Story",
      href: "/my-story/",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"></path>
          <path d="M8 2a2 2 0 0 0 2-2h2.5A1.5 1.5 0 0 1 14 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-13A1.5 1.5 0 0 1 3.5 0H6a2 2 0 0 0 2 2Zm0 1a3.001 3.001 0 0 1-2.83-2H3.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-1.67A3.001 3.001 0 0 1 8 3Z"></path>
        </svg>
      ),
    },
    {
      name: "Blog",
      href: "https://abassdev.com/blog",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.809.809 0 0 1 1.034-.275.809.809 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34c.078.028.16.044.243.054.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.333.333 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501Z"></path>
        </svg>
      ),
      target: "_blank",
      rel: "noopener noreferrer",
      extraClasses: "mt-5", // we can store any special classes here
    },
    {
      name: "Contact Me",
      href: "/contact/",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "b") {
        event.preventDefault(); // Prevents the default browser behavior
        setSidebarOpen((prev) => !prev); // Toggle sidebar state
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
        className={`${
          sidebarOpen ? "w-72" : "w-12"
        } bg-transparent fixed inset-0 px-4 transition-[width] bg-opacity-50 duration-300  backdrop-blur`}
      >
        <div className="flex items-center justify-between min-w-full py-3">
          <div className="relative flex items-center flex-1 w-full h-full my-auto">
            <a
              className={`${
                sidebarOpen
                  ? "optacity-100 visible duration-200 delay-200"
                  : "opacity-0 invisible"
              } absolute flex items-center gap-2`}
              href="/"
            >
              <div className="px-2 font-black text-transparent bg-gradient-to-r font-orbitron font-edu-nsw from-black to-violet-500 bg-clip-text">
                NM Dev
              </div>
            </a>
          </div>
          <div className="flex-1"></div>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [_svg]:pointer-events-none [_svg]:size-4 [_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-md p-3 h-9 w-9"
            aria-label="Close menu"
            aria-expanded="true"
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
            <a
              key={item.name}
              href={item.href}
              target={item.target} // will be undefined if not present
              rel={item.rel} // will be undefined if not present
              className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:text-gray-100 hover:bg-gray-800 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors duration-200 ${
                item.extraClasses || ""
              }`}
            >
              <div aria-hidden="true">
                {
                  item.icon /* Renders whatever icon component or SVG you stored */
                }
              </div>
              <span
                className={`${
                  !sidebarOpen && "translate-x-28"
                } whitespace-pre transition-transform overflow-hidden duration-200`}
                style={{ transitionDelay: `${70 + index * 10}ms` }}
              >
                {item.name}
              </span>

              {/* Tooltip-like hover text (hidden by default) */}
              <span className="absolute hidden w-0 px-0 py-0 overflow-hidden font-semibold text-gray-900 whitespace-pre bg-white rounded-md left-48 drop-shadow-lg group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit">
                {item.name}
              </span>
            </a>
          ))}
          <div className="mt-5">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9"
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
}

export default Sidebar;
