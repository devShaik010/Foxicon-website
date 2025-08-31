import React from 'react';

const BootCamps = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Intensive BootCamps
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your career with our immersive bootcamps designed to get you job-ready in the shortest time possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Full Stack Web Development', duration: '16 weeks', level: 'Beginner to Advanced' },
            { title: 'Data Science & AI', duration: '20 weeks', level: 'Intermediate' },
            { title: 'Mobile App Development', duration: '14 weeks', level: 'Beginner to Advanced' },
            { title: 'DevOps & Cloud Computing', duration: '12 weeks', level: 'Intermediate' },
            { title: 'Cybersecurity', duration: '18 weeks', level: 'Intermediate to Advanced' },
            { title: 'UI/UX Design', duration: '10 weeks', level: 'Beginner' },
          ].map((bootcamp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{bootcamp.title}</h3>
              <p className="text-gray-600 mb-2">Duration: {bootcamp.duration}</p>
              <p className="text-gray-600 mb-4">Level: {bootcamp.level}</p>
              <button className="w-full bg-gray-900 text-white py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BootCamps;
