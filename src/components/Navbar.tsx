import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-lg shadow-gray-900/50 p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Aidan Ricci
      </h1>
      <div className="space-x-6">
        <Link 
          to="/" 
          className="text-gray-300 hover:text-white transition-colors duration-200 relative group no-underline"
        >
          Projects
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link 
          to="/about" 
          className="text-gray-300 hover:text-white transition-colors duration-200 relative group no-underline"
        >
          About
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
        {/*Resume*/}
      </div>
    </nav>
  );
}