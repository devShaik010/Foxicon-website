import React from 'react';

const InstructorSection = () => {
  return (
    <section className="pt-8 sm:pt-16 lg:pt-24 pb-0 bg-white relative overflow-hidden" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div className="w-full relative">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-3">
            Meet your <span className="text-purple-600" style={{ fontFamily: 'Dancing Script, cursive', fontStyle: 'italic' }}>Instructors</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl mx-auto">
            Learn from industry experts with real-world experience
          </p>
        </div>

        {/* Image Container - Proper spacing from title */}
        <div className="relative w-full flex justify-center">
          <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[360px] flex justify-center items-end">
            {/* Half Circle Background */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90vw] h-[90vw] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gray-400 rounded-full"></div>
            
            {/* Person Image - Reduced size */}
            <div className="relative z-10 w-[60vw] h-[60vw] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] max-w-[400px] max-h-[400px]">
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
