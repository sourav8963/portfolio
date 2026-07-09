import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-extrabold text-gray-900">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        <p className="mt-3 text-gray-600">
          The page you are looking for doesn't exist, may have been moved,
          or the URL might be incorrect.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 transition"
          >
            <Home size={18} />
            Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 hover:bg-gray-100 transition"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center text-gray-400">
          <Search size={18} />
          <span className="ml-2 text-sm">
            Error Code: 404 • Resource Not Found
          </span>
        </div>
      </div>
    </div>
  );
}
