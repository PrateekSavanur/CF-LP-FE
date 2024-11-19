import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { writeContract, getAccount } from "@wagmi/core";
import abi from "../Web3Helpers/ABI";
import { config } from "../Web3Helpers/wagmi";
import { parseEther } from "viem";
import { pinata } from "../Web3Helpers/pinataConfig";

function CreateProject() {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    tokenName: "",
    symbol: "",
    initialSupply: 0,
    ethLiquidity: "",
    image: null,
  });
  const [isConfirming, setIsConfirming] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  // const [, setIpfsHash] = useState<string>("");
  const [imageURL, setImageURL] = useState<string>("");

  const account = getAccount(config);

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
      setProjectData({ ...projectData, image: file });
    }
  };

  const createProjectWithImage = async () => {
    if (
      !projectData.title ||
      !projectData.description ||
      !projectData.tokenName ||
      !projectData.symbol ||
      !projectData.initialSupply ||
      !projectData.ethLiquidity ||
      !projectData.image
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

    setIsConfirming(true);

    try {
      // Start uploading image to IPFS
      let uploadedIpfsHash;
      if (projectData.image) {
        setIsUploading(true);
        uploadedIpfsHash = await pinata.upload.file(projectData.image);
        toast("Image uploaded to IPFS", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log("Image uploaded to IPFS, Hash:", uploadedIpfsHash.IpfsHash);
        setIsUploading(false);
      }

      await writeContract(config, {
        abi,
        address: "0x5a2b6235eEEc4Ee70f41Ce35C7C2791dF77D879C",
        functionName: "createProject",
        args: [
          projectData.title,
          projectData.description,
          projectData.tokenName,
          projectData.symbol,
          projectData.initialSupply,
          parseEther(projectData.ethLiquidity),
          uploadedIpfsHash?.IpfsHash,
        ],
        value: parseEther(projectData.ethLiquidity),
      });

      setIsConfirming(false);
      toast("Project created successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setProjectData({
        title: "",
        description: "",
        tokenName: "",
        symbol: "",
        initialSupply: 0,
        ethLiquidity: "",
        image: null,
      });
    } catch (error) {
      setIsConfirming(false);
      setIsUploading(false);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 py-12 px-4 ">
      <h1 className="text-3xl font-bold text-yellow-200 mb-8">
        Launch Your Dream Project with Us!!
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
            />
            {imageURL && (
              <img
                src={imageURL}
                alt="Uploaded Project Image"
                className="mt-4 max-w-full h-48 object-cover rounded-lg"
              />
            )}
          </div>

          <button
            onClick={createProjectWithImage}
            className={`w-full py-3 px-6 bg-purple-600 text-white rounded-lg text-xl font-bold transition duration-200 ease-in-out hover:bg-purple-700 disabled:bg-gray-600 ${
              isConfirming || isUploading ? "cursor-not-allowed" : ""
            }`}
            disabled={isConfirming || isUploading}
          >
            {isConfirming || isUploading ? "Processing..." : "Create Project"}
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default CreateProject;
