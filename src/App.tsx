import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import CreateProject from "./components/CreateProject";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/CF-LP-FE" element={<LandingPage />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/create-project" element={<CreateProject />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
