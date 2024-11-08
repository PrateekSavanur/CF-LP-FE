import { Web3Provider } from "../Web3Helpers/Web3Provider";
import { ConnectKitButton } from "connectkit";
import { useSwitchChain } from "wagmi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { chains, switchChain } = useSwitchChain();
  const [selectedChain, setSelectedChain] = useState(1 || 111555111);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 px-4 py-4 bg-gray-900 shadow-lg z-50">
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
            className={`flex items-center gap-6 ${isMenuOpen ? "block" : "hidden"} md:flex`}
          >
            <nav className="flex gap-4">
              <button
                onClick={() => navigate("/projects")}
                className="text-white font-medium hover:text-blue-400"
              >
                Projects
              </button>
              <button
                onClick={() => navigate("/create-project")}
                className="text-white font-medium hover:text-blue-400"
              >
                Create Project
              </button>
            </nav>
            <ConnectKitButton />
            <div className="relative">
              {/* Dropdown Trigger */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-gray-800 text-white hover:bg-blue-500"
              >
                {chains.find((chain) => chain.id === selectedChain)?.name ||
                  "Select Chain"}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-10">
                  {chains.map((chain) => (
                    <button
                      key={chain.id}
                      onClick={() => {
                        switchChain({ chainId: chain.id });
                        setSelectedChain(chain.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-left text-sm text-white rounded-lg hover:bg-blue-500 ${
                        selectedChain === chain.id ? "bg-blue-600" : ""
                      }`}
                    >
                      {chain.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 flex flex-col gap-3">
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => navigate("/projects")}
                className="text-white font-medium hover:text-blue-400"
              >
                Projects
              </button>
              <button
                onClick={() => navigate("/create-project")}
                className="text-white font-medium hover:text-blue-400"
              >
                Create Project
              </button>
            </nav>
            <ConnectKitButton />
            <div className="relative">
              {/* Mobile Dropdown Trigger */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-3 py-2 text-sm font-medium rounded-lg bg-gray-800 text-white hover:bg-blue-500"
              >
                {chains.find((chain) => chain.id === selectedChain)?.name ||
                  "Select Chain"}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {/* Mobile Dropdown Menu */}
              {isDropdownOpen && (
                <div className="mt-2 bg-gray-800 rounded-lg shadow-lg">
                  {chains.map((chain) => (
                    <button
                      key={chain.id}
                      onClick={() => {
                        switchChain({ chainId: chain.id });
                        setSelectedChain(chain.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-left text-sm text-white rounded-lg hover:bg-blue-500 ${
                        selectedChain === chain.id ? "bg-blue-600" : ""
                      }`}
                    >
                      {chain.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </Web3Provider>
    </div>
  );
}

export default Navbar;
