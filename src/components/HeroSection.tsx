import { ConnectKitButton } from "connectkit";
import { Web3Provider } from "../Web3Helpers/Web3Provider";

function HeroSection() {
  return (
    <Web3Provider>
      <section className="flex flex-col justify-center items-center text-center bg-gray-900 text-white h-screen">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Empower Ideas with Blockchain Crowdfunding
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-80">
            Launch, fund, and grow your projects with the power of decentralized
            crowdfunding.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold">
              Get Started
            </button>
            <ConnectKitButton />
          </div>
        </div>
      </section>
    </Web3Provider>
  );
}

export default HeroSection;
