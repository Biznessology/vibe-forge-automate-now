
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-purple-900">Vibe-A-Thon</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">About</a>
          <a href="#themes" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">Themes</a>
          <a href="#timeline" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">Timeline</a>
          <a href="#judging" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">Judging</a>
          <a href="#prizes" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">Prizes</a>
          <a href="#faq" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">FAQ</a>
        </div>
        
        <Button asChild className="bg-purple-700 hover:bg-purple-800">
          <Link to="/register">Register</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
