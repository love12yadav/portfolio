import {
  FaStar,
  FaTrophy,
  FaExternalLinkAlt,
  FaCode,
  FaUniversity,
  FaCertificate
} from "react-icons/fa";

export default function Achievements() {
  const achievements = [
    {
      icon: <FaStar className="text-blue-400 text-3xl" />,
      title: "Knight Badge – LeetCode",
      description: "Solved 450+ problems. Ranked top 6% globally.",
      link: "https://leetcode.com/u/yadavlove/",
    },
    {
      icon: <FaStar className="text-yellow-400 text-3xl" />,
      title: "3-Star – CodeChef",
      description: "Reached 1600+ rating.",
      link: "https://www.codechef.com/users/love_yadav",
    },
    {
      icon: <FaUniversity className="text-green-400 text-3xl" />,
      title: "Forage Certificate – J.P. Morgan #1",
      description: "Completed Software Engineering Virtual Experience.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_68QYjQzXMKEpLgiR4_1718013849581_completion_certificate.pdf",
    },
    {
      icon: <FaUniversity className="text-purple-400 text-3xl" />,
      title: "Forage Certificate – J.P. Morgan #2",
      description: "Completed Cybersecurity Job Simulation.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/gWbW5qHAChqQBGWpA_JPMorgan%20Chase%20&%20Co._68QYjQzXMKEpLgiR4_1716974018671_completion_certificate.pdf",
    },
    {
  icon: <FaTrophy className="text-pink-400 text-3xl" />,
  title: "Smart India Hackathon – Participant (2023 & 2024)",
  description: "Represented IIIT Bhopal in SIH 2023 and 2024, working on real-world software problem statements with a focus on innovation and team collaboration.",
},

    {
  icon: <FaCertificate className="text-cyan-400 text-3xl" />,
  title: "Career Essentials in Software Development",
  description: "Completed Microsoft & LinkedIn Learning program covering Git, software lifecycle, and clean coding practices.",
  link: "https://drive.google.com/file/d/1WJV-hfxVpIwoZKUMw4NGwUDcjJWuJkrm/view?usp=sharing",
},

  ];

  return (
    <section className="bg-[#1E232B] text-white py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-md">
          Achievements & Certifications
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
          A showcase of my milestones in coding, internships, and tech programs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {achievements.map((ach, i) => (
          <div
            key={i}
            className={`bg-[#2A2F38] p-6 rounded-2xl border border-transparent shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 ${
              ach.link ? "cursor-pointer hover:border-blue-500" : ""
            }`}
            onClick={() => ach.link && window.open(ach.link, "_blank")}
          >
            <div className="mb-4 flex items-center justify-between">
              {ach.icon}
              {ach.link && <FaExternalLinkAlt className="text-blue-300" />}
            </div>
            <h3 className="text-xl font-semibold mb-1">{ach.title}</h3>
            <p className="text-gray-400 text-sm">{ach.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
