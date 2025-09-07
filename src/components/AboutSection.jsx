import React from 'react';

const AboutSection = () => {
  const features = [
    {
      id: 1,
      title: "Hands-on Learning",
      description: "Real projects, not just theory. Build actual applications that you can showcase in your portfolio.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Industry Mentors",
      description: "Learn from professionals currently working in top tech companies with years of industry experience.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Job-Ready Skills",
      description: "Focus on the exact technologies and frameworks that companies are actively hiring for right now.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      ),
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: "Community Support",
      description: "Join a vibrant community of learners and professionals. Get help, share knowledge, and grow together.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-orange-500 to-orange-600"
    }
  ];

  const differences = [
    {
      id: 1,
      title: "Project-Based Learning",
      description: "Unlike traditional courses, every lesson leads to building something real.",
      traditional: "Watch videos, take quizzes",
      foxicon: "Build real applications",
      icon: "🚀"
    },
    {
      id: 2,
      title: "Live Mentorship",
      description: "Get direct guidance from industry experts, not just pre-recorded content.",
      traditional: "Self-paced videos only",
      foxicon: "Live sessions with mentors",
      icon: "👨‍💻"
    },
    {
      id: 3,
      title: "Career Support",
      description: "We don't stop at teaching - we help you land your first tech job.",
      traditional: "Certificate completion",
      foxicon: "Job placement assistance",
      icon: "💼"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* What We Are Doing Section */}
        <div className="mb-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What We Are <span className="text-purple-600 italic font-cursive" style={{ fontFamily: 'Brush Script MT, cursive', transform: 'rotate(-1deg)', display: 'inline-block' }}>Doing</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering the next generation of developers with practical, industry-relevant education
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It's Different Section */}
        <div>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How We're <span className="text-purple-600 italic font-cursive" style={{ fontFamily: 'Brush Script MT, cursive', transform: 'rotate(1deg)', display: 'inline-block' }}>Different</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              See why thousands choose Foxicon Academy over traditional learning platforms
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="space-y-8">
            {differences.map((diff, index) => (
              <div 
                key={diff.id}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 lg:w-1/3">
                    <span className="text-3xl">{diff.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{diff.title}</h3>
                      <p className="text-gray-600 text-sm">{diff.description}</p>
                    </div>
                  </div>

                  {/* Comparison */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Traditional */}
                    <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h4 className="font-semibold text-gray-500 mb-2 text-sm uppercase tracking-wide">Traditional</h4>
                      <p className="text-gray-700">{diff.traditional}</p>
                    </div>

                    {/* Foxicon */}
                    <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
                      <h4 className="font-semibold text-purple-600 mb-2 text-sm uppercase tracking-wide">Foxicon Academy</h4>
                      <p className="text-gray-900 font-medium">{diff.foxicon}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
