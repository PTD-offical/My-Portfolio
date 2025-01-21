"use client";

import React, { useState } from "react";
import Buttons from "../../Components/Buttons";
import CardSkill from "../../Components/CardsSkills/Card";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState("Technical Skills");

  const handleButtonClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (

<section
  id="Skills"
  className="bg-white dark:bg-main flex flex-col gap-10 lg:gap-20 h-auto lg:mb-20 w-full justify-center items-center px-4 sm:px-10"
>
  {/* Title and Navigation */}
  <div className="Title w-full max-w-6xl">
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <h2 className="text-4xl lg:text-5xl font-bold text-center lg:text-left">
        MY <span className="text-accent">SKILLS</span>
      </h2>

      <div className="flex flex-wrap justify-center lg:justify-end gap-3 lg:gap-5 mt-5 lg:mt-0">
        <Buttons
          name="Technical Skills"
          onClick={() => handleButtonClick("Technical Skills")}
        />
        <Buttons
          name="Practical Skills"
          onClick={() => handleButtonClick("Practical Skills")}
        />
        <Buttons
          name="Soft Skills"
          onClick={() => handleButtonClick("Soft Skills")}
        />
        <Buttons
          name="Other Skills"
          onClick={() => handleButtonClick("Other Skills")}
        />
      </div>
    </div>
  </div>

  {/* Dynamic Title */}
  <div className="text-center">
    <h3 className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-200 capitalize">
      {selectedSkill}
    </h3>
  </div>

  {/* Cards Section */}
  <div className="relative w-full max-w-6xl flex flex-row flex-wrap justify-center">
    {["Technical Skills", "Practical Skills", "Soft Skills", "Other Skills"].map(
      (skill) => (
        <div
          key={skill}
          className={`absolute inset-0 transition-transform transform duration-700 ease-in-out ${
            selectedSkill === skill
              ? "opacity-100 translate-x-0 scale-100 z-10"
              : "opacity-0 -translate-x-full scale-90 z-0 pointer-events-none"
          }`}
        >
          <div className=" w-full max-w-6xl p-6 bg-white dark:bg-main">
            {skill === "Technical Skills" && (
              <div className='flex flex-wrap justify-center gap-10 items-center'>
                <CardSkill
                
                  title="Programming"
                  description="Expert in Python, JavaScript"
                />
                <CardSkill
                  title="Web Development"
                  description="React, Next.js, Tailwind CSS"
                />
                <CardSkill title="Database" description="MySQL, MongoDB" />
                <CardSkill title="DevOps" description="Docker, Git" />
              </div>
            )}
            {skill === "Practical Skills" && (
              <div className='flex flex-wrap justify-center gap-10 items-center'>
                <CardSkill
                  title="Problem-Solving"
                  description="Logical Thinking"
                />
                <CardSkill
                  title="Project Management"
                  description="Agile, Scrum"
                />
                <CardSkill
                  title="Critical Thinking"
                  description="Strategic Analysis"
                />
                <CardSkill
                  title="Design Thinking"
                  description="Creative Problem Solving"
                />
              </div>
            )}
            {skill === "Soft Skills" && (
              <div className='flex flex-wrap justify-center gap-10 items-center'>
                <CardSkill
                  title="Communication"
                  description="Effective in presentations"
                />
                <CardSkill
                  title="Teamwork"
                  description="Collaborative approach"
                />
                <CardSkill title="Adaptability" description="Quick Learner" />
                <CardSkill
                  title="Leadership"
                  description="Motivating Teams"
                />
              </div>
            )}
            {skill === "Other Skills" && (
              <div className='flex flex-wrap justify-center gap-10 items-center'>
                <CardSkill
                  title="Photography"
                  description="Expert in composition"
                />
                <CardSkill title="Writing" description="Creative writing skills" />
                <CardSkill
                  title="Multilingual"
                  description="Fluent in English, Arabic"
                />
                {/* Center the last card */}
                  <CardSkill
                    title="Hobbies"
                    description="Art and DIY Projects"
                  />
              </div>
            )}
          </div>
        </div>
      )
    )}
  </div>
</section>

  );
};

export default Skills;