"use client";
import React from "react";
import Image from "next/image";
import abt from "../../../public/MyPic.png";

const About = () => {
  return (
    <section
      id="About"
      className="relative flex flex-col lg:flex-row justify-between items-center mt-36 pb-28 px-6 overflow-hidden"
    >
      {/* Image Section */}
      <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-12">
        <Image
          src={abt}
          alt="My Picture"
          width={300}
          height={300}
          className="object-cover rounded-lg shadow-lg"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="text-center lg:text-left max-w-lg">
        <h2 className="text-5xl font-bold mb-6">
          ABOUT <span className="text-accent">ME</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Hi, my name is Mohammad Elkhouly, and I’m passionate about technology,
          programming, and development. I love working on exciting projects,
          exploring new technologies, and sharing my knowledge with others.
          Recently, I started my own YouTube channel,{" "}
          <span className="font-semibold text-accent">ptd_Dev</span>, where I
          create content to help aspiring developers and tech enthusiasts.
          Whether it’s coding, troubleshooting, or experimenting with new tools,
          I’m always eager to learn and grow in the tech world. Let’s connect
          and build something amazing together! 🚀
        </p>
      </div>
    </section>
  );
};

export default About;
