export default function Projects() {
  const projects = [
    {
      name: 'NewzBro',
      tech: 'React, Spring Boot, MySQL',
      description: `A personalized news delivery platform. Features user login, category-based filtering,
      live news fetched from public APIs, and a built-in notes section to save insights while browsing.
      The backend serves clean RESTful APIs using Spring Boot and stores data securely in MySQL.`,
      github: 'https://github.com/love12yadav/newzback',
      demo: 'https://newzbro.vercel.app', // replace with actual if deployed
    },
    {
      name: 'ShopSwift (E-Commerce)',
      tech: 'React, Redux, Spring Boot, MySQL',
      description: `A full-featured e-commerce application with cart system, user registration,
      product management, and an admin dashboard. Includes secure authentication,
      product filtering, and order placement workflows. Built using microservices pattern and Redux for state.`,
      github: 'https://github.com/love12yadav/backend',
      
       // replace if hostedhttps://justlisten-pi.vercel.app/
    },
    {
      name: 'Hands-Free Song Player',
      tech: 'React, Spring Boot, Web Speech API',
      description: `An innovative music player that allows users to control song playback using
      voice commands and clap detection. Integrates speech recognition and sound detection to
      switch tracks, pause, or play — hands-free! Backend provides song data and stream URLs.`,
      github: 'https://github.com/love12yadav/songfront',
      
      
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#1E232B] text-white text-center min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-400">Projects</h1>
      <p className="mt-5 text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
        Some of the work I’ve built and collaborated on — combining frontend innovation and backend power.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#2A2F38] hover:scale-105 transition-transform p-6 rounded-2xl text-left shadow-lg border border-blue-500/20"
          >
            <h2 className="text-2xl font-bold text-blue-300 mb-2">{project.name}</h2>
            <p className="text-sm text-blue-200 mb-2">{project.tech}</p>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline"
              >
                GitHub ↗
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline"
              >
                Live Demo ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
