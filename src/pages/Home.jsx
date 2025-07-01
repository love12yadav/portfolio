import React from "react";
import Hero from "./Hero";
import Skills from "./PreviewSkills";
import Experience from "./PreviewExpe";
import Projects from "./PreviewProjects";
import About from "./About";

const Divider = () => (
  <div style={{ height: "0.8px", backgroundColor: "#ffffff", width: "100%" }} />
);

const Home = () => {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/kp.png')" }}
      >
        <Hero />
      </section>

      <Divider />

      {/* About Section */}
      <section id="about" className="bg-black text-white py-16 px-4">
        <About />
      </section>

      <Divider />

      {/* Skills Preview Section */}
      <section id="skills" className="bg-black text-white py-16 px-4">
        <Skills />
      </section>

      <Divider />

      {/* Experience Preview Section */}
      <section id="experience" className="bg-black text-white py-16 px-4">
        <Experience />
      </section>

      <Divider />

      {/* Projects Preview Section */}
      <section id="projects" className="bg-black text-white py-16 px-4">
        <Projects />
      </section>
    </div>
  );
};

export default Home;
