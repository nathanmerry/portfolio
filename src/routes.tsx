import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.page";
import Projects from "./pages/projects.page";
import MyStory from "./pages/my-story.page";

function AppRouter() {
  return (
    <Router basename="/portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/my-story" element={<MyStory />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
