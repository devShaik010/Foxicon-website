import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/bootcamps', label: 'BootCamps' },
    { path: '/courses', label: 'Courses' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About Us' },
  ];

  return (
    <>
      <div className="bg-gray-50 pt-3 sm:pt-4 px-3 sm:px-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        <nav className="bg-white rounded-full shadow-sm border border-gray-200 max-w-4xl sm:max-w-5xl mx-auto">
          <div className="px-4 sm:px-6 py-2.5 sm:py-3">
            <div className="flex justify-between items-center">
              {/* Logo Section */}
              <div className="flex items-center space-x-2">
                <Link to="/" className="flex items-center space-x-2">
                  <img 
                    src="/logo .svg" 
                    alt="Foxicon Logo" 
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                  <div>
                    <div className="text-sm sm:text-base font-bold text-gray-900">Foxicon</div>
                    <div className="text-xs text-gray-600 -mt-0.5">Academy</div>
                  </div>
                </Link>
              </div>
              
              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      location.pathname === item.path
                        ? 'text-gray-900 bg-gray-100'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Desktop Login Button */}
                <Link
                  to="/login"
                  className="bg-purple-600 text-white px-4 xl:px-5 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors duration-200"
                >
                  Login
                </Link>
              </div>
              
              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center space-x-2">
                <Link
                  to="/login"
                  className="bg-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-purple-700 transition-colors duration-200"
                >
                  Login
                </Link>
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-600 hover:text-gray-900 p-1"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <img 
                    src="/logo .svg" 
                    alt="Foxicon Logo" 
                    className="h-6 w-6"
                  />
                  <div>
                    <div className="text-base font-bold text-gray-900">Foxicon</div>
                    <div className="text-xs text-gray-600 -mt-0.5">Academy</div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900 p-1"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex-1 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-purple-600 bg-purple-50 border-r-2 border-purple-600'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              {/* Drawer Footer */}
              <div className="p-4 border-t border-gray-200">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-purple-600 text-white text-center py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
