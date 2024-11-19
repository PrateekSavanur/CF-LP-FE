import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { config } from "../Web3Helpers/wagmi";
import swapAbi from "../Web3Helpers/ABI";
import erc20Abi from "../Web3Helpers/ERC20_ABI";
import { getAccount } from "wagmi/actions";
import { parseEther } from "viem";

interface SwapData {
  fromToken: `0x${string}`;
  amount: string;
  minEthOut: string;
}

function SwapTokens() {
  const [swapData, setSwapData] = useState<SwapData>({
    fromToken: "0x",
    amount: "",
    minEthOut: "0",
  });
  const [tokenAddress, setTokenAddress] = useState<string>(swapData.fromToken);

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
        address: swapData.fromToken, // Token address
        abi: erc20Abi,
        functionName: "approve",
        args: [
          "0x5a2b6235eEEc4Ee70f41Ce35C7C2791dF77D879C", // Swap contract address
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
        address: "0x5a2b6235eEEc4Ee70f41Ce35C7C2791dF77D879C",
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

  const handleTokenAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAddress = e.target.value;

    // Validate if the input address is a valid Ethereum address
    if (/^0x[a-fA-F0-9]{40}$/.test(inputAddress)) {
      setTokenAddress(inputAddress);
      setSwapData((prevData) => ({
        ...prevData,
        fromToken: inputAddress as `0x${string}`,
      }));
    } else {
      toast.error("Invalid Ethereum address ⚠️", { theme: "dark" });
    }
  };

  return (
    <>
      <div className="text-white text-center bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-yellow-200">
          Swap Tokens Anytime, Anywhere!
        </h1>
        <div className="bg-gradient-to-r from-gray-800 to-black p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="mb-6">
            <label htmlFor="tokenAddress" className="text-gray-400 text-lg">
              Token Address
            </label>
            <input
              id="tokenAddress"
              type="text"
              className="bg-transparent text-2xl w-full outline-none p-3 mb-4 border-b-2 border-blue-500 focus:ring-2 focus:ring-blue-400 transition"
              value={tokenAddress}
              onChange={handleTokenAddressChange}
              placeholder="Enter token address"
            />
          </div>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Amount to Swap</span>
            </div>
            <div className="flex justify-between items-center bg-gray-700 p-4 rounded-lg">
              <input
                type="number"
                className="bg-transparent text-2xl w-full outline-none text-white placeholder-gray-300"
                placeholder="0"
                value={swapData.amount}
                onChange={(e) =>
                  setSwapData({ ...swapData, amount: e.target.value })
                }
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Receive (ETH)</span>
            </div>
            <div className="flex justify-between items-center bg-gray-700 p-4 rounded-lg">
              <input
                type="number"
                className="bg-transparent text-2xl w-full outline-none text-white placeholder-gray-300"
                placeholder="0"
              />
              <span className="text-gray-400">ETH</span>
            </div>
          </div>
          <button
            className="bg-gradient-to-r from-green-500 to-green-700 text-white w-full py-3 rounded-lg hover:from-green-600 hover:to-green-800 transition"
            onClick={handleApprove}
            disabled={isApproving}
          >
            {isApproving ? "Approving..." : "Approve Token"}
          </button>
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full py-3 rounded-lg mt-4 hover:from-blue-600 hover:to-blue-800 transition"
            onClick={handleSwap}
            disabled={isApproving || !isApproved}
          >
            {isApproving ? "Swapping..." : "Swap Tokens"}
          </button>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default SwapTokens;
