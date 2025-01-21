"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`fixed bottom-5 right-5 ${isVisible ? "block" : "hidden"} z-50`}>
      <button
        onClick={scrollToTop}
        className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform transform hover:scale-110"
        aria-label="Scroll to Top"
      >
        <FontAwesomeIcon icon={faAngleUp} className="text-2xl" />
      </button>
    </div>
  );
};

export default ScrollUp;