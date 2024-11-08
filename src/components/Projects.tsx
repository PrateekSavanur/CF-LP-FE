import { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Importing a search icon from react-icons

// Sample project data for demonstration
const projectsData = [
  {
    id: 1,
    title: "Eco-Friendly Solar Panels",
    description:
      "Help fund the next generation of eco-friendly solar panels that reduce environmental impact.",
    goal: "50 ETH",
    raised: "35 ETH",
    image:
      "https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Clean Water Initiative",
    description:
      "Providing clean water to communities in need through sustainable methods.",
    goal: "30 ETH",
    raised: "22 ETH",
    image:
      "https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Education for All",
    description:
      "Support education for underprivileged children by funding local schools.",
    goal: "40 ETH",
    raised: "10 ETH",
    image:
      "https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Wildlife Conservation",
    description:
      "Protect endangered species around the world with conservation efforts.",
    goal: "70 ETH",
    raised: "50 ETH",
    image:
      "https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  // Function to handle search input changes
  const handleSearch = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = projectsData.filter(
      (project) =>
        project.title.toLowerCase().includes(value.toLowerCase()) ||
        project.description.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProjects(filtered);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white mt-[5vh]">
      <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 pb-2">
        Explore Innovative Projects
      </h2>

      {/* Search Bar */}
      <div className="mt-10 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search projects..."
            className="w-full py-3 pl-12 pr-4 rounded-full text-gray-900 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600"
          />
          <FiSearch
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500"
            size={24}
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <p className="text-gray-400">Goal: {project.goal}</p>
                <p className="text-gray-400">Raised: {project.raised}</p>
                <div className="w-full bg-gray-600 rounded-full mt-2">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{
                      width: `${
                        (parseFloat(project.raised) /
                          parseFloat(project.goal)) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 mt-4 rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
