import { NavLink } from "react-router-dom";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-orange-500 font-bold"
      : "text-gray-300 hover:text-white transition";

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <h1 className="text-xl font-bold text-orange-500 border border-gray-700 border-[1px] rounded-[25px] h-8 w-8 flex items-center justify-center">
            AJ
          </h1>
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          <BiMenuAltLeft />
        </button>

        {/* Links */}
        <ul
          className={`
            md:flex md:items-center md:gap-10
            absolute md:static left-0 w-full md:w-auto
            px-6 md:px-0 transition-all duration-300 ease-in
            ${open ? "top-16 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"}
          `}
        >
          <li>
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={linkStyle}>
              About me
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={linkStyle}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={linkStyle}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkStyle}>
              Contact me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
