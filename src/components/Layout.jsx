import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <Navbar />
      <main className="pb-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
