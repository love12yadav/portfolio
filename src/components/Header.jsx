import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import profileImage from "../assets/profile.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-blue-400 font-semibold' : 'hover:text-blue-400';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className="text-white p-4 shadow-md bg-cover bg-center"
      style={{
        backgroundImage: "url('/kp.png')",
      }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={profileImage}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover border border-white shadow"
          />
        </NavLink>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
          <li><NavLink to="/skills" className={navLinkClass}>Skills</NavLink></li>
          <li><NavLink to="/experience" className={navLinkClass}>Experience</NavLink></li>
          <li><NavLink to="/projects" className={navLinkClass}>Projects</NavLink></li>
          <li><NavLink to="/achievements" className={navLinkClass}>Achievements</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
        </ul>

        {/* Download CV - Desktop */}
        <a
          href="/cvlatest.pdf"
          download
          className="hidden md:inline-block bg-blue-500 hover:bg-blue-400 text-white text-sm px-4 py-2 rounded-full font-medium transition shadow"
        >
          Download CV
        </a>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-20">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#1E232B] text-white px-6 py-8 flex flex-col space-y-4 text-lg font-medium z-10 shadow-lg">
            <NavLink to="/" onClick={toggleMenu} className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" onClick={toggleMenu} className={navLinkClass}>About</NavLink>
            <NavLink to="/skills" onClick={toggleMenu} className={navLinkClass}>Skills</NavLink>
            <NavLink to="/experience" onClick={toggleMenu} className={navLinkClass}>Experience</NavLink>
            <NavLink to="/projects" onClick={toggleMenu} className={navLinkClass}>Projects</NavLink>
            <NavLink to="/achievements" onClick={toggleMenu} className={navLinkClass}>Achievements</NavLink>
            <NavLink to="/contact" onClick={toggleMenu} className={navLinkClass}>Contact</NavLink>

            <a
              href="/cvlatest.pdf"
              download
              className="mt-4 bg-blue-500 hover:bg-blue-400 text-white text-sm px-4 py-2 rounded-full font-medium transition shadow text-center"
            >
              Download CV
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
