import { FaJava, FaJs, FaReact, FaDocker, FaAws, FaGit } from 'react-icons/fa';

export default function PreviewSkills() {
  const previewSkills = [
    { name: 'Java', icon: <FaJava /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Git', icon: <FaGit /> },
  ];

  return (
    <section className="py-20 px-6 bg-[#1E232B] text-white text-center">
      <h2 className="text-4xl font-bold text-blue-400">Tech Stack</h2>
      <p className="mt-4 text-base text-gray-400">
        Tools I regularly use in full-stack and cloud projects.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-10">
        {previewSkills.map(skill => (
          <div
            key={skill.name}
            className="bg-[#2A2F38] hover:bg-blue-500 transition p-6 rounded-xl flex flex-col items-center shadow-md"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <div className="text-base font-semibold">{skill.name}</div>
          </div>
        ))}
      </div>

      <a
        href="/skills"
        className="inline-block mt-12 text-lg text-blue-400 border border-blue-400 px-6 py-2.5 rounded-full hover:bg-blue-500 hover:text-white transition"
      >
        View All Skills →
      </a>
    </section>
  );
}
