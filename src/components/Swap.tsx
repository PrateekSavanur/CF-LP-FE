import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ethers } from "ethers";
import { config } from "../Web3Helpers/wagmi";
import swapAbi from "../Web3Helpers/ABI"; // Import your contract ABI
import { getAccount } from "wagmi/actions";

function SwapTokens() {
  const [swapData, setSwapData] = useState({
    fromToken: "",
    amount: "",
    minEthOut: "", // Minimum ETH output for slippage protection
  });

  const { data: hash, writeContract } = useWriteContract();
  const account = getAccount(config);

  const { isLoading: isConfirming } = useWaitForTransactionReceipt({ hash });

  const handleSwap = async () => {
    if (!swapData.fromToken || !swapData.amount || !swapData.minEthOut) {
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
      // Call the swapTokensForETH function from your smart contract
      writeContract({
        address: "0xYourCrowdfundingPlatformAddress", // Replace with your actual contract address
        abi: swapAbi,
        functionName: "swapTokensForETH",
        args: [
          swapData.fromToken,
          ethers.parseUnits(swapData.amount, 18), // Convert token amount to proper decimals
          ethers.parseUnits(swapData.minEthOut, 18), // Minimum ETH output
        ],
      });
    } catch (error) {
      console.error("Error swapping tokens:", error);
      toast("Failed to swap tokens ⚠️", {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black py-12 px-4">
      <h1 className="text-4xl font-extrabold text-white mb-8">
        Swap Tokens for ETH
      </h1>

      <div className="w-full max-w-lg bg-gray-800 shadow-xl rounded-lg p-8 space-y-6">
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-300 mb-2">
              Token Address
            </label>
            <input
              type="text"
              value={swapData.fromToken}
              onChange={(e) =>
                setSwapData({ ...swapData, fromToken: e.target.value })
              }
              className="w-full px-5 py-3 border-2 border-gray-600 rounded-lg focus:ring-4 focus:ring-purple-500 focus:outline-none placeholder-gray-400 text-white bg-gray-700 transition duration-300 ease-in-out"
              placeholder="Enter token address"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-300 mb-2">
              Amount
            </label>
            <input
              type="number"
              value={swapData.amount}
              onChange={(e) =>
                setSwapData({ ...swapData, amount: e.target.value })
              }
              className="w-full px-5 py-3 border-2 border-gray-600 rounded-lg focus:ring-4 focus:ring-teal-500 focus:outline-none placeholder-gray-400 text-white bg-gray-700 transition duration-300 ease-in-out"
              placeholder="Enter amount to swap"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-300 mb-2">
              Min ETH Out
            </label>
            <input
              type="number"
              value={swapData.minEthOut}
              onChange={(e) =>
                setSwapData({ ...swapData, minEthOut: e.target.value })
              }
              className="w-full px-5 py-3 border-2 border-gray-600 rounded-lg focus:ring-4 focus:ring-teal-500 focus:outline-none placeholder-gray-400 text-white bg-gray-700 transition duration-300 ease-in-out"
              placeholder="Enter minimum ETH output"
              required
            />
          </div>

          <button
            onClick={handleSwap}
            disabled={isConfirming}
            className={`w-full py-3 rounded-lg font-semibold text-white ${
              isConfirming
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600"
            } transition duration-300 ease-in-out`}
          >
            {isConfirming ? "Swapping..." : "Swap Tokens for ETH"}
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default SwapTokens;
