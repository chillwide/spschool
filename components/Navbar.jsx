import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">Stoneridge Prep</Link>
        <div className="space-x-4 text-gray-700 font-medium">
          <Link to="/about">About</Link>
          <Link to="/academics">Academics</Link>
          <Link to="/counseling">Counseling</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}