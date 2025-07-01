import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import emailIcon from "../assets/gmail.png";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-start">

        {/* Left: Contact Info + Social Icons */}
        <div className="text-left space-y-2">
          <p className="text-sm">Near House No. 52, Shivaji Nagar, </p>
          <p className="text-sm">Thatipur, Gwalior, 474011</p>
          <p className="text-sm">Phone: 7582946920</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/love-yadav-6417042b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7 hover:scale-110 transition" />
            </a>
            <a
              href="https://github.com/love12yadav"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" className="w-7 h-7 hover:scale-110 transition" />
            </a>
            <a
              href="mailto:yadavlove2370@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={emailIcon} alt="Email" className="w-7 h-7 hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* Right: Copyright */}
        <div className="mt-8 md:mt-0 text-right">
          <p className="text-sm text-gray-400">&copy; 2025 Love Yadav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}