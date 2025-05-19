
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Vibe-A-Thon</h2>
            <p className="text-purple-200 mb-4">
              WonderBotz's internal hackathon focused on AI-powered development & agentic AI solutions.
              Bringing together innovation, collaboration, and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-purple-300">
                <span className="sr-only">Slack</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-purple-300">
                <span className="sr-only">Email</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-purple-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#themes" className="text-purple-200 hover:text-white transition-colors">Themes</a></li>
              <li><a href="#timeline" className="text-purple-200 hover:text-white transition-colors">Timeline</a></li>
              <li><a href="#judging" className="text-purple-200 hover:text-white transition-colors">Judging</a></li>
              <li><a href="#prizes" className="text-purple-200 hover:text-white transition-colors">Prizes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/register" className="text-purple-200 hover:text-white transition-colors">Registration</Link></li>
              <li><Link to="/faq" className="text-purple-200 hover:text-white transition-colors">FAQ</Link></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Guidelines</a></li>
              <li><a href="mailto:hackathon@wonderbotz.com" className="text-purple-200 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-purple-800 text-center text-purple-300">
          <p>&copy; {new Date().getFullYear()} WonderBotz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
