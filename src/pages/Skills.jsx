import {
  FaPython, FaPhp, FaJs, FaReact, FaDocker, FaAws, FaGit, FaLinux,
  FaJava, FaCartPlus, FaSearchPlus, FaProjectDiagram, FaUsers, FaBrain, FaHeart, FaClock, FaRocket
} from 'react-icons/fa';
import {
  SiMysql, SiLaravel, SiFlask, SiHtml5, SiCss3, SiJquery,
  SiSwagger, SiApachemaven, SiBootstrap, SiSpring, SiHibernate,
  SiPostman, SiJira, SiGoogleanalytics, SiApachekafka, SiTailwindcss, SiMicrogenetics
} from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function Skills() {
  const skills = [
    { name: 'Java', icon: <FaJava />, note: 'ETL, scripting, APIs' },
    { name: 'Spring Boot', icon: <SiSpring />, note: 'Robust REST APIs with Java backend' },
    { name: 'JavaScript', icon: <FaJs />, note: 'Frontend dynamics & scripting' },
    { name: 'React.js', icon: <FaReact />, note: 'Frontend experimentation' },
    { name: 'HTML5', icon: <SiHtml5 />, note: 'Semantic structure' },
    { name: 'Kafka', icon: <SiApachekafka />, note: 'Real-time data pipelines' },
    { name: 'CSS3', icon: <SiCss3 />, note: 'Responsive design styling' },
    { name: 'MySQL', icon: <SiMysql />, note: 'Reliable relational database' },
    { name: 'Microservices', icon: <SiMicrogenetics />, note: 'Distributed architecture' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, note: 'Utility-first UI styling' },
    { name: 'Email Integration', icon: <MdEmail />, note: 'SMTP & transactional mail' },
    { name: 'Hibernate', icon: <SiHibernate />, note: 'ORM for database mapping' },
    { name: 'JSP', icon: <RiCodeSSlashLine />, note: 'Java-based dynamic web pages' },
    { name: 'Servlet', icon: <RiCodeSSlashLine />, note: 'Java classes for handling HTTP requests' },
    { name: 'C++', icon: <FaSearchPlus />, note: 'Competitive programming & DSA' },
    { name: 'AWS (Lambda, SQS)', icon: <FaAws />, note: 'Serverless functions & queues' },
    { name: 'Docker', icon: <FaDocker />, note: 'Isolated, repeatable environments' },
    { name: 'Git', icon: <FaGit />, note: 'Version control confidence' },
    { name: 'Postman', icon: <SiPostman />, note: 'API testing powerhouse' },
    { name: 'OpenAPI/Swagger', icon: <SiSwagger />, note: 'API documentation' },
    { name: 'Apache Maven', icon: <SiApachemaven />, note: 'Java build management' },
    { name: 'REST APIs', icon: <FaProjectDiagram />, note: 'Standardized API communication' },
    { name: 'Bootstrap', icon: <SiBootstrap />, note: 'Responsive UI framework' }
  ];

  const workingStyle = [
    {
      icon: <FaClock className="text-yellow-300" />,
      title: 'Consistency',
      note: 'I believe small daily efforts build lasting impact.'
    },
    {
      icon: <FaUsers className="text-green-300" />,
      title: 'Collaboration',
      note: 'I thrive in teams and love helping peers succeed.'
    },
    {
      icon: <FaBrain className="text-purple-300" />,
      title: 'Problem-Solving',
      note: 'I enjoy logical challenges and debugging complex issues.'
    },
    {
      icon: <FaRocket className="text-red-300" />,
      title: 'Growth Mindset',
      note: 'I’m always exploring, learning, and upskilling.'
    },
    {
      icon: <FaHeart className="text-pink-400" />,
      title: 'Empathy',
      note: 'Tech is human-centered — I value kindness and respect.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#1E232B] text-white text-center min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-400">Skills</h1>
      <p className="mt-5 text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
        Here are the technologies and tools I work with — ranging from full-stack development to DevOps and cloud services.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-12">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-[#2A2F38] hover:bg-blue-500 hover:text-white transition-all p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-lg"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <div className="text-base font-semibold">{skill.name}</div>
            <div className="text-sm text-gray-400 mt-1">{skill.note}</div>
          </div>
        ))}
      </div>

      {/* How I Work Section */}
      <div className="mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-6">How I Work</h2>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          My development style is built on principles that go beyond just code.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          {workingStyle.map((item, index) => (
            <div key={index} className="bg-[#2A2F38] rounded-2xl p-6 hover:scale-105 transform transition duration-300">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
