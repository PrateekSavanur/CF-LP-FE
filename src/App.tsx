import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Project from "./components/Projects";
import CreateProject from "./components/CreateProject";
import Swap from "./components/Swap";

function App() {
  const [selectedChain, setSelectedChain] = useState<number>(1 || 111555111);

  return (
    <Router basename="/CF-LP-FE">
      <Navbar
        selectedChain={selectedChain}
        setSelectedChain={setSelectedChain}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/projects"
          element={<Project selectedChain={selectedChain} />}
        />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/swap" element={<Swap />} />
      </Routes>
    </Router>
  );
}

export default App;
