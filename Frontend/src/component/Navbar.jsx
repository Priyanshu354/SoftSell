import { useState } from 'react';
import logo from '../assets/SellSoft.logo.png';
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuClick, setMenuClick] = useState(false);

  const handleMenuClick = () => {
    setMenuClick(!menuClick);
  };

  const handleLinkClick = () => {
    setMenuClick(false);
  };

  const linkClasses = "text-sm lg:text-xl font-medium cursor-pointer hover:text-blue-700";

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-white px-6 py-6 shadow-md flex justify-between">
        {/* Logo */}
        <a href="/" className="flex gap-2 items-center">
          <img className="max-w-12 max-h-12 rounded hover:cursor-pointer" src={logo} alt="logo" />
          <span className="lg:text-2xl text-xl font-medium font-display hover:cursor-pointer">SellSoft</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex lg:gap-12 gap-4 justify-center items-center overflow-auto">
          <Link to="how-it-works" smooth duration={600} className={linkClasses}>How It Works</Link>
          <Link to="why-us" smooth duration={600} className={linkClasses}>Why Us</Link>
          <Link to="testimonials" smooth duration={600} className={linkClasses}>Testimonials</Link>
          <Link to="contact" smooth duration={600} className={linkClasses}>Contact</Link>
          <Link to="llm" smooth duration={600} className={linkClasses}>AI</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="md:flex gap-2 hidden">
          <button className="text-md px-6 py-2 rounded-2xl bg-gradient-to-r from-teal-400 to-emerald-500 text-white font-semibold shadow-md hover:scale-105 transition-transform">
            Login
          </button>
          <button className="text-sm px-6 py-2 rounded-2xl border-2 border-teal-500 text-teal-700 font-semibold hover:bg-teal-500 hover:text-white transition-colors">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="p-2 md:hidden" onClick={handleMenuClick}>
          <IoMenu className="h-8 w-8" />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 p-4 z-50 bg-gradient-to-b from-teal-100 to-white transition-all duration-300 ${
        menuClick ? "flex" : "hidden"
      } md:hidden`}>
        <div className="flex flex-col w-full">
          <div className="flex justify-end">
            <button onClick={handleMenuClick}>
              <ImCross className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-start gap-4 mt-6 pl-4">
            <Link to="how-it-works" smooth duration={600} className="text-lg font-medium" onClick={handleLinkClick}>How It Works</Link>
            <Link to="why-us" smooth duration={600} className="text-lg font-medium" onClick={handleLinkClick}>Why Us</Link>
            <Link to="testimonials" smooth duration={600} className="text-lg font-medium" onClick={handleLinkClick}>Testimonials</Link>
            <Link to="contact" smooth duration={600} className="text-lg font-medium" onClick={handleLinkClick}>Contact</Link>
            <Link to="llm" smooth duration={600} className="text-lg font-medium" onClick={handleLinkClick}>AI</Link>
            <Link to="faq" smooth duration={600} className="text-lg font-medium" onClick={handleLinkClick}>FAQ</Link>
            <Link to="footer" smooth duration={600} className="text-lg font-medium" onClick={handleLinkClick}>Priyanshu Raj</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
