import iiitLogo from "../assets/iiit.jpeg"; // make sure this exists
import codameImg from "../assets/codame.jpeg"; // add a related image

export default function PreviewExpe() {
  const previewExperiences = [
    {
      title: 'Teaching Assistant',
      org: 'IIIT Bhopal',
      duration: 'luy 2024 – dec 2024',
      description:
        'Conducted lab sessions and mentored students in Engineering Physics.',
      img: iiitLogo,
      side: 'left',
    },
    {
      title: 'Executive Member',
      org: 'Codame Club, IIIT Bhopal',
      duration: 'Aug 2023 – Present',
      description:
        'Organized coding events and promoted programming culture in the institute.',
      img: codameImg,
      side: 'right',
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#1E232B] text-white">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-md">
          Experience Snapshot
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          A glimpse into my professional and extracurricular engagements.
        </p>
      </div>

      <div className="mt-14 max-w-4xl mx-auto space-y-8 relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-4 md:before:left-1/2 before:w-1 before:bg-blue-500/20">
        {previewExperiences.map((exp, index) => (
          <div
            key={index}
            className={`relative md:w-1/2 px-6 py-5 rounded-xl bg-[#2A2F38] shadow-md transition-all hover:bg-blue-500 hover:text-white flex gap-4 items-start ${
              index % 2 === 0 ? 'md:ml-auto md:mr-0 flex-row' : 'md:mr-auto md:ml-0 flex-row-reverse'
            }`}
          >
            <span className="absolute top-5 left-3 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-2 border-white shadow-md"></span>
            {/* Image */}
            <img
              src={exp.img}
              alt={exp.title}
              className="w-12 h-12 object-contain rounded-full border border-white shadow-md"
            />
            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-400">{exp.org}</p>
              <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
              <p className="text-sm">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
