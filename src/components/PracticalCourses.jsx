import React, { useState } from 'react';

const CourseCard = ({ title, category, mode, duration, instructor }) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden w-full shadow-sm">
      {/* Course Image Section */}
      <div className="p-3">
        <div className="h-32 rounded-2xl overflow-hidden">
          <img 
            src="/Testing.png"
            alt="Course illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Course Info Section */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-xs text-gray-600">{category}</p>
          </div>
          <div className="ml-3 flex-shrink-0">
            <img 
              src="/profile.jpg"
              alt="Instructor"
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
            />
          </div>
        </div>
        
        {/* Dotted Line */}
        <div className="w-full h-px bg-gray-300 my-4" style={{
          backgroundImage: 'repeating-linear-gradient(to right, #D1D5DB 0, #D1D5DB 3px, transparent 3px, transparent 6px)'
        }}></div>
        
        {/* Course Details */}
        <div className="space-y-1 mb-4">
          <div className="flex items-center text-gray-600 text-xs">
            <span className="font-medium text-gray-800 mr-1">Mode</span>
            <span className="mr-1">:</span>
            <span className="ml-1">{mode}</span>
            <svg className="w-3 h-3 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex items-center text-gray-600 text-xs">
            <span className="font-medium text-gray-800 mr-1">Duration</span>
            <span className="mr-1">:</span>
            <span className="ml-1">{duration}</span>
          </div>
          <div className="flex items-center text-gray-600 text-xs">
            <span className="font-medium text-gray-800 mr-1">Instructor</span>
            <span className="mr-1">:</span>
            <span className="ml-1">{instructor}</span>
          </div>
        </div>
        
        {/* Register Button */}
        <button className="w-full bg-black text-white text-sm font-semibold py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200">
          Register
        </button>
      </div>
    </div>
  );
};

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 border ${
            activeCategory === category
              ? 'bg-purple-600 text-white border-purple-600'
              : 'bg-white text-gray-700 border-gray-300 hover:border-purple-300 hover:text-purple-600'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const PracticalCourses = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = [
    'All',
    'Web-Development',
    'App Development',
    'Machine Learning',
    'Data Analytics'
  ];

  const courses = [
    {
      id: 1,
      title: 'Git - Github',
      category: 'master the version control with hands on and Practical',
      mode: 'Online - zoom',
      duration: '1 Month',
      instructor: 'Shaik Abrar',
      type: 'Web-Development'
    },
    {
      id: 2,
      title: 'Git - Github',
      category: 'master the version control with hands on and Practical',
      mode: 'Online - zoom',
      duration: '1 Month',
      instructor: 'Shaik Abrar',
      type: 'Web-Development'
    },
    {
      id: 3,
      title: 'Git - Github',
      category: 'master the version control with hands on and Practical',
      mode: 'Online - zoom',
      duration: '1 Month',
      instructor: 'Shaik Abrar',
      type: 'App Development'
    },
    {
      id: 4,
      title: 'Git - Github',
      category: 'master the version control with hands on and Practical',
      mode: 'Online - zoom',
      duration: '1 Month',
      instructor: 'Shaik Abrar',
      type: 'Machine Learning'
    },
    {
      id: 5,
      title: 'Git - Github',
      category: 'master the version control with hands on and Practical',
      mode: 'Online - zoom',
      duration: '1 Month',
      instructor: 'Shaik Abrar',
      type: 'Data Analytics'
    },
    {
      id: 6,
      title: 'Git - Github',
      category: 'master the version control with hands on and Practical',
      mode: 'Online - zoom',
      duration: '1 Month',
      instructor: 'Shaik Abrar',
      type: 'Web-Development'
    }
  ];

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.type === activeCategory);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Practical <span className="text-purple-600 italic font-cursive" style={{ fontFamily: 'Brush Script MT, cursive', transform: 'rotate(-2deg)', display: 'inline-block' }}>Course's</span> — For work and skill
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            "Let's learn future technologies that matter"
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              category={course.category}
              mode={course.mode}
              duration={course.duration}
              instructor={course.instructor}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 border border-transparent">
            Load More Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default PracticalCourses;
