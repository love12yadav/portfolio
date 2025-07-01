import { Link } from 'react-router-dom';

export default function PreviewProjects() {
  const previewProjects = [
    {
      name: 'NewzBro',
      tech: 'React, Spring Boot, PostMan, MySQL',
      description: 'A personalized news platform with login, live APIs, and Note saving features.',
    },
    {
      name: 'ShopSwift (E-commerce)',
      tech: 'React, PostMan, Spring Boot, MySQL',
      description: 'End-to-end e-commerce site with cart, add Products, and admin dashboard.',
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#1E232B] text-white text-center">
      <h2 className="text-4xl font-bold text-blue-400 drop-shadow">Project Preview</h2>
      <p className="mt-3 text-base text-gray-400 max-w-xl mx-auto">
        Some of my featured development work — built with modern stacks.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        {previewProjects.map((project, idx) => (
          <Link
            to="/projects"
            key={idx}
            className="relative group rounded-2xl overflow-hidden bg-[#2A2F38]/80 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.4)] p-6 text-left border border-blue-400/40 hover:border-blue-500 transition-all hover:scale-[1.02]"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-blue-400 blur-2xl transition-opacity duration-500 z-0"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 text-white drop-shadow-sm">
                {project.name}
              </h3>
              <p className="text-sm text-blue-300 font-medium mb-2 tracking-wide">
                {project.tech}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <Link
        to="/projects"
        className="mt-12 inline-block text-blue-400 border border-blue-400 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all"
      >
        More Projects →
      </Link>
    </section>
  );
}
