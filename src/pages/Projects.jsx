import React from 'react';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Student Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore amazing projects built by our students. Get inspired and see what you can create.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: 'E-commerce Platform', 
              tech: 'React, Node.js, MongoDB',
              student: 'Sarah Johnson',
              description: 'A full-featured online store with payment integration'
            },
            { 
              title: 'Task Management App', 
              tech: 'Vue.js, Express, PostgreSQL',
              student: 'Michael Chen',
              description: 'Collaborative project management tool with real-time updates'
            },
            { 
              title: 'Weather Dashboard', 
              tech: 'Angular, Python, APIs',
              student: 'Emily Rodriguez',
              description: 'Interactive weather forecasting with data visualization'
            },
            { 
              title: 'Social Media Clone', 
              tech: 'React Native, Firebase',
              student: 'David Kim',
              description: 'Mobile app with real-time messaging and media sharing'
            },
            { 
              title: 'AI Chatbot', 
              tech: 'Python, TensorFlow, Flask',
              student: 'Lisa Park',
              description: 'Intelligent conversational AI for customer support'
            },
            { 
              title: 'Fitness Tracker', 
              tech: 'Swift, Core Data, HealthKit',
              student: 'James Wilson',
              description: 'iOS app for tracking workouts and health metrics'
            },
          ].map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-3">By {project.student}</p>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <p className="text-sm font-medium text-gray-900 mb-4">Tech: {project.tech}</p>
              <button className="w-full bg-gray-900 text-white py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
