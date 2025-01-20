"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSun } from '@fortawesome/free-solid-svg-icons';
import logoHeader from '../../public/logoHeader.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const menuRef = useRef(null); // Ref for mobile menu container
  const popupRef = useRef(null); // Ref for the popup container

  // Close the mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close popup if clicked outside the popup
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
      // Close mobile menu if clicked outside the menu
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle the mobile menu state
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Show popup when theme switcher is clicked
  const handleThemeSwitchClick = () => {
    setShowPopup(true);
  };

  // Close the popup manually
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <nav className="relative flex justify-between items-center p-5">
      {/* Logo */}
      <a href="#Home">
        <Image src={logoHeader} alt="Logo" width={130} height={50} className="bg-main rounded-xl" />
      </a>

      {/* Desktop Links */}
      <div className="hidden lg:flex space-x-8 font-roboto">
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#blogs">Blogs</a>
        <a href="#contact">Contact Me</a>
      </div>

      {/* Theme Switcher Button */}
      <button
        onClick={handleThemeSwitchClick}
        className="text-xl p-2 lg:ml-8 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faSun} size="2x" />
      </button>

      {/* Popup for Theme Switcher */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            ref={popupRef}
            className="bg-black  bg-gradient-to-r from-blue-500 to-purple-600 text-white p-5 rounded-lg shadow-lg transform transition-all scale-110 opacity-100 relative w-auto h-32 flex justify-center items-center"
          >
            <span className="text-lg font-semibold">You don't need to change the theme 🤨</span>
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Navbar Toggle */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50">
          <div ref={menuRef} className="w-3/4 h-full p-5 rounded-lg shadow-lg flex flex-col space-y-6 bg-white transition-all dark:bg-black">
            {/* Close Button */}
            <div className="flex justify-between items-center text-main dark:text-white">
              <span>PTD_Dev</span>
              <button onClick={toggleMenu} className="self-end text-2xl p-2 text-main dark:text-white">
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>
            {/* Mobile Links */}
            <a href="#about" onClick={toggleMenu} className="text-lg text-black dark:text-white">About Me</a>
            <a href="#skills" onClick={toggleMenu} className="text-lg text-black dark:text-white">Skills</a>
            <a href="#projects" onClick={toggleMenu} className="text-lg text-black dark:text-white">Projects</a>
            <a href="#blogs" onClick={toggleMenu} className="text-lg text-black dark:text-white">Blogs</a>
            <a href="#contact" onClick={toggleMenu} className="text-lg text-black dark:text-white">Contact Me</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
