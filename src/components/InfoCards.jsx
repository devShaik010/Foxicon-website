import React from 'react';
import { FaLightbulb, FaCode, FaRocket } from 'react-icons/fa';

const InfoCard = ({ title, subtitle, description, icon }) => {
  return (
    <div className="relative group">
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md rounded-2xl" />
      
      {/* Content */}
      <div className="relative p-8 h-full">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-blue-50/50 backdrop-blur-sm rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transform transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        {/* Text Content */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-blue-600 mb-1">
            {title}
          </h3>
          <h4 className="text-lg font-bold text-gray-900 mb-4 min-h-[2.5rem] flex items-center justify-center">
            {subtitle}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const InfoCards = () => {
  const cards = [
    {
      title: "Who We Are",
      subtitle: "Foxicon Academy is built by passionate innovators",
      description: "Driven by a vision for the next generation, our team blends creativity and expertise to empower coders and creators at every level.",
      icon: <FaLightbulb className="w-8 h-8" />
    },
    {
      title: "What We Do",
      subtitle: "We deliver practical, hands-on bootcamps",
      description: "Our programs are designed by industry experts to make complex topics easy and engaging, catering to beginners as well as advanced learners.",
      icon: <FaCode className="w-8 h-8" />
    },
    {
      title: "Our Mission",
      subtitle: "Empowering everyone to become a confident coder",
      description: "With a focus on accessibility and real-world skills, Foxicon Academy helps learners build knowledge they can apply in their careers and projects.",
      icon: <FaRocket className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Building The <span className="text-blue-600">Future</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transforming tech education through innovation and excellence
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl transform rotate-12" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-100/20 to-transparent rounded-full blur-3xl transform -rotate-12" />
      </div>
    </section>
  );
};

export default InfoCards;
