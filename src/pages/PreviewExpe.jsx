export default function PreviewExpe() {
  const previewExperiences = [
    {
      title: 'Teaching Assistant',
      org: 'IIIT Bhopal',
      duration: 'Jan 2024 – May 2024',
      highlight: 'Guided labs & mentored students in Engineering Physics.',
    },
    {
      title: 'Executive Member',
      org: 'Codame Club',
      duration: 'Aug 2023 – Present',
      highlight: 'Led coding events & tech initiatives.',
    },
  ];

  return (
    <section className="py-14 px-6 bg-[#1E232B] text-white text-center">
      <h2 className="text-4xl font-bold text-blue-400 drop-shadow-sm">Experience</h2>
      <p className="mt-3 text-base text-gray-400 max-w-xl mx-auto">
        Recent roles where I contributed and learned the most.
      </p>

      <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
        {previewExperiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#2A2F38] hover:scale-105 hover:shadow-xl transition-all p-6 rounded-2xl text-left w-full md:w-80 border-l-4 border-blue-400"
          >
            <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
            <p className="text-sm text-gray-400">{exp.org}</p>
            <p className="text-sm text-gray-500">{exp.duration}</p>
            <p className="mt-2 text-base">{exp.highlight}</p>
          </div>
        ))}
      </div>

      <a
        href="/experience"
        className="mt-10 inline-block text-blue-400 border border-blue-400 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all"
      >
        View All →
      </a>
    </section>
  );
}
