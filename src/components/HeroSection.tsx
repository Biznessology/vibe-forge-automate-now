
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Vibe-A-Thon
              <span className="block text-purple-200 text-lg md:text-2xl mt-2 font-normal">Vibe. Build. Automate.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              WonderBotz's first internal hackathon focused on AI-powered development & agentic AI
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-purple-900 px-8">
                <Link to="/register">Register Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8">
                <a href="#timeline">Learn More</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-violet-500/30 to-indigo-500/30 rounded-full blur-3xl"></div>
              <img 
                src="https://img.icons8.com/fluency/480/null/artificial-intelligence.png"
                alt="AI Illustration" 
                className="relative w-64 md:w-96"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <div className="text-3xl font-bold mb-2">24 Hours</div>
            <div className="text-purple-200">Development Sprint</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <div className="text-3xl font-bold mb-2">2-4 Members</div>
            <div className="text-purple-200">Per Team</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <div className="text-3xl font-bold mb-2">WonderBotz HQ</div>
            <div className="text-purple-200">Ahmedabad Office</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
