import { Web3Provider } from "../Web3Helpers/Web3Provider";
import { ConnectKitButton } from "connectkit";
import { useSwitchChain } from "wagmi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { chains, switchChain } = useSwitchChain();
  const [selectedChain, setSelectedChain] = useState(1 || 111555111);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 px-4 py-3 bg-gray-900 shadow-lg z-50">
      <Web3Provider>
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div
            onClick={() => {
              navigate("/");
            }}
            className="text-xl font-bold text-white tracking-wide cursor-pointer"
          >
            CrowdFunding
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Desktop Menu */}
          <div
            className={`flex items-center gap-4 ${isMenuOpen ? "block" : "hidden"} md:flex`}
          >
            <ConnectKitButton />
            <div className="flex gap-2 p-2 rounded-lg bg-gray-800 border border-gray-700 shadow-sm">
              {chains.map((chain) => (
                <div
                  key={chain.id}
                  className={`cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 border border-transparent text-white ${
                    selectedChain === chain.id
                      ? "bg-blue-600"
                      : "bg-gray-700 hover:bg-blue-500"
                  }`}
                  onClick={() => {
                    switchChain({ chainId: chain.id });
                    setSelectedChain(chain.id);
                  }}
                >
                  {chain.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 flex flex-col gap-3">
            <ConnectKitButton />
            <div className="flex flex-wrap gap-2 p-2 rounded-lg bg-gray-800 border border-gray-700 shadow-sm">
              {chains.map((chain) => (
                <div
                  key={chain.id}
                  className={`cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 border border-transparent text-white ${
                    selectedChain === chain.id
                      ? "bg-blue-600"
                      : "bg-gray-700 hover:bg-blue-500"
                  }`}
                  onClick={() => {
                    switchChain({ chainId: chain.id });
                    setSelectedChain(chain.id);
                  }}
                >
                  {chain.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </Web3Provider>
    </div>
  );
}

export default Navbar;
