import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaAws,
  FaPython,
  FaReact,
  FaJs,
  FaGithub,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaJenkins,
  FaCss3Alt,
  FaHtml5,
  FaDatabase,
  FaCloud,
  FaServer,
  FaCogs,
  FaCode
} from 'react-icons/fa';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Tech logos data for the marquee
  const techLogos = [
    { name: 'Python', bg: 'bg-blue-100', icon: <FaPython className="w-6 h-6 text-blue-600" /> },
    { name: 'React', bg: 'bg-cyan-100', icon: <FaReact className="w-6 h-6 text-cyan-500" /> },
    { name: 'JavaScript', bg: 'bg-yellow-100', icon: <FaJs className="w-6 h-6 text-yellow-600" /> },
    { name: 'Node.js', bg: 'bg-green-100', icon: <FaNodeJs className="w-6 h-6 text-green-600" /> },
    { name: 'Docker', bg: 'bg-blue-200', icon: <FaDocker className="w-6 h-6 text-blue-700" /> },
    { name: 'GitHub', bg: 'bg-gray-100', icon: <FaGithub className="w-6 h-6 text-gray-800" /> },
    { name: 'Git', bg: 'bg-orange-100', icon: <FaGitAlt className="w-6 h-6 text-orange-600" /> },
    { name: 'Google Cloud', bg: 'bg-blue-50', icon: <FaCloud className="w-6 h-6 text-blue-500" /> },
    { name: 'Jenkins', bg: 'bg-red-100', icon: <FaJenkins className="w-6 h-6 text-red-600" /> },
    { name: 'Kubernetes', bg: 'bg-blue-300', icon: <FaServer className="w-6 h-6 text-blue-800" /> },
    { name: 'Terraform', bg: 'bg-purple-100', icon: <FaCogs className="w-6 h-6 text-purple-600" /> },
    { name: 'CSS3', bg: 'bg-blue-100', icon: <FaCss3Alt className="w-6 h-6 text-blue-500" /> },
    { name: 'HTML5', bg: 'bg-orange-100', icon: <FaHtml5 className="w-6 h-6 text-orange-500" /> },
    { name: 'MongoDB', bg: 'bg-green-200', icon: <FaDatabase className="w-6 h-6 text-green-700" /> },
    { name: 'PostgreSQL', bg: 'bg-blue-200', icon: <FaDatabase className="w-6 h-6 text-blue-700" /> },
    { name: 'Redis', bg: 'bg-red-100', icon: <FaDatabase className="w-6 h-6 text-red-600" /> },
    { name: 'AWS', bg: 'bg-orange-100', icon: <FaAws className="w-6 h-6 text-orange-500" /> },
    { name: 'Azure', bg: 'bg-blue-100', icon: <FaCloud className="w-6 h-6 text-blue-600" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6">
        {/* Main Heading */}
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
            Foxicon <span className="text-purple-600">Academy</span> — Learn. Connect. Explore.
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-sm sm:max-w-md md:max-w-xl mx-auto px-2 sm:px-4">
            "We are not just another learning platform, but a <span className="font-medium">community</span>."
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mb-4 sm:mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="DevOps for beginner ..."
            className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row gap-2 sm:gap-3 mb-6 sm:mb-8 w-full justify-center items-center px-2 sm:px-4">
          <Link
            to="/courses"
            className="flex-1 sm:flex-none sm:w-auto px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors text-center text-xs sm:text-sm max-w-[120px] sm:max-w-[140px] md:max-w-xs"
          >
            Explore Courses
          </Link>
          <button className="flex-1 sm:flex-none sm:w-auto px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors text-xs sm:text-sm max-w-[120px] sm:max-w-[140px] md:max-w-xs">
            Join Community
          </button>
        </div>

        {/* Technology Icons Marquee */}
        <div className="w-full max-w-2xl mx-auto mb-6 sm:mb-8 overflow-hidden">
          <div className="relative">
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-container {
                animation: marquee 60s linear infinite;
                display: flex;
                width: calc(300%);
              }
              .marquee-container:hover {
                animation-play-state: paused;
              }
              .marquee-track {
                display: flex;
                align-items: center;
                gap: 1.5rem;
                min-width: 50%;
                flex-shrink: 0;
              }
            `}</style>
            
            {/* Gradient masks for entrance/exit effect */}
            <div className="absolute left-0 top-0 w-8 sm:w-12 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-8 sm:w-12 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            <div className="marquee-container py-2 sm:py-3">
              {/* First track - complete set */}
              <div className="marquee-track">
                {techLogos.map((tech, index) => (
                  <div
                    key={`track1-${index}`}
                    className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ${tech.bg} rounded-lg sm:rounded-xl flex items-center justify-center transition-transform hover:scale-110 shadow-sm`}
                    title={tech.name}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                      {React.cloneElement(tech.icon, { 
                        className: tech.icon.props.className?.replace('w-6 h-6', 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6') || 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'
                      })}
                    </div>
                  </div>
                ))}
              </div>
              {/* Second track - duplicate set for seamless loop */}
              <div className="marquee-track">
                {techLogos.map((tech, index) => (
                  <div
                    key={`track2-${index}`}
                    className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ${tech.bg} rounded-lg sm:rounded-xl flex items-center justify-center transition-transform hover:scale-110 shadow-sm`}
                    title={tech.name}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                      {React.cloneElement(tech.icon, { 
                        className: tech.icon.props.className?.replace('w-6 h-6', 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6') || 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center px-2 sm:px-4">
          <p className="text-xs sm:text-sm md:text-base text-gray-700 max-w-lg mx-auto">
            Let's learn future technologies that matter — <span className="font-semibold">AI, DevOps, Data Science & more.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
