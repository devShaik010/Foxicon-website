import React from 'react';
import { 
  FaProjectDiagram, 
  FaUsers, 
  FaBriefcase, 
  FaInfinity, 
  FaComments, 
  FaDollarSign 
} from 'react-icons/fa';

const AboutSection = () => {
  const features = [
    {
      id: 1,
      title: "Project-Based",
      subtitle: "Learning",
      description: "Build real applications that you can showcase in your portfolio, not just theoretical knowledge.",
      icon: <FaProjectDiagram className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Industry",
      subtitle: "Mentorship",
      description: "Learn directly from professionals working in top tech companies with years of real experience.",
      icon: <FaUsers className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Job-Ready",
      subtitle: "Skills",
      description: "Focus on the exact technologies and frameworks that companies are actively hiring for today.",
      icon: <FaBriefcase className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Lifetime",
      subtitle: "Access",
      description: "Access all course materials and updates forever with a one-time payment, no subscriptions.",
      icon: <FaInfinity className="w-8 h-8" />
    },
    {
      id: 5,
      title: "Community",
      subtitle: "Support",
      description: "Connect with fellow learners and professionals in our active community for continuous growth.",
      icon: <FaComments className="w-8 h-8" />
    },
    {
      id: 6,
      title: "Practical &",
      subtitle: "Affordable",
      description: "We create courses that give you actionable steps and real value at an affordable price point.",
      icon: <FaDollarSign className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Foxicon Section */}
        <div className="mb-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why <span className="text-blue-600">Foxicon</span><span className="text-gray-900">?</span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="text-center"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-blue-600 mb-1">
                  {feature.title}
                </h3>
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  {feature.subtitle}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
