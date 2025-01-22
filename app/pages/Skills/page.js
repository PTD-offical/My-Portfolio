"use client";

import React, { useState } from "react";
import Buttons from "../../Components/Buttons";
import CardSkill from "../../Components/CardsSkills/Card";

const skillsData = {
  "Technical Skills": [
    { title: "Programming", description: "Expert in Python, JavaScript" },
    { title: "Web Development", description: "React, Next.js, Tailwind CSS" },
    { title: "Database", description: "MySQL, MongoDB" },
    { title: "DevOps", description: "Docker, Git" },
  ],
  "Practical Skills": [
    { title: "Problem-Solving", description: "Logical Thinking" },
    { title: "Project Management", description: "Agile, Scrum" },
    { title: "Critical Thinking", description: "Strategic Analysis" },
    { title: "Design Thinking", description: "Creative Problem Solving" },
  ],
  "Soft Skills": [
    { title: "Communication", description: "Effective in presentations" },
    { title: "Teamwork", description: "Collaborative approach" },
    { title: "Adaptability", description: "Quick Learner" },
    { title: "Leadership", description: "Motivating Teams" },
  ],
  "Other Skills": [
    { title: "Photography", description: "Expert in composition" },
    { title: "Writing", description: "Creative writing skills" },
    { title: "Multilingual", description: "Fluent in English, Arabic" },
    { title: "Hobbies", description: "Art and DIY Projects" },
  ],
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState("Technical Skills");

  const handleButtonClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <section
      id="Skills"
      className="bg-white dark:bg-main flex flex-col gap-10 lg:gap-20 w-full mb-96 justify-center items-center"
    >
      {/* Title and Navigation */}
      <div className="Title w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-4xl lg:text-5xl font-bold text-center lg:text-left">
            MY <span className="text-accent">SKILLS</span>
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-end gap-3 lg:gap-5 mt-5 lg:mt-0">
            {Object.keys(skillsData).map((skill) => (
              <Buttons
                key={skill}
                name={skill}
                onClick={() => handleButtonClick(skill)}
                aria-pressed={selectedSkill === skill}
              />
            ))}
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
      <div className="w-full max-w-6xl flex flex-row flex-wrap justify-center">
        <div className="w-full bg-white dark:bg-main rounded-lg">
          <div className='flex flex-wrap justify-center gap-10 items-center'>
            {skillsData[selectedSkill].map((card) => (
              <CardSkill
                key={card.title}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;