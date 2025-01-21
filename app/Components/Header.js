import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSun } from '@fortawesome/free-solid-svg-icons';
import logoHeader from '../../public/logoHeader.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const menuRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleThemeSwitchClick = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <nav className="relative flex justify-between items-center pt-5 pr-5">
      <a href="#Home">
        <Image src={logoHeader} alt="Logo" width={130} height={50} className="bg-main rounded-xl" />
      </a>

      <div className="hidden lg:flex space-x-8 font-roboto">
        <a href="#About">About Me</a>
        <a href="#Skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#Blogs">Blogs</a>
        <a href="#Contact">Contact Me</a>
      </div>

      <button
        onClick={handleThemeSwitchClick}
        className="text-xl p-2 lg:ml-8 flex items-center justify-center"
        aria-label="Switch Theme"
      >
        <FontAwesomeIcon icon={faSun} size="2x" />
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            ref={popupRef}
            className="bg-black bg-gradient-to-r from-blue-500 to-purple-600 text-white p-5 rounded-lg shadow-lg transform transition-all scale-110 opacity-100 relative w-auto h-32 flex justify-center items-center"
          >
            <span className="text-lg font-semibold">Protect Your Eyes 🤨</span>
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white text-2xl"
              aria-label="Close Popup"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}

      <div className="lg:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Mobile Menu">
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50">
          <div ref={menuRef} className="w-3/4 h-full p-5 rounded-lg shadow-lg flex flex-col space-y-6 bg-white transition-all dark:bg-black">
            <div className="flex justify-between items-center text-main dark:text-white">
              <span>PTD_Dev</span>
              <button onClick={toggleMenu} className="self-end text-2xl p-2 text-main dark:text-white" aria-label="Close Mobile Menu">
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>
            <a href="#About" onClick={toggleMenu} className="text-lg text-black dark:text-white">About Me</a>
            <a href="#Skills" onClick={toggleMenu} className="text-lg text-black dark:text-white">Skills</a>
            <a href="#Projects" onClick={toggleMenu} className="text-lg text-black dark:text-white">Projects</a>
            <a href="#Blogs" onClick={toggleMenu} className="text-lg text-black dark:text-white">Blogs</a>
            <a href="#Contact" onClick={toggleMenu} className="text-lg text-black dark:text-white">Contact Me</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;