"use client";

import React, { useState } from "react";
import Buttons from "../../Components/Buttons";
import CardProject from "../../Components/CardsSkills/Card"; // Adjusted naming for clarity

// Project Data
const PROJECTSDATA = {
  "Web Projects": [
    { title: "Portfolio Website", description: "Built using React, Next.js, and Tailwind CSS." },
    { title: "E-Commerce Platform", description: "Full-stack project with a custom API and MongoDB." },
    { title: "Blog CMS", description: "Developed a blog platform using Python and Flask." },
    { title: "Admin Dashboard", description: "Dynamic dashboard with chart integrations using Chart.js." },
  ],
  "Mobile Projects": [
    { title: "Task Manager App", description: "A Flutter app to manage daily tasks effectively." },
    { title: "Fitness Tracker", description: "Cross-platform app for tracking fitness goals." },
    { title: "Weather App", description: "Simple weather forecast app with live API integration." },
    { title: "Chat Application", description: "Real-time chat app using Firebase and Flutter." },
  ],
  "Hardware": [
    { title: "IoT Smart Home", description: "Developed using Raspberry Pi and NodeMCU." },
    { title: "Robotic Arm", description: "Arduino-based robotic arm for industrial tasks." },
    { title: "IoT Weather Station", description: "Monitors and displays weather data in real-time." },
    { title: "RC Car", description: "Built and programmed an RC car for educational purposes." },
  ],
  "IoT Projects": [
    { title: "Smart Lighting System", description: "Automated lighting controlled via a mobile app." },
    { title: "IoT Door Lock", description: "Bluetooth-enabled smart lock system." },
    { title: "Remote Monitoring System", description: "IoT-based system for monitoring machinery remotely." },
    { title: "IoT Environmental Monitor", description: "Tracks air quality, temperature, and humidity." },
  ],
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web Projects");

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section
      id="Projects"
      className="bg-white dark:bg-main flex flex-col gap-10 lg:gap-20 w-full mb-96 justify-center items-center"
    >
      {/* Title and Navigation */}
      <div className="Title w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-4xl lg:text-5xl font-bold text-center lg:text-left">
            MY <span className="text-accent">PROJECTS</span>
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-end gap-3 lg:gap-5 mt-5 lg:mt-0">
            {Object.keys(PROJECTSDATA).map((category) => (
              <Buttons
                key={category}
                name={category}
                onClick={() => handleButtonClick(category)}
                aria-pressed={selectedCategory === category}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Title */}
      <div className="text-center">
        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-200 capitalize">
          {selectedCategory}
        </h3>
      </div>

      {/* Projects Section */}
      <div className="w-full max-w-6xl flex flex-row flex-wrap justify-center">
        <div className="w-full bg-white dark:bg-main rounded-lg">
          <div className="flex flex-wrap justify-center gap-10 items-center">
            {PROJECTSDATA[selectedCategory].map((project) => (
              <CardProject
                key={project.title}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
