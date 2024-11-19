import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { writeContract, getAccount } from "@wagmi/core";
import abi from "../Web3Helpers/ABI";
import { useBalance } from "wagmi";
import { config } from "../Web3Helpers/wagmi";
import { parseEther } from "viem";

function CreateProject() {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    tokenName: "",
    symbol: "",
    initialSupply: 0,
    ethLiquidity: "",
    imageUrl: "",
  });

  const account = getAccount(config);
  const res = useBalance({
    address: account.address,
    chainId: 11155111,
  });

  const createProject = async () => {
    console.log(account.address);

    console.log(res.data);

    if (
      !projectData.title ||
      !projectData.description ||
      !projectData.tokenName ||
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
      console.log("Writing contract now");

      let value = projectData.ethLiquidity;
      console.log(typeof value);

      writeContract(config, {
        abi,
        address: "0x64d669396464227E00653E2235272a0Ba6A67843",
        functionName: "createProject",
        args: [
          projectData.title,
          projectData.description,
          projectData.tokenName,
          projectData.symbol,
          projectData.initialSupply,
          parseEther(projectData.ethLiquidity),
          projectData.imageUrl,
        ],
        value: parseEther(projectData.ethLiquidity),
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

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProjectData({ ...projectData, imageUrl });

      // Upload to ipfs
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black py-12 px-4 ">
      <h1 className="text-4xl font-extrabold text-white mb-8">
        Create a New Crowdfunding Project
      </h1>

      <div className="w-full max-w-lg bg-gray-800 shadow-xl rounded-lg p-8 space-y-6">
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-300 mb-2">
              Project Title
            </label>
            <input
              type="text"
              value={projectData.title}
              onChange={(e) =>
                setProjectData({ ...projectData, title: e.target.value })
              }
              className="w-full px-5 py-3 border-2 border-gray-600 rounded-lg focus:ring-4 focus:ring-purple-500 focus:outline-none placeholder-gray-400 text-white bg-gray-700 transition duration-300 ease-in-out"
              placeholder="Enter project title"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-300 mb-2">
              Project Description
            </label>
            <input
              type="text"
              value={projectData.description}
              onChange={(e) =>
                setProjectData({ ...projectData, description: e.target.value })
              }
              className="w-full px-5 py-3 border-2 border-gray-600 rounded-lg focus:ring-4 focus:ring-purple-500 focus:outline-none placeholder-gray-400 text-white bg-gray-700 transition duration-300 ease-in-out"
              placeholder="Enter project description"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-300 mb-2">
              Project Token Name
            </label>
            <input
              type="text"
              value={projectData.tokenName}
              onChange={(e) =>
                setProjectData({ ...projectData, tokenName: e.target.value })
              }
              className="w-full px-5 py-3 border-2 border-gray-600 rounded-lg focus:ring-4 focus:ring-purple-500 focus:outline-none placeholder-gray-400 text-white bg-gray-700 transition duration-300 ease-in-out"
              placeholder="Enter token name"
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
                  initialSupply: e.target.valueAsNumber,
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
              step="any"
              min="0"
              value={projectData.ethLiquidity}
              onChange={(e) => {
                setProjectData({
                  ...projectData,
                  ethLiquidity: e.target.value,
                });
              }}
              className="w-full px-5 py-3 border-2 border-gray-600 rounded-lg focus:ring-4 focus:ring-teal-500 focus:outline-none placeholder-gray-400 text-white bg-gray-700 transition duration-300 ease-in-out"
              placeholder="Enter ETH for liquidity"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-300 mb-2">
              Project Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-5 py-3 border-2 border-gray-600 rounded-lg focus:ring-4 focus:ring-purple-500 focus:outline-none placeholder-gray-400 text-white bg-gray-700 transition duration-300 ease-in-out"
              required
            />
            {projectData.imageUrl && (
              <img
                src={projectData.imageUrl}
                alt="Preview"
                className="mt-4 w-full max-h-48 object-cover rounded-lg"
              />
            )}
          </div>

          <button
            onClick={createProject}
            className={`w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600"
            } transition duration-300 ease-in-out`}
          >
            {/* {isConfirming ? "Creating Project..." : "Create Project"} */}
            Create Project
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default CreateProject;
