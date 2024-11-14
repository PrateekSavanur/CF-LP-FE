import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  contribute,
  getAllProjects,
  withdrawFunds,
} from "../Web3Helpers/contractFuntions";
import { formatEther } from "viem";
import { useAccount } from "wagmi";

interface Project {
  id: number;
  title: string;
  description: string;
  totalSupply: bigint;
  image: string;
  ethRaised: bigint;
  liquidityPoolAddress: string;
  owner: string;
  tokenAddress: string;
}

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contributionAmount, setContributionAmount] = useState("");
  const [ethToUsdRate, setEthToUsdRate] = useState<number | null>(null);
  const { address } = useAccount();

  useEffect(() => {
    const getProjects = async () => {
      try {
        const fetchedProjects = await getAllProjects();
        setProjects(fetchedProjects);
        setFilteredProjects(fetchedProjects);
      } catch (error) {
        toast.error("Failed to load projects.");
      }
    };
    getProjects();
  }, []);

  useEffect(() => {
    const fetchEthToUsdRate = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        );
        const data = await response.json();
        setEthToUsdRate(data.ethereum.usd);
      } catch (error) {
        toast.error("Error fetching ETH to USD rate.");
      }
    };
    fetchEthToUsdRate();
  }, []);

  const dollarAmount =
    ethToUsdRate && contributionAmount
      ? (parseFloat(contributionAmount) * ethToUsdRate).toFixed(2)
      : "0.00";

  const handleSearch = (event: { target: { value: string } }) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = projects.filter(
      (project) =>
        project.title?.toLowerCase().includes(value.toLowerCase()) ||
        project.description?.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProjects(filtered);
  };

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setContributionAmount("");
  };

  const handleWithdrawFunds = async () => {
    if (selectedProject) {
      try {
        await withdrawFunds(selectedProject.id);
        toast.success("Funds withdrawn");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleContribute = async () => {
    if (selectedProject) {
      try {
        await contribute(selectedProject.id, contributionAmount);
        toast.success("Contribution successful");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white mt-[5vh]">
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 pb-2">
        Explore Innovative Projects
      </h2>

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
        {filteredProjects.length > 0
          ? filteredProjects.map((project: Project) => (
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
                  <button
                    onClick={() => handleViewDetails(project)}
                    className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 mt-4 rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          : "No Projects"}
      </div>

      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gray-800 rounded-lg p-8 w-full max-w-lg shadow-xl transition-transform transform scale-105">
            <h3 className="text-3xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Support {selectedProject.title}
            </h3>
            <p className="text-gray-200 mb-6 text-center">
              {selectedProject.description}
            </p>

            <div className="mb-6 border-t border-gray-600 pt-4">
              <div className="flex justify-between text-gray-400 text-sm">
                <span>LP Address</span>
                <span className="text-gray-300">
                  {selectedProject.liquidityPoolAddress}
                </span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Token Address</span>
                <span className="text-gray-300">
                  {selectedProject.tokenAddress}
                </span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Token Supply</span>
                <span className="text-gray-300">
                  {formatEther(selectedProject.totalSupply)}
                </span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm mt-2">
                <span>ETH Raised</span>
                <span className="text-gray-300">
                  {formatEther(selectedProject.ethRaised)}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Contribution Amount (ETH)
              </label>
              <input
                type="number"
                value={contributionAmount}
                onChange={(e) => setContributionAmount(e.target.value)}
                placeholder="Enter ETH amount"
                className="w-full py-2 px-4 rounded-lg text-gray-800 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {ethToUsdRate !== null && (
                <p className="text-sm text-gray-400 mt-2">
                  Equivalent in USD:{" "}
                  <span className="font-semibold text-gray-300">
                    ${dollarAmount}
                  </span>
                </p>
              )}
            </div>

            <div className="flex justify-between items-center space-x-4 mt-8">
              <button
                onClick={handleCloseModal}
                className="flex-1 py-2 px-4 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleContribute}
                className="flex-1 py-2 px-4 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
              >
                Contribute
              </button>
            </div>
            {address === selectedProject.owner && (
              <div className="flex justify-center items-center pt-5">
                <button
                  onClick={handleWithdrawFunds}
                  className="mt-2 py-2 px-4 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition-colors"
                >
                  Withdraw Funds
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsPage;
