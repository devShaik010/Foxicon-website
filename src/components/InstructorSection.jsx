import React from 'react';

const InstructorSection = () => {
  return (
    <section className="py-8 sm:py-16 lg:py-24 bg-white relative" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div className="w-full px-0 sm:px-4 lg:px-8 relative">
        
        {/* Header Section - Shorter */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-3">
            Meet your <span className="text-purple-600" style={{ fontFamily: 'Dancing Script, cursive', fontStyle: 'italic' }}>Instructors</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl mx-auto">
            Learn from industry experts with real-world experience
          </p>
        </div>

        {/* Centered Half Circle with Image - Mobile Optimized */}
        <div className="relative flex justify-center overflow-hidden w-full">
          <div className="relative w-full h-[320px] sm:h-[400px] flex justify-center items-end">
            {/* Half Circle Background - Mobile responsive */}
            <div className="absolute bottom-0 w-[100vw] h-[100vw] sm:w-[480px] sm:h-[480px] bg-gray-400 rounded-full transform translate-y-1/2"></div>
            
            {/* Person Image Overlay - Mobile responsive */}
            <div className="relative z-10 w-[75vw] h-[75vw] sm:w-[400px] sm:h-[400px] max-w-[400px] max-h-[400px]">
              <img 
                src="/ceo-bg.png" 
                alt="Instructor" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default InstructorSection;
