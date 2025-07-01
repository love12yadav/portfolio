import {
  FaMusic, FaMountain, FaFutbol, FaUsers, FaMugHot, FaHeart
} from 'react-icons/fa';

export default function About() {
  return (
    <section className="py-20 px-6 bg-[#1E232B] text-white min-h-screen text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-md">
        About Me
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        I'm a dedicated student at the <span className="text-white font-medium">Indian Institute of Information Technology Bhopal</span>, passionate about software development, coding, and programming. I constantly strive to enhance my skills and explore new technologies.
      </p>

      <div className="mt-12 max-w-5xl mx-auto text-left space-y-6 text-base md:text-lg text-gray-200 leading-8">
        <p>
          With a keen interest in creating innovative solutions, I'm driven by the challenge of solving complex problems. I thrive on building impactful and scalable applications using technologies like <strong className="text-white">React</strong>, <strong className="text-white">Spring Boot</strong>, and <strong className="text-white">MySQL</strong>.
        </p>

        <p>
          I’ve contributed as a <strong className="text-white">Teaching Assistant</strong> at IIIT Bhopal and currently serve as an <strong className="text-white">Executive Member</strong> of the Codame Club, where I help organize coding events, workshops, and foster tech collaboration.
        </p>

        <p>
          Apart from coding, I love exploring open-source contributions and cloud tools, and believe in writing clean, maintainable code. I’m always eager to work on meaningful projects and grow through collaboration.
        </p>

        <p className="text-blue-300 italic hover:text-white transition duration-300">
          "Innovation is my fuel, and code is my language."
        </p>
      </div>

      {/* Beyond the Code */}
      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-6">
          Beyond the Code
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          I’m more than just a software engineer — here’s a glimpse into the values and interests that shape how I work and live.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          <div className="bg-[#2A2F38] rounded-2xl p-6 hover:scale-105 transform transition duration-300">
            <FaMusic className="text-3xl text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white">Music</h3>
            <p className="text-gray-400 mt-2">Tunes help me focus, inspire creativity, and balance the logic of code with rhythm.</p>
          </div>

          <div className="bg-[#2A2F38] rounded-2xl p-6 hover:scale-105 transform transition duration-300">
            <FaMountain className="text-3xl text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white">Mountain Treks</h3>
            <p className="text-gray-400 mt-2">Nature challenges me physically and mentally — hiking gives me clarity and peace.</p>
          </div>

          <div className="bg-[#2A2F38] rounded-2xl p-6 hover:scale-105 transform transition duration-300">
            <FaFutbol className="text-3xl text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold text-white">Sports</h3>
            <p className="text-gray-400 mt-2">From football to workouts, sports keep me disciplined and team-oriented.</p>
          </div>

          <div className="bg-[#2A2F38] rounded-2xl p-6 hover:scale-105 transform transition duration-300">
            <FaUsers className="text-3xl text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white">Team Player</h3>
            <p className="text-gray-400 mt-2">I enjoy collaborating with peers and building communities that foster innovation and growth.</p>
          </div>

          <div className="bg-[#2A2F38] rounded-2xl p-6 hover:scale-105 transform transition duration-300">
            <FaMugHot className="text-3xl text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white">Coffee & Code</h3>
            <p className="text-gray-400 mt-2">A good brew fuels long coding sessions and deep thought — it's my debugging companion.</p>
          </div>

          <div className="bg-[#2A2F38] rounded-2xl p-6 hover:scale-105 transform transition duration-300">
            <FaHeart className="text-3xl text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white">Empathy</h3>
            <p className="text-gray-400 mt-2">I value empathy in teamwork and believe in supporting those around me personally and professionally.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
  