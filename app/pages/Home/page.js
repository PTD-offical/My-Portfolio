"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faFile, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Pic from "../../../public/MyPic.png";

const Home = () => {
  return (
    <section
      id="Home"
      className="relative flex flex-col-reverse lg:flex-row justify-between items-center mt-5 overflow-hidden"
    >
      {/* Right Section */}
      <div className="Right-Info z-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-2">
        <h1 className="font-semibold text-4xl lg:text-3xl">
          <span>Hi, I’m</span>
          <br />
          <span className="text-accent text-5xl lg:text-4xl">PTD DEV</span>
        </h1>
        <p className="font-bold text-4xl lg:text-2xl">
          <TypeAnimation
            sequence={[
              "Tech Enthusiast.",
              1000,
              "IOT Engineer.",
              1000,
              "Building Solutions for Tomorrow.",
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </p>

        {/* Buttons */}
        <div className="flex gap-5 mt-7 justify-center lg:justify-start">
          <button className="ButtonH flex items-center justify-around w-[250px] h-[70px] text-2xl lg:w-[190px] lg:h-[50px] lg:text-base">
            <span className="text-sm lg:text-2xl">Contact</span>{" "}
            <FontAwesomeIcon className="lg:text-2xl" icon={faPaperPlane} />
          </button>
          <button className="ButtonH flex items-center justify-around w-[250px] h-[70px] text-2xl lg:w-[190px] lg:h-[50px] lg:text-base">
            <span className="text-sm lg:text-2xl">Resume</span>{" "}
            <FontAwesomeIcon className="lg:text-2xl" icon={faFile} />
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-8 mt-7 justify-center lg:justify-start">
          <a
            href="https://www.youtube.com/@ptd4Dev"
            target="_blank"
            className="text-2xl lg:text-3xl"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://www.instagram.com/ptd_development/"
            target="_blank"
            className="text-2xl lg:text-3xl"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.tiktok.com/@ptd_dev"
            target="_blank"
            className="text-2xl lg:text-3xl"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a
            href="https://discord.gg/D5hBTTFySX"
            target="_blank"
            className="text-2xl lg:text-3xl"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            href="https://github.com/PTD-offical"
            target="_blank"
            className="text-2xl lg:text-3xl"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      {/* Left Section */}
      <div className="Left-Img relative mt-10 lg:mt-0 mb-40 lg:mb-0 z-10">
        <svg
          viewBox="0 0 200 200"
          className="w-96 h-96 z-0 lg:w-80 lg:h-80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="size-96"
            fill="#27A5DD"
            d="M56.1,-53.1C67.1,-45.2,66.3,-22.6,64.9,-1.4C63.5,19.8,61.4,39.6,50.5,46C39.6,52.5,19.8,45.6,5,40.7C-9.8,35.7,-19.7,32.6,-34.1,26.1C-48.5,19.7,-67.5,9.8,-74,-6.5C-80.5,-22.8,-74.5,-45.7,-60.1,-53.6C-45.7,-61.5,-22.8,-54.5,-0.1,-54.4C22.6,-54.3,45.2,-61,56.1,-53.1Z"
            transform="translate(100 100)"
          />
        </svg>
        <Image
          src={Pic}
          className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10 w-[270px] h-[270px] lg:w-64 lg:h-64"
          alt="My Picture"
        />
      </div>
    </section>
  );
};

export default Home;
