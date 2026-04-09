import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-red-500 mb-4">
        404 - Page Not Found
      </h1>

      <p className="mb-4">
        No match for: <span className="font-semibold">{location.pathname}</span>
      </p>

      <Link to="/" className="text-blue-500 hover:underline">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;