import React, { useState } from 'react';

const CourseCard = ({ title, category, mode, duration, instructor }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden w-64 sm:w-72 flex-shrink-0 shadow-sm hover:shadow-md transition-all duration-300 group">
      {/* Course Image Section */}
      <div className="p-3">
        <div className="h-40 sm:h-44 w-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-gray-100 group-hover:to-gray-200 transition-all duration-300">
          <img 
            src="/Testing.png"
            alt="Course illustration"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
      {/* Course Info Section */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight truncate group-hover:text-black transition-colors duration-200">{title}</h3>
            <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{category}</p>
          </div>
          <div className="ml-3 flex-shrink-0">
            <img 
              src="/profile.jpg"
              alt="Instructor"
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-100 group-hover:border-gray-200 transition-all duration-200"
            />
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gray-100 my-3"></div>
        
        {/* Course Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-xs">
            <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
            <span className="font-medium text-gray-700 mr-1">Mode:</span>
            <span className="truncate">{mode}</span>
          </div>
          <div className="flex items-center text-gray-600 text-xs">
            <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
            <span className="font-medium text-gray-700 mr-1">Duration:</span>
            <span className="truncate">{duration}</span>
          </div>
          <div className="flex items-center text-gray-600 text-xs">
            <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
            <span className="font-medium text-gray-700 mr-1">Instructor:</span>
            <span className="truncate">{instructor}</span>
          </div>
        </div>
        
        {/* Register Button */}
        <button className="w-full bg-gray-900 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-black transition-all duration-200 group-hover:shadow-sm">
          Register Now
        </button>
      </div>
    </div>
  );
};

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8 px-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium transition-all duration-200 border ${
            activeCategory === category
              ? 'bg-black text-white border-black'
              : 'bg-white text-gray-700 border-gray-300 hover:border-black hover:text-black'
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
  const [showAll, setShowAll] = useState(false);
  
  const categories = [
    'All',
    'Web Dev',
    'App Dev',
    'ML',
    'Analytics'
  ];

  const courses = [
    {
      id: 1,
      title: 'Git - Github',
      category: 'master the version control with hands on and Practical',
      mode: 'Online - zoom',
      duration: '1 Month',
      instructor: 'Shaik Abrar',
      type: 'Web Dev'
    },
    {
      id: 2,
      title: 'Git - Github',
      category: 'master the version control with hands on and Practical',
      mode: 'Online - zoom',
      duration: '1 Month',
      instructor: 'Shaik Abrar',
      type: 'Web Dev'
    },
    {
      id: 3,
      title: 'Git - Github',
      category: 'master the version control with hands on and Practical',
      mode: 'Online - zoom',
      duration: '1 Month',
      instructor: 'Shaik Abrar',
      type: 'App Dev'
    },
    {
      id: 4,
      title: 'Git - Github',
      category: 'master the version control with hands on and Practical',
      mode: 'Online - zoom',
      duration: '1 Month',
      instructor: 'Shaik Abrar',
      type: 'ML'
    },
    {
      id: 5,
      title: 'Git - Github',
      category: 'master the version control with hands on and Practical',
      mode: 'Online - zoom',
      duration: '1 Month',
      instructor: 'Shaik Abrar',
      type: 'Analytics'
    },
    {
      id: 6,
      title: 'Git - Github',
      category: 'master the version control with hands on and Practical',
      mode: 'Online - zoom',
      duration: '1 Month',
      instructor: 'Shaik Abrar',
      type: 'Web Dev'
    }
  ];

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.type === activeCategory);

  // Limit courses shown initially
  const coursesToShow = showAll ? filteredCourses : filteredCourses.slice(0, 4);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Practical <span className="text-purple-600 italic font-cursive" style={{ fontFamily: 'Brush Script MT, cursive', transform: 'rotate(-2deg)', display: 'inline-block' }}>Course's</span> — For work and skill
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
            "Let's learn future technologies that matter"
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        {/* Mobile Carousel / Desktop Grid */}
        <div className="block sm:hidden">
          {/* Mobile Carousel */}
          <div className="relative px-4">
            {/* Carousel Container */}
            <div className="overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              <div className="flex gap-4 px-4">
                {coursesToShow.map((course, index) => (
                  <div 
                    key={course.id}
                    className="snap-center flex-shrink-0"
                  >
                    <CourseCard
                      title={course.title}
                      category={course.category}
                      mode={course.mode}
                      duration={course.duration}
                      instructor={course.instructor}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-1">
                {coursesToShow.map((_, index) => (
                  <div
                    key={index}
                    className="w-1.5 h-1.5 rounded-full bg-gray-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:block">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
            {coursesToShow.map((course, index) => (
              <div 
                key={course.id}
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CourseCard
                  title={course.title}
                  category={course.category}
                  mode={course.mode}
                  duration={course.duration}
                  instructor={course.instructor}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        {!showAll && filteredCourses.length > 4 && (
          <div className="text-center mt-10">
            <button 
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center bg-gray-900 text-white px-6 py-2.5 font-medium hover:bg-black transition-all duration-300 text-sm rounded-lg border border-gray-900 hover:border-black group"
            >
              <span>Load More</span>
              <svg className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PracticalCourses;
