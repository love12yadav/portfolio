import React from "react";
import profileImage from "../assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";

import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import instagramIcon from "../assets/instagram.png";
import leetcodeIcon from "../assets/leetcode.png";

function HomeSection() {
  return (
    <section className="min-h-screen text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-20">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I'm Love Yadav
          </h1>

          <p className="text-blue-400 text-base sm:text-lg md:text-xl font-semibold">
            <Typewriter
              words={[
                "Full Stack Developer 👨‍💻",
                "React & Spring Boot Enthusiast",
                "Clean Code Advocate",
                "Open Source Contributor",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </p>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto md:mx-0 leading-relaxed">
            I build scalable full-stack web applications using React, Spring Boot, and clean architecture principles. Based in India.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <a
              href="./Contact"
              className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded-full font-medium transition duration-200 shadow-md"
            >
              Hire Me
            </a>
            <a
              href="./About"
              className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-full font-medium transition duration-200"
            >
              About Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-6 flex-wrap">
            <a
              href="https://www.linkedin.com/in/love-yadav-6417042b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-9 h-9 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://github.com/love12yadav"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="w-9 h-9 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://www.instagram.com/_.love_yadav_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-9 h-9 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://leetcode.com/u/yadavlove/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={leetcodeIcon}
                alt="LeetCode"
                className="w-9 h-9 hover:scale-110 transition"
              />
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
            <img
              src={profileImage}
              alt="Love Yadav"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
