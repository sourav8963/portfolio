import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="public/404 video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-8xl font-bold">404</h1>

        <h2 className="mt-4 text-4xl font-semibold">
          Oops! Page Not Found
        </h2>

        <p className="mt-3 max-w-md text-gray-200">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-8 rounded-lg bg-white px-6 py-3 text-black font-semibold transition hover:bg-gray-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
