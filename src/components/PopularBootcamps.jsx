import React, { useState, useEffect } from 'react';

const BootcampCard = ({ isActive, position, index, currentSlide }) => {
  const getCardStyle = () => {
    const offset = index - currentSlide;
    const isCenter = offset === 0;
    const isLeft = offset === -1;
    const isRight = offset === 1;
    
    let transform = '';
    let opacity = 0.4;
    let scale = 0.8;
    let zIndex = 1;
    
    if (isCenter) {
      transform = 'translateX(-50%) translateY(0px)';
      opacity = 1;
      scale = 1;
      zIndex = 3;
    } else if (isLeft) {
      transform = 'translateX(-50%) translateX(-80px) translateY(15px)';
      opacity = 0.6;
      scale = 0.85;
      zIndex = 2;
    } else if (isRight) {
      transform = 'translateX(-50%) translateX(80px) translateY(15px)';
      opacity = 0.6;
      scale = 0.85;
      zIndex = 2;
    } else if (offset < -1) {
      transform = 'translateX(-50%) translateX(-150px) translateY(30px)';
      opacity = 0.2;
      scale = 0.7;
      zIndex = 1;
    } else if (offset > 1) {
      transform = 'translateX(-50%) translateX(150px) translateY(30px)';
      opacity = 0.2;
      scale = 0.7;
      zIndex = 1;
    }
    
    return {
      transform: `${transform} scale(${scale})`,
      opacity,
      zIndex,
      transition: 'all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
    };
  };

  return (
    <div 
      className="absolute left-1/2 top-0 w-64 max-w-[85vw]"
      style={getCardStyle()}
    >
      <div className="bg-gradient-to-br from-[#6B46C1] to-[#4A3F9D] rounded-2xl shadow-2xl overflow-hidden aspect-[4/5] backdrop-blur-sm">
        {/* Placeholder for bootcamp thumbnail */}
        <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <span className="text-white text-sm font-medium text-center px-4 relative z-10">
            Bootcamp {index + 1}
          </span>
        </div>
      </div>
    </div>
  );
};

const PopularBootcamps = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-left mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Our <span className="text-purple-600 italic font-cursive" style={{ fontFamily: 'Brush Script MT, cursive', transform: 'rotate(-2deg)', display: 'inline-block' }}>popular</span>
          </h2>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Bootcamp's
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl">
            Get the skills and real-world experience employers want with Career Accelerators.
          </p>
        </div>
        
        {/* Bootcamp Cards - Desktop: Grid, Mobile: 3D Layered Carousel */}
        <div className="relative">
          {/* Desktop Grid View */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8">
            <div className="bg-gradient-to-br from-[#6B46C1] to-[#4A3F9D] rounded-xl shadow-lg overflow-hidden aspect-[4/5]">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white text-xs font-medium text-center px-3">
                  Your bootcamp thumbnail will go here
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#6B46C1] to-[#4A3F9D] rounded-xl shadow-lg overflow-hidden aspect-[4/5]">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white text-xs font-medium text-center px-3">
                  Your bootcamp thumbnail will go here
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#6B46C1] to-[#4A3F9D] rounded-xl shadow-lg overflow-hidden aspect-[4/5]">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white text-xs font-medium text-center px-3">
                  Your bootcamp thumbnail will go here
                </span>
              </div>
            </div>
          </div>

          {/* Mobile 3D Layered Carousel */}
          <div className="sm:hidden mb-12 overflow-hidden">
            <div className="relative h-80 w-full mx-auto max-w-sm">
              <div className="absolute inset-0 perspective-1000">
                {[...Array(totalSlides)].map((_, index) => (
                  <BootcampCard
                    key={index}
                    index={index}
                    currentSlide={currentSlide}
                    isActive={index === currentSlide}
                  />
                ))}
              </div>
            </div>
            
            {/* Swipe Indicator */}
            <div className="flex justify-center mt-6 px-4">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span className="text-xs text-gray-600 font-medium">Swipe to explore</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Controls */}
        <div className="flex justify-center items-center space-x-6">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="group p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Enhanced Pagination Dots */}
          <div className="flex items-center space-x-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide 
                    ? 'w-8 h-3 bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg' 
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="group p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularBootcamps;
