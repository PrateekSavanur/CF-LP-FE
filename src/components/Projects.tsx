import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { getAllProjects } from "../Web3Helpers/contractFuntions";

const projectsData = [
  {
    id: 1,
    title: "Eco-Friendly Solar Panels",
    description:
      "Help fund the next generation of eco-friendly solar panels that reduce environmental impact.",
    liquidity: "100 ETH",
    tokenSupply: "5000 Tokens",
    image:
      "https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Clean Water Initiative",
    description:
      "Providing clean water to communities in need through sustainable methods.",
    liquidity: "50 ETH",
    tokenSupply: "3000 Tokens",
    image:
      "https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Education for All",
    description:
      "Support education for underprivileged children by funding local schools.",
    liquidity: "30 ETH",
    tokenSupply: "1000 Tokens",
    image:
      "https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Wildlife Conservation",
    description:
      "Protect endangered species around the world with conservation efforts.",
    liquidity: "120 ETH",
    tokenSupply: "8000 Tokens",
    image:
      "https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

interface Project {
  id: number;
  title: string;
  description: string;
  liquidity: string;
  tokenSupply: string;
  image: string;
}

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contributionAmount, setContributionAmount] = useState("");
  const [ethToUsdRate, setEthToUsdRate] = useState<number | null>(null);

  getAllProjects();

  // Fetch the ETH/USD exchange rate
  useEffect(() => {
    const fetchEthToUsdRate = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        );
        const data = await response.json();
        setEthToUsdRate(data.ethereum.usd);
      } catch (error) {
        console.error("Error fetching ETH to USD rate:", error);
      }
    };

    fetchEthToUsdRate();
  }, []);

  // Calculate the equivalent dollar amount
  const dollarAmount =
    ethToUsdRate && contributionAmount
      ? (parseFloat(contributionAmount) * ethToUsdRate).toFixed(2)
      : "0.00";

  // Function to handle search input changes
  const handleSearch = (event: { target: { value: string } }) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = projectsData.filter(
      (project) =>
        project.title.toLowerCase().includes(value.toLowerCase()) ||
        project.description.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProjects(filtered);
  };

  // Function to handle opening the modal with project details
  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setContributionAmount("");
  };

  // Function to handle contributing to the project
  const handleContribute = () => {
    handleCloseModal();
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

      {/* Projects List */}
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
                <p className="text-gray-400">Liquidity: {project.liquidity}</p>
                <p className="text-gray-400">
                  Token Supply: {project.tokenSupply}
                </p>
              </div>
              <button
                onClick={() => handleViewDetails(project)}
                className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 mt-4 rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Contribution */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Contribute to {selectedProject.title}
            </h3>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <input
              type="number"
              value={contributionAmount}
              onChange={(e) => setContributionAmount(e.target.value)}
              placeholder="Enter amount in ETH"
              className="w-full py-2 px-4 rounded-lg mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {ethToUsdRate !== null && (
              <p className="text-gray-400 mb-4">
                Equivalent in USD: ${dollarAmount}
              </p>
            )}
            <div className="flex justify-between">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-red-500 rounded-lg text-white hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                onClick={handleContribute}
                className="px-4 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600"
              >
                Contribute
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsPage;
