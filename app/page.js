"use client"

import React, { useState, useEffect } from "react";
import Loading from "./loading"; // Adjust the path if necessary
import Header from "./Components/Header";
import HomeSec from "./pages/Home/page";
import About from "./pages/About/page";
import Skills from "./pages/Skills/page"
import Projects from "./pages/Projects/page"
import ScrollUp from "./Components/ScrollUp"
import ContactForm from "./pages/Contact/page"
import Footer from "./Components/Footer"

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
    <div className=" w-screen font-poppins text-black dark:bg-main dark:text-white pl-11 pr-11">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ScrollUp />
          <Header />
          <div className="flex gap-40 flex-col w-full ">
            <HomeSec />
            <About />
            <div className="flex gap-[1500]  gap-[1500] flex-col">

              <Projects />
              <Skills />
              <ContactForm />
            </div>
<Footer/>

          </div>
        </>)}
    </div>
  );
}
