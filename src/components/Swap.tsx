import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { ethers } from "ethers";
import { config } from "../Web3Helpers/wagmi";
import swapAbi from "../Web3Helpers/ABI";
import erc20Abi from "../Web3Helpers/ERC20_ABI";
import { getAccount } from "wagmi/actions";
import { parseEther } from "viem";

function SwapTokens() {
  const [swapData, setSwapData] = useState({
    fromToken: "",
    amount: "",
    minEthOut: "",
  });

  const { writeContract: approveWrite, data: approveHash } = useWriteContract();
  const { writeContract: swapWrite } = useWriteContract();

  const account = getAccount(config);

  const {
    isLoading: isApproving,
    isSuccess: isApproved,
    isError: isApproveError,
  } = useWaitForTransactionReceipt({
    hash: approveHash,
  });

  useEffect(() => {
    if (isApproved) {
      handleSwap();
    } else if (isApproveError) {
      toast.error("Approval failed! Please try again.", { theme: "dark" });
    }
  }, [isApproved, isApproveError]);

  const handleApprove = async () => {
    if (!swapData.fromToken || !swapData.amount || !swapData.minEthOut) {
      toast("Please fill in all fields ⚠️", { theme: "dark" });
      return;
    }

    if (!account.address) {
      toast("Please connect your wallet ⚠️", { theme: "dark" });
      return;
    }

    try {
      // Approve contract to transfer tokens on behalf of the user
      approveWrite({
        address: swapData.fromToken as `0x${string}`, // Token address
        abi: erc20Abi,
        functionName: "approve",
        args: [
          "0x1B2aFfD1a9eb1198F7f884C1388702b29246a4bE",
          parseEther(swapData.amount),
        ],
      });
      toast("Approval transaction sent!", { theme: "dark" });
    } catch (error) {
      console.error("Approval error:", error);
      toast("Failed to approve token transfer ⚠️", { theme: "dark" });
    }
  };

  const handleSwap = async () => {
    try {
      swapWrite({
        address: "0x1B2aFfD1a9eb1198F7f884C1388702b29246a4bE",
        abi: swapAbi,
        functionName: "swapTokensForETH",
        args: [
          swapData.fromToken,
          parseEther(swapData.amount),
          parseEther(swapData.minEthOut),
        ],
      });
      toast("Swap transaction sent!", { theme: "dark" });
    } catch (error) {
      console.error("Swap error:", error);
      toast("Failed to swap tokens ⚠️", { theme: "dark" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black py-12 px-4 md:mt-[8vh]">
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
            onClick={handleApprove}
            disabled={isApproving || isApproved}
            className={`w-full py-3 rounded-lg font-semibold text-white ${
              isApproving || isApproved
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600"
            } transition duration-300 ease-in-out`}
          >
            {isApproving ? "Approving..." : isApproved ? "Approved" : "Approve"}
          </button>

          <button
            onClick={handleSwap}
            disabled={isApproving || !isApproved}
            className={`w-full py-3 rounded-lg font-semibold text-white ${
              isApproving || !isApproved
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600"
            } transition duration-300 ease-in-out`}
          >
            Swap Tokens
          </button>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
}

export default SwapTokens;
