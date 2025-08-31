import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Foxicon Academy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to democratize tech education and empower the next generation of developers, designers, and digital innovators.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, Foxicon Academy emerged from a simple belief: that everyone deserves access to quality tech education, regardless of their background or financial situation.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of industry veterans and passionate educators have crafted curricula that bridge the gap between academic theory and real-world application.
            </p>
            <p className="text-gray-600">
              Today, we've helped over 10,000 students launch successful careers in technology, with many now working at top companies worldwide.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Students Graduated</span>
                <span className="font-bold text-gray-900">10,000+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Job Placement Rate</span>
                <span className="font-bold text-gray-900">94%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Average Salary Increase</span>
                <span className="font-bold text-gray-900">180%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Corporate Partners</span>
                <span className="font-bold text-gray-900">250+</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Accessibility', description: 'Quality education should be available to everyone' },
              { title: 'Innovation', description: 'We stay ahead of industry trends and technologies' },
              { title: 'Community', description: 'Learning is better when we support each other' },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
