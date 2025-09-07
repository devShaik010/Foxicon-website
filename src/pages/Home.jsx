import React, { useState, useEffect } from 'react';
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
  FaCss3Alt,
  FaHtml5,
  FaDatabase,
  FaCloud,
  FaServer,
  FaCogs,
  FaCode,
  FaLeaf
} from 'react-icons/fa';
import { 
  SiKubernetes,
  SiTerraform,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiJenkins,
  SiGooglecloud
} from 'react-icons/si';

import PopularBootcamps from '../components/PopularBootcamps';
import PracticalCourses from '../components/PracticalCourses';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = '"We are not just another learning platform, but a community."';
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 50); // Adjust speed here (lower = faster)

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  // Function to render text with highlighted "community"
  const renderTypedText = () => {
    const communityIndex = typedText.indexOf('community');
    if (communityIndex === -1 || !typedText.includes('community')) {
      return typedText;
    }
    
    const beforeCommunity = typedText.slice(0, communityIndex);
    const community = 'community';
    const afterCommunity = typedText.slice(communityIndex + community.length);
    
    return (
      <>
        {beforeCommunity}
        <span className="font-semibold text-purple-600 relative">
          {community}
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-300 animate-pulse"></span>
        </span>
        {afterCommunity}
      </>
    );
  };

  // Tech logos data for the marquee
  const techLogos = [
    { name: 'Python', bg: 'bg-blue-100', icon: <FaPython className="w-6 h-6 text-blue-600" /> },
    { name: 'React', bg: 'bg-cyan-100', icon: <FaReact className="w-6 h-6 text-cyan-500" /> },
    { name: 'JavaScript', bg: 'bg-yellow-100', icon: <FaJs className="w-6 h-6 text-yellow-600" /> },
    { name: 'Node.js', bg: 'bg-green-100', icon: <FaNodeJs className="w-6 h-6 text-green-600" /> },
    { name: 'Docker', bg: 'bg-blue-200', icon: <FaDocker className="w-6 h-6 text-blue-700" /> },
    { name: 'GitHub', bg: 'bg-gray-100', icon: <FaGithub className="w-6 h-6 text-gray-800" /> },
    { name: 'Git', bg: 'bg-orange-100', icon: <FaGitAlt className="w-6 h-6 text-orange-600" /> },
    { name: 'Google Cloud', bg: 'bg-red-50', icon: <SiGooglecloud className="w-6 h-6 text-red-500" /> },
    { name: 'Jenkins', bg: 'bg-red-100', icon: <SiJenkins className="w-6 h-6 text-red-600" /> },
    { name: 'Kubernetes', bg: 'bg-indigo-100', icon: <SiKubernetes className="w-6 h-6 text-indigo-600" /> },
    { name: 'Terraform', bg: 'bg-purple-100', icon: <SiTerraform className="w-6 h-6 text-purple-600" /> },
    { name: 'CSS3', bg: 'bg-sky-100', icon: <FaCss3Alt className="w-6 h-6 text-sky-500" /> },
    { name: 'HTML5', bg: 'bg-amber-100', icon: <FaHtml5 className="w-6 h-6 text-amber-500" /> },
    { name: 'MongoDB', bg: 'bg-green-200', icon: <SiMongodb className="w-6 h-6 text-green-700" /> },
    { name: 'PostgreSQL', bg: 'bg-slate-100', icon: <SiPostgresql className="w-6 h-6 text-slate-600" /> },
    { name: 'Redis', bg: 'bg-rose-100', icon: <SiRedis className="w-6 h-6 text-rose-600" /> },
    { name: 'AWS', bg: 'bg-orange-50', icon: <FaAws className="w-6 h-6 text-orange-500" /> },
    { name: 'Azure', bg: 'bg-blue-50', icon: <FaCloud className="w-6 h-6 text-blue-500" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6">
        {/* Main Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Foxicon <span className="text-purple-600">Academy</span> — Learn. Connect. Explore.
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl mx-auto px-4 sm:px-6 min-h-[3rem] sm:min-h-[3.5rem] flex items-center justify-center">
            <span className="inline-block">
              {renderTypedText()}
              {showCursor && <span className="animate-pulse text-purple-600 font-bold ml-0.5">|</span>}
            </span>
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-lg mb-6 sm:mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="DevOps for beginner ..."
            className="w-full px-4 sm:px-5 md:px-6 lg:px-6 py-3 sm:py-3.5 md:py-4 lg:py-3.5 text-sm sm:text-base md:text-lg lg:text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 w-full justify-center items-center px-4 sm:px-6">
          <Link
            to="/courses"
            className="px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors text-center text-sm sm:text-base whitespace-nowrap"
          >
            Explore Courses
          </Link>
          <button className="px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors text-sm sm:text-base whitespace-nowrap">
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
                    {React.cloneElement(tech.icon, { 
                      className: `w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${tech.icon.props.className || ''}`
                    })}
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
                    {React.cloneElement(tech.icon, { 
                      className: `w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${tech.icon.props.className || ''}`
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center px-4 sm:px-6">
          <p className="text-sm sm:text-base md:text-lg lg:text-base text-gray-700 max-w-lg sm:max-w-xl md:max-w-xl lg:max-w-lg mx-auto">
            Let's learn future technologies that matter — <span className="font-semibold">AI, DevOps, Data Science & more.</span>
          </p>
        </div>
      </div>
      <PopularBootcamps />
      <PracticalCourses />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
