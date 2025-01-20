"use client"

import React, { useState, useEffect } from "react";
import Loading from "./loading"; // Adjust the path if necessary
import Header from "./Components/Header.js";
import HomeSec from "./pages/Home/page.js";
import About from "./pages/About/page";

export default function page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a 5-second timer to switch from loader to main content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="min-h-screen w-screen font-poppins bg-white text-black dark:bg-main dark:text-white pl-11 pr-11">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <HomeSec />
          <About></About>
        </>
      )}
    </div>
  );
}
