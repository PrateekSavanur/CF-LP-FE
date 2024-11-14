import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import CreateProject from "./components/CreateProject";
import Swap from "./components/Swap";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/swap" element={<Swap />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
