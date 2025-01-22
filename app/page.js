"use client";

import React, { useState, useEffect } from "react";
import Loading from "./loading"; // Adjust the path if necessary
import Header from "./Components/Header";
import HomeSec from "./pages/Home/page";
import About from "./pages/About/page";
import Skills from "./pages/Skills/page";
import Projects from "./pages/Projects/page";
import ScrollUp from "./Components/ScrollUp";
import ContactForm from "./pages/Contact/page";
import Footer from "./Components/Footer";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen font-poppins text-black dark:bg-main dark:text-white px-11">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="flex flex-col w-full gap-10"> {/* Adjusted gap for better spacing */}
            <HomeSec />
            <About />
            <Projects />
            <Skills />
          </div>
          <div> {/* Added margin-top for spacing before ContactForm */}
            <ContactForm />
          </div>
          <Footer />
          <ScrollUp />
        </>
      )}
    </div>
  );
}