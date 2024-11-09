import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { getAccount } from "@wagmi/core";
import abi from "../Web3Helpers/ABI";
import { config } from "../Web3Helpers/wagmi";
import { ethers } from "ethers";

function CreateProject() {
  const [projectData, setProjectData] = useState({
    name: "",
    symbol: "",
    initialSupply: "",
    ethLiquidity: "",
    imageUrl: "",
  });
  const { data: hash, writeContract } = useWriteContract();
  const account = getAccount(config);

  const { isLoading: isConfirming } = useWaitForTransactionReceipt({ hash });

  const createProject = async () => {
    if (
      !projectData.name ||
      !projectData.symbol ||
      !projectData.initialSupply ||
      !projectData.ethLiquidity ||
      !projectData.imageUrl
    ) {
      toast("Please fill in all fields ⚠️", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    if (!account.address) {
      toast("Please connect your wallet ⚠️", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    try {
      writeContract({
        address: "0xYourCrowdfundingContractAddress",
        abi,
        functionName: "createProject",
        args: [
          projectData.name,
          projectData.symbol,
          ethers.parseUnits(projectData.initialSupply, 18),
          ethers.parseEther(projectData.ethLiquidity),
          projectData.imageUrl,
        ],
      });
    } catch (error) {
      console.error("Error creating project:", error);
      toast("Failed to create project ⚠️", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black py-12 px-4 mt-[10vh]">
      <h1 className="text-4xl font-extrabold text-white mb-8">
        Create a New Crowdfunding Project
      </h1>

      <div className="w-full max-w-lg bg-gray-800 shadow-xl rounded-lg p-8 space-y-6">
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-300 mb-2">
              Project Name
            </label>
            <input
              type="text"
              value={projectData.name}
              onChange={(e) =>
                setProjectData({ ...projectData, name: e.target.value })
              }
              className="w-full px-5 py-3 border-2 border-gray-600 rounded-lg focus:ring-4 focus:ring-purple-500 focus:outline-none placeholder-gray-400 text-white bg-gray-700 transition duration-300 ease-in-out"
              placeholder="Enter project name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-300 mb-2">
              Symbol
            </label>
            <input
              type="text"
              value={projectData.symbol}
              onChange={(e) =>
                setProjectData({ ...projectData, symbol: e.target.value })
              }
              className="w-full px-5 py-3 border-2 border-gray-600 rounded-lg focus:ring-4 focus:ring-purple-500 focus:outline-none placeholder-gray-400 text-white bg-gray-700 transition duration-300 ease-in-out"
              placeholder="Enter symbol"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-300 mb-2">
              Initial Supply
            </label>
            <input
              type="number"
              value={projectData.initialSupply}
              onChange={(e) =>
                setProjectData({
                  ...projectData,
                  initialSupply: e.target.value,
                })
              }
              className="w-full px-5 py-3 border-2 border-gray-600 rounded-lg focus:ring-4 focus:ring-teal-500 focus:outline-none placeholder-gray-400 text-white bg-gray-700 transition duration-300 ease-in-out"
              placeholder="Enter initial supply"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-300 mb-2">
              ETH for Liquidity
            </label>
            <input
              type="number"
              value={projectData.ethLiquidity}
              onChange={(e) =>
                setProjectData({ ...projectData, ethLiquidity: e.target.value })
              }
              className="w-full px-5 py-3 border-2 border-gray-600 rounded-lg focus:ring-4 focus:ring-teal-500 focus:outline-none placeholder-gray-400 text-white bg-gray-700 transition duration-300 ease-in-out"
              placeholder="Enter ETH for liquidity"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-300 mb-2">
              Image Url
            </label>
            <input
              type="text"
              value={projectData.imageUrl}
              onChange={(e) =>
                setProjectData({ ...projectData, name: e.target.value })
              }
              className="w-full px-5 py-3 border-2 border-gray-600 rounded-lg focus:ring-4 focus:ring-purple-500 focus:outline-none placeholder-gray-400 text-white bg-gray-700 transition duration-300 ease-in-out"
              placeholder="Enter project name"
              required
            />
          </div>

          <button
            onClick={createProject}
            disabled={isConfirming}
            className={`w-full py-3 rounded-lg font-semibold text-white ${
              isConfirming
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600"
            } transition duration-300 ease-in-out`}
          >
            {isConfirming ? "Creating Project..." : "Create Project"}
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default CreateProject;
