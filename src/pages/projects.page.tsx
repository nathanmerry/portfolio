import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, Globe, Code, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample project data (you would replace this with your actual projects)
const projects = [
  {
    id: "pennywise",
    name: "Pennywise",
    description:
      "A smart budgeting app that connects to your bank and turns your income and spending into clear, daily insights.",
    technologies: ["Node", "Vue", "Tailwind CSS"],
    duration: "3 months",
    completedDate: "January 2022",
    type: "Web Application",
    previewImage: "/api/placeholder/800/600",
    githubLink: "#",
    liveLink: "#",
    highlights: [
      "Built with Vue & Node.js for a fully reactive, full-stack experience",
      "Bank API integration to securely fetch and sync real-time transaction data",
      "Automated budget generation based on user income, with adjustable daily, weekly, and monthly views",
      "Clean, responsive UI for smooth financial tracking across devices",
      "Real-time data visualization of spending patterns and budgets progress",
      "Persistent user authentication and secure session management",
      "Modular backend architecture designed for easy scaling and future feature extensions",
      "Custom notification system to alert users when they exceed spending limits",
    ],
  },
  {
    id: "boney_to_beastly",
    name: "Boney to Beastly",
    description:
      "A structured workout app that guides users from skinny to strong with personalized routines, rest timers, and progression tracking.",
    technologies: ["Laravel", "Vue", "Tailwind CSS"],
    duration: "2 Months",
    completedDate: "October 2021",
    type: "Web Application",
    previewImage: "/api/placeholder/800/600",
    githubLink: "#",
    liveLink: "#",
    highlights: [
      "Automatically calculates reps and sets based on user's starting weight and progression model",
      "Generates daily workout schedules with targeted muscle groups and rest days",
      "Includes built-in rest timers to keep training sessions efficient and paced",
      "Responsive design optimized for mobile and gym use",
      "Custom routine engine with dynamic exercise loading per training phase",
      "Persistent user data storage for tracking progress over time",
      "Clear UX design focused on simplicity and motivation for beginner lifters",
    ],
  },
  {
    id: "tanguage",
    name: "Tanguage",
    description:
      "A language learning flashcard app that helps users retain new vocabulary by turning isolated words into full, contextual sentences.",
    technologies: ["WordPress", "Vue"],
    duration: "2 months",
    completedDate: "July 2021",
    type: "Web Application",
    previewImage: "/api/placeholder/800/600",
    githubLink: "#",
    liveLink: "#",
    highlights: [
      "Connected to SpanishDict.com via custom API integration",
      "Word uploads managed through a WordPress backend",
      "Generated full Spanish sentences from user-submitted words",
      "Flashcards adapted to user progress and learning pace",
      "Clean, mobile-first UI for quick daily practice",
      "Built for non-technical users to manage vocab content easily",
    ],
  },
];

export function PersonalProjects({
  project: selectedProject,
}: {
  project: string;
}) {
  const matchedProject = projects.find(
    (project) => project.id === selectedProject
  );

  if (!matchedProject) {
    return (
      <div className="container px-4 py-8 mx-auto text-center">
        <h2 className="text-2xl font-semibold">Project Not Found</h2>
        <p className="text-muted-foreground">
          The project you are looking for does not exist.
        </p>
      </div>
    );
  }

  console.log({ selectedProject });

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
        {/* Preview Area */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="h-[500px] bg-muted flex items-center justify-center">
              <img
                src={matchedProject.previewImage}
                alt={matchedProject.name}
                className="object-cover w-full h-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* Project Details Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{matchedProject.name}</CardTitle>
              <CardDescription>{matchedProject.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Technologies */}
              <div className="mb-4">
                <h3 className="mb-2 font-semibold text-foreground">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {matchedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="mb-4">
                <h3 className="mb-2 font-semibold text-foreground">
                  Project Details
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Completed: {matchedProject.completedDate}
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Duration: {matchedProject.duration}
                  </li>
                  <li className="flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    Type: {matchedProject.type}
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Button asChild>
                  <a
                    href={matchedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code className="w-4 h-4 mr-2" /> View Code
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href={matchedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Project Highlights */}
          <Card>
            <CardHeader>
              <CardTitle>Project Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="pl-5 space-y-3 list-disc text-muted-foreground">
                {matchedProject.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

import "../App.css";
// import displayPicture from "../assets/dp.png";
// import GithubLogo from "../assets/github.svg?react";
// import EmailLogo from "../assets/email.svg?react";
// import LinkedinLogo from "../assets/linkedin.svg?react";
import Layout from "../layout";

function ProjectsPage() {
  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            My Personal Projects
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            A curated collection of projects showcasing my skills and
            creativity.
          </p>
        </header>
        <Tabs defaultValue="pennywise">
          <div className="flex justify-center mt-5">
            <TabsList>
              {projects.map((project) => (
                <TabsTrigger value={project.id}>{project.name}</TabsTrigger>
              ))}
            </TabsList>
          </div>

          {projects.map((project) => (
            <TabsContent value={project.id}>
              <PersonalProjects project={project.id} />
            </TabsContent>
          ))}
        </Tabs>

        {/* <div className="flex flex-col gap-8 lg:flex-row">
          <div className="p-6 bg-white rounded-lg shadow-md lg:w-2/3">
            <div className="h-[500px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              Project Preview Area
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-4 text-2xl font-semibold text-brand-blue">
                  Project Name
                </h2>
                <p className="mb-4 text-gray-600">
                  Detailed description of the project, its purpose, challenges
                  overcome, and key features implemented.
                </p>

                <div className="mb-4">
                  <h3 className="mb-2 font-semibold text-gray-700">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      React
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Node.js
                    </span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      TypeScript
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="mb-2 font-semibold text-gray-700">
                    Project Details
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>🕒 Duration: 3 months</li>
                    <li>📅 Completed: January 2024</li>
                    <li>🌐 Type: Web Application</li>
                  </ul>
                </div>

                <div className="flex mt-6 space-x-4">
                  <a
                    href="#"
                    className="px-4 py-2 text-white transition rounded bg-brand-blue hover:bg-blue-700"
                  >
                    View Code
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 transition border rounded border-brand-blue text-brand-blue hover:bg-blue-50"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Project Highlights
                </h3>
                <ul className="space-y-3 text-gray-600 list-disc list-inside">
                  <li>Implemented complex feature X</li>
                  <li>Optimized performance by Y%</li>
                  <li>Solved challenging problem Z</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <script>
        // Optional: Add interactivity if needed // For example, project
        selection functionality
      </script>
    </Layout>
  );
}

export default ProjectsPage;
