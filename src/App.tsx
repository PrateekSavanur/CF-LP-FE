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
          <Route path="/CF-LP-FE/" element={<LandingPage />} />
          <Route path="/CF-LP-FE/projects" element={<Project />} />
          <Route path="/CF-LP-FE/create-project" element={<CreateProject />} />
          <Route path="/CF-LP-FE/swap" element={<Swap />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
