import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.page";
import Projects from "./pages/projects.page";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
