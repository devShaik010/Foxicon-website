import React from 'react';

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Individual Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master specific skills with our focused courses. Learn at your own pace with expert guidance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'React Fundamentals', price: '$99', duration: '6 weeks' },
            { title: 'Node.js Backend', price: '$129', duration: '8 weeks' },
            { title: 'Python for Beginners', price: '$79', duration: '4 weeks' },
            { title: 'JavaScript Mastery', price: '$149', duration: '10 weeks' },
            { title: 'Database Design', price: '$89', duration: '5 weeks' },
            { title: 'API Development', price: '$119', duration: '7 weeks' },
            { title: 'Git & Version Control', price: '$59', duration: '3 weeks' },
            { title: 'Docker & Containers', price: '$109', duration: '6 weeks' },
          ].map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{course.title}</h3>
              <p className="text-2xl font-bold text-gray-900 mb-2">{course.price}</p>
              <p className="text-gray-600 mb-4">{course.duration}</p>
              <button className="w-full bg-gray-900 text-white py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
