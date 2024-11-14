import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white font-sans mt-[5vh] md:mt-[10vh]">
      {/* Hero Section */}
      <section className="flex flex-col h-[90vh] items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-blue-800 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-50" />
        <h1 className="text-5xl md:text-6xl font-bold relative z-10 leading-tight">
          Empower Ideas, Fund Projects <br /> with Blockchain Transparency
        </h1>
        <p className="text-lg md:text-xl mt-6 max-w-2xl relative z-10">
          Secure, transparent, and decentralized crowdfunding for a better
          future.
        </p>
        <div className="mt-8 flex gap-4 relative z-10">
          <button
            className="bg-green-500 text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
            onClick={() => navigate("/projects")}
          >
            Get Started
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("how-it-works");
              if (element) {
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="bg-transparent border-2 border-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105"
          >
            Learn More
          </button>
        </div>
        {/* Animated background shapes */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-tr from-blue-400 to-purple-600 opacity-30 rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-blue-600 opacity-20 rounded-full animate-pulse delay-200" />
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900 text-white"
      >
        <h2 className="text-4xl font-bold text-center my-16 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8 bg-gray-900 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-blue-600 text-white shadow-md">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6l4 2"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Step 1</h3>
            <p className="text-gray-400">Create or Join Projects</p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-green-600 text-white shadow-md">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4h16v16H4z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Step 2</h3>
            <p className="text-gray-400">Secure Payments</p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-purple-600 text-white shadow-md">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Step 3</h3>
            <p className="text-gray-400">Receive Rewards</p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-full bg-blue-500 text-white shadow-lg">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Blockchain Transparency
            </h3>
            <p className="text-gray-400">
              Secured and fraud-resistant transactions, ensuring transparency
              for all contributions.
            </p>
          </div>

          <div className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-full bg-purple-500 text-white shadow-lg">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 2l12 12m0 0L6 22m12-10L6 22"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Tokenized Rewards</h3>
            <p className="text-gray-400">
              Contributors earn unique tokens as project rewards, providing
              tangible value.
            </p>
          </div>

          <div className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-full bg-green-500 text-white shadow-lg">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h18v18H3V3z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Liquidity Pool Creation
            </h3>
            <p className="text-gray-400">
              Built-in liquidity pools to foster project growth and offer easier
              access to funds.
            </p>
          </div>

          <div className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-full bg-red-500 text-white shadow-lg">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354V19.645M6.364 6.364l9.272 9.272m0-9.272L6.364 15.636"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Secure Contributions
            </h3>
            <p className="text-gray-400">
              Integrated smart contracts ensure secure, tamper-proof
              contributions.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="flex flex-col items-center py-16 bg-blue-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-50" />
        <h2 className="text-4xl font-semibold relative z-10">
          Join the Future of Crowdfunding
        </h2>
        <p className="mt-4 max-w-md text-gray-300 relative z-10">
          Support meaningful projects with full transparency.
        </p>
        <button
          onClick={() => navigate("/projects")}
          className="mt-8 bg-green-500 text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 relative z-10"
        >
          Get Started
        </button>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-green-400 to-blue-600 opacity-20 rounded-full animate-pulse" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-blue-600 opacity-20 rounded-full animate-pulse delay-200" />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>&copy; 2024 Crowdfunding Platform. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-white">
            About Us
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
