
import React from 'react';

const PrizeSection = () => {
  return (
    <section id="prizes" className="scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-purple-900">Recognition & Prizes</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-b from-amber-50 to-amber-100 border border-amber-200 rounded-xl shadow-md p-6 text-center transform transition-transform hover:scale-105">
            <div className="text-4xl mb-3">🥇</div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">1st Place</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="py-1 px-3 bg-white/50 rounded-lg">Executive Showcase Presentation</li>
              <li className="py-1 px-3 bg-white/50 rounded-lg">Premium Tech Gadgets</li>
              <li className="py-1 px-3 bg-white/50 rounded-lg">Conference Passes</li>
              <li className="py-1 px-3 bg-white/50 rounded-lg">Project Incubation Opportunity</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-200 rounded-xl shadow-md p-6 text-center transform transition-transform hover:scale-105">
            <div className="text-4xl mb-3">🥈</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">2nd Place</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="py-1 px-3 bg-white/50 rounded-lg">All-Hands Presentation</li>
              <li className="py-1 px-3 bg-white/50 rounded-lg">Tech Accessories</li>
              <li className="py-1 px-3 bg-white/50 rounded-lg">Special Team Lunch</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-b from-amber-50/70 to-amber-100/70 border border-amber-200/70 rounded-xl shadow-md p-6 text-center transform transition-transform hover:scale-105">
            <div className="text-4xl mb-3">🥉</div>
            <h3 className="text-xl font-bold text-amber-800 mb-2">3rd Place</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="py-1 px-3 bg-white/50 rounded-lg">Company Swag Pack</li>
              <li className="py-1 px-3 bg-white/50 rounded-lg">Recognition in Company Newsletter</li>
              <li className="py-1 px-3 bg-white/50 rounded-lg">Team Celebration Budget</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 bg-white p-6 rounded-xl shadow-md border border-purple-100">
          <h3 className="text-xl font-bold text-purple-900 mb-3">Additional Recognition</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-purple-100 rounded-lg p-4 bg-purple-50/50">
              <h4 className="font-semibold text-purple-900 mb-2">People's Choice Award</h4>
              <p className="text-gray-700">
                Voted by all hackathon participants and awarded to the team with the most impressive solution according to peers.
              </p>
            </div>
            <div className="border border-purple-100 rounded-lg p-4 bg-purple-50/50">
              <h4 className="font-semibold text-purple-900 mb-2">Technical Excellence Award</h4>
              <p className="text-gray-700">
                Given to the team that demonstrates exceptional technical skill regardless of overall placement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizeSection;
