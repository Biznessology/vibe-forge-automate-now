
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import Timeline from '@/components/Timeline';
import ThemesSection from '@/components/ThemesSection';
import JudgingCriteria from '@/components/JudgingCriteria';
import PrizeSection from '@/components/PrizeSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      
      <HeroSection />
      
      <div className="container mx-auto px-4 py-12 space-y-24">
        {/* About Section */}
        <section id="about" className="scroll-mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-purple-900">About Vibe-A-Thon</h2>
            <p className="text-lg text-gray-700 mb-6">
              Welcome to WonderBotz's first internal hackathon focused on AI-powered development and agentic AI solutions. 
              This 24-hour sprint will bring together teams of 2-4 members to innovate, collaborate, and build 
              cutting-edge prototypes aligned with our company roadmap.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-700">
                    <path d="M12 2v1"></path><path d="M12 21v-1"></path><path d="M4.9 4.9l.7.7"></path><path d="M18.4 18.4l.7.7"></path><path d="M2 12h1"></path><path d="M21 12h-1"></path><path d="M4.9 19.1l.7-.7"></path><path d="M18.4 5.6l.7-.7"></path><circle cx="12" cy="12" r="4"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">Innovate</h3>
                <p className="text-gray-600">Develop innovative AI solutions aligned with WonderBotz's strategic roadmap</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-700">
                    <path d="M17 6.1H3"></path><path d="M21 12.1H3"></path><path d="M15.1 18H3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">Build</h3>
                <p className="text-gray-600">Create functioning prototypes that demonstrate real-world applications</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-700">
                    <rect width="18" height="10" x="3" y="11" rx="2"></rect>
                    <circle cx="12" cy="5" r="2"></circle>
                    <path d="M12 7v4"></path>
                    <line x1="8" x2="8" y1="16" y2="16"></line>
                    <line x1="16" x2="16" y1="16" y2="16"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">Automate</h3>
                <p className="text-gray-600">Leverage AI to create automation solutions that solve real problems</p>
              </div>
            </div>
          </div>
        </section>

        {/* Themes Section */}
        <ThemesSection />
        
        {/* Timeline */}
        <Timeline />
        
        {/* Judging Criteria */}
        <JudgingCriteria />
        
        {/* Prizes */}
        <PrizeSection />
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* Register CTA */}
        <section className="text-center py-16 bg-purple-50 rounded-xl shadow-inner">
          <h2 className="text-3xl font-bold mb-6 text-purple-900">Ready to Participate?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Form your team of 2-4 members and submit your one-pager before the deadline.
            No formal prerequisites—just passion for AI & automation.
          </p>
          <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-6 text-lg rounded-md">
            <Link to="/register">Register Your Team</Link>
          </Button>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
