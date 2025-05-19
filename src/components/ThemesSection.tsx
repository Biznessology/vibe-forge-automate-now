
import React from 'react';

const ThemesSection = () => {
  return (
    <section id="themes" className="scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-purple-900">Themes & Challenges</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-purple-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-700">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M7 7h.01"></path>
                <path d="M12 7h.01"></path>
                <path d="M17 7h.01"></path>
                <path d="M7 12h.01"></path>
                <path d="M12 12h.01"></path>
                <path d="M17 12h.01"></path>
                <path d="M7 17h.01"></path>
                <path d="M12 17h.01"></path>
                <path d="M17 17h.01"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Agentic AI</h3>
            <p className="text-gray-700 mb-4">
              Create AI systems that can autonomously perform tasks, make decisions, and adapt their behavior based on feedback and changing requirements.
            </p>
            <div className="bg-white/60 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Potential Ideas:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Autonomous process optimization agents</li>
                <li>Self-improving AI assistants</li>
                <li>Multi-agent collaboration systems</li>
                <li>Goal-oriented task completion agents</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-xl border border-purple-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-700">
                <path d="m7 11 2-2-2-2"></path>
                <path d="M11 13h4"></path>
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-violet-900 mb-4">AI-Powered Development</h3>
            <p className="text-gray-700 mb-4">
              Develop tools and systems that use AI to enhance the software development process, improve code quality, and accelerate delivery.
            </p>
            <div className="bg-white/60 p-4 rounded-lg">
              <h4 className="font-semibold text-violet-900 mb-2">Potential Ideas:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Code generation and optimization tools</li>
                <li>AI-assisted debugging systems</li>
                <li>Automated code review assistants</li>
                <li>Natural language to code generators</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg border border-purple-100 shadow-md">
          <h3 className="text-xl font-bold text-purple-900 mb-4">Challenge Structure</h3>
          <p className="text-gray-700">
            The challenges are intentionally <span className="font-semibold">open-ended</span> to encourage maximum creativity. 
            Teams are free to define their own specific problem statements within these themes, focusing on solutions that could 
            benefit WonderBotz and its clients. The key is to create innovative solutions that are technically feasible 
            and demonstrate real-world applicability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
