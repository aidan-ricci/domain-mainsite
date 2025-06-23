import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

// Add GitHub icon from Heroicons or use your own SVG
const GitHubIcon = () => (
  <svg
    className="w-5 h-5 inline-block mr-2"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.304.763-1.604-2.665-.3-5.466-1.334-5.466-5.933 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.52.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404c1.02.005 2.047.138 3.004.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.656.243 2.873.12 3.176.77.84 1.232 1.912 1.232 3.222 0 4.61-2.804 5.628-5.476 5.922.432.372.816 1.102.816 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"
      clipRule="evenodd"
    />
  </svg>
);

export default function App() {
  return (
    <Router>
      <div className="w-screen min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col">
        <Navbar />
        <main className="p-4 max-w-6xl mx-auto flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="w-full border-t border-gray-300 dark:border-gray-700 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <a
            href="https://github.com/aidan-ricci/domain-mainsite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:text-black dark:hover:text-white"
          >
            <GitHubIcon />
            View this project on GitHub
          </a>
        </footer>
      </div>
    </Router>
  );
}
